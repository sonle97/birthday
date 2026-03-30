"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp, viewport, smoothSpring } from "@/lib/motion";

interface ParentProps {
  role: "father" | "mother";
  title: string;
  message: string;
}

export default function ParentSection({ role, title, message }: ParentProps) {
  const isFather = role === "father";
  const photoVariant = isFather ? fadeLeft : fadeRight;

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto">
      <div
        className={`flex flex-col items-center gap-8 ${
          isFather ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Photo */}
        <motion.div
          className="flex-shrink-0 relative group"
          variants={photoVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={0}
          whileHover={{ scale: 1.05, rotateY: isFather ? 6 : -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          style={{ perspective: 800 }}
        >
          {/* Glow */}
          <motion.div
            className={`absolute inset-[-6px] rounded-3xl blur-lg ${
              isFather
                ? "bg-gradient-to-br from-sky-300 to-sky-500"
                : "bg-gradient-to-br from-rose to-rose-light"
            }`}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Card */}
          <div className="relative w-44 h-52 md:w-52 md:h-60 rounded-3xl overflow-hidden border-2 border-white/50 shadow-3d-lg">
            <div
              className={`w-full h-full flex flex-col items-center justify-center ${
                isFather
                  ? "bg-gradient-to-br from-sky-50 via-sky-100 to-sky-50"
                  : "bg-gradient-to-br from-rose-light/30 via-pink-50 to-rose-light/20"
              }`}
            >
              <svg
                className={`w-16 h-16 ${isFather ? "text-sky-300" : "text-rose/40"}`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <p className={`font-body text-sm mt-2 ${isFather ? "text-sky-400" : "text-rose/60"}`}>
                Ảnh {title}
              </p>
            </div>
          </div>

          {/* Badge */}
          <motion.div
            className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-heading text-sm font-semibold text-white shadow-lg ${
              isFather
                ? "bg-gradient-to-r from-sky-400 to-sky-600"
                : "bg-gradient-to-r from-rose to-pink-400"
            }`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={viewport}
            transition={{ ...smoothSpring, delay: 0.3 }}
          >
            {title}
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className={`text-center flex-1 ${isFather ? "md:text-left" : "md:text-right"}`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          custom={1}
        >
          <p className="font-script text-2xl md:text-3xl text-sky-500 mb-3">
            Lời của {title}
          </p>

          <div
            className={`w-12 h-0.5 mb-4 mx-auto ${
              isFather ? "md:mx-0" : "md:ml-auto md:mr-0"
            } ${
              isFather
                ? "bg-gradient-to-r from-sky-400 to-transparent"
                : "bg-gradient-to-l from-rose to-transparent"
            }`}
          />

          <motion.div
            className="glass-strong rounded-2xl p-6 shadow-3d"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 16px 40px rgba(14,165,233,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <p className="font-body text-lg text-text-primary/80 leading-relaxed italic">
              &ldquo;{message}&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
