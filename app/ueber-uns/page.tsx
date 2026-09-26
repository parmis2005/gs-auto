import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Über uns – Das Autohaus mit Handschlagqualität",
  description: "Seit 2009 unabhängiges Autohaus in Westerfeld am Rhein. Lernen Sie unser Team und unsere Werte kennen.",
};

const team = [
  { name: "Lukas Vantora", role: "Geschäftsführer & Gründer", img: "/images/team-lukas.jpg" },
  { name: "Sarah Brandt", role: "Leitung Finanzierung & Leasing", img: "/images/team-sarah.jpg" },
  { name: "Jonas Keller", role: "Verkaufsberater Premium", img: "/images/team-jonas.jpg" },
  { name: "Amira Haddad", role: "Verkaufsberaterin", img: "/images/team-amira.jpg" },
  { name: "Daniel Roth", role: "Kfz-Meister, Werkstattleitung", img: "/images/team-daniel.jpg" },
  { name: "Lena Sommer", role: "Kundenservice & Zulassung", img: "/images/team-lena.jpg" },
  { name: "David Nkemelu", role: "Fahrzeugankauf & Bewertung", img: "/images/team-david.jpg" },
  { name: "Mei Lin Weber", role: "Marketing & Online-Verkauf", img: "/images/team-mei.jpg" },
];

const values = [
  { title: "Transparenz", text: "DEKRA-Bericht, Historie, Vorschäden – alles liegt offen auf dem Tisch, bevor Sie sich entscheiden." },
  { title: "Handschlagqualität", text: "Was wir sagen, gilt. Reservierungen, Preise, Termine – Verlässlichkeit ist unser wichtigstes Kapital." },
  { title: "Leidenschaft", text: "Wir lieben Autos. Jedes Fahrzeug im Bestand haben wir persönlich ausgewählt und würden es selbst fahren." },
  { title: "Nähe", text: "Feste Ansprechpartner, keine Hotline. Sie erreichen uns direkt – per Telefon, WhatsApp oder vor Ort." },
];

const timeline = [
  { year: "2009", text: "Gründung durch Lukas Vantora mit 12 Fahrzeugen auf einem gemieteten Hof." },
  { year: "2014", text: "Umzug an die Ahornallee, Eröffnung der eigenen Meisterwerkstatt." },
  { year: "2018", text: "Neuer Showroom mit 4.500 m² Ausstellungsfläche und Kundenlounge." },
  { year: "2021", text: "Partnerschaft mit drei Banken, Start des digitalen Ankaufs." },
  { year: "2024", text: "Über 4.800 verkaufte Fahrzeuge, Auszeichnung „Autohaus des Jahres – Region Rhein“." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Ein Autohaus, wie es sein sollte."
        text="Seit 2009 stehen wir für geprüfte Fahrzeuge, ehrliche Beratung und Menschen, die ihren Job lieben. Lernen Sie uns kennen."
        image="/images/dealership-night.jpg"
      />
      <section className="container-x pt-20 lg:pt-28"><Reveal><Stats /></Reveal></section>

      <section className="container-x pt-24 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Unsere Geschichte" title="Vom Hinterhof zum Premium-Showroom." text="Was 2009 mit zwölf Fahrzeugen begann, ist heute eines der größten unabhängigen Autohäuser der Region – mit eigenem Werkstattmeister, 22 Mitarbeitenden und über 120 Fahrzeugen im Bestand. Geblieben ist die Überzeugung: Ein Auto kauft man bei Menschen, denen man vertraut." />
            <ol className="mt-10 space-y-6 border-l border-ink-900/10 pl-6">
              {timeline.map((t, i) => (
                <Reveal key={t.year} as="li" delay={i * 0.05} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-accent-500 ring-4 ring-surface" />
                  <p className="font-display text-lg font-semibold text-ink-900">{t.year}</p>
                  <p className="text-sm text-slate-500">{t.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={0.1} className="grid gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-ink-900/10">
              <Image src="/images/showroom-concept.jpg" alt="Showroom von VANTORA Automobile" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-ink-900/10">
                <Image src="/images/workshop-mechanic.jpg" alt="Kfz-Mechaniker bei der Arbeit" fill sizes="25vw" className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-ink-900/10">
                <Image src="/images/handover-keys.jpg" alt="Schlüsselübergabe an eine Kundin" fill sizes="25vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <SectionHeading eyebrow="Unsere Werte" title="Wofür wir jeden Tag arbeiten." align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="card card-hover h-full rounded-3xl p-7">
                <span className="font-display text-4xl font-bold text-accent-500/30">0{i + 1}</span>
                <h3 className="font-display mt-3 text-xl font-semibold text-ink-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <SectionHeading eyebrow="Unser Team" title="Menschen, die Autos lieben – und Kunden ernst nehmen." text="22 Mitarbeitende in Verkauf, Werkstatt, Finanzierung und Service. Feste Ansprechpartner statt Hotline." />
        <div className="mt-12 grid gap-5 grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <figure className="group overflow-hidden rounded-3xl border border-ink-900/10 bg-white">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={m.img} alt={`${m.name}, ${m.role}`} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
                </div>
                <figcaption className="p-4">
                  <p className="font-display font-semibold text-ink-900">{m.name}</p>
                  <p className="text-xs text-slate-500">{m.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <SectionHeading eyebrow="Kundenstimmen" title="Das sagen unsere Kunden." align="center" />
        <div className="mt-12"><Testimonials /></div>
      </section>

      <div className="pt-24 lg:pt-32"><CTA /></div>
    </>
  );
}
