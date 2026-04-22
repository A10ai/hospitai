import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

const PILOT_STATS = [
  { label: 'Units', value: '270' },
  { label: 'Built area', value: '~32K sqm' },
  { label: 'Opening', value: 'Summer 2027' },
  { label: 'Location', value: 'Hurghada, Egypt' },
];

export default function PilotTeaser() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 glow-divider" />

      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
          <div className="flex-1">
            <ScrollReveal>
              <SectionHeader
                label="Live testbed"
                heading="270-unit pilot under construction"
              />
              <p className="text-slate-400 mt-6 max-w-lg">
                Greenfield. Every system designed for AI from day one.
              </p>
              <Link
                to="/pilot"
                className="inline-flex items-center gap-2 mt-6 text-cyan-400 font-medium hover:text-cyan-300 transition-colors group"
              >
                Learn more
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              {PILOT_STATS.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <motion.div
                    className="relative bg-navy-800/40 border border-navy-700/50 rounded-xl p-6 backdrop-blur-sm group overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                      <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-cyan-400/30 to-transparent" />
                      <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-cyan-400/30 to-transparent" />
                    </div>
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                    <div className="text-slate-500 text-sm mt-1">{item.label}</div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
