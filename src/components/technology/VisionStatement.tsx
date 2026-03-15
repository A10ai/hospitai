import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FloatingOrbs from '@/components/shared/FloatingOrbs';

export default function VisionStatement() {
  return (
    <section className="section-padding pt-32 md:pt-40 relative overflow-hidden">
      <FloatingOrbs />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container-main relative">
        <ScrollReveal>
          <SectionHeader
            label="Our vision"
            heading="Why integrated AI matters in hospitality"
          />
        </ScrollReveal>
        <div className="mt-8 max-w-3xl space-y-5">
          <ScrollReveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed text-lg">
              Hotels run on dozens of disconnected systems. None share data. None learn from each other. That fragmentation is the barrier to intelligence.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-slate-300 leading-relaxed text-lg">
              We're building a unified AI layer where every system shares context. When one gets smarter, they all do.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="glow-divider mt-20" />
        </ScrollReveal>
      </div>
    </section>
  );
}
