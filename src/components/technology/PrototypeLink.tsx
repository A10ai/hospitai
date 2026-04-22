import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function PrototypeLink() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 glow-divider" />

      <div className="container-main relative max-w-3xl">
        <ScrollReveal>
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">See it in action</span>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mt-3">
            Our development platform is live and in active development.
          </h3>
          <a
            href="https://app.hospitai.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400/10 to-emerald-400/5 text-cyan-400 border border-cyan-400/20 hover:border-cyan-400/50 hover:from-cyan-400/20 hover:to-emerald-400/10 backdrop-blur-sm transition-all duration-300 text-base font-medium group"
          >
            View development platform
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-slate-500 text-sm mt-4 italic">
            This is a working development environment, not a polished demo. What you see is what we're actually building.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
