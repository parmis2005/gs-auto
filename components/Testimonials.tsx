import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    name: "Katharina M.",
    car: "Mercedes-Benz C 220 d",
    text: "Absolut transparente Beratung. Der DEKRA-Bericht lag beim Termin bereits vor, die Finanzierung war innerhalb eines Tages durch. So stellt man sich Autokauf vor.",
  },
  {
    name: "Tobias R.",
    car: "BMW 320d Touring",
    text: "Mein Altwagen wurde fair bewertet und direkt in Zahlung genommen. Keine versteckten Gebühren, keine Überraschungen – nur ein sehr gutes Auto zu einem ehrlichen Preis.",
  },
  {
    name: "Familie Öztürk",
    car: "Range Rover Evoque",
    text: "Vom ersten Kontakt per WhatsApp bis zur Lieferung nach Köln lief alles reibungslos. Das Fahrzeug war sogar besser als beschrieben. Klare Empfehlung!",
  },
  {
    name: "Dr. Sven H.",
    car: "Porsche 911 Carrera S",
    text: "Man merkt sofort die Leidenschaft fürs Detail. Fahrzeughistorie lückenlos, Aufbereitung makellos, Übergabe mit Champagner. Premium ohne Attitüde.",
  },
];

export default function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.06}>
          <figure className="card relative h-full rounded-3xl p-7">
            <Quote className="absolute right-6 top-6 h-8 w-8 text-accent-500/30" />
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-base leading-relaxed text-slate-700">„{t.text}“</blockquote>
            <figcaption className="mt-5 flex items-center gap-3 text-sm">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-accent-500 to-cyan-400 font-semibold text-ink-900">
                {t.name[0]}
              </span>
              <span>
                <span className="block font-semibold text-ink-900">{t.name}</span>
                <span className="text-slate-400">Kaufte: {t.car}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
