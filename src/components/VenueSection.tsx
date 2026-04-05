import { VENUE } from "@/lib/constants";

export default function VenueSection() {
  return (
    <section className="relative py-14 md:py-20 px-4 overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-white">
      {/* BG decor */}
      <div className="absolute top-0 left-[-8%] w-60 h-60 bg-sky-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-[-8%] w-72 h-72 bg-violet-100/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #0ea5e9, transparent 70%)" }} />

      <div className="max-w-lg mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 reveal-fade-down">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-sky-300/50" />
            <svg className="w-4 h-4 text-sky-600/70" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-sky-300/50" />
          </div>
          <p className="font-script text-3xl md:text-4xl text-sky-600 mb-1">
            Địa điểm tổ chức
          </p>
          <p className="font-heading text-[10px] font-bold text-sky-600/70 uppercase tracking-[0.4em]">
            Event Venue
          </p>
        </div>

        {/* Main card */}
        <div className="reveal-flip reveal-d2">
          <div className="relative rounded-[32px] p-[1.5px] save-date-border overflow-hidden">
            <div className="relative rounded-[31px] bg-white/95 overflow-hidden">
              {/* Shimmer */}
              <div className="shimmer-sweep" />

              {/* Top decorative strip */}
              <div className="h-28 md:h-36 relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 30%, #7dd3fc 60%, #38bdf8 100%)",
                  }}
                />
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 30%, white 1px, transparent 1px)",
                  backgroundSize: "30px 30px, 20px 20px",
                }} />
                {/* Floating building silhouette */}
                <svg className="absolute bottom-0 left-0 right-0 h-16 text-white/15" viewBox="0 0 400 60" preserveAspectRatio="none" fill="currentColor">
                  <rect x="20" y="15" width="30" height="45" rx="2" />
                  <rect x="55" y="25" width="25" height="35" rx="2" />
                  <rect x="85" y="8" width="35" height="52" rx="2" />
                  <rect x="125" y="20" width="28" height="40" rx="2" />
                  <rect x="160" y="5" width="40" height="55" rx="2" />
                  <rect x="205" y="18" width="30" height="42" rx="2" />
                  <rect x="240" y="10" width="35" height="50" rx="2" />
                  <rect x="280" y="22" width="25" height="38" rx="2" />
                  <rect x="310" y="12" width="38" height="48" rx="2" />
                  <rect x="355" y="20" width="30" height="40" rx="2" />
                </svg>
                {/* Icon centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/30 border border-white/30 flex items-center justify-center">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 md:px-10 pb-8 pt-6 text-center">
                <p className="font-heading text-[10px] font-bold text-sky-400 uppercase tracking-[0.3em] mb-2">
                  Tiệc thôi nôi được tổ chức tại
                </p>

                <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-gradient-hero mb-5 leading-tight">
                  {VENUE.name}
                </h3>

                {/* Info rows */}
                <div className="space-y-2.5 mb-7">
                  <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-sky-50/60 border border-sky-100/50 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-heading text-[10px] text-sky-400 uppercase tracking-wider font-semibold">Phòng tiệc</p>
                      <p className="font-body text-sm md:text-base text-text-primary font-medium">{VENUE.floor} — {VENUE.room}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-sky-50/60 border border-sky-100/50 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-heading text-[10px] text-sky-400 uppercase tracking-wider font-semibold">Địa chỉ</p>
                      <p className="font-body text-sm md:text-base text-text-primary font-medium">{VENUE.address}</p>
                    </div>
                  </div>
                </div>

                {/* Map button */}
                <a
                  href={VENUE.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-white font-body text-sm font-bold rounded-2xl relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #0284c7, #0ea5e9, #38bdf8)",
                    boxShadow: "0 8px 25px rgba(14,165,233,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  {/* Button shimmer */}
                  <div className="shimmer-sweep" />
                  {/* Shine top */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent rounded-t-2xl" />
                  <svg className="w-5 h-5 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span className="relative">Xem bản đồ</span>
                  <svg className="w-4 h-4 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
