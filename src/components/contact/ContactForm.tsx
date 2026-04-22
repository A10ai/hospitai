import { useState, FormEvent } from 'react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FloatingOrbs from '@/components/shared/FloatingOrbs';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const org = data.get('organisation') as string;
    const message = data.get('message') as string;

    const subject = encodeURIComponent(`Contact from ${name} — ${org}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nOrganisation: ${org}\n\n${message}`);
    window.location.href = `mailto:hello@hospitai.uk?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClasses =
    'w-full bg-navy-800/40 backdrop-blur-sm border border-navy-700/80 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 focus:shadow-[0_0_12px_rgba(34,211,238,0.08)] transition-all duration-300';

  return (
    <section className="section-padding pt-32 md:pt-40 relative overflow-hidden">
      <FloatingOrbs />
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="container-main relative">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
          <ScrollReveal className="flex-1" direction="left">
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Contact</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">Let's talk</h2>
            <p className="text-slate-400 mt-6 leading-relaxed max-w-md">
              Research partnerships, funding, or technical interest — we'd like to hear from you.
            </p>
            <div className="mt-8 p-4 rounded-xl bg-navy-800/30 border border-navy-700/50 backdrop-blur-sm inline-block">
              <div className="text-slate-500 text-sm">Email</div>
              <div className="text-white mt-1 font-mono text-sm">hello@hospitai.uk</div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex-1 max-w-lg" direction="right">
            {submitted ? (
              <div className="p-8 bg-navy-800/40 backdrop-blur-sm border border-emerald-400/20 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-emerald-400/10 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <p className="text-emerald-400 font-medium text-lg">Message prepared</p>
                <p className="text-slate-400 mt-2">Your email client should have opened — just hit send.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm text-slate-400 block mb-1.5">Name</label>
                  <input type="text" name="name" required className={inputClasses} placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-slate-400 block mb-1.5">Email</label>
                  <input type="email" name="email" required className={inputClasses} placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm text-slate-400 block mb-1.5">Organisation</label>
                  <input type="text" name="organisation" className={inputClasses} placeholder="University, company, or fund" />
                </div>
                <div>
                  <label className="text-sm text-slate-400 block mb-1.5">Message</label>
                  <textarea name="message" required rows={4} className={`${inputClasses} resize-none`} placeholder="What would you like to discuss?" />
                </div>
                <button type="submit" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400/10 to-emerald-400/5 text-cyan-400 border border-cyan-400/20 hover:border-cyan-400/50 hover:from-cyan-400/20 hover:to-emerald-400/10 transition-all duration-300 font-medium">
                  Send message
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
