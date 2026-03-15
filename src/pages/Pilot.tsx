import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FloatingOrbs from '@/components/shared/FloatingOrbs';
import PropertyOverview from '@/components/pilot/PropertyOverview';
import Timeline from '@/components/pilot/Timeline';
import TestbedValue from '@/components/pilot/TestbedValue';

export default function Pilot() {
  return (
    <>
      <section className="section-padding pt-32 md:pt-40 relative overflow-hidden">
        <FloatingOrbs />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-main relative">
          <ScrollReveal>
            <SectionHeader
              label="Pilot project"
              heading="A real-world testbed for hotel intelligence"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-slate-300 leading-relaxed text-lg mt-8 max-w-2xl">
              270 units. Under construction. Every system designed for AI from day one. The ideal proving ground.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glow-divider mt-20" />
          </ScrollReveal>
        </div>
      </section>

      <PropertyOverview />
      <Timeline />
      <TestbedValue />
    </>
  );
}
