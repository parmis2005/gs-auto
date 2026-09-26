import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function VideoSection({
  src,
  poster,
  eyebrow,
  title,
  text,
  cta,
  href,
  align = "left",
}: {
  src: string;
  poster: string;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  align?: "left" | "center";
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster={poster} aria-hidden>
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-ink-950/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 to-transparent" />
      <div className={`container-x relative py-28 lg:py-40 ${align === "center" ? "text-center" : ""}`}>
        <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          <span className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</span>
          <h2 className="font-display mt-4 text-3xl font-bold leading-[1.08] text-white sm:text-5xl">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-mist-200 sm:text-lg">{text}</p>
          <Link href={href} className="btn btn-light mt-8">
            {cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
