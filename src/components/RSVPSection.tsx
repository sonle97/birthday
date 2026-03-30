"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, cardLift, viewport, smoothSpring, snappySpring } from "@/lib/motion";
import FloralDivider from "./FloralDivider";

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
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 50%, #f0f9ff 100%)",
      }}
    >
      <div className="absolute top-20 left-[-5%] w-48 h-48 bg-sky-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-[-5%] w-64 h-64 bg-sky-100/40 rounded-full blur-3xl" />

      <div className="max-w-lg mx-auto text-center relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0}
        >
          <p className="font-script text-2xl md:text-3xl text-sky-500 mb-1">
            Xác nhận tham dự
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-2">
            XÁC NHẬN THAM DỰ
          </h3>
          <FloralDivider />
          <p className="font-body text-text-primary/70 mt-3 mb-8 leading-relaxed">
            Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một
            cách chu đáo nhất. Trân trọng!
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              variants={cardLift}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={1}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{ perspective: 1000 }}
            >
              <motion.form
                onSubmit={handleSubmit}
                className="glass-strong rounded-3xl shadow-3d-lg p-8 text-left"
                whileHover={{
                  rotateX: 1,
                  rotateY: -1,
                  boxShadow: "0 24px 48px rgba(14,165,233,0.15)",
                }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {/* Name */}
                <motion.div
                  className="mb-6"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  custom={0}
                >
                  <label className="block font-body text-text-primary text-sm font-medium mb-2">
                    Họ và tên <span className="text-rose">*</span>
                  </label>
                  <motion.input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập họ tên của bạn"
                    className="w-full px-5 py-3.5 bg-white/60 border-2 border-sky-200/50 rounded-2xl font-body text-text-primary placeholder-sky-300 focus:outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100 transition-all duration-300"
                    whileFocus={{ scale: 1.01, borderColor: "rgba(56,189,248,0.6)" }}
                    required
                  />
                </motion.div>

                {/* Attend */}
                <motion.div
                  className="mb-6"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  custom={1}
                >
                  <label className="block font-body text-text-primary text-sm font-medium mb-3">
                    Bạn có tham dự không? <span className="text-rose">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(["yes", "no"] as const).map((opt) => (
                      <motion.button
                        key={opt}
                        type="button"
                        onClick={() => setAttending(opt)}
                        className={`py-3.5 rounded-2xl font-body text-sm font-medium border-2 transition-colors ${
                          attending === opt
                            ? opt === "yes"
                              ? "border-sky-400 bg-sky-50 text-sky-600 shadow-glow-sky"
                              : "border-rose bg-rose-light/20 text-rose"
                            : "border-sky-200/50 bg-white/40 text-text-primary/60 hover:border-sky-300"
                        }`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        animate={
                          attending === opt ? { scale: 1.02 } : { scale: 1 }
                        }
                        transition={snappySpring}
                      >
                        {opt === "yes" ? "✓ Có, tôi sẽ đến" : "✗ Rất tiếc"}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Guests */}
                <AnimatePresence>
                  {attending === "yes" && (
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={smoothSpring}
                    >
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
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={!name || !attending || isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-sky-400 to-sky-600 text-white font-body font-bold text-base rounded-2xl shadow-glow-sky disabled:opacity-40 disabled:cursor-not-allowed"
                  whileHover={
                    name && attending && !isSubmitting
                      ? { scale: 1.03, y: -2 }
                      : {}
                  }
                  whileTap={
                    name && attending && !isSubmitting ? { scale: 0.97 } : {}
                  }
                  transition={snappySpring}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
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
                      </motion.svg>
                      Đang gửi...
                    </span>
                  ) : (
                    "Gửi xác nhận"
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              className="glass-strong rounded-3xl shadow-3d-lg p-8"
              initial={{ opacity: 0, scale: 0.7, rotateX: -20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={smoothSpring}
              style={{ perspective: 800 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center shadow-glow-sky"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ ...snappySpring, delay: 0.2 }}
              >
                <svg
                  className="w-10 h-10 text-sky-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />
                </svg>
              </motion.div>
              <h4 className="font-heading text-2xl font-bold text-text-primary mb-3">
                Cảm ơn bạn!
              </h4>
              <p className="font-body text-text-primary/70 leading-relaxed">
                {attending === "yes"
                  ? `Chúng tôi rất vui khi ${name} sẽ đến tham dự cùng ${guests} người. Hẹn gặp bạn tại buổi tiệc!`
                  : `Cảm ơn ${name} đã phản hồi. Chúng tôi rất tiếc khi bạn không thể tham dự.`}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
