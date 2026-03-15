import { COMPANY_FACTS } from '@/lib/constants';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function VisionMission() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 glow-divider" />

      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
          <div className="flex-1 space-y-12">
            <ScrollReveal>
              <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Vision</span>
              <p className="text-2xl md:text-3xl font-semibold text-white mt-3 leading-snug">
                Make every hotel <span className="gradient-text">intelligent</span> — starting with the ones the industry forgot.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">Mission</span>
              <p className="text-slate-300 mt-3 leading-relaxed text-lg">
                An integrated AI operating system for aparthotels, starting in high-growth emerging markets.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal className="flex-1" direction="right">
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-6">Key facts</h3>
            <div className="space-y-4">
              {COMPANY_FACTS.map((fact) => (
                <div key={fact.label} className="flex justify-between items-baseline border-b border-navy-700/50 pb-3 group">
                  <span className="text-slate-500 text-sm group-hover:text-slate-400 transition-colors">{fact.label}</span>
                  <span className="text-white text-sm font-medium text-right">{fact.value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
