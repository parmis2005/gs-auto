import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</span>
      <h2 className={`font-display mt-4 text-3xl font-bold leading-[1.08] sm:text-4xl lg:text-5xl ${light ? "text-ink-900" : "text-ink-900"}`}>
        {title}
      </h2>
      {text && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-ink-500" : "text-slate-500"}`}>{text}</p>}
    </Reveal>
  );
}
