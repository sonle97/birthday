"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

/* Single bundle CSS — most reliable across all bundlers + mobile Safari */
import "swiper/swiper-bundle.css";

/* ── Story milestones ── */
const STORY_ITEMS = [
  {
    id: 1,
    title: "Lần đầu gặp gỡ",
    subtitle: "Nơi tình yêu bắt đầu",
    icon: "heart",
    accent: "#fb7185",
  },
  {
    id: 2,
    title: "Hẹn hò",
    subtitle: "Những ngày tháng ngọt ngào",
    icon: "coffee",
    accent: "#38bdf8",
  },
  {
    id: 3,
    title: "Cầu hôn",
    subtitle: "Câu trả lời là Có!",
    icon: "ring",
    accent: "#0284c7",
  },
  {
    id: 4,
    title: "Ngày cưới",
    subtitle: "Hạnh phúc viên mãn",
    icon: "wedding",
    accent: "#7dd3fc",
  },
  {
    id: 5,
    title: "Mang thai",
    subtitle: "Chờ đợi thiên thần nhỏ",
    icon: "baby",
    accent: "#0ea5e9",
  },
  {
    id: 6,
    title: "Chào đời",
    subtitle: "Món quà vô giá từ cuộc sống",
    icon: "star",
    accent: "#38bdf8",
  },
  {
    id: 7,
    title: "Thôi nôi",
    subtitle: "Mừng con tròn 1 tuổi!",
    icon: "cake",
    accent: "#0284c7",
  },
];

/* ── Icons ── */
const Icons: Record<string, React.ReactNode> = {
  heart: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M2 21h18v-2H2M20 8h-2V5H4v3H2v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1h4c1.1 0 2-.9 2-2V9c0-.55-.45-1-1-1zm-6 5H4V8h10v5zm5-3h-3V9h3v1z" />
    </svg>
  ),
  ring: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L8 6h3v4.26C8.55 11.13 7 13.4 7 16c0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.6-1.55-4.87-4-5.74V6h3l-4-4zm0 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    </svg>
  ),
  wedding: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25 -.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z" />
    </svg>
  ),
  baby: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ),
  cake: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12c.01-1.66-1.33-3-2.99-3z" />
    </svg>
  ),
};

export default function LoveStoryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = STORY_ITEMS[activeIndex];

  return (
    <section className="relative py-14 md:py-18 px-4 bg-gradient-to-b from-bg-primary via-sky-50/30 to-bg-primary">
      {/* BG decorations */}
      <div className="absolute top-10 left-[-5%] w-60 h-60 bg-sky-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-[-5%] w-48 h-48 bg-sky-200/20 rounded-full blur-3xl" />

      {/* Header */}
      <div className="text-center mb-10 md:mb-14 max-w-lg mx-auto relative z-10" data-aos="fade-down">
        <div className="inline-flex items-center gap-2 mb-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-sky-300/50" />
          <svg
            className="w-4 h-4 text-rose"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-sky-300/50" />
        </div>
        <p className="font-script text-3xl md:text-4xl text-sky-600 mb-1">
          Hành trình yêu thương
        </p>
        <p className="font-heading text-[10px] font-bold text-sky-600/70 uppercase tracking-[0.4em]">
          Our Love Story
        </p>
      </div>

      {/* Active slide info */}
      <div className="text-center mb-6 relative z-10" data-aos="zoom-in" data-aos-delay="200">
        <span
          className="inline-block px-3 py-1 rounded-full text-white font-heading text-[10px] font-bold uppercase tracking-widest mb-2"
          style={{ backgroundColor: activeItem.accent }}
        >
          {activeIndex + 1} / {STORY_ITEMS.length}
        </span>
        <h4 className="font-heading text-xl md:text-2xl font-extrabold text-text-primary">
          {activeItem.title}
        </h4>
        <p className="font-body text-sm text-sky-600 mt-1">
          {activeItem.subtitle}
        </p>
      </div>

      {/* Swiper */}
      <div className="relative z-10" data-aos="fade-up" data-aos-delay="300">
        <Swiper
          modules={[EffectCoverflow, Autoplay, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          rewind
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 4,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true, el: ".story-pagination" }}
          touchEventsTarget="wrapper"
          touchRatio={1.2}
          onSlideChange={(swiper: SwiperType) =>
            setActiveIndex(swiper.realIndex)
          }
          style={{ overflow: "hidden", paddingBottom: 16 }}
        >
          {STORY_ITEMS.map((item) => (
            <SwiperSlide key={item.id} style={{ width: 260, maxWidth: "80vw" }}>
              <div
                className="relative rounded-[24px] overflow-hidden"
                style={{ boxShadow: `0 8px 30px ${item.accent}15` }}
              >
                {/* Border */}
                <div
                  className="absolute inset-0 rounded-[24px]"
                  style={{
                    background: `linear-gradient(135deg, ${item.accent}30, transparent, ${item.accent}15)`,
                  }}
                />

                <div className="relative m-[1.5px] rounded-[23px] bg-white overflow-hidden">
                  {/* Image area */}
                  <div
                    className="relative h-[200px] md:h-[240px] flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(224,242,254,0.8), rgba(240,249,255,0.6), white)",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: `radial-gradient(circle at 30% 40%, ${item.accent} 1px, transparent 1px)`,
                        backgroundSize: "24px 24px",
                      }}
                    />

                    <div className="text-center relative z-10">
                      <div
                        className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-2 opacity-30"
                        style={{ color: item.accent }}
                      >
                        {Icons[item.icon]}
                      </div>
                      <div className="px-3 py-1 rounded-full bg-white/60 border border-white/50 inline-block">
                        <p
                          className="font-body text-[10px] font-medium tracking-wide"
                          style={{ color: item.accent }}
                        >
                          Thêm ảnh
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom info */}
                  <div className="px-5 py-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: `${item.accent}15`,
                          color: item.accent,
                        }}
                      >
                        <div className="w-2.5 h-2.5">{Icons[item.icon]}</div>
                      </div>
                      <p className="font-heading text-sm font-bold text-text-primary">
                        {item.title}
                      </p>
                    </div>
                    <p className="font-body text-[11px] text-sky-500">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External pagination — outside Swiper overflow area */}
        <div className="story-pagination flex items-center justify-center gap-1.5 mt-6" />
      </div>
    </section>
  );
}
