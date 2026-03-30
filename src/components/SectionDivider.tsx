"use client";

type Variant = "wave" | "curve" | "zigzag" | "hills" | "clouds";

interface Props {
  variant?: Variant;
  flip?: boolean;
  /** Background color of the section ABOVE */
  fromColor?: string;
  /** Background color of the section BELOW */
  toColor?: string;
  /** Tint color for the decorative shapes (default: subtle sky) */
  tintColor?: string;
  className?: string;
}

/**
 * Seamless section divider.
 * - Fills the entire box with `fromColor` (matches section above).
 * - Draws decorative shapes that transition into `toColor` (matches section below).
 * - Uses `tintColor` for the lighter decorative layer.
 * - Negative margins ensure no pixel gaps.
 */
export default function SectionDivider({
  variant = "wave",
  flip = false,
  fromColor = "#ffffff",
  toColor = "#f0f9ff",
  tintColor = "rgba(186,230,253,0.25)",
  className = "",
}: Props) {
  const flipClass = flip ? "rotate-180" : "";

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flipClass} ${className}`}
      style={{ backgroundColor: fromColor, marginTop: -1, marginBottom: -1 }}
    >
      {variant === "wave" && (
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-14 md:h-20">
          {/* Decorative tint wave */}
          <path
            d="M0,35 C180,75 360,5 540,45 C720,85 900,15 1080,55 C1200,75 1360,25 1440,45 L1440,100 L0,100Z"
            fill={tintColor}
          />
          {/* Solid transition wave */}
          <path
            d="M0,50 C200,25 400,75 600,40 C800,5 1000,65 1200,35 C1350,15 1400,45 1440,30 L1440,100 L0,100Z"
            fill={toColor}
          />
        </svg>
      )}

      {variant === "curve" && (
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="block w-full h-12 md:h-16">
          {/* Soft wide arc */}
          <path
            d="M0,70 C360,10 1080,10 1440,70 L1440,70 L0,70Z"
            fill={tintColor}
          />
          {/* Tighter arc */}
          <path
            d="M0,70 C480,20 960,20 1440,70 L1440,70 L0,70Z"
            fill={toColor}
          />
        </svg>
      )}

      {variant === "zigzag" && (
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="block w-full h-8 md:h-12">
          {/* Back zigzag — tinted */}
          <path
            d={`M0,22 ${Array.from({ length: 19 }, (_, i) => `L${i * 80 + 40},${i % 2 === 0 ? 8 : 22}`).join(" ")} L1440,22 L1440,50 L0,50Z`}
            fill={tintColor}
          />
          {/* Front zigzag — solid */}
          <path
            d={`M0,30 ${Array.from({ length: 19 }, (_, i) => `L${i * 80 + 40},${i % 2 === 0 ? 18 : 30}`).join(" ")} L1440,30 L1440,50 L0,50Z`}
            fill={toColor}
          />
        </svg>
      )}

      {variant === "hills" && (
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-12 md:h-16">
          {/* Far hills — tint */}
          <path
            d="M0,55 Q180,15 360,45 Q540,75 720,35 Q900,5 1080,40 Q1260,70 1440,25 L1440,80 L0,80Z"
            fill={tintColor}
          />
          {/* Mid hills */}
          <path
            d="M0,65 Q240,30 480,55 Q720,80 960,40 Q1200,10 1440,50 L1440,80 L0,80Z"
            fill={toColor}
            opacity="0.6"
          />
          {/* Front hills — solid */}
          <path
            d="M0,72 Q360,48 720,65 Q1080,82 1440,55 L1440,80 L0,80Z"
            fill={toColor}
          />
        </svg>
      )}

      {variant === "clouds" && (
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="block w-full h-12 md:h-16">
          {/* Cloud bumps — tinted */}
          <ellipse cx="100"  cy="55" rx="140" ry="40" fill={tintColor} />
          <ellipse cx="340"  cy="50" rx="120" ry="36" fill={tintColor} />
          <ellipse cx="560"  cy="53" rx="150" ry="42" fill={tintColor} />
          <ellipse cx="780"  cy="48" rx="170" ry="46" fill={tintColor} />
          <ellipse cx="1000" cy="52" rx="130" ry="38" fill={tintColor} />
          <ellipse cx="1200" cy="50" rx="155" ry="40" fill={tintColor} />
          <ellipse cx="1380" cy="54" rx="120" ry="35" fill={tintColor} />
          {/* Solid base */}
          <rect x="0" y="56" width="1440" height="14" fill={toColor} />
        </svg>
      )}
    </div>
  );
}
