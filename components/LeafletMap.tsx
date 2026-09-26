"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { site } from "@/lib/site";

export default function LeafletMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const map = L.map(ref.current, {
      center: [site.geo.lat, site.geo.lng],
      zoom: 14,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende',
    }).addTo(map);

    const icon = L.divIcon({
      className: "",
      html: '<div class="vantora-marker"><div class="pulse"></div><div class="dot"></div></div>',
      iconSize: [44, 44],
      iconAnchor: [22, 22],
      popupAnchor: [0, -20],
    });

    L.marker([site.geo.lat, site.geo.lng], { icon })
      .addTo(map)
      .bindPopup(
        `<strong style="font-size:15px">${site.name}</strong><br/>${site.address.street}<br/>${site.address.zip} ${site.address.city}<br/><a style="color:#5c93ff;font-weight:600" target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}">Route planen →</a>`,
      )
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={ref} className="h-full w-full" role="region" aria-label="Karte mit Standort des Autohauses" />;
}
