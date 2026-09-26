import type { Metadata } from "next";
import Image from "next/image";
import { BadgePercent, Clock3, FileCheck2, Landmark } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FinanceCalculator from "@/components/FinanceCalculator";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Finanzierung & Leasing – Raten ab 3,99 % eff. Jahreszins",
  description: "Gebrauchtwagen finanzieren oder leasen: individuelle Raten, Zusage in 24 Stunden, auch ohne Anzahlung. Jetzt Rate berechnen.",
};

const models = [
  { icon: Landmark, title: "Klassische Finanzierung", text: "Gleichbleibende Raten über 12 bis 96 Monate. Am Ende gehört das Fahrzeug Ihnen – ohne Schlussrate.", best: "Für alle, die ihr Auto lange fahren." },
  { icon: BadgePercent, title: "Ballonfinanzierung", text: "Niedrige Monatsrate dank Schlussrate. Am Laufzeitende: bezahlen, weiterfinanzieren oder zurückgeben.", best: "Für maximale Flexibilität bei kleiner Rate." },
  { icon: Clock3, title: "Gebrauchtwagen-Leasing", text: "Feste Laufzeit, feste Kilometer, feste Rate. Für Gewerbetreibende voll absetzbar.", best: "Für Firmenkunden und Vielfahrer." },
  { icon: FileCheck2, title: "Sofortzusage", text: "Digitale Bonitätsprüfung in wenigen Minuten. Unterlagen bequem per Smartphone hochladen.", best: "Wenn es schnell gehen muss." },
];

const faq = [
  { q: "Welche Unterlagen brauche ich?", a: "Personalausweis, die letzten drei Gehaltsabrechnungen (bzw. BWA/Steuerbescheid bei Selbstständigen) und Ihre Bankverbindung. Alles können Sie bequem per Smartphone hochladen." },
  { q: "Ist eine Finanzierung ohne Anzahlung möglich?", a: "Ja. Bei entsprechender Bonität finanzieren wir bis zu 100 % des Kaufpreises – auf Wunsch inklusive Garantieverlängerung und Zulassung." },
  { q: "Kann ich Sondertilgungen leisten?", a: "Bei unseren Partnerbanken sind kostenlose Sondertilgungen jederzeit möglich. Auch eine vorzeitige Komplettablösung ist mit gesetzlich begrenzter Vorfälligkeitsentschädigung möglich." },
  { q: "Arbeiten Sie mit meiner Hausbank zusammen?", a: "Gern. Wir stellen Ihnen alle Unterlagen für Ihre Hausbank bereit. In den meisten Fällen sind unsere Partnerkonditionen jedoch günstiger – vergleichen lohnt sich." },
];

export default function FinancePage() {
  return (
    <>
      <PageHero
        eyebrow="Finanzierung & Leasing"
        title="Ihre Rate. Ihre Laufzeit. Ihre Entscheidung."
        text="Finanzieren Sie Ihr Wunschfahrzeug ab 3,99 % eff. Jahreszins über unsere Partnerbanken – mit Zusage in der Regel innerhalb von 24 Stunden."
        image="/images/interior-amg.jpg"
      />
      <section className="container-x pt-20 lg:pt-28">
        <SectionHeading eyebrow="Ratenrechner" title="Berechnen Sie Ihre Wunschrate." text="Passen Sie Preis, Anzahlung, Laufzeit und Schlussrate an – das Ergebnis aktualisiert sich sofort." />
        <div className="card mt-10 rounded-[2rem] p-6 sm:p-10"><FinanceCalculator /></div>
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <SectionHeading eyebrow="Finanzierungsmodelle" title="Vier Wege zum Wunschauto." align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {models.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <div className="card card-hover h-full rounded-3xl p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-500/10 text-accent-600"><m.icon className="h-6 w-6" /></div>
                <h3 className="font-display mt-5 text-xl font-semibold text-ink-900">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{m.text}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent-600">{m.best}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[2rem] border border-ink-900/10">
              <Image src="/images/handover-customer.jpg" alt="Kundin erhält Fahrzeugschlüssel nach erfolgreicher Finanzierung" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Unverbindliche Anfrage" title="Lassen Sie uns rechnen." text="Nennen Sie uns Ihr Wunschfahrzeug und Ihre Rahmenbedingungen – wir melden uns mit einem konkreten Angebot." />
            <div className="mt-8"><ContactForm subject="Finanzierungsanfrage" /></div>
          </div>
        </div>
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <SectionHeading eyebrow="FAQ" title="Häufige Fragen zur Finanzierung." align="center" />
        <div className="mx-auto mt-12 max-w-3xl"><FAQ items={faq} /></div>
      </section>
    </>
  );
}
