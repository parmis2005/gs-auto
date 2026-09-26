export const site = {
  name: "VANTORA Automobile",
  legalName: "VANTORA Automobile GmbH",
  claim: "Premium-Gebrauchtwagen. Geprüft. Ehrlich. Direkt.",
  description:
    "VANTORA Automobile – Ihr Autohaus für geprüfte Jahres- und Gebrauchtwagen in Westerfeld am Rhein. Finanzierung, Garantie, Inzahlungnahme und Werkstattservice aus einer Hand.",
  url: "https://vantora-automobile.de",
  phone: "0800 826 8672",
  phoneHref: "tel:+498008268672",
  whatsapp: "0151 000 826 86",
  whatsappHref: "https://wa.me/4915100082686",
  email: "kontakt@vantora-automobile.de",
  address: {
    street: "Ahornallee 24",
    zip: "47999",
    city: "Westerfeld am Rhein",
    region: "Nordrhein-Westfalen",
    country: "Deutschland",
  },
  geo: { lat: 51.3287, lng: 6.6412 },
  hours: [
    { day: "Montag – Freitag", time: "09:00 – 19:00 Uhr" },
    { day: "Samstag", time: "09:00 – 16:00 Uhr" },
    { day: "Sonntag", time: "Schautag (keine Beratung)" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
  stats: [
    { value: 120, suffix: "+", label: "Fahrzeuge sofort verfügbar" },
    { value: 4800, suffix: "+", label: "Zufriedene Kundinnen & Kunden" },
    { value: 4.9, suffix: "", label: "Ø Bewertung aus 1.240 Rezensionen", decimals: 1 },
    { value: 24, suffix: " Mon.", label: "Garantie auf Wunsch" },
  ],
};

export const nav = [
  { href: "/fahrzeuge", label: "Fahrzeuge" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/finanzierung", label: "Finanzierung" },
  { href: "/ankauf", label: "Ankauf" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];
