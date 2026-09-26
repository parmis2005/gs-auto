import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Stats from "@/components/Stats";
import SectionHeading from "@/components/SectionHeading";
import VehicleCard from "@/components/VehicleCard";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import MapSection from "@/components/MapSection";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import FinanceCalculator from "@/components/FinanceCalculator";
import { featuredVehicles } from "@/lib/vehicles";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brands />

      <section id="highlights" className="container-x pt-20 lg:pt-28">
        <Reveal>
          <Stats />
        </Reveal>
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Aktuelle Highlights"
            title="Handverlesene Fahrzeuge, sofort verfügbar."
            text="Leasingrückläufer und Jahreswagen aus erster Hand – DEKRA-geprüft, scheckheftgepflegt und mit Garantie."
          />
          <Reveal delay={0.1}>
            <Link href="/fahrzeuge" className="btn btn-ghost">
              Alle {"120+"} Fahrzeuge <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredVehicles.slice(0, 6).map((v, i) => (
            <Reveal key={v.slug} delay={i * 0.06}>
              <VehicleCard v={v} priority={i < 3} />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-400">* Unverbindliches Finanzierungsbeispiel: 20 % Anzahlung, 60 Monate, 4,49 % eff. Jahreszins.</p>
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <SectionHeading
          eyebrow="Unsere Leistungen"
          title="Alles aus einer Hand – vom Gutachten bis zur Lieferung."
          text="Wir sind kein Vermittler, sondern ein echtes Autohaus mit eigener Werkstatt, festen Ansprechpartnern und Prozessen, die Ihnen Zeit sparen."
        />
        <div className="mt-12">
          <Services />
        </div>
      </section>

      <section className="mt-24 lg:mt-32">
        <VideoSection
          src="/videos/road.mp4"
          poster="/videos/road-poster.jpg"
          eyebrow="Warum VANTORA"
          title="Weil ein Auto mehr ist als ein Datenblatt."
          text="Seit 2009 verkaufen wir Fahrzeuge, die wir selbst fahren würden. Jeder Wagen wird von uns persönlich ausgewählt, geprüft und aufbereitet – und Sie erhalten die komplette Historie offen auf den Tisch."
          cta="Mehr über uns"
          href="/ueber-uns"
        />
      </section>

      <section className="border-y border-ink-900/6 bg-white py-24 text-ink-900 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="So einfach geht's"
            title="In vier Schritten zum neuen Auto."
            text="Kein Papierkrieg, keine Wartezeiten – wir haben den Autokauf so einfach gemacht, wie er sein sollte."
            light
            align="center"
          />
          <div className="mt-14">
            <Process />
          </div>
        </div>
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Finanzierung</span>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.08] text-ink-900 sm:text-4xl lg:text-5xl">
              Ihre Wunschrate – in 30 Sekunden berechnet.
            </h2>
            <p className="mt-5 text-slate-500">
              Klassische Finanzierung, Ballonfinanzierung oder Leasing: Unsere Finanzierungsexperten finden die passende Lösung. Zusage in der Regel innerhalb von 24 Stunden.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {["Ab 3,99 % eff. Jahreszins", "Ohne Anzahlung möglich", "Flexible Laufzeiten von 12 bis 96 Monaten", "Auch für Selbstständige und Firmenkunden"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-400" /> {t}
                </li>
              ))}
            </ul>
            <Link href="/finanzierung" className="btn btn-primary mt-8">
              Zur Finanzierung <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <FinanceCalculator compact />
          </Reveal>
        </div>
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-ink-900/10">
              <Image src="/images/handover-keys.jpg" alt="Übergabe der Fahrzeugschlüssel im Showroom" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
            </div>
            <div className="glass absolute -bottom-6 left-6 right-6 rounded-2xl p-5 sm:left-auto sm:right-8 sm:w-72">
              <p className="font-display text-3xl font-bold text-ink-900">4,9 / 5</p>
              <p className="text-sm text-slate-500">Durchschnitt aus 1.240 verifizierten Bewertungen</p>
            </div>
          </Reveal>
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Kundenstimmen"
              title="Was unsere Kundinnen und Kunden sagen."
              text="Über 4.800 verkaufte Fahrzeuge – und die meisten Kunden kommen wieder oder empfehlen uns weiter."
            />
          </div>
        </div>
        <div className="mt-14">
          <Testimonials />
        </div>
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <SectionHeading
          eyebrow="Besuchen Sie uns"
          title="Showroom, Werkstatt & Kaffee – wir freuen uns auf Sie."
          text="Über 120 Fahrzeuge auf 4.500 m² Ausstellungsfläche. Kostenlose Parkplätze direkt vor der Tür."
        />
        <div className="mt-12">
          <MapSection />
        </div>
      </section>

      <div className="pt-24 lg:pt-32">
        <CTA />
      </div>
    </>
  );
}
