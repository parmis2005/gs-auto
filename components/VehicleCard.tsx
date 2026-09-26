import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Fuel, Gauge, Settings2 } from "lucide-react";
import { formatKm, formatPrice, monthlyRate } from "@/lib/format";
import { ps, type Vehicle } from "@/lib/vehicles";

export default function VehicleCard({ v, priority = false }: { v: Vehicle; priority?: boolean }) {
  const rate = monthlyRate(v.price * 0.8, 4.49, 60);
  return (
    <Link
      href={`/fahrzeuge/${v.slug}`}
      className="card card-hover group flex flex-col overflow-hidden rounded-3xl"
      aria-label={`${v.brand} ${v.model} ansehen`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={v.images[0]}
          alt={`${v.brand} ${v.model} in ${v.color}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
        <div className="absolute left-4 right-4 top-4 flex flex-wrap gap-2">
          {v.oldPrice && (
            <span className="rounded-full bg-accent-500 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-ink-900">
              Preis gesenkt
            </span>
          )}
          {v.badges.slice(0, v.oldPrice ? 1 : 2).map((b) => (
            <span key={b} className="rounded-full bg-white/85 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-ink-900 backdrop-blur">
              {b}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">{v.brand}</p>
            <h3 className="font-display text-xl font-bold text-white">{v.model}</h3>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink-900 shadow-lg opacity-0 transition group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="line-clamp-1 text-sm text-slate-500">{v.variant}</p>
        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-700">
          <li className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent-400" />EZ {v.firstRegistration}</li>
          <li className="flex items-center gap-2"><Gauge className="h-4 w-4 text-accent-400" />{formatKm(v.mileage)}</li>
          <li className="flex items-center gap-2"><Fuel className="h-4 w-4 text-accent-400" />{v.fuel} · {ps(v.powerKw)} PS</li>
          <li className="flex items-center gap-2"><Settings2 className="h-4 w-4 text-accent-400" />{v.gearbox}</li>
        </ul>
        <div className="mt-5 flex items-end justify-between border-t border-ink-900/8 pt-4">
          <div>
            {v.oldPrice && <p className="text-xs text-slate-400 line-through">{formatPrice(v.oldPrice)}</p>}
            <p className="font-display text-2xl font-bold text-ink-900">{formatPrice(v.price)}</p>
          </div>
          <p className="text-right text-xs text-slate-500">
            ab <span className="font-semibold text-accent-600">{formatPrice(rate)}</span>/Monat*
          </p>
        </div>
      </div>
    </Link>
  );
}
