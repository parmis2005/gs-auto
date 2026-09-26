const items = ["BMW", "Mercedes-Benz", "Audi", "Porsche", "Volkswagen", "Tesla", "Land Rover", "MINI", "Škoda", "Volvo"];

export default function Brands() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink-900/6 bg-white/60 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
      <div className="flex w-max animate-marquee gap-14 whitespace-nowrap px-7">
        {row.map((b, i) => (
          <span key={i} className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-slate-400 transition hover:text-ink-900">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
