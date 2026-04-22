import ScrollReveal from '@/components/shared/ScrollReveal';

export default function Leadership() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 glow-divider" />

      <div className="container-main relative max-w-3xl">
        <ScrollReveal>
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Leadership</span>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mt-3">
            Ibrahim Hassan
          </h3>
          <p className="text-emerald-400 text-sm font-medium mt-2">Founder & CEO</p>
          <p className="text-slate-300 leading-relaxed mt-6">
            20+ years building and operating hospitality and retail businesses across the UK and Egypt. CEO of Senzo Mall (170,000 sqm, Hurghada) and developer of a 270-unit aparthotel currently under construction.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            HospitAI was born from a simple frustration: hotels run on dozens of disconnected systems that don't talk to each other. Having built and operated properties firsthand, Ibrahim is building the platform he wished existed.
          </p>
          <p className="text-slate-500 text-sm mt-6">Based in Manchester, UK</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
