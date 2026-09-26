import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { vehicles } from "@/lib/vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/fahrzeuge", "/leistungen", "/finanzierung", "/ankauf", "/ueber-uns", "/kontakt"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
  }));
  const cars = vehicles.map((v) => ({ url: `${site.url}/fahrzeuge/${v.slug}`, lastModified: new Date() }));
  return [...pages, ...cars];
}
