"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.2, 0.8, 0.2, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink-950">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-poster.jpg"
        aria-hidden
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-ink-950/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/50 via-transparent to-ink-950/70" />

      <div className="container-x relative z-10 flex flex-col items-center px-6 pb-28 pt-32 text-center lg:pt-24">
        <motion.p
          {...fade(0.1)}
          className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-accent-300 sm:text-xs sm:tracking-[0.42em]"
        >
          Westerfeld am Rhein · Seit 2009
        </motion.p>
        <motion.h1
          {...fade(0.25)}
          className="font-serif-display mt-6 max-w-[62rem] text-balance text-[1.75rem] font-medium uppercase leading-[1.12] text-white sm:text-4xl lg:text-[3rem] xl:text-[3.5rem]"
        >
          Geprüfte Gebrauchtwagen
          <br />
          im Herzen des
          <br />
          Rheinlands
        </motion.h1>
        <motion.p {...fade(0.45)} className="mt-7 max-w-2xl text-base font-light leading-relaxed text-white/85 sm:text-xl">
          Willkommen bei VANTORA Automobile — geprüfte Fahrzeuge, ehrliche Beratung und Garantie bis 24 Monate.
        </motion.p>
        <motion.div {...fade(0.6)} className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Link href="/fahrzeuge" className="btn btn-primary w-full !px-9 !py-4 text-base sm:w-auto">
            Fahrzeuge entdecken
          </Link>
          <Link href="/kontakt" className="btn w-full border border-white/60 !px-9 !py-4 text-base text-white transition hover:bg-white/10 sm:w-auto">
            Probefahrt anfragen
          </Link>
        </motion.div>
      </div>

      <motion.a
        href="#highlights"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </motion.a>
    </section>
  );
}
