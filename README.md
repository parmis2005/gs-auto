# VANTORA Automobile – Autohaus-Website (Next.js)

Moderne, vollständig responsive Autohaus-Website als präsentierbarer Kundenentwurf.
Alle Unternehmensdaten, Namen, Adressen, Preise und Kontaktdaten sind frei erfunden.

## Starten

```bash
npm install
npm run dev
```

Anschließend http://localhost:3000 öffnen.

Produktions-Build:

```bash
npm run build
npm start
```

## Seiten

| Route | Inhalt |
| --- | --- |
| `/` | Hero-Video, Marken, Kennzahlen, Fahrzeug-Highlights, Leistungen, Video-Sektion, Prozess, Ratenrechner, Kundenstimmen, farbige Karte, CTA |
| `/fahrzeuge` | Fahrzeugbestand mit Suche, Filtern (Marke, Karosserie, Kraftstoff, Getriebe, Preis) und Sortierung |
| `/fahrzeuge/[slug]` | Fahrzeugdetail mit Galerie/Lightbox, technischen Daten, Ausstattung, Ratenrechner und Anfrageformular |
| `/leistungen` | DEKRA-Prüfung, Finanzierung, Garantie, Werkstatt, Aufbereitung, FAQ |
| `/finanzierung` | Ratenrechner, Finanzierungsmodelle, Anfrage, FAQ |
| `/ankauf` | Ablauf und Ankauf-/Bewertungsformular |
| `/ueber-uns` | Geschichte, Werte, Team, Kundenstimmen |
| `/kontakt` | Kontaktkanäle, Formular, Öffnungszeiten, farbige Karte (Leaflet + OpenStreetMap) |
| `/impressum`, `/datenschutz` | Rechtstexte (Platzhalter) |

Formulare senden an `POST /api/kontakt` (Demo-Route, loggt die Anfrage serverseitig – hier E-Mail-/CRM-Anbindung ergänzen).

## Technik

- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS v4, Framer Motion, lucide-react
- Leaflet mit OpenStreetMap-Kacheln für die farbige Karte
- Selbst gehostete Videos unter `public/videos` (Hero-Video: 1080p, 17 s, geschnitten aus mehreren Cinematic-Clips), Fotos unter `public/images`

## Inhalte anpassen

- Unternehmensdaten, Öffnungszeiten, Koordinaten: `lib/site.ts`
- Fahrzeugbestand: `lib/vehicles.ts`
- Farben/Design-Tokens: `app/globals.css` (`@theme`)

Bild- und Videomaterial stammt von Pexels (Pexels-Lizenz, kostenlos für kommerzielle Nutzung, keine Namensnennung erforderlich).
