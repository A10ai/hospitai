import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

const RESEARCH_PILLARS = [
  { number: '01', title: 'Build in the real world', description: 'Every model validated against live data. No synthetic benchmarks.' },
  { number: '02', title: 'Integration-first', description: 'We don\'t build features then connect them — we build connected.' },
  { number: '03', title: 'Collaborate openly', description: 'University partnerships and shared research.' },
  { number: '04', title: 'Deploy where impact is greatest', description: 'Emerging markets where efficiency gains change the economics.' },
];

export default function RDRoadmap() {
  return (
    <section className="section-padding relative overflow-hidden aurora-bg">
      <div className="absolute top-0 left-0 right-0 glow-divider" />

      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex-1">
            <ScrollReveal>
              <SectionHeader
                label="R&D approach"
                heading="UK-based research, international deployment"
              />
              <p className="text-slate-300 leading-relaxed mt-8">
                R&D in the UK. IP owned domestically. Every model validated against live operational data from our pilot.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                Open to university collaborations and academic partnerships in reinforcement learning, NLP, IoT analytics, and computer vision.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex-1">
            <ScrollReveal direction="right">
              <h3 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-8">
                Research principles
              </h3>
              <div className="space-y-6">
                {RESEARCH_PILLARS.map((pillar, i) => (
                  <ScrollReveal key={pillar.number} delay={i * 0.1}>
                    <div className="flex gap-5 group">
                      <span className="text-4xl font-bold text-navy-700 group-hover:text-cyan-400/30 transition-colors duration-500 font-mono leading-none pt-1 select-none">
                        {pillar.number}
                      </span>
                      <div>
                        <h4 className="text-white font-semibold text-lg">{pillar.title}</h4>
                        <p className="text-slate-400 text-sm mt-1 leading-relaxed">{pillar.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
