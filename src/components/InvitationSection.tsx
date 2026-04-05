import { BABY, EVENT, VENUE } from "@/lib/constants";

export default function InvitationSection() {
  return (
    <section className="relative py-14 md:py-20 px-4 overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white">

      {/* ── Decorative background ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #0ea5e9, transparent 70%)" }}
      />
      <div className="absolute top-12 left-[10%] w-20 h-20 rounded-full border border-sky-200/20 ring-spin" style={{ "--dur": "30s" } as React.CSSProperties} />
      <div className="absolute bottom-16 right-[8%] w-28 h-28 rounded-full border border-dashed border-sky-200/15 ring-spin-reverse" style={{ "--dur": "40s" } as React.CSSProperties} />
      <div className="absolute top-[20%] right-[15%] w-2 h-2 rounded-full bg-gold/20" style={{ animation: "sparkle 3s ease-in-out infinite" }} />
      <div className="absolute bottom-[25%] left-[12%] w-1.5 h-1.5 rounded-full bg-sky-400/20" style={{ animation: "sparkle 2.5s ease-in-out infinite 1s" }} />

      <div className="max-w-2xl mx-auto text-center relative z-10">

        {/* ── Heading ── */}
        <div className="reveal-fade-down">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-sky-300/50" />
            <svg className="w-4 h-4 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3.105 3.105a1.5 1.5 0 012.122 0L10 7.878l4.773-4.773a1.5 1.5 0 112.122 2.122L12.12 10l4.774 4.773a1.5 1.5 0 01-2.122 2.122L10 12.12l-4.773 4.774a1.5 1.5 0 01-2.122-2.122L7.878 10 3.105 5.227a1.5 1.5 0 010-2.122z" />
            </svg>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-sky-300/50" />
          </div>

          <p className="font-script text-4xl md:text-5xl text-sky-600 mb-1 leading-tight">
            Trân trọng kính mời
          </p>
          <p className="font-heading text-[10px] font-bold text-sky-600/70 uppercase tracking-[0.4em]">
            Cordially Invited
          </p>
        </div>

        {/* ── Decorative divider ── */}
        <div className="flex items-center justify-center gap-3 my-7 reveal-zoom reveal-d2">
          <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-sky-300/50" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-sky-400/40" />
            <svg className="w-5 h-5 text-rose" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
          </div>
          <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-sky-300/50" />
        </div>

        {/* ── Message ── */}
        <p className="font-body text-base md:text-lg text-text-primary/85 leading-relaxed max-w-md mx-auto reveal-blur reveal-d3">
          Cùng chung vui với gia đình chúng tôi
          <br />
          trong buổi tiệc mừng
        </p>

        {/* ── Name card — hero element ── */}
        <div className="my-8 reveal-flip reveal-d4">
          <div className="inline-block relative">
            {/* Animated gradient border */}
            <div className="relative rounded-[24px] p-[1.5px] save-date-border overflow-hidden">
              <div className="relative rounded-[23px] bg-white/95 px-10 md:px-14 py-6 md:py-8 overflow-hidden">
                {/* Shimmer */}
                <div className="shimmer-sweep" />

                {/* Top decorative arc */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 border-b-2 border-sky-200/20 rounded-b-full" />

                {/* Label */}
                <div className="relative flex items-center justify-center gap-2 mb-3">
                  <div className="h-px w-6 bg-gradient-to-r from-transparent to-sky-300/40" />
                  <p className="font-heading text-[10px] font-bold text-sky-400 uppercase tracking-[0.35em]">
                    Thôi nôi bé
                  </p>
                  <div className="h-px w-6 bg-gradient-to-l from-transparent to-sky-300/40" />
                </div>

                {/* Name */}
                <h3 className="relative font-heading text-4xl md:text-5xl font-extrabold leading-tight">
                  <span className="text-gradient-hero">{BABY.name}</span>
                </h3>

                {/* Bottom dots */}
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <div className="w-1 h-1 rounded-full bg-sky-300/30" />
                  <div className="w-6 h-px bg-sky-300/30" />
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400/40" />
                  <div className="w-6 h-px bg-sky-300/30" />
                  <div className="w-1 h-1 rounded-full bg-sky-300/30" />
                </div>
              </div>
            </div>

            {/* Floating accent elements around card */}
            <div className="absolute -top-3 -right-3 w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full text-gold/30" fill="currentColor">
                <path d="M12 2L13.5 8.5L20 7L14.5 11L18 17L12 13.5L6 17L9.5 11L4 7L10.5 8.5L12 2Z" />
              </svg>
            </div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4">
              <svg viewBox="0 0 24 24" className="w-full h-full text-sky-400/40" fill="currentColor">
                <path d="M12 2L13.5 8.5L20 7L14.5 11L18 17L12 13.5L6 17L9.5 11L4 7L10.5 8.5L12 2Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Event details summary ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 reveal-fade-up reveal-d5">
          <div className="flex items-center gap-2 text-sky-600/70">
            <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-body text-sm font-medium">
              {EVENT.dayOfWeek}, {EVENT.day}/{EVENT.month}/{EVENT.year}
            </span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-sky-300/50" />
          <div className="flex items-center gap-2 text-sky-600/70">
            <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-body text-sm font-medium">{VENUE.name}</span>
          </div>
        </div>

        {/* ── Closing line ── */}
        <div className="reveal-fade-up reveal-d6">
          <p className="font-body text-sm md:text-base text-text-primary/70 italic leading-relaxed max-w-sm mx-auto">
            Sự hiện diện của Quý khách là niềm vinh hạnh lớn lao cho gia đình chúng tôi
          </p>

          {/* Bottom ornament */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-sky-200/40" />
            <svg className="w-4 h-4 text-sky-400/50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1-8h4v2h-6V7h2v5z" />
            </svg>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-sky-200/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
