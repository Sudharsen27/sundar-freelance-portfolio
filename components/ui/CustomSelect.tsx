"use client";

import { useEffect, useId, useRef, useState } from "react";

type CustomSelectProps = {
  id?: string;
  label: string;
  value: string;
  placeholder: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  required?: boolean;
};

export default function CustomSelect({
  id,
  label,
  value,
  placeholder,
  options,
  onChange,
  required,
}: CustomSelectProps) {
  const autoId = useId();
  const selectId = id ?? autoId;
  const labelId = `${selectId}-label`;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label ?? placeholder;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <label
        id={labelId}
        htmlFor={selectId}
        className="mb-2 block text-sm font-medium text-text-secondary"
      >
        {label}
      </label>

      <button
        id={selectId}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-required={required}
        onClick={() => setOpen((v) => !v)}
        className={`glow-focus flex w-full items-center justify-between rounded-xl border bg-bg/80 px-4 py-3 text-left text-sm backdrop-blur-sm transition ${
          open
            ? "border-accent-purple/50 ring-2 ring-accent-purple/30"
            : "border-white/[0.08] hover:border-white/15"
        } ${value ? "text-text-primary" : "text-text-secondary/70"}`}
      >
        <span className="line-clamp-2 pr-3 leading-snug">{selectedLabel}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-accent-cyan transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-labelledby={labelId}
          className="absolute z-50 mt-2 w-full rounded-xl border border-white/10 bg-[#111827] p-1.5 shadow-[0_16px_48px_rgba(0,0,0,0.55),0_0_0_1px_rgba(139,92,246,0.15)] backdrop-blur-xl"
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <li key={opt.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={`w-full rounded-lg px-3 py-2.5 text-left text-sm leading-snug transition ${
                    isSelected
                      ? "bg-accent-purple/20 font-medium text-text-primary"
                      : "text-text-secondary hover:bg-white/[0.06] hover:text-text-primary"
                  }`}
                >
                  {opt.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
