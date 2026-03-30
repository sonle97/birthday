"use client";

import { motion } from "framer-motion";
import { scaleUp, viewport } from "@/lib/motion";

export default function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center justify-center py-4 ${className}`}
      variants={scaleUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div
        className="h-px w-16 bg-gradient-to-r from-transparent via-sky-300 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <div className="mx-4 relative">
        <motion.div
          className="w-3 h-3 rounded-full bg-gradient-to-br from-sky-300 to-sky-500"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", type: "tween" }}
        />
      </div>
      <motion.div
        className="w-8 h-8 relative"
        animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", type: "tween" }}
      >
        <svg viewBox="0 0 40 40" className="w-full h-full text-sky-400">
          <path
            d="M20 4 L23 16 L36 14 L26 22 L32 34 L20 27 L8 34 L14 22 L4 14 L17 16 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.6" />
        </svg>
      </motion.div>
      <div className="mx-4 relative">
        <motion.div
          className="w-3 h-3 rounded-full bg-gradient-to-br from-sky-300 to-sky-500"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5, type: "tween" }}
        />
      </div>
      <motion.div
        className="h-px w-16 bg-gradient-to-r from-transparent via-sky-300 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>
  );
}
