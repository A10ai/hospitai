import { MARKET_STATS } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';
import StatCard from '@/components/shared/StatCard';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function MarketOpportunity() {
  return (
    <section className="section-padding relative overflow-hidden aurora-bg">
      <div className="absolute top-0 left-0 right-0 glow-divider" />

      <div className="container-main relative">
        <ScrollReveal>
          <SectionHeader
            label="Market opportunity"
            heading="Massive market. Minimal tech adoption."
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-14">
          {MARKET_STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="relative p-6 rounded-xl bg-navy-800/40 border border-navy-700/50 backdrop-blur-sm group hover:border-cyan-400/20 transition-all duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <StatCard
                  value={stat.value}
                  label={stat.label}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isOrdinal={stat.isOrdinal}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
