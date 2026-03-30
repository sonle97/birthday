"use client";

/**
 * Animated sky scene:
 *  - Layered clouds drifting at different speeds/altitudes
 *  - Cartoon airplane puttering across
 *  - Cute kids flying with bamboo copters (propeller beanies)
 *
 * Everything is pure SVG + CSS @keyframes for 60 fps.
 */

/* ───────── Cloud SVG ───────── */
function Cloud({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 80" className={className} style={style} fill="white" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="70" cy="50" rx="60" ry="28" opacity="0.9" />
      <ellipse cx="110" cy="42" rx="45" ry="24" opacity="0.95" />
      <ellipse cx="50" cy="45" rx="35" ry="20" opacity="0.85" />
      <ellipse cx="90" cy="35" rx="38" ry="22" opacity="1" />
      <ellipse cx="130" cy="48" rx="30" ry="18" opacity="0.88" />
    </svg>
  );
}

/* ───────── Small puffy cloud ───────── */
function SmallCloud({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 50" className={className} style={style} fill="white" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="45" cy="30" rx="38" ry="18" opacity="0.85" />
      <ellipse cx="75" cy="26" rx="30" ry="16" opacity="0.9" />
      <ellipse cx="55" cy="22" rx="25" ry="14" opacity="0.95" />
    </svg>
  );
}

/* ───────── Cartoon airplane ───────── */
function Airplane({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 50" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="50" cy="28" rx="30" ry="10" fill="#38bdf8" />
      <ellipse cx="50" cy="28" rx="28" ry="8" fill="#7dd3fc" />
      {/* Nose */}
      <ellipse cx="78" cy="28" rx="8" ry="6" fill="#0ea5e9" />
      <ellipse cx="82" cy="28" rx="4" ry="3" fill="#f0c456" />
      {/* Cockpit window */}
      <ellipse cx="62" cy="25" rx="5" ry="4" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="0.8" />
      {/* Top wing */}
      <path d="M35 20 L55 20 L60 14 L30 14 Z" fill="#0ea5e9" />
      {/* Bottom wing */}
      <path d="M35 36 L55 36 L58 42 L32 42 Z" fill="#0ea5e9" opacity="0.8" />
      {/* Tail */}
      <path d="M22 28 L18 14 L26 14 L28 24 Z" fill="#0ea5e9" />
      <path d="M22 28 L18 38 L26 38 L28 32 Z" fill="#0284c7" opacity="0.7" />
      {/* Propeller */}
      <g className="airplane-propeller">
        <rect x="84" y="22" width="2" height="12" rx="1" fill="#64748b" />
        <ellipse cx="85" cy="22" rx="8" ry="2" fill="#94a3b8" opacity="0.7" />
        <ellipse cx="85" cy="34" rx="8" ry="2" fill="#94a3b8" opacity="0.7" />
      </g>
      {/* Windows */}
      <circle cx="45" cy="26" r="2.5" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="0.5" />
      <circle cx="52" cy="26" r="2.5" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="0.5" />
      {/* Stripe */}
      <rect x="30" y="26" width="38" height="2" rx="1" fill="#f0c456" opacity="0.6" />
    </svg>
  );
}

/* ───────── Kid with bamboo copter (generic cute chibi) ───────── */
function FlyingKid({
  className,
  style,
  shirtColor = "#38bdf8",
  hairColor = "#1e293b",
  skinColor = "#fcd9b6",
  pantsColor = "#0ea5e9",
}: {
  className?: string;
  style?: React.CSSProperties;
  shirtColor?: string;
  hairColor?: string;
  skinColor?: string;
  pantsColor?: string;
}) {
  return (
    <svg viewBox="0 0 60 90" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* ─ Bamboo copter ─ */}
      <g className="copter-spin">
        {/* Blades */}
        <ellipse cx="30" cy="6" rx="22" ry="3.5" fill="#f0c456" opacity="0.85" />
        <ellipse cx="30" cy="6" rx="22" ry="3.5" fill="#fde68a" opacity="0.5" transform="rotate(60 30 6)" />
      </g>
      {/* Stick */}
      <rect x="29" y="6" width="2" height="10" rx="1" fill="#d4a20a" />

      {/* ─ Head ─ */}
      <circle cx="30" cy="26" r="12" fill={skinColor} />
      {/* Hair */}
      <path d={`M18 22 Q18 12 30 12 Q42 12 42 22 Q38 16 30 16 Q22 16 18 22 Z`} fill={hairColor} />
      {/* Eyes */}
      <ellipse cx="25" cy="27" rx="2.2" ry="2.8" fill="white" />
      <ellipse cx="35" cy="27" rx="2.2" ry="2.8" fill="white" />
      <circle cx="25.5" cy="27.5" r="1.3" fill="#1e293b" />
      <circle cx="35.5" cy="27.5" r="1.3" fill="#1e293b" />
      {/* Eye shine */}
      <circle cx="24.8" cy="26.5" r="0.5" fill="white" />
      <circle cx="34.8" cy="26.5" r="0.5" fill="white" />
      {/* Smile */}
      <path d="M25 32 Q30 36 35 32" stroke="#c2410c" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="21" cy="31" rx="2.5" ry="1.5" fill="#fca5a5" opacity="0.5" />
      <ellipse cx="39" cy="31" rx="2.5" ry="1.5" fill="#fca5a5" opacity="0.5" />

      {/* ─ Body ─ */}
      <rect x="22" y="38" width="16" height="18" rx="4" fill={shirtColor} />
      {/* Collar */}
      <path d="M24 38 L30 42 L36 38" fill="none" stroke="white" strokeWidth="1" opacity="0.6" />

      {/* ─ Arms (stretched out, flying pose) ─ */}
      <path d="M22 42 L10 38 L8 40 L20 46" fill={skinColor} stroke={skinColor} strokeWidth="0.5" strokeLinejoin="round" />
      <path d="M38 42 L50 38 L52 40 L40 46" fill={skinColor} stroke={skinColor} strokeWidth="0.5" strokeLinejoin="round" />

      {/* ─ Legs ─ */}
      <rect x="23" y="55" width="6" height="14" rx="3" fill={pantsColor} />
      <rect x="31" y="55" width="6" height="14" rx="3" fill={pantsColor} />
      {/* Shoes */}
      <ellipse cx="26" cy="70" rx="4" ry="3" fill="#f0c456" />
      <ellipse cx="34" cy="70" rx="4" ry="3" fill="#f0c456" />
    </svg>
  );
}

/* ───────── Main scene ───────── */
export default function CloudScene() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">

      {/* ══════ CLOUDS ══════ */}

      {/* Layer 1 — far, slow, small, faint */}
      <Cloud
        className="cloud absolute opacity-20"
        style={{ width: 180, top: "8%", "--speed": "55s", "--startX": "-200px", "--endX": "110vw" } as React.CSSProperties}
      />
      <SmallCloud
        className="cloud absolute opacity-15"
        style={{ width: 120, top: "18%", "--speed": "50s", "--startX": "-150px", "--endX": "110vw", animationDelay: "-20s" } as React.CSSProperties}
      />

      {/* Layer 2 — mid distance */}
      <Cloud
        className="cloud absolute opacity-30"
        style={{ width: 240, top: "14%", "--speed": "40s", "--startX": "-260px", "--endX": "110vw", animationDelay: "-10s" } as React.CSSProperties}
      />
      <SmallCloud
        className="cloud absolute opacity-25"
        style={{ width: 160, top: "32%", "--speed": "45s", "--startX": "-180px", "--endX": "110vw", animationDelay: "-25s" } as React.CSSProperties}
      />
      <Cloud
        className="cloud absolute opacity-20"
        style={{ width: 200, top: "55%", "--speed": "48s", "--startX": "-220px", "--endX": "110vw", animationDelay: "-35s" } as React.CSSProperties}
      />

      {/* Layer 3 — close, faster, bigger, more opaque */}
      <Cloud
        className="cloud absolute opacity-40"
        style={{ width: 300, top: "5%", "--speed": "30s", "--startX": "-320px", "--endX": "110vw", animationDelay: "-5s" } as React.CSSProperties}
      />
      <SmallCloud
        className="cloud absolute opacity-35"
        style={{ width: 200, top: "40%", "--speed": "35s", "--startX": "-220px", "--endX": "110vw", animationDelay: "-18s" } as React.CSSProperties}
      />
      <Cloud
        className="cloud absolute opacity-25"
        style={{ width: 260, top: "70%", "--speed": "38s", "--startX": "-280px", "--endX": "110vw", animationDelay: "-28s" } as React.CSSProperties}
      />

      {/* ══════ AIRPLANE ══════ */}
      <div className="airplane absolute" style={{ width: 110, top: "22%", "--speed": "18s", "--startX": "-140px", "--endX": "110vw" } as React.CSSProperties}>
        <Airplane className="w-full h-auto airplane-bob" />
        {/* Exhaust trail */}
        <div className="absolute top-[46%] left-[-4px] flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-full bg-white/40 exhaust-puff"
              style={{
                width: 6 - i * 1.5,
                height: 6 - i * 1.5,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ══════ FLYING KIDS WITH BAMBOO COPTERS ══════ */}

      {/* Kid 1 — blue shirt, flies higher */}
      <div
        className="flying-kid absolute"
        style={{ width: 52, top: "12%", "--speed": "22s", "--startX": "110vw", "--endX": "-80px", "--bobAmt": "12px" } as React.CSSProperties}
      >
        <FlyingKid
          className="w-full h-auto flying-kid-bob"
          shirtColor="#38bdf8"
          hairColor="#1e293b"
          pantsColor="#0ea5e9"
        />
      </div>

      {/* Kid 2 — pink shirt, middle */}
      <div
        className="flying-kid absolute"
        style={{ width: 48, top: "35%", "--speed": "26s", "--startX": "110vw", "--endX": "-70px", animationDelay: "-8s", "--bobAmt": "15px" } as React.CSSProperties}
      >
        <FlyingKid
          className="w-full h-auto flying-kid-bob"
          shirtColor="#fb7185"
          hairColor="#7c2d12"
          pantsColor="#e11d48"
          skinColor="#fcd9b6"
        />
      </div>

      {/* Kid 3 — green shirt, lower */}
      <div
        className="flying-kid absolute"
        style={{ width: 44, top: "52%", "--speed": "24s", "--startX": "110vw", "--endX": "-60px", animationDelay: "-14s", "--bobAmt": "10px" } as React.CSSProperties}
      >
        <FlyingKid
          className="w-full h-auto flying-kid-bob"
          shirtColor="#4ade80"
          hairColor="#1e293b"
          pantsColor="#16a34a"
        />
      </div>

      {/* Kid 4 — orange shirt, high right */}
      <div
        className="flying-kid absolute"
        style={{ width: 40, top: "8%", "--speed": "28s", "--startX": "110vw", "--endX": "-50px", animationDelay: "-20s", "--bobAmt": "14px" } as React.CSSProperties}
      >
        <FlyingKid
          className="w-full h-auto flying-kid-bob"
          shirtColor="#fb923c"
          hairColor="#451a03"
          pantsColor="#ea580c"
          skinColor="#fde0c8"
        />
      </div>
    </div>
  );
}
