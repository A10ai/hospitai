import { CAPABILITIES } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';
import GlowCard from '@/components/shared/GlowCard';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function CapabilitiesGrid() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(34, 211, 238, 0.04) 0%, transparent 60%)',
        }}
      />

      <div className="container-main relative">
        <ScrollReveal>
          <SectionHeader
            label="Capability areas"
            heading="Six integrated systems. One intelligence layer."
            description="Each capability area is powerful alone — but transformative when connected through a shared data and intelligence layer."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <ScrollReveal key={cap.title} delay={i * 0.08}>
                <GlowCard>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/15 to-cyan-400/5 flex items-center justify-center border border-cyan-400/10">
                      <Icon size={20} className="text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </GlowCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
