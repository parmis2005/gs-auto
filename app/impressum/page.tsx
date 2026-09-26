import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Impressum", robots: { index: false } };

export default function ImpressumPage() {
  return (
    <section className="container-x max-w-3xl pt-36 lg:pt-44">
      <span className="eyebrow">Rechtliches</span>
      <h1 className="font-display mt-4 text-4xl font-bold text-ink-900">Impressum</h1>
      <div className="prose-invert mt-10 space-y-8 text-slate-600">
        <div>
          <h2 className="font-display text-xl font-semibold text-ink-900">Angaben gemäß § 5 DDG</h2>
          <p className="mt-3">{site.legalName}<br />{site.address.street}<br />{site.address.zip} {site.address.city}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-ink-900">Vertreten durch</h2>
          <p className="mt-3">Geschäftsführer: Lukas Vantora</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-ink-900">Kontakt</h2>
          <p className="mt-3">Telefon: {site.phone}<br />E-Mail: {site.email}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-ink-900">Registereintrag</h2>
          <p className="mt-3">Registergericht: Amtsgericht Westerfeld<br />Handelsregisternummer: HRB 000000<br />Umsatzsteuer-ID gemäß § 27a UStG: DE 000 000 000</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-ink-900">Streitschlichtung</h2>
          <p className="mt-3">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>
        <p className="text-xs text-slate-400">Hinweis: Diese Website ist ein Demo-Entwurf. Alle Unternehmensdaten, Namen, Adressen, Preise und Kontaktdaten sind frei erfunden.</p>
      </div>
    </section>
  );
}
