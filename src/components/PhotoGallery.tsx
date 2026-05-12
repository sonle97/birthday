"use client";

import { useState } from "react";

type Tape = "sky" | "rose" | "cyan" | "amber";

const GALLERY_ITEMS: {
  id: number;
  label: string;
  src: string;
  rotate: number;
  offsetY: number;
  tape: Tape;
  tapeAngle: number;
}[] = [
  {
    id: 1,
    label: "Công chúa nhỏ",
    src: "/images/moments/bao-ngoc-1tuoi.png",
    rotate: -3,
    offsetY: 0,
    tape: "rose",
    tapeAngle: -6,
  },
  {
    id: 2,
    label: "Phá bánh sinh nhật",
    src: "/images/moments/smash-cake.png",
    rotate: 2,
    offsetY: 36,
    tape: "sky",
    tapeAngle: 8,
  },
  {
    id: 3,
    label: "Happy Thôi nôi",
    src: "/images/moments/happy-thoinoi.png",
    rotate: -2,
    offsetY: 14,
    tape: "amber",
    tapeAngle: -4,
  },
  {
    id: 4,
    label: "Chân dung em bé",
    src: "/images/moments/chan-dung-be.png",
    rotate: 4,
    offsetY: 44,
    tape: "cyan",
    tapeAngle: 6,
  },
  {
    id: 5,
    label: "Dạo chơi vườn hoa",
    src: "/images/moments/vuon-hoa.png",
    rotate: -4,
    offsetY: 8,
    tape: "rose",
    tapeAngle: 10,
  },
  {
    id: 6,
    label: "Bé yêu đọc sách",
    src: "/images/moments/doc-sach.png",
    rotate: 3,
    offsetY: 28,
    tape: "sky",
    tapeAngle: -8,
  },
  {
    id: 7,
    label: "Bữa tiệc bóng hồng",
    src: "/images/moments/balloon-hong.png",
    rotate: -1,
    offsetY: 16,
    tape: "amber",
    tapeAngle: 4,
  },
  {
    id: 8,
    label: "Bảo Ngọc tròn 1",
    src: "/images/moments/anh_be.png",
    rotate: 3,
    offsetY: 40,
    tape: "cyan",
    tapeAngle: -6,
  },
  {
    id: 9,
    label: "Những ngày đầu đời",
    src: "/images/moments/daudoi.png",
    rotate: -3,
    offsetY: 4,
    tape: "rose",
    tapeAngle: 7,
  },
  {
    id: 10,
    label: "Thôi nôi đáng nhớ",
    src: "/images/moments/thoinoi.png",
    rotate: 2,
    offsetY: 24,
    tape: "sky",
    tapeAngle: -10,
  },
  {
    id: 11,
    label: "Dạo vườn hồng",
    src: "/images/moments/vuon-hong.png",
    rotate: -3,
    offsetY: 18,
    tape: "amber",
    tapeAngle: 5,
  },
  {
    id: 12,
    label: "Cùng bồ câu trắng",
    src: "/images/moments/bo-cau.png",
    rotate: 3,
    offsetY: 6,
    tape: "rose",
    tapeAngle: -7,
  },
];

const TAPE_COLORS: Record<Tape, string> = {
  sky: "bg-sky-200/75",
  rose: "bg-rose-200/75",
  cyan: "bg-cyan-200/75",
  amber: "bg-amber-200/75",
};

export default function PhotoGallery() {
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  return (
    <section className="relative py-14 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-white">
      {/* BG decoration */}
      <div className="absolute top-20 left-[-5%] w-72 h-72 bg-sky-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-16 right-[-5%] w-56 h-56 bg-sky-200/20 rounded-full blur-3xl" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #0ea5e9, transparent 70%)",
        }}
      />

      {/* Subtle paper-grid backdrop for scrapbook feel */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#0ea5e9 1px, transparent 1px), radial-gradient(#0ea5e9 1px, transparent 1px)",
          backgroundSize: "32px 32px, 32px 32px",
          backgroundPosition: "0 0, 16px 16px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-sky-300/50" />
            <svg
              className="w-4 h-4 text-sky-600/70"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-sky-300/50" />
          </div>
          <p className="font-script text-3xl md:text-4xl text-sky-600 mb-1">
            Những khoảnh khắc đáng nhớ
          </p>
          <p className="font-heading text-[10px] font-bold text-sky-600/70 uppercase tracking-[0.4em]">
            Photo Album
          </p>
          <p className="font-body text-xs md:text-sm text-sky-600/70 mt-3 max-w-md mx-auto italic">
            Bộ sưu tập của Bảo Ngọc — như ghim trên trang giấy ký ức
          </p>
        </div>

        {/* Polaroid scatter — không thẳng hàng cố ý */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 lg:gap-x-10 gap-y-4 md:gap-y-6 pb-12 md:pb-20">
          {GALLERY_ITEMS.map((item, idx) => {
            const showImage = !failed[item.id];
            return (
              <div
                key={item.id}
                className="group flex justify-center items-start"
                style={{ marginTop: `${item.offsetY}px` }}
                data-aos="fade-up"
                data-aos-delay={String(idx * 80)}
              >
                <div
                  className="relative cursor-pointer transition-transform duration-500 ease-out group-hover:!rotate-0 group-hover:scale-[1.06] group-hover:z-20"
                  style={{ transform: `rotate(${item.rotate}deg)` }}
                >
                  {/* Polaroid paper frame */}
                  <div className="relative bg-white p-2 pb-9 md:p-2.5 md:pb-12 rounded-[4px] shadow-[0_3px_10px_rgba(0,0,0,0.07),0_15px_35px_rgba(14,165,233,0.10)] group-hover:shadow-[0_8px_22px_rgba(0,0,0,0.12),0_30px_60px_rgba(14,165,233,0.22)] transition-shadow duration-500">
                    {/* Washi tape accent */}
                    <div
                      className={`absolute -top-2 left-1/2 w-14 md:w-16 h-4 md:h-5 ${TAPE_COLORS[item.tape]} opacity-85 pointer-events-none`}
                      style={{
                        transform: `translateX(-50%) rotate(${item.tapeAngle}deg)`,
                        boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                        clipPath:
                          "polygon(3% 18%, 97% 6%, 99% 82%, 1% 94%)",
                      }}
                    />
                    {/* Tape stripe pattern */}
                    <div
                      className="absolute -top-2 left-1/2 w-14 md:w-16 h-4 md:h-5 opacity-30 pointer-events-none mix-blend-multiply"
                      style={{
                        transform: `translateX(-50%) rotate(${item.tapeAngle}deg)`,
                        backgroundImage:
                          "repeating-linear-gradient(45deg, rgba(255,255,255,0.6) 0 2px, transparent 2px 6px)",
                        clipPath:
                          "polygon(3% 18%, 97% 6%, 99% 82%, 1% 94%)",
                      }}
                    />

                    {/* Photo */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 to-white">
                      {showImage ? (
                        <img
                          src={item.src}
                          alt={item.label}
                          loading="lazy"
                          onError={() =>
                            setFailed((f) => ({ ...f, [item.id]: true }))
                          }
                          className="block w-full aspect-[3/4] object-cover"
                        />
                      ) : (
                        <div className="aspect-[3/4] w-full bg-gradient-to-br from-sky-100/50 to-white flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-sky-300/50"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </div>
                      )}
                      {/* Subtle inner shadow for photo depth */}
                      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_22px_rgba(0,0,0,0.08)]" />
                    </div>

                    {/* Handwritten caption */}
                    <p className="absolute bottom-1.5 md:bottom-3 left-0 right-0 text-center font-script text-sm md:text-lg text-sky-700/80 leading-none px-2 truncate">
                      {item.label}
                    </p>

                    {/* Small index in corner */}
                    <span className="absolute top-1 left-2 font-heading text-[8px] md:text-[9px] tracking-wider text-sky-400/50 select-none">
                      №{String(item.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer accent */}
        <div
          className="flex items-center justify-center gap-2 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-sky-300/40" />
          <svg
            className="w-3 h-3 text-rose/60"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <p className="font-body text-[10px] md:text-xs text-sky-600/60 uppercase tracking-[0.3em]">
            {GALLERY_ITEMS.length} Khoảnh khắc
          </p>
          <svg
            className="w-3 h-3 text-rose/60"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-sky-300/40" />
        </div>
      </div>
    </section>
  );
}
