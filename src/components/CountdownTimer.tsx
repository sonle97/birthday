"use client";

import { useEffect, useState, useRef } from "react";
import { EVENT } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EVENT_MS = new Date(EVENT.dateISO).getTime();

function getTimeLeft(): TimeLeft {
  const diff = EVENT_MS - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Digit({ value }: { value: number }) {
  return (
    <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
      <span
        suppressHydrationWarning
        className="font-heading text-3xl md:text-4xl font-bold text-sky-600"
      >
        {String(value).padStart(2, "0")}
      </span>
    </div>
  );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[4.2rem] h-[4.2rem] md:w-[5.2rem] md:h-[5.2rem] glass-strong rounded-2xl flex items-center justify-center shadow-3d overflow-hidden">
        <Digit value={value} />
      </div>
      <span className="font-body text-xs md:text-sm text-sky-500 mt-2 uppercase tracking-wider font-medium">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Sync immediately on mount
    setTimeLeft(getTimeLeft());

    intervalRef.current = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        setTimeLeft(getTimeLeft());
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const isPast =
    timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds === 0;

  return (
    <section className="relative py-10 px-4 bg-gradient-to-b from-bg-primary to-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #0ea5e9 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-lg mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-sky-300/50" />
          <svg className="w-4 h-4 text-sky-600/70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-sky-300/50" />
        </div>
        <p className="font-script text-3xl md:text-4xl text-sky-600 mb-1" data-aos="fade-down">
          {isPast ? "Sự kiện đã diễn ra" : "Đếm ngược đến ngày vui"}
        </p>
        <p className="font-heading text-[10px] font-bold text-sky-600/70 uppercase tracking-[0.4em] mb-8" data-aos="fade-down" data-aos-delay="100">
          {isPast ? "Event Completed" : "Countdown"}
        </p>

        {isPast ? (
          <div className="glass-strong rounded-3xl px-8 py-6 shadow-3d" data-aos="flip-up" data-aos-delay="200">
            <p className="font-heading text-xl font-semibold text-text-primary">
              Cảm ơn tất cả Quý khách đã tham dự!
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 md:gap-4" data-aos="flip-up" data-aos-delay="200">
            <TimeBlock value={timeLeft.days} label="Ngày" />
            <span className="font-heading text-2xl text-sky-300 mt-[-20px]">:</span>
            <TimeBlock value={timeLeft.hours} label="Giờ" />
            <span className="font-heading text-2xl text-sky-300 mt-[-20px]">:</span>
            <TimeBlock value={timeLeft.minutes} label="Phút" />
            <span className="font-heading text-2xl text-sky-300 mt-[-20px]">:</span>
            <TimeBlock value={timeLeft.seconds} label="Giây" />
          </div>
        )}
      </div>
    </section>
  );
}
