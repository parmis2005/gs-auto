import Image from "next/image";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  video,
  children,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image?: string;
  video?: { src: string; poster: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-36 pb-16 lg:pt-48 lg:pb-24">
      {video ? (
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster={video.poster} aria-hidden>
          <source src={video.src} type="video/mp4" />
        </video>
      ) : image ? (
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      ) : (
        <div className="grid-lines absolute inset-0 bg-ink-900" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/65 to-ink-950/50" />
      
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-transparent" />
      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="font-display mt-4 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">{title}</h1>
          {text && <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-200 sm:text-lg">{text}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
