"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingContact() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp-Beratung starten"
      className="fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-ink-900 shadow-[0_12px_30px_-8px_rgba(37,211,102,.7)] transition hover:scale-105 md:flex"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp-Beratung
    </a>
  );
}
