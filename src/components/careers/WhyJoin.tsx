import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FloatingOrbs from '@/components/shared/FloatingOrbs';

export default function WhyJoin() {
  return (
    <section className="section-padding pt-32 md:pt-40 relative overflow-hidden">
      <FloatingOrbs />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container-main relative">
        <ScrollReveal>
          <SectionHeader label="Join us" heading="Build something from zero" />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-slate-300 leading-relaxed text-lg mt-8 max-w-2xl">
            Ground floor. Real deployment. A 270-unit property under construction waiting for your models to run. UK-based, international impact.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="glow-divider mt-20" />
        </ScrollReveal>
      </div>
    </section>
  );
}
