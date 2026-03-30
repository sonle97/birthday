"use client";

import { useEffect, useRef } from "react";

/* ── Types ── */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotSpeed: number;
  gravity: number;
  baseOpacity: number;
  opacity: number;
  decay: number;
  shape: number; // 0 circle, 1 rect, 2 star, 3 ring
  trail: { x: number; y: number }[];
  age: number;
  /** twinkle frequency — random per particle */
  twinkleSpeed: number;
  twinklePhase: number;
}

const COLORS = [
  "#38bdf8", "#7dd3fc", "#bae6fd",
  "#fb7185", "#fecdd3",
  "#f0c456", "#fde68a",
  "#8b5cf6", "#c4b5fd",
  "#a5f3fc", "#fbbf24",
];

function spawnFromCorner(
  ox: number,
  oy: number,
  tx: number,
  ty: number,
  count: number,
): Particle[] {
  const ps: Particle[] = [];
  const dx = tx - ox;
  const dy = ty - oy;
  const dist = Math.sqrt(dx * dx + dy * dy);

  for (let i = 0; i < count; i++) {
    const baseAngle = Math.atan2(dy, dx);
    const spread = (Math.random() - 0.5) * 0.6;
    const angle = baseAngle + spread;
    const speed = (dist / 48) * (0.65 + Math.random() * 0.7);

    const baseOpacity = 0.55 + Math.random() * 0.35;

    ps.push({
      x: ox + (Math.random() - 0.5) * 20,
      y: oy + (Math.random() - 0.5) * 14,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 3 + Math.random() * 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.3,
      gravity: 0.03 + Math.random() * 0.025,
      baseOpacity,
      opacity: baseOpacity,
      decay: 0.001 + Math.random() * 0.0012,
      shape: Math.floor(Math.random() * 4),
      trail: [],
      age: 0,
      twinkleSpeed: 4 + Math.random() * 8,
      twinklePhase: Math.random() * Math.PI * 2,
    });
  }
  return ps;
}

function drawParticle(ctx: CanvasRenderingContext2D, p: Particle, t: number) {
  // ── Twinkle: modulate opacity with a sine wave while falling ──
  const twinkle = 0.5 + 0.5 * Math.sin(t * p.twinkleSpeed + p.twinklePhase);
  const finalOpacity = p.opacity * (0.5 + twinkle * 0.5);

  /* ── Trail ── */
  if (p.trail.length > 1) {
    ctx.save();
    for (let i = 1; i < p.trail.length; i++) {
      const alpha = (i / p.trail.length) * finalOpacity * 0.25;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      const trailSize = p.size * (i / p.trail.length) * 0.5;
      ctx.arc(p.trail[i].x, p.trail[i].y, trailSize, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  /* ── Glow ── */
  ctx.save();
  ctx.globalAlpha = finalOpacity * 0.2;
  const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.5);
  glow.addColorStop(0, p.color);
  glow.addColorStop(1, "transparent");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  /* ── Body ── */
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rotation);
  ctx.globalAlpha = finalOpacity;
  ctx.fillStyle = p.color;
  ctx.strokeStyle = p.color;

  if (p.shape === 0) {
    ctx.beginPath();
    ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
    ctx.fill();
  } else if (p.shape === 1) {
    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
  } else if (p.shape === 2) {
    // star
    const s = p.size / 2;
    ctx.beginPath();
    for (let j = 0; j < 10; j++) {
      const r = j % 2 === 0 ? s : s * 0.4;
      const a = (j / 10) * Math.PI * 2 - Math.PI / 2;
      if (j === 0) ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r);
      else ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.fill();
  } else {
    // ring
    ctx.beginPath();
    ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }

  ctx.restore();
}

/* ── Component ── */
interface Props {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export default function ConfettiCannon({ sectionRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const spawnTimerRef = useRef<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const syncSize = () => {
      const rect = section.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    syncSize();

    const loop = () => {
      const w = canvas.width;
      const h = canvas.height;
      const t = Date.now() * 0.001;
      ctx.clearRect(0, 0, w, h);

      const alive: Particle[] = [];
      for (const p of particlesRef.current) {
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.997;
        p.rotation += p.rotSpeed;
        p.opacity = Math.max(0, p.opacity - p.decay);
        p.age++;

        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 6) p.trail.shift();

        if (p.opacity > 0.01 && p.y < h + 40) {
          drawParticle(ctx, p, t);
          alive.push(p);
        }
      }
      particlesRef.current = alive;
      animRef.current = requestAnimationFrame(loop);
    };
    loop();

    /* ── Spawn: both corners every tick, more particles ── */
    const startSpawning = () => {
      if (spawnTimerRef.current) return;

      let fromLeft = true;
      spawnTimerRef.current = window.setInterval(() => {
        syncSize();
        const w = canvas.width;
        const h = canvas.height;
        const tx = w / 2 + (Math.random() - 0.5) * 60;
        const ty = h * 0.38 + (Math.random() - 0.5) * 20;

        // Alternate corners, 4 particles per burst
        if (fromLeft) {
          particlesRef.current.push(...spawnFromCorner(0, h, tx, ty, 4));
        } else {
          particlesRef.current.push(...spawnFromCorner(w, h, tx, ty, 4));
        }
        fromLeft = !fromLeft;
      }, 500);
    };

    const stopSpawning = () => {
      if (spawnTimerRef.current) {
        clearInterval(spawnTimerRef.current);
        spawnTimerRef.current = 0;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) startSpawning();
          else stopSpawning();
        }
      },
      { rootMargin: "-15% 0px -15% 0px", threshold: 0 },
    );
    observer.observe(section);
    window.addEventListener("resize", syncSize);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animRef.current);
      stopSpawning();
      window.removeEventListener("resize", syncSize);
    };
  }, [sectionRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[5] pointer-events-none"
    />
  );
}
