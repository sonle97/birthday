"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport, smoothSpring } from "@/lib/motion";

const GALLERY_ITEMS = [
  { id: 1, label: "Nụ cười đầu tiên",  icon: "smile",  span: "col-span-2 row-span-2", aspect: "aspect-square",         gradient: "from-sky-200/60 via-sky-100/40 to-white" },
  { id: 2, label: "Bước chân nhỏ",     icon: "foot",   span: "",                       aspect: "aspect-[3/4]",           gradient: "from-cyan-100/50 via-sky-50 to-white" },
  { id: 3, label: "Đôi mắt trong veo", icon: "eye",    span: "",                       aspect: "aspect-square",          gradient: "from-violet-100/30 via-sky-50 to-white" },
  { id: 4, label: "Giấc ngủ bình yên", icon: "moon",   span: "",                       aspect: "aspect-square",          gradient: "from-indigo-100/30 via-sky-50 to-white" },
  { id: 5, label: "Khoảnh khắc vui",   icon: "star",   span: "col-span-2",             aspect: "aspect-[2/1]",           gradient: "from-sky-100/50 via-cyan-50 to-white" },
  { id: 6, label: "Tình yêu gia đình", icon: "heart",  span: "",                       aspect: "aspect-[3/4]",           gradient: "from-rose-100/30 via-sky-50 to-white" },
];

const icons: Record<string, React.ReactNode> = {
  smile: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
    </svg>
  ),
  foot: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2C9.24 2 7 4.24 7 7c0 2.85 2.92 7.21 5 9.88 2.11-2.69 5-7 5-9.88 0-2.76-2.24-5-5-5zm0 7.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 4.5 12 4.5s2.5 1.12 2.5 2.5S13.38 9.5 12 9.5zM5 20h14v2H5z" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12.01 12c0-3.57 2.2-6.62 5.31-7.87.89-.36.75-1.69-.19-1.9-1.1-.24-2.27-.18-3.37.21C10.39 3.83 8 7.26 8 11.22c0 4.97 4.02 9 8.99 9 1.61 0 3.11-.46 4.4-1.24.78-.46.68-1.65-.22-1.87C17.14 16.6 12.01 14.78 12.01 12z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...smoothSpring, delay: 0.15 + i * 0.1 },
  }),
};

export default function PhotoGallery() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-white">
      {/* BG decoration */}
      <div className="absolute top-20 left-[-5%] w-72 h-72 bg-sky-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-16 right-[-5%] w-56 h-56 bg-violet-100/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #0ea5e9, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-sky-300/50" />
            <svg className="w-4 h-4 text-sky-400/50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-sky-300/50" />
          </div>
          <p className="font-script text-3xl md:text-4xl text-sky-500 mb-1">
            Những khoảnh khắc đáng nhớ
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
            Album ảnh bé yêu
          </h3>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-auto">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${item.span} group`}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              custom={index}
              style={{ perspective: 800 }}
            >
              <motion.div
                className={`relative ${item.aspect} w-full rounded-[20px] md:rounded-[24px] overflow-hidden cursor-pointer`}
                style={{
                  boxShadow: "0 2px 8px rgba(14,165,233,0.08), 0 8px 24px rgba(14,165,233,0.06)",
                }}
                whileHover={{
                  scale: 1.03,
                  rotateY: 3,
                  rotateX: -2,
                  boxShadow: "0 16px 40px rgba(14,165,233,0.18), 0 0 0 1px rgba(14,165,233,0.08)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: "radial-gradient(circle at 25% 35%, rgba(14,165,233,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 65%, rgba(56,189,248,0.3) 0%, transparent 50%)",
                }} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-500">
                  {/* Icon */}
                  <motion.div
                    className="w-10 h-10 md:w-14 md:h-14 text-sky-300/50 group-hover:text-sky-400/70 transition-colors duration-300 mb-2"
                    initial={false}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {icons[item.icon]}
                  </motion.div>

                  {/* Label pill */}
                  <div className="px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-white/40 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white/70">
                    <p className="font-body text-[10px] md:text-xs text-sky-600 font-medium tracking-wide">
                      {item.label}
                    </p>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sky-400/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner number badge */}
                <div className="absolute top-3 right-3 w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
                  <span className="font-heading text-[10px] font-bold text-sky-500">{item.id}</span>
                </div>

                {/* Inner border on hover */}
                <div className="absolute inset-2 md:inset-3 rounded-[14px] md:rounded-[18px] border border-white/0 group-hover:border-white/40 transition-all duration-500" />

                {/* Bottom shine line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom caption */}
        <motion.p
          className="text-center mt-8 font-body text-sm text-sky-400/50 italic"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={4}
        >
          Thêm ảnh vào thư mục public/images để hiển thị
        </motion.p>
      </div>
    </section>
  );
}
