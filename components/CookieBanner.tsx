"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("vantora-consent");
    } catch {}
    const t = window.setTimeout(() => setVisible(!stored), 800);
    return () => window.clearTimeout(t);
  }, []);

  const choose = (value: string) => {
    try {
      localStorage.setItem("vantora-consent", value);
    } catch {}
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-2xl rounded-2xl glass p-5 shadow-2xl sm:inset-x-6"
          role="dialog"
          aria-label="Cookie-Hinweis"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-500/15 text-accent-600">
              <Cookie className="h-5 w-5" />
            </div>
            <p className="text-sm leading-relaxed text-slate-700">
              Wir verwenden Cookies, um unsere Website optimal zu gestalten und die Kartenansicht bereitzustellen. Details in der{" "}
              <Link href="/datenschutz" className="text-accent-600 underline-offset-4 hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-2">
              <button onClick={() => choose("essential")} className="btn btn-ghost !py-2.5 !px-4 text-sm">
                Nur notwendige
              </button>
              <button onClick={() => choose("all")} className="btn btn-primary !py-2.5 !px-4 text-sm">
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
