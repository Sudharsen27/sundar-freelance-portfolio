"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, X } from "lucide-react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";
import type { Message } from "./types";

interface ChatWindowProps {
  onClose: () => void;
}

const suggestedQuestions = [
  "What services do you offer?",
  "Show me your projects",
  "I need a website",
  "I need custom software",
  "I need a CRM",
  "Tell me about your Restaurant ERP",
  "Do you provide AWS and DevOps services?",
  "How can I contact Sundar Digital?",
];

const welcomeMessage: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm the Sundar Digital AI Assistant. How can I help you today?",
};

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const sendMessage = async (content: string) => {
    const trimmedContent = content.trim();

    if (!trimmedContent || isTyping) {
      return;
    }

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      role: "user",
      content: trimmedContent,
    };

    setMessages((current) => [...current, userMessage]);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedContent,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Unable to get a response from the AI assistant."
        );
      }

      const assistantMessage: Message = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content:
          data?.message ||
          "Sorry, I couldn't generate a response right now. Please try again.",
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch (error) {
      console.error("Chat request error:", error);

      const errorMessage: Message = {
        id: `${Date.now()}-assistant-error`,
        role: "assistant",
        content:
          "Sorry, I'm having trouble responding right now. Please try again in a moment.",
      };

      setMessages((current) => [...current, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div
      className="flex h-[min(600px,calc(100dvh-8rem))] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-2xl shadow-black/40 backdrop-blur-xl"
      role="dialog"
      aria-label="Sundar Digital AI Assistant"
      aria-modal="false"
    >
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/20"
            aria-hidden="true"
          >
            <Bot className="h-5 w-5 text-white" />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">
              Sundar Digital AI
            </h2>

            <div className="mt-0.5 flex items-center gap-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                aria-hidden="true"
              />

              <span className="text-xs text-slate-400">
                AI Assistant
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div
        className="min-h-0 flex-1 space-y-3 overflow-y-auto px-3 py-4 sm:px-4"
        aria-live="polite"
      >
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {/* Suggested questions */}
        {messages.length === 1 && !isTyping && (
          <SuggestedQuestions
            questions={suggestedQuestions}
            onSelect={sendMessage}
          />
        )}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center gap-2">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]"
              aria-hidden="true"
            >
              <Bot className="h-3.5 w-3.5 text-cyan-300" />
            </div>

            <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06] px-4 py-3">
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput
        onSend={sendMessage}
        disabled={isTyping}
      />
    </div>
  );
}