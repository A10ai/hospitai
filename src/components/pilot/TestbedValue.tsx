import { TESTBED_REASONS } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { CheckCircle } from 'lucide-react';

export default function TestbedValue() {
  return (
    <section className="section-padding relative overflow-hidden aurora-bg">
      <div className="absolute top-0 left-0 right-0 glow-divider" />

      <div className="container-main relative">
        <div className="max-w-2xl">
          <ScrollReveal>
            <SectionHeader
              label="Why this property"
              heading="The ideal proving ground"
            />
          </ScrollReveal>

          <ul className="mt-10 space-y-5">
            {TESTBED_REASONS.map((reason, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <li className="flex items-start gap-4 group">
                  <CheckCircle size={20} className="text-emerald-400 mt-0.5 shrink-0 group-hover:drop-shadow-[0_0_6px_rgba(52,211,153,0.4)] transition-all" />
                  <span className="text-slate-300 leading-relaxed">{reason}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
