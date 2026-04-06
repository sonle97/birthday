"use client";

import { useState, FormEvent } from "react";

export default function RSVPSection() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [guests, setGuests] = useState("1");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !attending) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      className="relative py-14 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 50%, #f0f9ff 100%)",
      }}
    >
      <div className="absolute top-20 left-[-5%] w-48 h-48 bg-sky-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-[-5%] w-64 h-64 bg-sky-100/40 rounded-full blur-3xl" />

      <div className="max-w-lg mx-auto text-center relative z-10">
        <div data-aos="fade-down">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-sky-300/50" />
            <svg className="w-4 h-4 text-sky-600/70" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" />
            </svg>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-sky-300/50" />
          </div>
          <p className="font-script text-3xl md:text-4xl text-sky-600 mb-1">
            Xác nhận tham dự
          </p>
          <p className="font-heading text-[10px] font-bold text-sky-600/70 uppercase tracking-[0.4em] mb-4">
            RSVP
          </p>
          <p className="font-body text-text-primary/85 mb-8 leading-relaxed max-w-sm mx-auto">
            Vui lòng xác nhận sự có mặt của bạn để gia đình chuẩn bị đón tiếp chu đáo nhất
          </p>
        </div>

        {!submitted ? (
          <div data-aos="fade-up" data-aos-delay="200" style={{ perspective: 1000 }}>
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-3xl shadow-3d-lg p-8 text-left"
            >
              {/* Name */}
              <div className="mb-6">
                <label className="block font-body text-text-primary text-sm font-medium mb-2">
                  Họ và tên <span className="text-sky-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập họ tên của bạn"
                  className="w-full px-5 py-3.5 bg-white/60 border-2 border-sky-200/50 rounded-2xl font-body text-text-primary placeholder-sky-300 focus:outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100 transition-all duration-300"
                  required
                />
              </div>

              {/* Attend */}
              <div className="mb-6">
                <label className="block font-body text-text-primary text-sm font-medium mb-3">
                  Bạn có tham dự không? <span className="text-sky-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(["yes", "no"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setAttending(opt)}
                      className={`py-3.5 rounded-2xl font-body text-sm font-medium border-2 transition-colors ${
                        attending === opt
                          ? opt === "yes"
                            ? "border-sky-400 bg-sky-50 text-sky-600 shadow-glow-sky"
                            : "border-sky-300 bg-sky-50/50 text-sky-600"
                          : "border-sky-200/50 bg-white/40 text-text-primary/75 hover:border-sky-300"
                      }`}
                    >
                      {opt === "yes" ? "✓ Có, tôi sẽ đến" : "✗ Rất tiếc"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guests */}
              {attending === "yes" && (
                <div className="mb-6">
                  <label className="block font-body text-text-primary text-sm font-medium mb-2">
                    Số người tham dự
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-5 py-3.5 bg-white/60 border-2 border-sky-200/50 rounded-2xl font-body text-text-primary focus:outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100 transition-all"
                  >
                    {["1", "2", "3", "4", "5+"].map((v) => (
                      <option key={v} value={v}>
                        {v} người
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={!name || !attending || isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-sky-400 to-sky-600 text-white font-body font-bold text-base rounded-2xl shadow-glow-sky disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Đang gửi...
                  </span>
                ) : (
                  "Gửi xác nhận"
                )}
              </button>
            </form>
          </div>
        ) : (
          <div
            className="glass-strong rounded-3xl shadow-3d-lg p-8"
            data-aos="zoom-in" data-aos-delay="200"
            style={{ perspective: 800 }}
          >
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center shadow-glow-sky">
              <svg
                className="w-10 h-10 text-sky-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h4 className="font-heading text-2xl font-bold text-text-primary mb-3">
              Cảm ơn bạn!
            </h4>
            <p className="font-body text-text-primary/85 leading-relaxed">
              {attending === "yes"
                ? `Chúng tôi rất vui khi ${name} sẽ đến tham dự cùng ${guests} người. Hẹn gặp bạn tại buổi tiệc!`
                : `Cảm ơn ${name} đã phản hồi. Chúng tôi rất tiếc khi bạn không thể tham dự.`}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
