/* Pure CSS balloon background — server component, zero JS at runtime */

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

interface BalloonConfig {
  x: number;
  size: number;
  colorIdx: number;
  dur: number;
  delay: number;
  sway: number;
  swayDur: number;
  opacity: number;
  desktopOnly?: boolean;
}

const BALLOONS: BalloonConfig[] = [
  { x: 3,  size: 28, colorIdx: 0, dur: 24, delay: -2,  sway: 15, swayDur: 4.2, opacity: 0.5 },
  { x: 10, size: 36, colorIdx: 1, dur: 28, delay: -8,  sway: 22, swayDur: 5.0, opacity: 0.65 },
  { x: 18, size: 22, colorIdx: 2, dur: 20, delay: -14, sway: 12, swayDur: 3.5, opacity: 0.45 },
  { x: 25, size: 32, colorIdx: 3, dur: 30, delay: -4,  sway: 18, swayDur: 4.8, opacity: 0.6 },
  { x: 33, size: 26, colorIdx: 4, dur: 22, delay: -18, sway: 20, swayDur: 3.8, opacity: 0.5 },
  { x: 40, size: 40, colorIdx: 5, dur: 32, delay: -10, sway: 25, swayDur: 5.5, opacity: 0.7 },
  { x: 48, size: 24, colorIdx: 6, dur: 26, delay: -22, sway: 14, swayDur: 4.0, opacity: 0.45 },
  { x: 55, size: 34, colorIdx: 7, dur: 25, delay: -6,  sway: 20, swayDur: 4.5, opacity: 0.6 },
  { x: 62, size: 30, colorIdx: 0, dur: 28, delay: -16, sway: 16, swayDur: 5.2, opacity: 0.55 },
  { x: 70, size: 38, colorIdx: 1, dur: 22, delay: -12, sway: 22, swayDur: 3.6, opacity: 0.65 },
  { x: 78, size: 20, colorIdx: 2, dur: 30, delay: -20, sway: 10, swayDur: 4.3, opacity: 0.4 },
  { x: 85, size: 32, colorIdx: 3, dur: 24, delay: -3,  sway: 18, swayDur: 5.0, opacity: 0.6 },
  { x: 92, size: 28, colorIdx: 4, dur: 26, delay: -15, sway: 15, swayDur: 4.6, opacity: 0.5 },
  { x: 97, size: 36, colorIdx: 5, dur: 20, delay: -9,  sway: 24, swayDur: 3.4, opacity: 0.7 },
  // Desktop-only extras
  { x: 7,  size: 18, colorIdx: 6, dur: 34, delay: -25, sway: 10, swayDur: 5.8, opacity: 0.35, desktopOnly: true },
  { x: 30, size: 42, colorIdx: 7, dur: 35, delay: -7,  sway: 28, swayDur: 6.0, opacity: 0.7,  desktopOnly: true },
  { x: 45, size: 20, colorIdx: 0, dur: 22, delay: -19, sway: 12, swayDur: 3.2, opacity: 0.4,  desktopOnly: true },
  { x: 58, size: 30, colorIdx: 1, dur: 27, delay: -11, sway: 18, swayDur: 4.4, opacity: 0.55, desktopOnly: true },
  { x: 75, size: 24, colorIdx: 2, dur: 30, delay: -24, sway: 14, swayDur: 5.5, opacity: 0.45, desktopOnly: true },
  { x: 88, size: 34, colorIdx: 3, dur: 23, delay: -1,  sway: 20, swayDur: 4.0, opacity: 0.6,  desktopOnly: true },
];

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ opacity: 0.55 }}>
      {BALLOONS.map((b, i) => {
        const color = PALETTE[b.colorIdx % PALETTE.length];
        return (
          <div
            key={i}
            className={`absolute balloon-float ${b.desktopOnly ? "hidden md:block" : ""}`}
            style={{
              left: `${b.x}%`,
              bottom: -80,
              animation: `balloonFloat ${b.dur}s linear infinite`,
              animationDelay: `${b.delay}s`,
              willChange: "transform",
            }}
          >
            <div
              className="balloon-sway"
              style={{
                animation: `balloonSway ${b.swayDur}s ease-in-out infinite`,
                animationDelay: `${b.delay * 0.7}s`,
                "--sway": b.sway,
              } as React.CSSProperties}
            >
              <div
                className="balloon-css"
                style={{
                  width: b.size * 0.82,
                  height: b.size,
                  opacity: b.opacity,
                  "--bl-hl": color.highlight,
                  "--bl-body": color.body,
                  "--bl-shadow": color.shadow,
                  "--bl-size": b.size,
                } as React.CSSProperties}
              >
                <div className="balloon-string" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
