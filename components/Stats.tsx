"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { formatNumber } from "@/lib/format";
import { site } from "@/lib/site";

function Counter({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {formatNumber(n, decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-900/8 bg-ink-900/8 lg:grid-cols-4">
      {site.stats.map((s) => (
        <div key={s.label} className="bg-white p-7 lg:p-9">
          <div className="font-display text-4xl font-bold text-ink-900 lg:text-5xl">
            <Counter value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
          </div>
          <p className="mt-2 text-sm text-slate-500">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
