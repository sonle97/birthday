"use client";

import { motion, useTransform } from "framer-motion";
import { usePageScroll } from "@/hooks/useScrollAnimation";
import { smoothSpring } from "@/lib/motion";
import { BABY, EVENT } from "@/lib/constants";

/* ---------- static decorative data (no Math.random!) ---------- */

const sparkles = [
  { top: "12%", left: "8%",  size: 2.0, delay: "0s",   dur: "2.8s" },
  { top: "25%", left: "82%", size: 3.2, delay: "0.4s", dur: "3.5s" },
  { top: "18%", left: "35%", size: 1.8, delay: "0.8s", dur: "2.3s" },
  { top: "55%", left: "12%", size: 2.6, delay: "1.2s", dur: "3.1s" },
  { top: "42%", left: "90%", size: 3.5, delay: "1.6s", dur: "2.6s" },
  { top: "70%", left: "25%", size: 2.2, delay: "2.0s", dur: "3.8s" },
  { top: "35%", left: "65%", size: 1.6, delay: "2.4s", dur: "2.1s" },
  { top: "80%", left: "75%", size: 2.8, delay: "2.8s", dur: "3.3s" },
  { top: "15%", left: "55%", size: 3.0, delay: "3.2s", dur: "2.5s" },
  { top: "62%", left: "42%", size: 2.4, delay: "3.6s", dur: "3.6s" },
];

export default function HeroSection() {
  const scrollY = usePageScroll();
  /* All parallax via useTransform — pure MotionValues, zero React re-renders */
  const contentY = useTransform(scrollY, [0, 600], [0, 120]);
  const contentOpacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">

      {/* ====== BG LAYERS (all CSS, zero JS per-frame) ====== */}

      {/* Base mesh gradient — static, GPU-promoted */}
      <div className="absolute inset-0 hero-mesh gpu-layer" />

      {/* Colour sweep — CSS animation */}
      <div className="colour-sweep" />

      {/* Morphing blobs — CSS animation */}
      <div
        className="absolute blob gpu-layer blur-2xl"
        style={{ top: "-12%", right: "-5%", width: 420, height: 420, background: "rgba(56,189,248,0.15)", "--dur": "14s", "--delay": "0s" } as React.CSSProperties}
      />
      <div
        className="absolute blob gpu-layer blur-2xl"
        style={{ bottom: "-10%", left: "-8%", width: 380, height: 380, background: "rgba(139,92,246,0.08)", "--dur": "18s", "--delay": "3s" } as React.CSSProperties}
      />

      {/* Sparkles — pure CSS */}
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="sparkle"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, "--delay": s.delay, "--dur": s.dur } as React.CSSProperties}
        />
      ))}

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] gpu-layer" style={{
        backgroundImage: "linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* ====== CONTENT (Framer only for entrance + scroll parallax) ====== */}
      <motion.div
        className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20 gpu-layer"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothSpring, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-dark shadow-3d mb-6">
              <span className="sparkle-dot w-1.5 h-1.5 rounded-full bg-sky-400" style={{ animation: "sparkle 2s ease-in-out infinite" }} />
              <span className="font-heading text-[11px] font-semibold text-sky-700 tracking-[0.25em] uppercase">
                Thiệp mời thôi nôi
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" style={{ animation: "sparkle 2s ease-in-out infinite 0.6s" }} />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="font-body text-sm md:text-base text-sky-600/60 tracking-[0.2em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothSpring, delay: 0.6 }}
          >
            {EVENT.subtitle}
          </motion.p>

          {/* Divider */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <div className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-sky-400/60" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-sky-400 to-violet" style={{ animation: "sparkle 3s ease-in-out infinite" }} />
            <div className="w-6 h-px bg-sky-400/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" style={{ animation: "sparkle 2.5s ease-in-out infinite 0.5s" }} />
            <div className="w-6 h-px bg-sky-400/40" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-gold to-rose" style={{ animation: "sparkle 3s ease-in-out infinite 1s" }} />
            <div className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-sky-400/60" />
          </motion.div>

          {/* Photo + rings */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...smoothSpring, delay: 0.8 }}
          >
            {/* CSS rings — no Framer per-frame */}
            <div
              className="absolute top-1/2 left-1/2 rounded-full border border-dashed border-sky-400/10 ring-spin"
              style={{ width: 180, height: 180, marginTop: -90, marginLeft: -90, "--dur": "25s" } as React.CSSProperties}
            />
            <div
              className="absolute top-1/2 left-1/2 rounded-full border border-dashed border-sky-400/6 ring-spin-reverse"
              style={{ width: 260, height: 260, marginTop: -130, marginLeft: -130, "--dur": "35s" } as React.CSSProperties}
            />
            <div
              className="absolute top-1/2 left-1/2 rounded-full border border-dashed border-sky-400/4 ring-spin"
              style={{ width: 340, height: 340, marginTop: -170, marginLeft: -170, "--dur": "50s" } as React.CSSProperties}
            />

            {/* Glow — static radial, CSS pulse */}
            <div
              className="absolute inset-[-16px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(56,189,248,0.06) 40%, transparent 70%)",
                animation: "sparkle 3.5s ease-in-out infinite",
              }}
            />

            {/* Photo */}
            <motion.div
              className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-glow-white group cursor-pointer gpu-layer"
              style={{ border: "3px solid rgba(255,255,255,0.7)" }}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-white via-sky-50 to-sky-100 flex items-center justify-center relative overflow-hidden">
                {/* CSS shimmer */}
                <div className="shimmer-sweep" />
                <div className="text-center relative z-10">
                  <svg className="w-14 h-14 md:w-18 md:h-18 mx-auto text-sky-300/70" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <p className="text-sky-400/80 font-body text-[10px] mt-1 tracking-wider uppercase">Ảnh bé yêu</p>
                </div>
              </div>
            </motion.div>

            {/* Orbiting accents — CSS */}
            <div className="absolute inset-[-12px] orbit" style={{ "--dur": "12s" } as React.CSSProperties}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-gold to-gold-light shadow-glow-gold" />
            </div>
            <div className="absolute inset-[-24px] orbit-reverse" style={{ "--dur": "18s" } as React.CSSProperties}>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-violet to-violet-light shadow-md" />
            </div>
          </motion.div>

          {/* Baby name */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothSpring, delay: 1.0 }}
            className="mb-10"
          >
            <p className="font-script text-2xl md:text-3xl text-sky-500 mb-1">Bé Yêu</p>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-text-primary tracking-wide">
              {BABY.name}
            </h2>
          </motion.div>

          {/* Save the date card */}
          <motion.div
            className="w-full max-w-sm md:max-w-md"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothSpring, delay: 1.2 }}
          >
            <motion.div
              className="relative rounded-[32px] p-[1.5px] overflow-hidden save-date-border"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="relative rounded-[31px] bg-white/85 backdrop-blur-2xl px-6 py-6 md:px-8 md:py-7 overflow-hidden">
                {/* Shimmer */}
                <div className="shimmer-sweep" />

                {/* Header row */}
                <div className="relative flex items-center justify-center gap-2 mb-5">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-sky-300/40" />
                  <div className="flex items-center gap-2 px-3">
                    {/* Calendar icon */}
                    <svg className="w-3.5 h-3.5 text-sky-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                    </svg>
                    <p className="font-heading text-[10px] font-bold text-sky-500 uppercase tracking-[0.35em]">
                      Save the date
                    </p>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-sky-300/40" />
                </div>

                {/* Date display */}
                <div className="relative flex items-stretch justify-center gap-0">
                  {/* Month */}
                  <div className="flex flex-col items-center justify-center px-5 md:px-7">
                    <p className="font-heading text-[10px] font-bold text-sky-400 uppercase tracking-[0.2em] mb-1">Tháng</p>
                    <p className="font-heading text-3xl md:text-4xl font-extrabold text-text-primary leading-none">{String(EVENT.month).padStart(2, "0")}</p>
                    <p className="font-body text-[10px] text-sky-400 mt-1.5 uppercase tracking-wider">{EVENT.monthNameEn}</p>
                  </div>

                  {/* Divider */}
                  <div className="w-px self-stretch bg-gradient-to-b from-transparent via-sky-300/40 to-transparent mx-1" />

                  {/* Day — hero element */}
                  <div className="flex flex-col items-center justify-center px-4 md:px-6">
                    <p className="font-heading text-[10px] font-bold text-white/80 uppercase tracking-[0.2em] mb-1 relative z-10">Ngày</p>
                    <div className="relative">
                      <div className="absolute inset-[-8px] rounded-3xl bg-sky-400/20 blur-md" />
                      <div
                        className="relative w-[76px] h-[76px] md:w-[92px] md:h-[92px] rounded-[22px] flex items-center justify-center overflow-hidden"
                        style={{
                          background: "linear-gradient(145deg, #0284c7, #0ea5e9, #38bdf8)",
                          boxShadow: "0 8px 30px rgba(14,165,233,0.35), inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 3px rgba(14,165,233,0.3)",
                        }}
                      >
                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent rounded-t-[22px]" />
                        <div className="absolute top-2 right-3 w-2 h-2 rounded-full bg-white/30 blur-[1px]" />
                        <span className="relative font-heading text-[44px] md:text-[54px] font-black text-white leading-none" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                          {EVENT.day}
                        </span>
                      </div>
                    </div>
                    <p className="font-body text-[10px] text-sky-400 mt-1.5 uppercase tracking-wider relative z-10">{EVENT.dayOfWeek}</p>
                  </div>

                  {/* Divider */}
                  <div className="w-px self-stretch bg-gradient-to-b from-transparent via-sky-300/40 to-transparent mx-1" />

                  {/* Year */}
                  <div className="flex flex-col items-center justify-center px-5 md:px-7">
                    <p className="font-heading text-[10px] font-bold text-sky-400 uppercase tracking-[0.2em] mb-1">Năm</p>
                    <p className="font-heading text-3xl md:text-4xl font-extrabold text-text-primary leading-none">{EVENT.yearShort}</p>
                    <p className="font-body text-[10px] text-sky-400 mt-1.5 uppercase tracking-wider">{EVENT.year}</p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="mt-5 flex items-center justify-center gap-2">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-sky-300/30" />
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400/40" />
                  <div className="w-1 h-1 rounded-full bg-gold/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400/40" />
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-sky-300/30" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.2 }}
          >
            <span
              className="font-heading text-[10px] text-sky-400/60 uppercase tracking-[0.3em]"
              style={{ animation: "sparkle 2.5s ease-in-out infinite" }}
            >
              Cuộn xuống
            </span>
            <div className="w-[26px] h-[42px] rounded-full border-[1.5px] border-sky-300/40 flex justify-center pt-2.5 relative overflow-hidden">
              <div
                className="w-[3px] h-[10px] rounded-full bg-gradient-to-b from-sky-400 to-sky-400/20"
                style={{ animation: "sparkle 2s ease-in-out infinite" }}
              />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
