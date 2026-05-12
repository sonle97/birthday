"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const img1 = "/images/gapmat.jpg";
const img2 = "/images/henho.jpg";
const img3 = "/images/damhoi.jpg";
const img4 = "/images/damcuoi.jpg";
const img5 = "/images/mangthai.jpg";
const img6 = "/images/chaodoi.jpg";
const img7 = "/images/embe.jpg";
const img8 = "/images/daudoi.png";
const img9 = "/images/thoinoi.png";

/* Single bundle CSS — most reliable across all bundlers + mobile Safari */
import "swiper/swiper-bundle.css";

/* ── Story milestones ── */
const STORY_ITEMS = [
  {
    id: 1,
    title: "Lần đầu gặp gỡ",
    subtitle: "Nơi tình yêu bắt đầu",
    accent: "#fb7185",
    image: img1,
  },
  {
    id: 2,
    title: "Hẹn hò",
    subtitle: "Những ngày tháng ngọt ngào",
    accent: "#38bdf8",
    image: img2,
  },
  {
    id: 3,
    title: "Cầu hôn",
    subtitle: "Câu trả lời là Có!",
    accent: "#0284c7",
    image: img3,
  },
  {
    id: 4,
    title: "Ngày cưới",
    subtitle: "Hạnh phúc viên mãn",
    accent: "#7dd3fc",
    image: img4,
  },
  {
    id: 5,
    title: "Mang thai",
    subtitle: "Chờ đợi thiên thần nhỏ",
    accent: "#0ea5e9",
    image: img5,
  },
  {
    id: 6,
    title: "Chào đời",
    subtitle: "Món quà vô giá từ cuộc sống",
    accent: "#38bdf8",
    image: img6,
  },
  {
    id: 7,
    title: "Khoảnh khắc em bé",
    subtitle: "Những tháng ngày đầu đời đáng nhớ",
    accent: "#0284c7",
    image: img7,
  },
  {
    id: 8,
    title: "Những tháng ngày đầu đời",
    subtitle: "Từng bước lớn khôn của con yêu",
    accent: "#7dd3fc",
    image: img8,
  },
  {
    id: 9,
    title: "Thôi nôi",
    subtitle: "Mừng con tròn 1 tuổi!",
    accent: "#0284c7",
    image: img9,
  },
];

export default function LoveStoryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = STORY_ITEMS[activeIndex];

  return (
    <section className="relative py-14 md:py-18 px-4 bg-gradient-to-b from-bg-primary via-sky-50/30 to-bg-primary">
      {/* BG decorations */}
      <div className="absolute top-10 left-[-5%] w-60 h-60 bg-sky-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-[-5%] w-48 h-48 bg-sky-200/20 rounded-full blur-3xl" />

      {/* Header */}
      <div
        className="text-center mb-10 md:mb-14 max-w-lg mx-auto relative z-10"
        data-aos="fade-down"
      >
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
      <div
        className="text-center mb-6 relative z-10"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
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
                  {/* Image area as background */}
                  <div className="relative h-[200px] md:h-[240px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Bottom info */}
                  <div className="px-5 py-4 text-center">
                    <p className="font-heading text-sm font-bold text-text-primary">
                      {item.title}
                    </p>
                    <p className="font-body text-[11px] text-sky-500 mt-1">
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
