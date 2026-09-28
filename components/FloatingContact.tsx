"use client";

import { site } from "@/lib/site";

export default function FloatingContact() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp-Beratung starten"
      className="group fixed bottom-5 right-5 z-40 grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_-12px_rgba(37,211,102,.85),0_0_0_5px_rgba(37,211,102,.10)] ring-1 ring-white/70 transition duration-300 hover:-translate-y-0.5 hover:bg-[#1fbd5a] hover:shadow-[0_18px_40px_-14px_rgba(37,211,102,.95),0_0_0_7px_rgba(37,211,102,.14)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/35 sm:h-11 sm:w-11"
    >
      <span className="absolute inset-1.5 rounded-full border border-white/25 bg-white/10 transition group-hover:bg-white/15" aria-hidden />
      <svg
        className="relative h-4 w-4 sm:h-5 sm:w-5"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M12.04 2.01a9.86 9.86 0 0 0-8.55 14.79L2.1 21.9l5.22-1.36a9.84 9.84 0 0 0 4.72 1.2h.01a9.87 9.87 0 0 0-.01-19.73Zm.01 18.06h-.01a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.16 8.16 0 1 1 6.94 3.84Zm4.48-6.11c-.25-.12-1.45-.71-1.67-.79-.22-.08-.38-.12-.54.12-.16.25-.62.79-.76.95-.14.17-.28.19-.53.07-.24-.12-1.03-.38-1.96-1.21-.73-.65-1.22-1.45-1.36-1.69-.14-.25-.01-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.17 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.17-.46-.29Z" />
      </svg>
    </a>
  );
}
