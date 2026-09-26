import Link from "next/link";
import { ArrowUpRight, BadgeEuro, ClipboardCheck, Handshake, ShieldCheck, Truck, Wrench } from "lucide-react";
import Reveal from "./Reveal";

export const services = [
  {
    icon: ClipboardCheck,
    title: "DEKRA-Prüfung vor Ort",
    text: "Jedes Fahrzeug erhält vor dem Verkauf ein unabhängiges DEKRA-Gutachten mit über 100 Prüfpunkten. Sie bekommen den Bericht ausgehändigt.",
  },
  {
    icon: BadgeEuro,
    title: "Finanzierung & Leasing",
    text: "Individuelle Raten ab 3,99 % eff. Jahreszins über unsere Partnerbanken. Zusage meist innerhalb von 24 Stunden – auch für Selbstständige.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie bis 24 Monate",
    text: "Jeder Wagen kommt mit 12 Monaten Gebrauchtwagengarantie. Auf Wunsch verlängern wir auf 24 Monate – europaweit gültig.",
  },
  {
    icon: Handshake,
    title: "Inzahlungnahme & Ankauf",
    text: "Wir bewerten Ihr aktuelles Fahrzeug fair und transparent – innerhalb von 15 Minuten vor Ort oder online per Foto-Upload.",
  },
  {
    icon: Wrench,
    title: "Meisterwerkstatt & Service",
    text: "Inspektion, HU/AU, Reifenservice und Aufbereitung in unserer eigenen Werkstatt – markenübergreifend und zu fairen Festpreisen.",
  },
  {
    icon: Truck,
    title: "Zulassung & Lieferung",
    text: "Wir übernehmen die Zulassung inklusive Wunschkennzeichen und liefern Ihr Fahrzeug auf Wunsch deutschlandweit bis vor die Haustür.",
  },
];

export default function Services({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.06}>
          <article className="card card-hover group relative h-full overflow-hidden rounded-3xl p-7">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-500/10 blur-2xl transition group-hover:bg-accent-500/25" />
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-accent-500/30 bg-accent-500/10 text-accent-600">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display mt-6 text-xl font-semibold text-ink-900">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">{s.text}</p>
            {!compact && (
              <Link href="/leistungen" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 transition group-hover:gap-2">
                Mehr erfahren <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  );
}
