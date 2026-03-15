import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FloatingOrbs from '@/components/shared/FloatingOrbs';

export default function CompanyStory() {
  return (
    <section className="section-padding pt-32 md:pt-40 relative overflow-hidden">
      <FloatingOrbs />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container-main relative">
        <ScrollReveal>
          <SectionHeader
            label="About HospitAI"
            heading="Save energy. Cut costs. Elevate service."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-slate-300 leading-relaxed text-lg mt-8 max-w-2xl">
            One AI layer connecting every hotel system — reducing energy waste, lowering operational costs, increasing efficiency, and delivering a better guest experience.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="glow-divider mt-20" />
        </ScrollReveal>
      </div>
    </section>
  );
}
