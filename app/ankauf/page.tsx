import type { Metadata } from "next";
import Image from "next/image";
import { Banknote, Camera, FileCheck2, Handshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnkaufForm from "@/components/AnkaufForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Auto verkaufen & Inzahlungnahme – Faire Bewertung in 24 Stunden",
  description: "Verkaufen Sie Ihr Auto an VANTORA Automobile: kostenlose Bewertung, Sofortauszahlung, Abmeldung inklusive. Auch als Inzahlungnahme.",
};

const steps = [
  { icon: Camera, title: "Fotos hochladen", text: "Fahrzeugdaten eingeben, ein paar Fotos hochladen – dauert keine 3 Minuten." },
  { icon: Banknote, title: "Angebot erhalten", text: "Innerhalb von 24 Stunden erhalten Sie ein verbindliches Angebot, 7 Tage gültig." },
  { icon: FileCheck2, title: "Termin vor Ort", text: "Kurze Sichtprüfung bei uns oder bei Ihnen zu Hause. Keine Überraschungen, keine Nachverhandlung." },
  { icon: Handshake, title: "Sofortauszahlung", text: "Kaufvertrag, Überweisung noch am selben Tag, Abmeldung übernehmen wir." },
];

export default function AnkaufPage() {
  return (
    <>
      <PageHero
        eyebrow="Ankauf & Inzahlungnahme"
        title="Ihr Auto ist mehr wert, als Sie denken."
        text="Wir kaufen Ihr Fahrzeug – unabhängig davon, ob Sie bei uns ein neues kaufen. Faire Bewertung, Sofortauszahlung und Abmeldung inklusive."
        image="/images/handshake-keys.jpg"
      />
      <section className="container-x pt-20 lg:pt-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="card h-full rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-500/10 text-accent-600"><s.icon className="h-6 w-6" /></div>
                  <span className="font-display text-3xl font-bold text-ink-900/10">0{i + 1}</span>
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Warum an uns verkaufen?" title="Ohne Inserate, ohne Probefahrt-Touristen, ohne Risiko." text="Privatverkauf kostet Zeit und Nerven. Wir zahlen marktgerechte Preise – weil wir Ihr Fahrzeug direkt in unseren Bestand übernehmen und nicht an Zwischenhändler weiterreichen." />
            <Reveal delay={0.1}>
              <div className="relative mt-10 aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-ink-900/10">
                <Image src="/images/key-in-car.jpg" alt="Fahrzeugschlüssel in der Hand" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="card rounded-[2rem] p-6 sm:p-10"><AnkaufForm /></div>
          </div>
        </div>
      </section>
    </>
  );
}
