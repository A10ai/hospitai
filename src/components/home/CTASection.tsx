import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FloatingOrbs from '@/components/shared/FloatingOrbs';

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <FloatingOrbs />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 glow-divider" />

      <div className="container-main relative text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get in touch
          </h2>
          <p className="text-slate-400 mt-4 max-w-md mx-auto">
            Research, funding, or technical interest — let's talk.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400/10 to-emerald-400/5 text-cyan-400 border border-cyan-400/20 hover:border-cyan-400/50 hover:from-cyan-400/20 hover:to-emerald-400/10 transition-all duration-300 text-base font-medium group"
          >
            Contact us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
