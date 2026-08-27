"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  Mail,
  MessageCircle,
  X,
} from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";
import type { Message, LeadIntent } from "./types";

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

type EnquiryForm = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  referral: string;
  requirements: string;
  leadIntent: LeadIntent;
};

const initialForm: EnquiryForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  referral: "",
  requirements: "",
  leadIntent: "none",
};

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [isTyping, setIsTyping] = useState(false);

  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [enquiryForm, setEnquiryForm] =
    useState<EnquiryForm>(initialForm);
  const [isSubmittingEnquiry, setIsSubmittingEnquiry] =
    useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquiryError, setEnquiryError] = useState("");

  const directContactMessage = [
    "Hi Sundar Digital, I'd like to discuss a project.",
    `Name: ${enquiryForm.name}`,
    `Email: ${enquiryForm.email}`,
    enquiryForm.phone && `Phone / WhatsApp: ${enquiryForm.phone}`,
    enquiryForm.company && `Company: ${enquiryForm.company}`,
    `Service: ${enquiryForm.service}`,
    `Budget: ${enquiryForm.budget}`,
    `Timeline: ${enquiryForm.timeline}`,
    `Requirements: ${enquiryForm.requirements}`,
  ]
    .filter(Boolean)
    .join("\n");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping, showEnquiryForm, enquirySubmitted]);

  /*
   * Listen for the "Start Project Enquiry" button
   * from ChatMessage.tsx.
   */
  useEffect(() => {
    const handleStartProjectEnquiry = (
      event: Event
    ) => {
      const customEvent = event as CustomEvent<{
        leadIntent?: LeadIntent;
      }>;

      const leadIntent =
        customEvent.detail?.leadIntent || "general_enquiry";

      setShowEnquiryForm(true);
      setEnquirySubmitted(false);
      setEnquiryError("");

      setEnquiryForm((current) => ({
        ...current,
        leadIntent,
        service:
          leadIntent === "website_enquiry"
            ? "Website"
            : leadIntent === "software_enquiry"
              ? "Custom Software"
              : leadIntent === "saas_enquiry"
                ? "SaaS / Web Application"
                : leadIntent === "ai_enquiry"
                  ? "AI Solution"
                  : leadIntent === "aws_enquiry"
                    ? "AWS / DevOps"
                    : leadIntent === "restaurant_erp_enquiry"
                      ? "Restaurant ERP"
                      : current.service,
      }));
    };

    window.addEventListener(
      "sundar:start-project-enquiry",
      handleStartProjectEnquiry
    );

    return () => {
      window.removeEventListener(
        "sundar:start-project-enquiry",
        handleStartProjectEnquiry
      );
    };
  }, []);

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

      const responseText = await response.text();
      let data: { error?: string; message?: string; leadIntent?: LeadIntent; isLead?: boolean } = {};

      try {
        data = JSON.parse(responseText);
      } catch {
        if (!response.ok) {
          throw new Error(
            "The chat service is temporarily unavailable. Please try again in a moment."
          );
        }
      }

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Unable to get a response from the AI assistant."
        );
      }

      const leadIntent: LeadIntent =
        data?.leadIntent || "none";

      const assistantMessage: Message = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content:
          data?.message ||
          "Sorry, I couldn't generate a response right now. Please try again.",
        isLead: Boolean(data?.isLead),
        leadIntent,
      };

      setMessages((current) => [
        ...current,
        assistantMessage,
      ]);
    } catch (error) {
      console.error("Chat request error:", error);

      const errorMessage: Message = {
        id: `${Date.now()}-assistant-error`,
        role: "assistant",
        content:
          "Sorry, I'm having trouble responding right now. Please try again in a moment.",
      };

      setMessages((current) => [
        ...current,
        errorMessage,
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const updateForm = (
    field: keyof EnquiryForm,
    value: string
  ) => {
    setEnquiryForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleEnquirySubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmittingEnquiry) {
      return;
    }

    setIsSubmittingEnquiry(true);
    setEnquiryError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: enquiryForm.name.trim(),
          email: enquiryForm.email.trim(),
          phone: enquiryForm.phone.trim(),
          company: enquiryForm.company.trim(),
          service: enquiryForm.service.trim(),
          budget: enquiryForm.budget.trim(),
          timeline: enquiryForm.timeline.trim(),
          referral: enquiryForm.referral.trim(),
          description: enquiryForm.requirements.trim(),
          leadIntent: enquiryForm.leadIntent,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.message ||
            "Unable to submit your enquiry. Please try again."
        );
      }

      setEnquirySubmitted(true);
      setEnquiryForm(initialForm);
    } catch (error) {
      console.error(
        "Project enquiry submission error:",
        error
      );

      setEnquiryError(
        error instanceof Error
          ? error.message
          : "Unable to submit your enquiry. Please try again."
      );
    } finally {
      setIsSubmittingEnquiry(false);
    }
  };

  const closeEnquiryForm = () => {
    if (isSubmittingEnquiry) {
      return;
    }

    setShowEnquiryForm(false);
    setEnquirySubmitted(false);
    setEnquiryError("");
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

      {/* Project Enquiry */}
      {showEnquiryForm ? (
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
          <div className="mb-4 flex items-center gap-2">
            <button
              type="button"
              onClick={closeEnquiryForm}
              disabled={isSubmittingEnquiry}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:bg-white/[0.08] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Back to chat"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Start Project Enquiry
              </h3>

              <p className="text-xs text-slate-400">
                Tell us about your project.
              </p>
            </div>
          </div>

          {enquirySubmitted ? (
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-5 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10">
                <CheckCircle2 className="h-6 w-6 text-cyan-300" />
              </div>

              <h3 className="text-base font-semibold text-white">
                Enquiry submitted
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Thanks for reaching out. We&apos;ve received your
                project enquiry and will get back to you soon.
              </p>

              <button
                type="button"
                onClick={() => {
                  setShowEnquiryForm(false);
                  setEnquirySubmitted(false);
                }}
                className="mt-5 w-full rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Back to Chat
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleEnquirySubmit}
              className="space-y-3"
            >
              <div>
                <label
                  htmlFor="enquiry-name"
                  className="mb-1.5 block text-xs font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="enquiry-name"
                  type="text"
                  required
                  value={enquiryForm.name}
                  onChange={(event) =>
                    updateForm("name", event.target.value)
                  }
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry-email"
                  className="mb-1.5 block text-xs font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="enquiry-email"
                  type="email"
                  required
                  value={enquiryForm.email}
                  onChange={(event) =>
                    updateForm("email", event.target.value)
                  }
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry-phone"
                  className="mb-1.5 block text-xs font-medium text-slate-300"
                >
                  Phone / WhatsApp
                </label>

                <input
                  id="enquiry-phone"
                  type="tel"
                  required
                  value={enquiryForm.phone}
                  onChange={(event) =>
                    updateForm("phone", event.target.value)
                  }
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry-company"
                  className="mb-1.5 block text-xs font-medium text-slate-300"
                >
                  Company
                </label>

                <input
                  id="enquiry-company"
                  type="text"
                  required
                  value={enquiryForm.company}
                  onChange={(event) =>
                    updateForm("company", event.target.value)
                  }
                  placeholder="Your company or business"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry-service"
                  className="mb-1.5 block text-xs font-medium text-slate-300"
                >
                  Service / Project Type
                </label>

                <select
                  id="enquiry-service"
                  required
                  value={enquiryForm.service}
                  onChange={(event) =>
                    updateForm("service", event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/50"
                >
                  <option value="">
                    Select project type
                  </option>
                  <option value="Website">
                    Website
                  </option>
                  <option value="Custom Software">
                    Custom Software
                  </option>
                  <option value="SaaS / Web Application">
                    SaaS / Web Application
                  </option>
                  <option value="AI Solution">
                    AI Solution
                  </option>
                  <option value="CRM">
                    CRM
                  </option>
                  <option value="Restaurant ERP">
                    Restaurant ERP
                  </option>
                  <option value="AWS / DevOps">
                    AWS / DevOps
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="enquiry-budget"
                  className="mb-1.5 block text-xs font-medium text-slate-300"
                >
                  Budget
                </label>

                <select
                  id="enquiry-budget"
                  required
                  value={enquiryForm.budget}
                  onChange={(event) =>
                    updateForm("budget", event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/50"
                >
                  <option value="">Select budget</option>
                  <option value="Under ₹20,000">Under ₹20,000</option>
                  <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
                  <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                  <option value="₹1,00,000+">₹1,00,000+</option>
                  <option value="Let's discuss">Let&apos;s discuss</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="enquiry-timeline"
                  className="mb-1.5 block text-xs font-medium text-slate-300"
                >
                  Timeline
                </label>

                <select
                  id="enquiry-timeline"
                  required
                  value={enquiryForm.timeline}
                  onChange={(event) =>
                    updateForm("timeline", event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/50"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP (within 3 days)">ASAP (within 3 days)</option>
                  <option value="Within 1 week">Within 1 week</option>
                  <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="enquiry-referral"
                  className="mb-1.5 block text-xs font-medium text-slate-300"
                >
                  How did you find Sundar Digital?
                </label>

                <select
                  id="enquiry-referral"
                  required
                  value={enquiryForm.referral}
                  onChange={(event) =>
                    updateForm("referral", event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400/50"
                >
                  <option value="">Select an option</option>
                  <option value="Google Search">Google Search</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Fiverr">Fiverr</option>
                  <option value="Referral / Word of mouth">Referral / Word of mouth</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Portfolio / Website">Portfolio / Website</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="enquiry-requirements"
                  className="mb-1.5 block text-xs font-medium text-slate-300"
                >
                  Project Requirements
                </label>

                <textarea
                  id="enquiry-requirements"
                  required
                  rows={4}
                  value={enquiryForm.requirements}
                  onChange={(event) =>
                    updateForm(
                      "requirements",
                      event.target.value
                    )
                  }
                  placeholder="Tell us briefly about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm leading-6 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50"
                />
              </div>

              {enquiryError && (
                <div className="rounded-xl border border-red-400/20 bg-red-400/[0.06] px-3 py-2.5 text-xs leading-5 text-red-300">
                  {enquiryError}
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={whatsappUrl(directContactMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400"
                    >
                      <MessageCircle size={14} aria-hidden="true" />
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:hello.sundardigital@gmail.com?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(directContactMessage)}`}
                      className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
                    >
                      <Mail size={14} aria-hidden="true" />
                      Email directly
                    </a>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmittingEnquiry}
                className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmittingEnquiry
                  ? "Submitting..."
                  : "Submit Project Enquiry"}
              </button>
            </form>
          )}
        </div>
      ) : (
        <>
          {/* Messages */}
          <div
            className="min-h-0 flex-1 space-y-3 overflow-y-auto px-3 py-4 sm:px-4"
            aria-live="polite"
          >
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
              />
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
        </>
      )}
    </div>
  );
}