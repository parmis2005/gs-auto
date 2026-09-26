import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt – Probefahrt vereinbaren",
  description: `Kontaktieren Sie ${site.name}: Telefon, WhatsApp, E-Mail oder persönlich in ${site.address.city}. Jetzt Probefahrt vereinbaren.`,
};

export default async function ContactPage(props: PageProps<"/kontakt">) {
  const sp = await props.searchParams;
  const subject = typeof sp.anliegen === "string" ? sp.anliegen : "";
  const channels = [
    { icon: Phone, title: "Telefon", value: site.phone, href: site.phoneHref, note: "Mo–Fr 9–19 Uhr, Sa 9–16 Uhr" },
    { icon: MessageCircle, title: "WhatsApp", value: site.whatsapp, href: site.whatsappHref, note: "Antwort meist in wenigen Minuten" },
    { icon: Mail, title: "E-Mail", value: site.email, href: `mailto:${site.email}`, note: "Antwort innerhalb von 24 Stunden" },
  ];
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen wir über Ihr nächstes Auto."
        text="Ob Probefahrt, Finanzierung oder eine Frage zum Bestand – wir sind persönlich für Sie da. Ohne Warteschleife."
        image="/images/showroom-black-car.jpg"
      />
      <section className="container-x pt-20 lg:pt-28">
        <div className="grid gap-5 md:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <a href={c.href} className="card card-hover flex h-full flex-col rounded-3xl p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-500/10 text-accent-600"><c.icon className="h-6 w-6" /></div>
                <h3 className="font-display mt-5 text-lg font-semibold text-ink-900">{c.title}</h3>
                <p className="mt-1 text-lg text-ink-900">{c.value}</p>
                <p className="mt-2 text-xs text-slate-400">{c.note}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Anfrage" title="Wir melden uns – schnell und persönlich." text="Füllen Sie das Formular aus, und ein fester Ansprechpartner meldet sich in der Regel innerhalb von 2 Stunden während unserer Öffnungszeiten." />
            <div className="card mt-8 rounded-3xl p-6">
              <p className="font-display font-semibold text-ink-900">Öffnungszeiten</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-500">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4"><span>{h.day}</span><span className="text-slate-700">{h.time}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="card rounded-[2rem] p-6 sm:p-10"><ContactForm subject={subject} /></div>
          </div>
        </div>
      </section>

      <section className="container-x pt-24 lg:pt-32">
        <SectionHeading eyebrow="Anfahrt" title="So finden Sie uns." text="Direkt an der A57, Abfahrt Westerfeld-Nord. Kostenlose Parkplätze und Ladesäulen direkt vor dem Showroom." />
        <div className="mt-12"><MapSection /></div>
      </section>
    </>
  );
}
