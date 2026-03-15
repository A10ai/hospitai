import { PILOT_FACTS, PILOT_TARGETS } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';
import GlowCard from '@/components/shared/GlowCard';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function PropertyOverview() {
  return (
    <section className="section-padding relative overflow-hidden aurora-bg">
      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <ScrollReveal className="flex-1" direction="left">
            <SectionHeader label="Property overview" heading="Key facts" />
            <div className="mt-8 space-y-4">
              {Object.entries({
                Units: `${PILOT_FACTS.units} — ${PILOT_FACTS.breakdown}`,
                'Built area': PILOT_FACTS.area,
                Location: PILOT_FACTS.location,
                Structure: PILOT_FACTS.floors,
                Opening: PILOT_FACTS.opening,
              }).map(([key, value]) => (
                <div key={key} className="flex justify-between items-baseline border-b border-navy-700/50 pb-3 group">
                  <span className="text-slate-500 text-sm group-hover:text-slate-400 transition-colors">{key}</span>
                  <span className="text-white text-sm font-medium text-right">{value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex-1" direction="right">
            <h3 className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-2">
              What we're measuring
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Targets — not results. Real data comes from the pilot.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PILOT_TARGETS.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <GlowCard className="p-5">
                    <div className="text-white font-semibold text-sm">{item.label}</div>
                    <div className="text-slate-400 text-xs mt-2 leading-relaxed">{item.description}</div>
                  </GlowCard>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
