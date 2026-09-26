import Link from "next/link";

export default function Logo({ className = "", light = false, onClick }: { className?: string; light?: boolean; onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className={`group inline-flex items-center gap-3 ${className}`} aria-label="VANTORA Automobile – Startseite">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-accent-500 to-cyan-400 shadow-[0_8px_24px_-8px_rgba(61,123,255,.8)]">
        <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none" aria-hidden>
          <path d="M6 10h8l6 14 6-14h8L26 32h-12L6 10z" fill="white" />
          <path d="M14 32h12" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".5" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.15rem] font-bold tracking-[0.14em] ${light ? "text-white" : "text-ink-900"}`}>VANTORA</span>
        <span className={`text-[0.62rem] font-medium uppercase tracking-[0.32em] ${light ? "text-white/60" : "text-slate-500"}`}>Automobile</span>
      </span>
    </Link>
  );
}
