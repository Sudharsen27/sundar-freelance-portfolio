"use client";

import { FormEvent, KeyboardEvent, useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({
  onSend,
  disabled = false,
}: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = input.trim();

    if (!message || disabled) {
      return;
    }

    onSend(message);
    setInput("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      const message = input.trim();

      if (!message || disabled) {
        return;
      }

      onSend(message);
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t border-white/10 bg-black/10 p-3"
    >
      <label htmlFor="ai-chat-input" className="sr-only">
        Type your message
      </label>

      <input
        id="ai-chat-input"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything..."
        disabled={disabled}
        autoComplete="off"
        className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-50"
      />

      <button
        type="submit"
        disabled={disabled || !input.trim()}
        aria-label="Send message"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}