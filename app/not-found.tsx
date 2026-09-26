import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center pt-32 text-center">
      <span className="eyebrow">Fehler 404</span>
      <h1 className="font-display mt-4 text-5xl font-bold text-ink-900 sm:text-7xl">Sackgasse.</h1>
      <p className="mt-4 max-w-md text-slate-500">Diese Seite existiert nicht oder das Fahrzeug wurde bereits verkauft. Unser Bestand wächst täglich – schauen Sie gern erneut vorbei.</p>
      <Link href="/fahrzeuge" className="btn btn-primary mt-8">Zum Fahrzeugbestand</Link>
    </section>
  );
}
