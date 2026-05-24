"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-accent-purple/20 blur-[100px] animate-float" />
      <motion.div
        className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-accent-cyan/15 blur-[110px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-accent-purple/10 blur-[90px]"
        animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 top-10 h-48 w-48 rounded-full bg-accent-cyan/10 blur-[80px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
