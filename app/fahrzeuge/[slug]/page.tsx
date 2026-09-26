import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Car, CheckCircle2, DoorOpen, Fuel, Gauge, Leaf, Palette, Phone, Settings2, ShieldCheck, Users, Zap } from "lucide-react";
import VehicleGallery from "@/components/VehicleGallery";
import VehicleCard from "@/components/VehicleCard";
import ContactForm from "@/components/ContactForm";
import FinanceCalculator from "@/components/FinanceCalculator";
import Reveal from "@/components/Reveal";
import { formatKm, formatPrice, monthlyRate } from "@/lib/format";
import { getVehicle, ps, vehicles } from "@/lib/vehicles";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata(props: PageProps<"/fahrzeuge/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const v = getVehicle(slug);
  if (!v) return {};
  return {
    title: `${v.brand} ${v.model} – ${formatPrice(v.price)}`,
    description: `${v.brand} ${v.model} ${v.variant}, EZ ${v.firstRegistration}, ${formatKm(v.mileage)}, ${ps(v.powerKw)} PS. ${v.description}`,
    openGraph: { images: [{ url: v.images[0] }] },
  };
}

export default async function VehicleDetailPage(props: PageProps<"/fahrzeuge/[slug]">) {
  const { slug } = await props.params;
  const v = getVehicle(slug);
  if (!v) notFound();

  const rate = monthlyRate(v.price * 0.8, 4.49, 60);
  const similar = vehicles.filter((x) => x.slug !== v.slug && (x.brand === v.brand || x.body === v.body)).slice(0, 3);
  const specs = [
    { icon: Calendar, label: "Erstzulassung", value: v.firstRegistration },
    { icon: Gauge, label: "Kilometerstand", value: formatKm(v.mileage) },
    { icon: Zap, label: "Leistung", value: `${v.powerKw} kW (${ps(v.powerKw)} PS)` },
    { icon: Fuel, label: "Kraftstoff", value: v.fuel },
    { icon: Settings2, label: "Getriebe", value: v.gearbox },
    { icon: Car, label: "Karosserie", value: v.body },
    { icon: Palette, label: "Farbe", value: v.color },
    { icon: Users, label: "Vorbesitzer", value: String(v.previousOwners) },
    { icon: DoorOpen, label: "Türen / Sitze", value: `${v.doors} / ${v.seats}` },
    { icon: Leaf, label: "Verbrauch", value: v.consumption },
    { icon: Leaf, label: "CO₂-Emission", value: v.co2 },
    { icon: ShieldCheck, label: "Schadstoffklasse", value: v.emissionClass },
  ];

  return (
    <>
      <section className="container-x pt-28 lg:pt-36">
        <Link href="/fahrzeuge" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-ink-900">
          <ArrowLeft className="h-4 w-4" /> Zurück zum Bestand
        </Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <VehicleGallery images={v.images} alt={`${v.brand} ${v.model}`} />
          </div>
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-2">
              {v.badges.map((b) => (
                <span key={b} className="rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-accent-600">
                  {b}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{v.brand}</p>
            <h1 className="font-display mt-1 text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">{v.model}</h1>
            <p className="mt-2 text-slate-500">{v.variant}</p>

            <div className="card mt-6 rounded-3xl p-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  {v.oldPrice && <p className="text-sm text-slate-400 line-through">{formatPrice(v.oldPrice)}</p>}
                  <p className="font-display text-4xl font-bold text-ink-900">{formatPrice(v.price)}</p>
                  <p className="mt-1 text-xs text-slate-400">inkl. 19 % MwSt., ausweisbar</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">Finanzierung ab</p>
                  <p className="font-display text-2xl font-bold text-accent-600">{formatPrice(rate)}<span className="text-sm font-normal text-slate-500"> / Monat*</span></p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a href="#anfrage" className="btn btn-primary">Probefahrt anfragen</a>
                <a href={site.phoneHref} className="btn btn-ghost"><Phone className="h-4 w-4" /> Anrufen</a>
              </div>
              <ul className="mt-5 grid gap-2 text-xs text-slate-600 sm:grid-cols-2">
                {["DEKRA-Gutachten inklusive", "12 Monate Garantie (24 optional)", "Neue HU/AU bei Übergabe", "Inzahlungnahme möglich"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" />{t}</li>
                ))}
              </ul>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {specs.slice(0, 6).map((s) => (
                <div key={s.label} className="rounded-2xl border border-ink-900/8 bg-ink-900/[0.03] p-4">
                  <dt className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-wider text-slate-400"><s.icon className="h-3.5 w-3.5 text-accent-400" />{s.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-ink-900">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="container-x mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12">
        <div className="space-y-12 lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900">Beschreibung</h2>
            <p className="mt-4 leading-relaxed text-slate-600">{v.description}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900">Ausstattung (Auszug)</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {v.equipment.map((e) => (
                <li key={e} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />{e}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900">Technische Daten</h2>
            <dl className="mt-4 divide-y divide-ink-900/8 rounded-2xl border border-ink-900/8">
              {specs.map((s) => (
                <div key={s.label} className="flex justify-between gap-4 px-5 py-3 text-sm">
                  <dt className="text-slate-500">{s.label}</dt>
                  <dd className="text-right font-medium text-ink-900">{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              Angaben zu Kraftstoffverbrauch und CO₂-Emissionen gemäß WLTP. Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch neuer Personenkraftwagen“ entnommen werden.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900">Ratenrechner</h2>
            <div className="mt-4">
              <FinanceCalculator price={v.price} compact />
            </div>
          </Reveal>
        </div>
        <aside className="lg:col-span-5" id="anfrage">
          <div className="card sticky top-28 rounded-3xl p-6 sm:p-8">
            <span className="eyebrow">Anfrage</span>
            <h2 className="font-display mt-3 text-2xl font-bold text-ink-900">Interesse an diesem Fahrzeug?</h2>
            <p className="mt-2 text-sm text-slate-500">Probefahrt, Finanzierung oder Fragen – wir antworten in der Regel innerhalb von 2 Stunden.</p>
            <div className="mt-6">
              <ContactForm subject="Probefahrt vereinbaren" vehicle={`${v.brand} ${v.model} (${v.slug})`} />
            </div>
          </div>
        </aside>
      </section>

      {similar.length > 0 && (
        <section className="container-x mt-24 lg:mt-32">
          <Reveal>
            <span className="eyebrow">Ähnliche Fahrzeuge</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-ink-900">Das könnte Ihnen auch gefallen</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {similar.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}><VehicleCard v={s} /></Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
