import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="container-x">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent-500 via-accent-600 to-[#1e3f9e] px-7 py-14 text-center sm:px-14 lg:py-20">
          <div className="grid-lines absolute inset-0" />
          <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="relative">
            <span className="eyebrow justify-center !text-white/80">Bereit für die Probefahrt?</span>
            <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-bold leading-[1.08] text-white sm:text-5xl">
              Ihr nächstes Auto wartet schon in unserem Showroom.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/80">
              Vereinbaren Sie jetzt einen unverbindlichen Termin – oder rufen Sie uns einfach an. Wir beraten Sie persönlich, ehrlich und ohne Verkaufsdruck.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/kontakt" className="btn btn-light">
                Termin vereinbaren <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="btn btn-glass">
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
