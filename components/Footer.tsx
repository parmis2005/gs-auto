import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Instagram = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const Facebook = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Youtube = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22.5 7.2a2.9 2.9 0 0 0-2-2C18.7 4.7 12 4.7 12 4.7s-6.7 0-8.5.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 1 12a30 30 0 0 0 .5 4.8 2.9 2.9 0 0 0 2 2c1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 23 12a30 30 0 0 0-.5-4.8z" /><path d="m10 15 5-3-5-3z" fill="currentColor" stroke="none" />
  </svg>
);
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-ink-900/6 bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
            {site.claim} Seit 2009 Ihr unabhängiges Autohaus für geprüfte Jahres- und Gebrauchtwagen aller Premium-Marken.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Instagram, href: site.social.instagram, label: "Instagram" },
              { icon: Facebook, href: site.social.facebook, label: "Facebook" },
              { icon: Youtube, href: site.social.youtube, label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/10 bg-ink-900/5 text-slate-700 transition hover:border-accent-500/60 hover:text-ink-900"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink-900">Navigation</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-slate-500 transition hover:text-ink-900">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink-900">Kontakt</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-500">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <span>
                {site.legalName}
                <br />
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <a href={site.phoneHref} className="hover:text-ink-900">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <a href={`mailto:${site.email}`} className="hover:text-ink-900">{site.email}</a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink-900">Öffnungszeiten</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-500">
            {site.hours.map((h) => (
              <li key={h.day} className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span>
                  <span className="block text-slate-700">{h.day}</span>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-900/6">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. Alle Rechte vorbehalten. Alle Angaben ohne Gewähr, Irrtümer und Zwischenverkauf vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-ink-900">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-ink-900">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
