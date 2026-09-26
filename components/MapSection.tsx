"use client";

import dynamic from "next/dynamic";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { site } from "@/lib/site";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-surface-2" />,
});

export default function MapSection() {
  return (
    <div className="grid overflow-hidden rounded-[2rem] border border-ink-900/10 lg:grid-cols-5">
      <div className="relative min-h-[360px] lg:col-span-3 lg:min-h-[520px]">
        <LeafletMap />
      </div>
      <div className="flex flex-col justify-between bg-white p-8 lg:col-span-2 lg:p-10">
        <div>
          <span className="eyebrow">Standort</span>
          <h3 className="font-display mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">Direkt an der A57 – 15 Minuten von Düsseldorf</h3>
          <ul className="mt-6 space-y-4 text-sm text-slate-600">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
              <span>
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
              <a href={site.phoneHref} className="hover:text-ink-900">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.day} className="block">
                    <span className="text-slate-700">{h.day}:</span> {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary mt-8 w-full"
        >
          <Navigation className="h-4 w-4" /> Route planen
        </a>
      </div>
    </div>
  );
}
