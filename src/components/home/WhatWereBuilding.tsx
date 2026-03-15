import { WHAT_WERE_BUILDING } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function WhatWereBuilding() {
  return (
    <section className="section-padding aurora-bg relative">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="container-main relative">
        <ScrollReveal>
          <SectionHeader
            label={WHAT_WERE_BUILDING.label}
            heading={WHAT_WERE_BUILDING.heading}
          />
        </ScrollReveal>
        <div className="mt-10 max-w-3xl space-y-6">
          {WHAT_WERE_BUILDING.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <p className="text-slate-300 leading-relaxed text-lg">{p}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Visual accent - glowing divider */}
        <ScrollReveal delay={0.3}>
          <div className="glow-divider mt-20" />
        </ScrollReveal>
      </div>
    </section>
  );
}
