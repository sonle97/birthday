import type { Variants, Transition, TargetAndTransition } from "framer-motion";

/* ===== Shared spring configs ===== */
export const smoothSpring: Transition = {
  type: "spring",
  stiffness: 60,
  damping: 15,
  mass: 0.8,
};

export const snappySpring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 14,
  mass: 0.5,
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 40,
  damping: 12,
  mass: 1,
};

/* ===== Reusable viewport config ===== */
export const viewport = { once: true, margin: "0px" } as const;

/* ===== Fade / slide variants ===== */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...smoothSpring, delay: i * 0.12 },
  }),
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...smoothSpring, delay: i * 0.12 },
  }),
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { ...smoothSpring, delay: i * 0.12 },
  }),
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { ...smoothSpring, delay: i * 0.12 },
  }),
};

/* ===== Scale variants ===== */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { ...snappySpring, delay: i * 0.12 },
  }),
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { ...snappySpring, delay: i * 0.1 },
  }),
};

/* ===== 3D card lift ===== */
export const cardLift: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: 8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { ...smoothSpring, delay: i * 0.15 },
  }),
};

/* ===== Stagger container ===== */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothSpring,
  },
};

/* ===== Floating / looping animations ===== */
export const floatY: TargetAndTransition = {
  y: [0, -14, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
};

export const floatSlow: TargetAndTransition = {
  y: [0, -8, 0],
  transition: {
    duration: 5.5,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
};

export const pulseGlow: TargetAndTransition = {
  scale: [1, 1.06, 1],
  boxShadow: [
    "0 0 0 0 rgba(56,189,248,0)",
    "0 0 30px 8px rgba(56,189,248,0.25)",
    "0 0 0 0 rgba(56,189,248,0)",
  ],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const morphBlob: TargetAndTransition = {
  borderRadius: [
    "60% 40% 30% 70% / 60% 30% 70% 40%",
    "30% 60% 70% 40% / 50% 60% 30% 60%",
    "50% 60% 30% 60% / 30% 60% 70% 40%",
    "60% 40% 60% 30% / 60% 40% 30% 70%",
    "60% 40% 30% 70% / 60% 30% 70% 40%",
  ],
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const shimmer: TargetAndTransition = {
  backgroundPosition: ["-200% 0", "200% 0"],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: "linear",
  },
};
