"use client";

import { motion } from "framer-motion";
import { Bot, User, ArrowRight } from "lucide-react";
import type { Message } from "./types";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  const handleStartEnquiry = () => {
    window.dispatchEvent(
      new CustomEvent("sundar:start-project-enquiry", {
        detail: {
          leadIntent: message.leadIntent,
        },
      })
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex w-full ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-[85%] items-end gap-2 ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}
        <div
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
            isUser
              ? "bg-gradient-to-br from-violet-500 to-cyan-500"
              : "border border-white/10 bg-white/[0.06]"
          }`}
          aria-hidden="true"
        >
          {isUser ? (
            <User className="h-3.5 w-3.5 text-white" />
          ) : (
            <Bot className="h-3.5 w-3.5 text-cyan-300" />
          )}
        </div>

        {/* Message + Lead CTA */}
        <div className="flex flex-col gap-2">
          {/* Message */}
          <div
            className={`rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
              isUser
                ? "rounded-br-md bg-gradient-to-r from-violet-500 to-cyan-500 text-white"
                : "rounded-bl-md border border-white/10 bg-white/[0.06] text-slate-200"
            }`}
          >
            {message.content}
          </div>

          {/* Lead CTA */}
          {!isUser && message.isLead && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-3"
            >
              <p className="mb-2 text-xs leading-5 text-slate-300">
                Interested in starting your project?
              </p>

              <button
                type="button"
                onClick={handleStartEnquiry}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/10 transition hover:scale-[1.01] hover:shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                Start Project Enquiry

                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}