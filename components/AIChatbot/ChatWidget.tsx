"use client";

import { useState } from "react";
import { Bot, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-[5.25rem] right-4 z-[70] sm:bottom-[5.75rem] sm:right-6"
          >
            <ChatWindow onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={
          isOpen
            ? "Close Sundar Digital AI Assistant"
            : "Open Sundar Digital AI Assistant"
        }
        aria-expanded={isOpen}
        className="fixed bottom-[5.25rem] right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/25 transition-shadow hover:shadow-xl hover:shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:ring-offset-2 focus:ring-offset-slate-950 sm:bottom-[5.75rem] sm:right-6"
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Bot className="h-6 w-6" aria-hidden="true" />
        )}
      </motion.button>
    </>
  );
}