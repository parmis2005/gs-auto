"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import VehicleCard from "./VehicleCard";
import { formatPrice } from "@/lib/format";
import { brands, type Vehicle } from "@/lib/vehicles";

type Sort = "featured" | "price-asc" | "price-desc" | "km-asc" | "year-desc";

const bodies = ["Limousine", "Kombi", "SUV", "Coupé", "Cabrio", "Kompakt", "Sportwagen"];
const fuels = ["Benzin", "Diesel", "Hybrid", "Elektro"];

export default function VehicleGrid({ vehicles, initialBrand = "" }: { vehicles: Vehicle[]; initialBrand?: string }) {
  const [q, setQ] = useState("");
  const [brand, setBrand] = useState(initialBrand);
  const [body, setBody] = useState("");
  const [fuel, setFuel] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [maxPrice, setMaxPrice] = useState(160000);
  const [sort, setSort] = useState<Sort>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    let out = vehicles.filter(
      (v) =>
        (!term || `${v.brand} ${v.model} ${v.variant}`.toLowerCase().includes(term)) &&
        (!brand || v.brand === brand) &&
        (!body || v.body === body) &&
        (!fuel || v.fuel === fuel) &&
        (!gearbox || v.gearbox === gearbox) &&
        v.price <= maxPrice,
    );
    out = [...out].sort((a, b) => {
      switch (sort) {
        case "price-asc": return a.price - b.price;
        case "price-desc": return b.price - a.price;
        case "km-asc": return a.mileage - b.mileage;
        case "year-desc": return b.year - a.year;
        default: return Number(!!b.featured) - Number(!!a.featured);
      }
    });
    return out;
  }, [vehicles, q, brand, body, fuel, gearbox, maxPrice, sort]);

  const reset = () => {
    setQ(""); setBrand(""); setBody(""); setFuel(""); setGearbox(""); setMaxPrice(160000); setSort("featured");
  };
  const activeCount = [brand, body, fuel, gearbox].filter(Boolean).length + (maxPrice < 160000 ? 1 : 0);

  return (
    <div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Marke, Modell oder Ausstattung suchen…"
            className="input !pl-11"
            aria-label="Fahrzeuge durchsuchen"
          />
        </label>
        <div className="flex gap-3">
          <button
            onClick={() => setShowFilters((s) => !s)}
            className="btn btn-ghost !py-3 lg:hidden"
            aria-expanded={showFilters}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filter {activeCount > 0 && <span className="rounded-full bg-accent-500 px-2 text-xs">{activeCount}</span>}
          </button>
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="input !w-auto" aria-label="Sortierung">
            <option value="featured">Empfohlen</option>
            <option value="price-asc">Preis aufsteigend</option>
            <option value="price-desc">Preis absteigend</option>
            <option value="km-asc">Laufleistung</option>
            <option value="year-desc">Neueste zuerst</option>
          </select>
        </div>
      </div>

      <div className={`${showFilters ? "grid" : "hidden"} mt-4 gap-3 rounded-2xl border border-ink-900/8 bg-ink-900/[0.03] p-4 sm:grid-cols-2 lg:mt-4 lg:grid lg:grid-cols-5 lg:items-end`}>
        <label className="text-xs text-slate-500">
          Marke
          <select value={brand} onChange={(e) => setBrand(e.target.value)} className="input mt-1">
            <option value="">Alle Marken</option>
            {brands.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </label>
        <label className="text-xs text-slate-500">
          Karosserie
          <select value={body} onChange={(e) => setBody(e.target.value)} className="input mt-1">
            <option value="">Alle</option>
            {bodies.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </label>
        <label className="text-xs text-slate-500">
          Kraftstoff
          <select value={fuel} onChange={(e) => setFuel(e.target.value)} className="input mt-1">
            <option value="">Alle</option>
            {fuels.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </label>
        <label className="text-xs text-slate-500">
          Getriebe
          <select value={gearbox} onChange={(e) => setGearbox(e.target.value)} className="input mt-1">
            <option value="">Alle</option>
            <option value="Automatik">Automatik</option>
            <option value="Schaltgetriebe">Schaltgetriebe</option>
          </select>
        </label>
        <label className="text-xs text-slate-500">
          Preis bis <span className="font-semibold text-ink-900">{formatPrice(maxPrice)}</span>
          <input
            type="range"
            min={20000}
            max={160000}
            step={1000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="range mt-4"
            style={{ ["--p" as string]: `${((maxPrice - 20000) / 140000) * 100}%` }}
          />
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
        <p>
          <span className="font-semibold text-ink-900">{list.length}</span> {list.length === 1 ? "Fahrzeug" : "Fahrzeuge"} gefunden
        </p>
        {(activeCount > 0 || q) && (
          <button onClick={reset} className="flex items-center gap-1 text-accent-600 hover:text-ink-900">
            <X className="h-4 w-4" /> Filter zurücksetzen
          </button>
        )}
      </div>

      <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((v, i) => (
            <motion.div
              key={v.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.3) }}
            >
              <VehicleCard v={v} priority={i < 3} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {list.length === 0 && (
        <div className="card mt-6 rounded-3xl p-12 text-center">
          <p className="font-display text-2xl font-semibold text-ink-900">Kein passendes Fahrzeug gefunden</p>
          <p className="mt-2 text-slate-500">Passen Sie die Filter an – oder nutzen Sie unseren kostenlosen Fahrzeug-Suchauftrag.</p>
          <button onClick={reset} className="btn btn-primary mt-6">Filter zurücksetzen</button>
        </div>
      )}
      <p className="mt-8 text-xs leading-relaxed text-slate-400">
        * Beispielrechnung: 20 % Anzahlung, 60 Monate Laufzeit, 4,49 % eff. Jahreszins, Bonität vorausgesetzt. Unverbindliches Finanzierungsbeispiel unserer Partnerbank.
      </p>
    </div>
  );
}
