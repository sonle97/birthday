"use client";

import { useEffect, useRef } from "react";


/* ── Balloon colour palette (matches theme tokens) ── */
const PALETTE = [
  { body: "#7dd3fc", highlight: "#bae6fd", shadow: "#0ea5e9" },
  { body: "#38bdf8", highlight: "#7dd3fc", shadow: "#0284c7" },
  { body: "#fb7185", highlight: "#fecdd3", shadow: "#e11d48" },
  { body: "#f0c456", highlight: "#fde68a", shadow: "#d4a20a" },
  { body: "#c4b5fd", highlight: "#e0d6ff", shadow: "#8b5cf6" },
  { body: "#a5f3fc", highlight: "#cffafe", shadow: "#06b6d4" },
  { body: "#fca5a5", highlight: "#fecaca", shadow: "#ef4444" },
  { body: "#93c5fd", highlight: "#bfdbfe", shadow: "#3b82f6" },
];

const HOVER_RADIUS = 90;   // detect mouse within this distance
const PUSH_FORCE = 1.8;    // push strength
const PUSH_FRICTION = 0.96; // how quickly push decays

interface Balloon {
  x: number;
  y: number;
  r: number;
  color: (typeof PALETTE)[number];
  driftX: number;
  floatY: number;
  phase: number;
  swayAmp: number;
  swaySpeed: number;
  stringLen: number;
  opacity: number;
  depth: number;
  /** push velocity from mouse hover */
  pvx: number;
  pvy: number;
}

function createBalloon(w: number, h: number): Balloon {
  const depth = Math.random();
  const r = 14 + depth * 22 + Math.random() * 10;
  return {
    x: Math.random() * w,
    y: Math.random() * h + h * 0.1,
    r,
    color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
    driftX: (Math.random() - 0.5) * 0.15,
    floatY: -(0.12 + Math.random() * 0.25 + depth * 0.15),
    phase: Math.random() * Math.PI * 2,
    swayAmp: 8 + Math.random() * 18,
    swaySpeed: 0.3 + Math.random() * 0.5,
    stringLen: 2.5 + Math.random() * 1.5,
    opacity: 0.45 + depth * 0.4,
    depth,
    pvx: 0,
    pvy: 0,
  };
}

function drawBalloon(ctx: CanvasRenderingContext2D, b: Balloon, t: number) {
  const sx = b.x + Math.sin(t * b.swaySpeed + b.phase) * b.swayAmp;
  const sy = b.y;
  const { r, color, opacity, stringLen } = b;

  ctx.save();
  ctx.globalAlpha = opacity;

  /* ── String (wavy) ── */
  const strLen = r * stringLen;
  ctx.beginPath();
  ctx.moveTo(sx, sy + r * 0.85);
  const wave = Math.sin(t * b.swaySpeed * 0.8 + b.phase) * 4;
  ctx.bezierCurveTo(
    sx + wave,
    sy + r * 0.85 + strLen * 0.33,
    sx - wave * 0.6,
    sy + r * 0.85 + strLen * 0.66,
    sx + wave * 0.3,
    sy + r * 0.85 + strLen,
  );
  ctx.strokeStyle = `rgba(148, 163, 184, ${opacity * 0.55})`;
  ctx.lineWidth = 0.8;
  ctx.stroke();

  /* ── Balloon body ── */
  ctx.beginPath();
  ctx.ellipse(sx, sy, r * 0.82, r, 0, 0, Math.PI * 2);
  const grad = ctx.createRadialGradient(
    sx - r * 0.25, sy - r * 0.3, r * 0.1,
    sx, sy, r,
  );
  grad.addColorStop(0, color.highlight);
  grad.addColorStop(0.45, color.body);
  grad.addColorStop(1, color.shadow);
  ctx.fillStyle = grad;
  ctx.fill();

  /* ── Glossy highlight ── */
  ctx.beginPath();
  ctx.ellipse(sx - r * 0.22, sy - r * 0.32, r * 0.32, r * 0.22, -0.5, 0, Math.PI * 2);
  const hlGrad = ctx.createRadialGradient(
    sx - r * 0.22, sy - r * 0.32, 0,
    sx - r * 0.22, sy - r * 0.32, r * 0.35,
  );
  hlGrad.addColorStop(0, "rgba(255,255,255,0.7)");
  hlGrad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = hlGrad;
  ctx.fill();

  /* ── Knot ── */
  ctx.beginPath();
  ctx.moveTo(sx - r * 0.08, sy + r * 0.85);
  ctx.lineTo(sx, sy + r * 0.95);
  ctx.lineTo(sx + r * 0.08, sy + r * 0.85);
  ctx.closePath();
  ctx.fillStyle = color.shadow;
  ctx.fill();

  ctx.restore();
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let balloons: Balloon[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      balloons = [];
      const count = Math.min(50, Math.floor(window.innerWidth / 30));
      for (let i = 0; i < count; i++) {
        balloons.push(createBalloon(canvas.width, canvas.height));
      }
      balloons.sort((a, b) => a.depth - b.depth);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const onMouseLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const loop = () => {
      const w = canvas.width;
      const h = canvas.height;
      const t = Date.now() * 0.001;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, w, h);

      for (const b of balloons) {
        /* ── Mouse hover push ── */
        const bx = b.x + Math.sin(t * b.swaySpeed + b.phase) * b.swayAmp;
        const by = b.y;
        const dx = bx - mx;
        const dy = by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < HOVER_RADIUS && dist > 0) {
          const force = (1 - dist / HOVER_RADIUS) * PUSH_FORCE;
          b.pvx += (dx / dist) * force;
          b.pvy += (dy / dist) * force;
        }

        // Apply push velocity & decay
        b.x += b.driftX + b.pvx;
        b.y += b.floatY + b.pvy;
        b.pvx *= PUSH_FRICTION;
        b.pvy *= PUSH_FRICTION;

        // Tiny residual — zero it out
        if (Math.abs(b.pvx) < 0.01) b.pvx = 0;
        if (Math.abs(b.pvy) < 0.01) b.pvy = 0;

        // Wrap
        if (b.y + b.r * 4 < 0) {
          b.y = h + b.r * 2;
          b.x = Math.random() * w;
          b.pvx = 0;
          b.pvy = 0;
        }
        if (b.x < -b.r * 2) b.x = w + b.r;
        if (b.x > w + b.r * 2) b.x = -b.r;

        drawBalloon(ctx, b, t);
      }

      animId = requestAnimationFrame(loop);
    };

    resize();
    init();
    loop();

    window.addEventListener("resize", () => { resize(); init(); });
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", () => { resize(); init(); });
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}
