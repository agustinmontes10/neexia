"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/app/lib/landing-data";
import AnimatedMetric from "./AnimatedMetric";

/**
 * Results strip under the hero. Replaces the old placeholder client-logos row
 * ("cliente 1..5") — until real client logos exist, hard numbers from the case
 * studies are the credibility signal here.
 */
export default function Resultados() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-12 pb-16 sm:pb-24">
      <div
        ref={ref}
        className={`reveal ${visible ? "reveal-visible" : ""} rounded-[24px] border border-[#F0F0F0] bg-gradient-to-b from-gray-light/50 to-white px-6 py-10 sm:px-12`}
      >
        <p className="text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-[#999999] mb-8">
          Impacto real en negocios como el tuyo
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center gap-2 ${
                i > 0 ? "lg:border-l lg:border-[#ECECEC]" : ""
              }`}
            >
              <div className="text-[40px] sm:text-[48px] leading-none font-extrabold tracking-[-0.02em] tabular-nums bg-gradient-to-br from-brand-light via-brand to-brand-dark bg-clip-text text-transparent">
                <AnimatedMetric value={stat.value} active={visible} />
              </div>
              <p className="text-[14px] text-[#666666] leading-snug max-w-[200px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
