import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "Leistungen – Finanzierung, Garantie, Werkstatt & Ankauf",
  description: "DEKRA-Prüfung, Finanzierung ab 3,99 %, Garantie bis 24 Monate, Meisterwerkstatt, Inzahlungnahme, Zulassung und Lieferung – alles aus einer Hand.",
};

const workshop = [
  { title: "Inspektion & Wartung", text: "Nach Herstellervorgabe, mit Original- oder Erstausrüsterteilen. Garantieerhaltend für alle Marken.", price: "ab 149 €" },
  { title: "HU / AU", text: "Hauptuntersuchung direkt bei uns im Haus – inklusive Vorabcheck und kleinen Reparaturen.", price: "ab 129 €" },
  { title: "Reifenservice & Einlagerung", text: "Räderwechsel, Wuchten, Einlagerung im klimatisierten Reifenhotel mit Zustandsprotokoll.", price: "ab 39 €" },
  { title: "Bremsen & Fahrwerk", text: "Bremsflüssigkeit, Beläge, Scheiben, Stoßdämpfer – Festpreis nach Kostenvoranschlag.", price: "auf Anfrage" },
  { title: "Fahrzeugaufbereitung", text: "Innen- und Außenaufbereitung, Lackpolitur, Keramikversiegelung – Showroom-Zustand für Ihr Auto.", price: "ab 199 €" },
  { title: "Klimaservice", text: "Prüfung, Desinfektion und Befüllung der Klimaanlage – für frische Luft auf jeder Fahrt.", price: "ab 89 €" },
];

const faq = [
  { q: "Was umfasst die DEKRA-Prüfung?", a: "Ein unabhängiger DEKRA-Sachverständiger prüft über 100 Punkte – Karosserie, Lackschichtdicke, Fahrwerk, Elektronik, Bremsen und Probefahrt. Den vollständigen Bericht erhalten Sie beim Termin ausgehändigt, unabhängig davon, ob Sie kaufen." },
  { q: "Welche Garantie bekomme ich?", a: "Jedes Fahrzeug wird mit 12 Monaten Gebrauchtwagengarantie ausgeliefert (europaweit, ohne Kilometerbegrenzung). Optional verlängern Sie auf 24 Monate. Bei jungen Fahrzeugen läuft zusätzlich die Herstellergarantie weiter." },
  { q: "Kann ich mein altes Auto in Zahlung geben?", a: "Ja – wir bewerten Ihr Fahrzeug vor Ort in etwa 15 Minuten oder vorab online per Foto-Upload. Das Angebot ist 7 Tage gültig und kann direkt mit dem Kaufpreis verrechnet werden." },
  { q: "Liefern Sie auch deutschlandweit?", a: "Selbstverständlich. Wir liefern per geschlossenem Transporter oder auf eigener Achse mit Überführungskennzeichen. Innerhalb von 100 km ist die Lieferung kostenlos." },
  { q: "Kann ich das Fahrzeug vorab reservieren?", a: "Ja, gegen eine Reservierungsgebühr von 500 € halten wir das Fahrzeug 5 Werktage für Sie fest. Bei Kauf wird die Gebühr voll angerechnet, sonst erstattet." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Mehr als Autoverkauf: Service, der bleibt."
        text="Vom ersten Gespräch bis zur Inspektion nach drei Jahren – wir begleiten Sie mit eigener Werkstatt, festen Ansprechpartnern und transparenten Preisen."
        image="/images/showroom-dark-sportscar.jpg"
      />
      <section className="container-x pt-20 lg:pt-28">
        <Services compact />
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-ink-900/10">
              <Image src="/images/workshop-mercedes-lift.jpg" alt="Fahrzeug auf der Hebebühne in der VANTORA Meisterwerkstatt" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Meisterwerkstatt" title="Werkstatt mit Meisterbrief – für alle Marken." text="Zwei Kfz-Meister, sechs Hebebühnen und moderne Diagnosetechnik. Wir warten Ihr Fahrzeug garantieerhaltend nach Herstellervorgaben – oft günstiger als die Vertragswerkstatt." />
            <ul className="mt-8 space-y-3 text-sm text-slate-700">
              {["Kostenloser Hol- und Bringservice im Umkreis von 25 km", "Ersatzfahrzeug ab 19 € pro Tag", "Digitale Serviceberichte mit Fotos aufs Handy", "Termin online in 2 Minuten"].map((t) => (
                <li key={t} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent-400" />{t}</li>
              ))}
            </ul>
            <Link href="/kontakt?anliegen=Werkstatttermin" className="btn btn-primary mt-8">Werkstatttermin anfragen <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workshop.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="card card-hover flex h-full flex-col rounded-3xl p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-ink-900">{w.title}</h3>
                  <span className="shrink-0 rounded-full bg-accent-500/15 px-3 py-1 text-xs font-semibold text-accent-600">{w.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24 lg:mt-32">
        <VideoSection
          src="/videos/service.mp4"
          poster="/videos/service-poster.jpg"
          eyebrow="Aufbereitung"
          title="Jedes Fahrzeug verlässt uns im Showroom-Zustand."
          text="Vor der Übergabe durchläuft jedes Auto unsere 40-Punkte-Aufbereitung: Innenreinigung, Lackpolitur, Versiegelung, Geruchsneutralisierung. Auf Wunsch auch für Ihr eigenes Fahrzeug buchbar."
          cta="Aufbereitung buchen"
          href="/kontakt"
        />
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <SectionHeading eyebrow="Häufige Fragen" title="Antworten, bevor Sie fragen müssen." align="center" />
        <div className="mx-auto mt-12 max-w-3xl"><FAQ items={faq} /></div>
      </section>

      <div className="pt-24 lg:pt-32"><CTA /></div>
    </>
  );
}
