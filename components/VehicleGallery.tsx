"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export default function VehicleGallery({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);
  const prev = () => setI((n) => (n - 1 + images.length) % images.length);
  const next = () => setI((n) => (n + 1) % images.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div>
      <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-ink-900/10 bg-surface-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[i]}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0"
          >
            <Image src={images[i]} alt={`${alt} – Bild ${i + 1}`} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <button onClick={prev} aria-label="Vorheriges Bild" className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink-950/60 text-white backdrop-blur transition hover:bg-accent-500">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={next} aria-label="Nächstes Bild" className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink-950/60 text-white backdrop-blur transition hover:bg-accent-500">
          <ChevronRight className="h-5 w-5" />
        </button>
        <button onClick={() => setOpen(true)} aria-label="Vollbild" className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-ink-950/60 text-white backdrop-blur transition hover:bg-accent-500">
          <Maximize2 className="h-4 w-4" />
        </button>
        <span className="absolute bottom-4 left-4 rounded-full bg-ink-950/60 px-3 py-1 text-xs text-white backdrop-blur">
          {i + 1} / {images.length}
        </span>
      </div>
      <div className="hide-scrollbar mt-3 flex gap-3 overflow-x-auto">
        {images.map((src, n) => (
          <button
            key={src}
            onClick={() => setI(n)}
            aria-label={`Bild ${n + 1} anzeigen`}
            className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition ${n === i ? "border-accent-500" : "border-transparent opacity-60 hover:opacity-100"}`}
          >
            <Image src={src} alt="" fill sizes="112px" className="object-cover" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal
          >
            <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white" aria-label="Schließen">
              <X className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Vorheriges Bild" className="absolute left-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-accent-500">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="relative h-[80vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
              <Image src={images[i]} alt={`${alt} – Bild ${i + 1}`} fill sizes="100vw" className="object-contain" />
            </div>
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Nächstes Bild" className="absolute right-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-accent-500">
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
