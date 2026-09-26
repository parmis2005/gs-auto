import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import VehicleGrid from "@/components/VehicleGrid";
import CTA from "@/components/CTA";
import { vehicles } from "@/lib/vehicles";

export const metadata: Metadata = {
  title: "Fahrzeugbestand – Geprüfte Gebrauchtwagen & Jahreswagen",
  description: "Über 120 DEKRA-geprüfte Gebrauchtwagen von BMW, Mercedes-Benz, Audi, Porsche, VW und Tesla. Mit Garantie und Finanzierung.",
};

export default async function VehiclesPage(props: PageProps<"/fahrzeuge">) {
  const sp = await props.searchParams;
  const marke = typeof sp.marke === "string" ? sp.marke : "";
  return (
    <>
      <PageHero
        eyebrow="Fahrzeugbestand"
        title="Geprüfte Fahrzeuge. Faire Preise. Sofort verfügbar."
        text="Jedes Fahrzeug mit DEKRA-Gutachten, lückenloser Historie und mindestens 12 Monaten Garantie. Filtern Sie nach Marke, Kraftstoff oder Budget."
        video={{ src: "/videos/showroom.mp4", poster: "/videos/showroom-poster.jpg" }}
      />
      <section className="container-x -mt-4 pb-8">
        <VehicleGrid vehicles={vehicles} initialBrand={marke} />
      </section>
      <div className="pt-16">
        <CTA />
      </div>
    </>
  );
}
