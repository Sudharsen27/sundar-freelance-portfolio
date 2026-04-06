const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "911234567890";

const WHATSAPP_TEXT = encodeURIComponent(
  "Hi, I saw your portfolio and want to discuss a project."
);

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-10px_rgba(37,211,102,0.8)] transition duration-200 hover:scale-110 hover:shadow-[0_16px_35px_-12px_rgba(37,211,102,0.95)] focus:outline-none focus:ring-2 focus:ring-[#25D366]/60 sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.99 11.99 0 0 0 3.64 20.36L2 22l3.13-1.03A11.99 11.99 0 0 0 20.52 3.48ZM12 21a9 9 0 0 1-4.36-1.12l-.25-.13-1.91.63.63-1.85-.14-.26A9 9 0 1 1 12 21Zm5.62-6.76c-.31-.16-1.85-.91-2.14-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.37.24-.68.08-.31-.16-1.3-.48-2.47-1.52-.91-.81-1.52-1.81-1.7-2.12-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.5.11-.18.06-.34-.03-.5-.09-.16-.71-1.69-.97-2.32-.26-.63-.52-.53-.71-.53h-.6c-.18 0-.48.07-.73.33-.25.26-.95.93-.95 2.27 0 1.34.98 2.64 1.12 2.82.14.18 1.93 3 4.68 4.2.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
      </svg>
    </a>
  );
}
