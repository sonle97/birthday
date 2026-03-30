import { EVENT } from "@/lib/constants";

const DAYS_OF_WEEK = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
const CAL_START = EVENT.calendarStartDay;
const CAL_DAYS = EVENT.calendarTotalDays;
const HIGHLIGHT_DAY = EVENT.day;

export default function CalendarSection() {
  const blanks = Array.from({ length: CAL_START }, (_, i) => i);
  const days = Array.from({ length: CAL_DAYS }, (_, i) => i + 1);

  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-gradient-to-b from-white via-bg-primary to-white">
      <div className="absolute top-0 right-[-5%] w-72 h-72 bg-sky-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-[-5%] w-56 h-56 bg-violet-100/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #0ea5e9, transparent 70%)" }} />

      <div className="max-w-md mx-auto text-center relative z-10">
        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-sky-300/50" />
            <svg className="w-4 h-4 text-sky-400/50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
            </svg>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-sky-300/50" />
          </div>
          <p className="font-script text-3xl md:text-4xl text-sky-500 mb-1">
            Sự kiện quan trọng
          </p>
          <p className="font-heading text-[10px] font-bold text-sky-400/50 uppercase tracking-[0.4em]">
            Mark Your Calendar
          </p>
        </div>

        {/* Calendar card */}
        <div className="mt-10">
          <div className="relative rounded-[32px] p-[1.5px] save-date-border overflow-hidden">
            <div className="relative rounded-[31px] bg-white/90 backdrop-blur-2xl overflow-hidden">
              <div className="shimmer-sweep" />

              {/* Month header strip */}
              <div className="relative px-6 md:px-8 pt-5 pb-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-50/80 via-sky-100/40 to-sky-50/80" />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center shadow-sm">
                      <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-heading text-base md:text-lg font-bold text-text-primary leading-tight">
                        {EVENT.monthNameEn} {EVENT.year}
                      </p>
                      <p className="font-body text-[10px] text-sky-400 uppercase tracking-wider">
                        {EVENT.monthName}
                      </p>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 text-white font-heading text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {EVENT.dayOfWeekShort} · {EVENT.day}
                  </div>
                </div>
              </div>

              {/* Calendar body */}
              <div className="px-4 md:px-6 pb-6 pt-2">
                {/* Day headers */}
                <div className="grid grid-cols-7 gap-0.5 mb-1">
                  {DAYS_OF_WEEK.map((day) => (
                    <div
                      key={day}
                      className="font-heading text-[10px] font-bold text-sky-400/70 uppercase py-2 text-center"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Day grid */}
                <div className="grid grid-cols-7 gap-0.5">
                  {blanks.map((i) => (
                    <div key={`b-${i}`} className="py-2.5" />
                  ))}
                  {days.map((day) => (
                    <div
                      key={day}
                      className={`relative py-2 font-body text-sm rounded-xl cursor-default transition-colors duration-200 ${
                        day === HIGHLIGHT_DAY
                          ? "text-white font-bold text-base z-10"
                          : "text-text-primary/60 hover:bg-sky-50 hover:text-sky-600"
                      }`}
                    >
                      {day === HIGHLIGHT_DAY ? (
                        <>
                          {/* Highlight circle */}
                          <div
                            className="absolute inset-0.5 rounded-xl"
                            style={{
                              background: "linear-gradient(145deg, #0284c7, #0ea5e9, #38bdf8)",
                              boxShadow: "0 4px 15px rgba(14,165,233,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                            }}
                          />
                          {/* Shine */}
                          <div className="absolute top-0.5 left-0.5 right-0.5 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl" />
                          <span className="relative z-10 font-heading font-extrabold">{day}</span>
                        </>
                      ) : (
                        day
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Date display card */}
        <div className="mt-10">
          <div className="relative rounded-[24px] p-[1.5px] save-date-border overflow-hidden inline-block">
            <div className="relative rounded-[23px] bg-white/90 backdrop-blur-2xl overflow-hidden">
              <div className="shimmer-sweep" />

              <div className="relative flex items-center">
                {/* Left accent — day of week */}
                <div className="flex flex-col items-center justify-center px-3 md:px-5 py-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center shadow-sm mb-1.5">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="font-heading text-[9px] font-bold text-sky-400 uppercase tracking-wider">{EVENT.dayOfWeek}</p>
                </div>

                {/* Divider */}
                <div className="w-px self-stretch bg-gradient-to-b from-transparent via-sky-200/50 to-transparent" />

                {/* Center — date numbers */}
                <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-7 py-4">
                  {/* Day */}
                  <div className="text-center">
                    <p className="font-heading text-[9px] font-bold text-sky-400/60 uppercase tracking-wider mb-0.5">Ngày</p>
                    <div className="relative">
                      <div className="absolute inset-[-3px] rounded-xl bg-sky-400/10 blur-sm" />
                      <div
                        className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center overflow-hidden"
                        style={{
                          background: "linear-gradient(145deg, #0284c7, #0ea5e9, #38bdf8)",
                          boxShadow: "0 4px 12px rgba(14,165,233,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                        }}
                      >
                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl" />
                        <span className="relative font-heading text-2xl md:text-3xl font-black text-white" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
                          {EVENT.day}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dot separator */}
                  <div className="flex flex-col items-center gap-1 mx-0.5">
                    <div className="w-1 h-1 rounded-full bg-sky-300/50" />
                    <div className="w-1 h-1 rounded-full bg-sky-400/40" />
                    <div className="w-1 h-1 rounded-full bg-sky-300/50" />
                  </div>

                  {/* Month */}
                  <div className="text-center">
                    <p className="font-heading text-[9px] font-bold text-sky-400/60 uppercase tracking-wider mb-0.5">Tháng</p>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-sky-50/80 border border-sky-100/60 flex items-center justify-center">
                      <span className="font-heading text-2xl md:text-3xl font-extrabold text-sky-600">
                        {String(EVENT.month).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Dot separator */}
                  <div className="flex flex-col items-center gap-1 mx-0.5">
                    <div className="w-1 h-1 rounded-full bg-sky-300/50" />
                    <div className="w-1 h-1 rounded-full bg-sky-400/40" />
                    <div className="w-1 h-1 rounded-full bg-sky-300/50" />
                  </div>

                  {/* Year */}
                  <div className="text-center">
                    <p className="font-heading text-[9px] font-bold text-sky-400/60 uppercase tracking-wider mb-0.5">Năm</p>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-sky-50/80 border border-sky-100/60 flex items-center justify-center">
                      <span className="font-heading text-xl md:text-2xl font-extrabold text-text-primary">
                        {EVENT.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider (hidden on small screens with the right accent) */}
                <div className="hidden md:block w-px self-stretch bg-gradient-to-b from-transparent via-sky-200/50 to-transparent" />

                {/* Right accent — month name (hidden on small screens) */}
                <div className="hidden md:flex flex-col items-center justify-center px-5 py-4">
                  <p className="font-script text-xl text-sky-500 leading-tight">{EVENT.monthNameEn}</p>
                  <p className="font-heading text-[9px] font-bold text-sky-400/50 uppercase tracking-wider mt-0.5">{EVENT.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
