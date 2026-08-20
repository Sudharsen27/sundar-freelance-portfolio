"use client";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import type { Message } from "./types";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

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

        <div
          className={`rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
            isUser
              ? "rounded-br-md bg-gradient-to-r from-violet-500 to-cyan-500 text-white"
              : "rounded-bl-md border border-white/10 bg-white/[0.06] text-slate-200"
          }`}
        >
          {message.content}
        </div>
      </div>
    </motion.div>
  );
}