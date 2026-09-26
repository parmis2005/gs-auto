"use client";

import { useMemo, useState } from "react";
import { formatPrice, monthlyRate } from "@/lib/format";

export default function FinanceCalculator({ price = 34900, compact = false }: { price?: number; compact?: boolean }) {
  const [amount, setAmount] = useState(price);
  const [down, setDown] = useState(Math.round(price * 0.2));
  const [months, setMonths] = useState(60);
  const [balloon, setBalloon] = useState(0);
  const apr = 4.49;

  const result = useMemo(() => {
    const principal = Math.max(0, amount - down);
    const r = apr / 100 / 12;
    const balloonPV = balloon / Math.pow(1 + r, months);
    const rate = monthlyRate(Math.max(0, principal - balloonPV), apr, months);
    const total = rate * months + down + balloon;
    return { rate, total, principal, interest: total - amount };
  }, [amount, down, months, balloon]);

  const pct = (v: number, min: number, max: number) => `${((v - min) / (max - min)) * 100}%`;

  return (
    <div className={`grid gap-8 ${compact ? "" : "lg:grid-cols-5"}`}>
      <div className={`space-y-6 ${compact ? "" : "lg:col-span-3"}`}>
        {!compact && (
          <label className="block">
            <div className="flex justify-between text-sm"><span className="text-slate-500">Fahrzeugpreis</span><span className="font-semibold text-ink-900">{formatPrice(amount)}</span></div>
            <input type="range" min={10000} max={160000} step={500} value={amount} onChange={(e) => { const v = Number(e.target.value); setAmount(v); if (down > v) setDown(v); }} className="range mt-3" style={{ ["--p" as string]: pct(amount, 10000, 160000) }} />
          </label>
        )}
        <label className="block">
          <div className="flex justify-between text-sm"><span className="text-slate-500">Anzahlung</span><span className="font-semibold text-ink-900">{formatPrice(down)}</span></div>
          <input type="range" min={0} max={amount} step={500} value={down} onChange={(e) => setDown(Number(e.target.value))} className="range mt-3" style={{ ["--p" as string]: pct(down, 0, amount) }} />
        </label>
        <label className="block">
          <div className="flex justify-between text-sm"><span className="text-slate-500">Laufzeit</span><span className="font-semibold text-ink-900">{months} Monate</span></div>
          <input type="range" min={12} max={96} step={12} value={months} onChange={(e) => setMonths(Number(e.target.value))} className="range mt-3" style={{ ["--p" as string]: pct(months, 12, 96) }} />
        </label>
        <label className="block">
          <div className="flex justify-between text-sm"><span className="text-slate-500">Schlussrate (optional)</span><span className="font-semibold text-ink-900">{formatPrice(balloon)}</span></div>
          <input type="range" min={0} max={Math.round(amount * 0.5)} step={500} value={balloon} onChange={(e) => setBalloon(Number(e.target.value))} className="range mt-3" style={{ ["--p" as string]: pct(balloon, 0, Math.max(1, Math.round(amount * 0.5))) }} />
        </label>
      </div>
      <div className={`card rounded-3xl p-7 ${compact ? "" : "lg:col-span-2"}`}>
        <p className="text-sm text-slate-500">Ihre monatliche Rate</p>
        <p className="font-display mt-1 text-5xl font-bold text-ink-900">{formatPrice(result.rate)}</p>
        <dl className="mt-6 space-y-2 border-t border-ink-900/8 pt-5 text-sm">
          <div className="flex justify-between"><dt className="text-slate-500">Nettodarlehensbetrag</dt><dd className="text-ink-900">{formatPrice(result.principal)}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Eff. Jahreszins</dt><dd className="text-ink-900">{apr.toLocaleString("de-DE")} %</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Sollzins p. a. (gebunden)</dt><dd className="text-ink-900">4,40 %</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Gesamtbetrag</dt><dd className="text-ink-900">{formatPrice(result.total)}</dd></div>
        </dl>
        <p className="mt-5 text-[0.7rem] leading-relaxed text-slate-400">
          Unverbindliches Beispiel, Bonität vorausgesetzt. Vermittlung erfolgt ausschließlich für unsere Partnerbanken. Repräsentatives Beispiel gem. § 17 PAngV.
        </p>
      </div>
    </div>
  );
}
