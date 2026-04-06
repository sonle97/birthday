import { BABY, EVENT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* ══════ Top wave separator ══════ */}
      <div className="relative h-20 md:h-28 bg-white">
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="url(#footerGrad)"
          />
          <defs>
            <linearGradient id="footerGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.15" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ══════ Main footer area ══════ */}
      <div
        className="relative pt-12 pb-8 px-4"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,165,233,0.08) 0%, rgba(14,165,233,0.15) 40%, rgba(7,89,133,0.2) 100%)",
        }}
      >
        {/* Ambient blobs */}
        <div className="absolute top-0 left-[10%] w-48 h-48 bg-sky-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-[10%] w-40 h-40 bg-sky-200/8 rounded-full blur-3xl" />
        {/* Stars */}
        <div
          className="sparkle absolute top-[15%] left-[20%]"
          style={
            {
              width: 2,
              height: 2,
              "--dur": "3s",
              "--delay": "0s",
            } as React.CSSProperties
          }
        />
        <div
          className="sparkle absolute top-[25%] right-[25%]"
          style={
            {
              width: 2.5,
              height: 2.5,
              "--dur": "2.5s",
              "--delay": "1s",
            } as React.CSSProperties
          }
        />
        <div
          className="sparkle absolute bottom-[30%] left-[35%]"
          style={
            {
              width: 1.5,
              height: 1.5,
              "--dur": "3.5s",
              "--delay": "0.5s",
            } as React.CSSProperties
          }
        />
        <div
          className="sparkle absolute top-[40%] right-[15%]"
          style={
            {
              width: 2,
              height: 2,
              "--dur": "2.8s",
              "--delay": "1.5s",
            } as React.CSSProperties
          }
        />

        <div className="max-w-md mx-auto relative z-10">
          {/* ── Thank you ── */}
          <div className="text-center mb-8 reveal-fade-up">
            <div className="inline-block mb-4">
              <div
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg"
                style={{ boxShadow: "0 6px 20px rgba(14,165,233,0.3)" }}
              >
                <svg
                  className="w-7 h-7 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
            <p className="font-script text-3xl md:text-4xl text-sky-800 mb-3 leading-tight">
              Trân trọng cảm ơn
            </p>
            <p className="font-body text-sm md:text-base text-sky-700/70 leading-relaxed max-w-xs mx-auto">
              Sự hiện diện của Quý khách là món quà quý giá nhất trong ngày đặc
              biệt này
            </p>
          </div>

          {/* ── Family signature card ── */}
          <div className="mb-10 reveal-zoom reveal-d2">
            <div className="relative mx-auto max-w-md rounded-[32px] p-[1.5px] save-date-border overflow-hidden">
              <div className="relative rounded-[31px] bg-white overflow-hidden">
                <div className="shimmer-sweep" />

                {/* Decorative header area */}
                <div className="relative h-20 overflow-hidden rounded-tl-[31px] rounded-tr-[31px]">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #e0f2fe 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 50%, white 1px, transparent 1px), radial-gradient(circle at 70% 40%, white 0.5px, transparent 0.5px)",
                      backgroundSize: "24px 24px, 16px 16px",
                    }}
                  />
                  {/* Curved bottom */}
                  <svg
                    className="absolute bottom-0 left-0 right-0 w-full"
                    viewBox="0 0 400 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 20 C100 0 300 0 400 20 L400 20 L0 20 Z"
                      fill="white"
                      fillOpacity="0.95"
                    />
                  </svg>
                </div>

                {/* Floating icon — overlaps header and content */}
                <div className="relative -mt-10 flex justify-center mb-3">
                  <div className="relative">
                    {/* Glow */}
                    <div className="absolute inset-[-4px] rounded-2xl bg-sky-400/15 blur-md" />
                    <div
                      className="relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(145deg, #0284c7, #0ea5e9, #38bdf8)",
                        boxShadow:
                          "0 6px 20px rgba(14,165,233,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl" />
                      <svg
                        className="w-7 h-7 text-white relative"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="px-8 md:px-12 pb-7 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="h-px w-6 bg-gradient-to-r from-transparent to-sky-300/40" />
                    <p className="font-heading text-[9px] font-bold text-sky-500/80 uppercase tracking-[0.35em]">
                      With love from
                    </p>
                    <div className="h-px w-6 bg-gradient-to-l from-transparent to-sky-300/40" />
                  </div>

                  <h4 className="font-heading text-2xl md:text-3xl font-extrabold leading-snug whitespace-nowrap">
                    <span className="text-gradient-hero">
                      Gia đình bé {BABY.name}
                    </span>
                  </h4>

                  {/* Signature-style underline */}
                  <div className="mt-3 flex items-center justify-center">
                    <svg
                      className="w-32 md:w-40 h-3 text-sky-300/40"
                      viewBox="0 0 160 12"
                      fill="none"
                    >
                      <path
                        d="M4 8 C30 2 50 10 80 6 C110 2 130 10 156 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Credits ── */}
          <div className="text-center reveal-fade-up reveal-d4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-sky-400/20" />
              <div className="w-1 h-1 rounded-full bg-sky-400/30" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-sky-400/20" />
            </div>
            <p className="font-body text-sky-700/60 text-xs">
              Designed with{" "}
              <span className="text-rose inline-block">&#10084;</span> by{" "}
              <span className="font-semibold text-sky-600/70">
                Thiệp Online
              </span>
            </p>
            <p className="font-body text-sky-600/50 text-[10px] mt-1">
              &copy; {EVENT.year} — Thiệp mời thôi nôi bé {BABY.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
