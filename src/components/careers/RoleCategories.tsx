import { WHAT_WE_OFFER } from '@/lib/constants';
import GlowCard from '@/components/shared/GlowCard';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { CheckCircle } from 'lucide-react';

const TEAM_AREAS = [
  'AI & Machine Learning',
  'Data Engineering',
  'Full-Stack Development',
  'Product & Domain',
  'Leadership',
];

export default function RoleCategories() {
  return (
    <section className="section-padding relative overflow-hidden aurora-bg">
      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex-1">
            <ScrollReveal>
              <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
                Team areas
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
                Where we're growing
              </h2>
              <p className="text-slate-400 mt-4">
                We're building across these disciplines. If any resonate, get in touch.
              </p>
            </ScrollReveal>

            <div className="mt-8 flex flex-wrap gap-3">
              {TEAM_AREAS.map((area, i) => (
                <ScrollReveal key={area} delay={i * 0.06}>
                  <GlowCard className="px-5 py-3">
                    <span className="text-white text-sm font-medium">{area}</span>
                  </GlowCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal className="lg:w-80 lg:pt-20" direction="right">
            <h3 className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-6">What we offer</h3>
            <ul className="space-y-5">
              {WHAT_WE_OFFER.map((item) => (
                <li key={item} className="flex items-start gap-3 group">
                  <CheckCircle size={16} className="text-emerald-400 mt-0.5 shrink-0 group-hover:drop-shadow-[0_0_6px_rgba(52,211,153,0.4)] transition-all" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
