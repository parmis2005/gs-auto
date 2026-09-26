import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Datenschutzerklärung", robots: { index: false } };

const sections = [
  { h: "1. Verantwortlicher", p: `${site.legalName}, ${site.address.street}, ${site.address.zip} ${site.address.city}, E-Mail: ${site.email}, Telefon: ${site.phone}.` },
  { h: "2. Erhebung und Speicherung personenbezogener Daten", p: "Beim Besuch unserer Website werden automatisch Informationen durch den Browser an unseren Server gesendet (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp). Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs und zur Verbesserung unseres Angebots verarbeitet (Art. 6 Abs. 1 lit. f DSGVO)." },
  { h: "3. Kontaktformular und Anfragen", p: "Bei Anfragen über unsere Formulare verarbeiten wir die von Ihnen angegebenen Daten (Name, E-Mail, Telefon, Nachricht, ggf. Fahrzeugdaten) ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden gelöscht, sobald sie für die Zweckerreichung nicht mehr erforderlich sind." },
  { h: "4. Kartendienst OpenStreetMap", p: "Zur Darstellung unseres Standorts binden wir Kartenmaterial von OpenStreetMap ein. Beim Laden der Karte wird Ihre IP-Adresse an die Server der OpenStreetMap Foundation übermittelt. Rechtsgrundlage ist Ihre Einwilligung über den Cookie-Hinweis (Art. 6 Abs. 1 lit. a DSGVO)." },
  { h: "5. Cookies", p: "Wir verwenden ausschließlich technisch notwendige Cookies bzw. lokale Speicher, um Ihre Cookie-Einstellung zu speichern. Tracking- oder Marketing-Cookies setzen wir nicht ein." },
  { h: "6. Ihre Rechte", p: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Zudem haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Wenden Sie sich hierfür jederzeit an die oben genannten Kontaktdaten." },
];

export default function PrivacyPage() {
  return (
    <section className="container-x max-w-3xl pt-36 lg:pt-44">
      <span className="eyebrow">Rechtliches</span>
      <h1 className="font-display mt-4 text-4xl font-bold text-ink-900">Datenschutzerklärung</h1>
      <div className="mt-10 space-y-8 text-slate-600">
        {sections.map((s) => (
          <div key={s.h}>
            <h2 className="font-display text-xl font-semibold text-ink-900">{s.h}</h2>
            <p className="mt-3 leading-relaxed">{s.p}</p>
          </div>
        ))}
        <p className="text-xs text-slate-400">Stand: September 2026. Diese Website ist ein Demo-Entwurf mit frei erfundenen Unternehmensdaten.</p>
      </div>
    </section>
  );
}
