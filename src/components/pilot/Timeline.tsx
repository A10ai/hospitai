import { PILOT_TIMELINE } from '@/lib/constants';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function Timeline() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="container-main relative">
        <ScrollReveal>
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
            Development timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
            From structure to intelligence
          </h2>
        </ScrollReveal>

        <div className="mt-14 relative">
          {/* Animated vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-navy-700" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 to-emerald-400"
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </div>

          <div className="space-y-12">
            {PILOT_TIMELINE.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative pl-14 md:pl-20">
                  {/* Animated dot */}
                  <motion.div
                    className="absolute left-2 md:left-6 top-1.5"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2, type: 'spring' }}
                  >
                    <div className="w-4 h-4 rounded-full bg-cyan-400 border-[3px] border-navy-950 shadow-[0_0_12px_rgba(34,211,238,0.4)]" />
                  </motion.div>

                  <div className="font-mono text-sm text-cyan-400 mb-1">
                    {item.date}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1 max-w-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
