import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Fahrzeug finden", text: "Online im Bestand stöbern oder kostenlosen Suchauftrag anlegen. Wir melden uns, sobald Ihr Wunschwagen da ist." },
  { n: "02", title: "Probefahrt & Beratung", text: "Termin in 2 Minuten buchen. Vor Ort erhalten Sie DEKRA-Bericht, Historie und eine ehrliche Beratung ohne Verkaufsdruck." },
  { n: "03", title: "Finanzierung klären", text: "Anzahlung, Laufzeit, Schlussrate – wir rechnen gemeinsam und holen die Zusage der Bank in der Regel binnen 24 Stunden." },
  { n: "04", title: "Übergabe genießen", text: "Zugelassen, aufbereitet, vollgetankt. Abholung bei uns im Showroom oder Lieferung bis vor Ihre Haustür." },
];

export default function Process() {
  return (
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal key={s.n} as="li" delay={i * 0.08} className="relative rounded-3xl border border-ink-900/8 bg-surface p-7 shadow-[0_20px_50px_-30px_rgba(9,12,18,.25)]">
          <span className="font-display text-5xl font-bold text-accent-500/25">{s.n}</span>
          <h3 className="font-display mt-4 text-xl font-semibold text-ink-900">{s.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-500">{s.text}</p>
          {i < steps.length - 1 && (
            <span className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 rotate-45 border-r border-t border-accent-500/40 lg:block" aria-hidden />
          )}
        </Reveal>
      ))}
    </ol>
  );
}
