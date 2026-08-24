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

      <div className="group fixed bottom-[5.25rem] right-4 z-[60] h-14 w-14 sm:bottom-[5.75rem] sm:right-6">
        <span
          aria-hidden="true"
          className="ai-pulse-ring pointer-events-none absolute inset-0 z-0 rounded-full border border-cyan-300/60"
        />
        <span
          aria-hidden="true"
          className="ai-pulse-ring ai-pulse-ring-delayed pointer-events-none absolute inset-0 z-0 rounded-full border border-violet-300/55"
        />
        <span className="pointer-events-none absolute right-full top-1/2 z-20 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-slate-950/85 px-3 py-2 text-xs font-medium text-slate-100 opacity-0 shadow-lg shadow-slate-950/30 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 sm:block">
          Ask Sundar Digital
        </span>
        <motion.button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          aria-label={
            isOpen
              ? "Close Sundar Digital AI Assistant"
              : "Open Sundar Digital AI Assistant"
          }
          aria-expanded={isOpen}
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 text-white shadow-[0_0_24px_rgba(99,102,241,0.32)] transition-[box-shadow,background-image] duration-300 hover:from-violet-400 hover:via-blue-400 hover:to-cyan-300 hover:shadow-[0_0_32px_rgba(34,211,238,0.42)] focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-[0.97]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-px rounded-full bg-white/[0.12] opacity-70"
          />
          {isOpen ? (
            <X className="relative z-10 h-7 w-7" aria-hidden="true" />
          ) : (
            <Bot className="relative z-10 h-7 w-7" aria-hidden="true" />
          )}
        </motion.button>
        <style jsx>{`
          .ai-pulse-ring {
            animation: aiPulseRing 4s ease-out infinite;
            border-color: rgba(103, 232, 249, 0.7);
            opacity: 0;
            transform: scale(1);
            transform-origin: center;
            will-change: transform, opacity;
          }

          .ai-pulse-ring-delayed {
            animation-delay: 1.2s;
            border-color: rgba(196, 181, 253, 0.62);
          }

          @keyframes aiPulseRing {
            0% {
              opacity: 0.68;
              transform: scale(1);
            }

            22% {
              opacity: 0.52;
              transform: scale(1.28);
            }

            52% {
              opacity: 0.18;
              transform: scale(1.68);
            }

            68%,
            100% {
              opacity: 0;
              transform: scale(1.95);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .ai-pulse-ring {
              animation: none;
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
}