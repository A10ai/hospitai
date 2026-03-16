import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { HERO } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${import.meta.env.BASE_URL}hero-bg.mp4`} type="video/mp4" />
        </video>

        {/* Overlays for readability + brand tint */}
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />

        {/* Subtle cyan tint to tie video to brand */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(34, 211, 238, 0.08) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="container-main relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">
                In active development
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="text-white">The </span>
            <span className="gradient-text">AI operating system</span>
            <span className="text-white"> for hotels</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-300 mt-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Link
              to={HERO.cta.href}
              className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400/10 to-emerald-400/5 text-cyan-400 border border-cyan-400/20 hover:border-cyan-400/50 hover:from-cyan-400/20 hover:to-emerald-400/10 backdrop-blur-sm transition-all duration-300 text-base font-medium group relative overflow-hidden"
            >
              <span className="relative z-10">{HERO.cta.label}</span>
              <ArrowRight
                size={18}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          {/* Floating stat badges */}
          <motion.div
            className="flex flex-wrap gap-6 mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {[
              { value: '187K', label: 'Hotels globally' },
              { value: '$220B', label: 'Market by 2030' },
              { value: '270', label: 'Unit pilot live' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-navy-800/40 border border-navy-700/50 backdrop-blur-md"
              >
                <span className="text-white font-bold font-mono">
                  {stat.value}
                </span>
                <span className="text-slate-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
