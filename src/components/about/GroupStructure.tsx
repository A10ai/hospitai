import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function GroupStructure() {
  return (
    <section className="section-padding relative overflow-hidden aurora-bg">
      <div className="container-main relative">
        <ScrollReveal>
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
            Technology company. Real-world deployment.
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl">
            HospitAI builds the intelligence layer. Our pilot customer provides
            the real-world environment where that intelligence is validated.
          </p>
        </ScrollReveal>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
          <ScrollReveal direction="left">
            <motion.div
              className="relative bg-navy-800/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl px-8 py-6 text-center w-full sm:w-auto sm:min-w-[240px] overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-cyan-400 font-semibold text-lg">HospitAI</div>
                <div className="text-slate-400 text-sm mt-2">AI platform & R&D</div>
                <div className="text-slate-600 text-xs mt-1">UK-registered · UK-developed IP</div>
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-12 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
              <ArrowRight size={16} className="text-cyan-400/40" />
              <div className="w-12 h-px bg-gradient-to-l from-cyan-400/30 to-transparent" />
            </div>
            <div className="sm:hidden w-px h-8 bg-gradient-to-b from-cyan-400/30 to-transparent" />
          </ScrollReveal>

          <ScrollReveal direction="right">
            <motion.div
              className="relative bg-navy-800/40 backdrop-blur-sm border border-navy-700/50 rounded-xl px-8 py-6 text-center w-full sm:w-auto sm:min-w-[240px] overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-white font-semibold text-lg">Bastet Hurghada</div>
                <div className="text-slate-400 text-sm mt-2">First pilot customer</div>
                <div className="text-slate-600 text-xs mt-1">270-unit aparthotel · Hurghada, Egypt</div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
