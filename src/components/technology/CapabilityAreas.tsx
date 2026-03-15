import { CAPABILITIES } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function CapabilityAreas() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="container-main relative">
        <ScrollReveal>
          <SectionHeader
            label="R&D directions"
            heading="Capability deep dives"
          />
        </ScrollReveal>

        <div className="mt-14 space-y-6">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <ScrollReveal key={cap.title} delay={i * 0.05}>
                <div className="relative rounded-xl overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="bg-navy-800/40 backdrop-blur-sm border border-navy-700/50 hover:border-cyan-400/20 rounded-xl p-8 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/3">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/15 to-cyan-400/5 flex items-center justify-center border border-cyan-400/10">
                            <Icon size={20} className="text-cyan-400" />
                          </div>
                          <h3 className="text-xl font-semibold text-white">
                            {cap.title}
                          </h3>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {cap.problem}
                        </p>
                      </div>

                      <div className="lg:w-1/3">
                        <h4 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-2">
                          Approach
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {cap.approach}
                        </p>
                      </div>

                      <div className="lg:w-1/3">
                        <h4 className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-2">
                          Integration
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {cap.integration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
