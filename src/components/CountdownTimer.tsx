"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, viewport, snappySpring } from "@/lib/motion";
import { EVENT } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EVENT_DATE = new Date(EVENT.dateISO);

function getTimeLeft(): TimeLeft {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Digit({ value }: { value: number }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={display}
          className="font-heading text-3xl md:text-4xl font-bold text-gradient-sky"
          initial={{ y: 30, opacity: 0, rotateX: -45 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -30, opacity: 0, rotateX: 45 }}
          transition={snappySpring}
        >
          {display}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function TimeBlock({
  value,
  label,
  i,
}: {
  value: number;
  label: string;
  i: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center"
      variants={fadeUp}
      custom={i}
    >
      <motion.div
        className="w-[4.2rem] h-[4.2rem] md:w-[5.2rem] md:h-[5.2rem] glass-strong rounded-2xl flex items-center justify-center shadow-3d overflow-hidden"
        whileHover={{
          scale: 1.08,
          rotateY: 8,
          boxShadow: "0 12px 30px rgba(14,165,233,0.2)",
        }}
        transition={{ type: "spring", stiffness: 250 }}
        style={{ perspective: 600 }}
      >
        <Digit value={value} />
      </motion.div>
      <span className="font-body text-xs md:text-sm text-sky-500 mt-2 uppercase tracking-wider font-medium">
        {label}
      </span>
    </motion.div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  // Show placeholder until client hydrates
  const display = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const isPast =
    timeLeft !== null &&
    display.days + display.hours + display.minutes + display.seconds === 0;

  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-bg-primary to-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #0ea5e9 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        className="max-w-lg mx-auto text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.p
          className="font-script text-2xl md:text-3xl text-sky-500 mb-8"
          variants={fadeUp}
          custom={0}
        >
          {isPast ? "Sự kiện đã diễn ra" : "Đếm ngược đến ngày vui"}
        </motion.p>

        {isPast ? (
          <motion.div
            className="glass-strong rounded-3xl px-8 py-6 shadow-3d"
            variants={fadeUp}
            custom={1}
          >
            <p className="font-heading text-xl font-semibold text-text-primary">
              Cảm ơn tất cả Quý khách đã tham dự!
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="flex items-center justify-center gap-2 md:gap-4"
            variants={fadeUp}
            custom={1}
          >
            <TimeBlock value={display.days} label="Ngày" i={0} />
            <span className="font-heading text-2xl text-sky-300 mt-[-20px]">
              :
            </span>
            <TimeBlock value={display.hours} label="Giờ" i={1} />
            <span className="font-heading text-2xl text-sky-300 mt-[-20px]">
              :
            </span>
            <TimeBlock value={display.minutes} label="Phút" i={2} />
            <span className="font-heading text-2xl text-sky-300 mt-[-20px]">
              :
            </span>
            <TimeBlock value={display.seconds} label="Giây" i={3} />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
