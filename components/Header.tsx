"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onHero = pathname === "/" && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          onHero ? "bg-gradient-to-b from-ink-950/60 to-transparent" : "glass shadow-[0_10px_40px_-20px_rgba(9,12,18,.35)]"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between lg:h-20">
          <Logo light={onHero} />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors ${
                    onHero
                      ? active ? "text-white" : "text-white/75 hover:text-white"
                      : active ? "text-ink-900" : "text-slate-500 hover:text-ink-900"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-accent-500 to-cyan-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a href={site.phoneHref} className={`flex items-center gap-2 text-sm font-medium ${onHero ? "text-white/85 hover:text-white" : "text-slate-700 hover:text-ink-900"}`}>
              <Phone className="h-4 w-4 text-accent-400" />
              {site.phone}
            </a>
            <Link href="/fahrzeuge" className="btn btn-primary !py-2.5 !px-5 text-sm">
              Fahrzeuge entdecken
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <button
            onClick={() => setOpen(true)}
            className={`grid h-11 w-11 place-items-center rounded-full border lg:hidden ${onHero ? "border-white/25 bg-white/10 text-white" : "border-ink-900/10 bg-ink-900/5 text-ink-900"}`}
            aria-label="Menü öffnen"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex h-[72px] items-center justify-between">
              <Logo onClick={() => setOpen(false)} />
              <button
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-ink-900/10 bg-ink-900/5 text-ink-900"
                aria-label="Menü schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="container-x mt-6 flex flex-col gap-1" aria-label="Mobile Navigation">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display flex items-center justify-between border-b border-ink-900/6 py-4 text-2xl font-semibold text-ink-900"
                  >
                    {item.label}
                    <ArrowUpRight className="h-5 w-5 text-accent-400" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container-x mt-auto mb-8 flex flex-col gap-3">
              <a href={site.phoneHref} className="btn btn-ghost w-full">
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
              <Link href="/fahrzeuge" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Fahrzeuge entdecken
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
