import { useState, FormEvent } from 'react';

export default function RegisterInterest() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const linkedin = data.get('linkedin') as string;
    const note = data.get('note') as string;

    const subject = encodeURIComponent(`Interest from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nLinkedIn: ${linkedin}\n\n${note}`
    );
    window.location.href = `mailto:hello@hospitai.co.uk?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-navy-950">
      <div className="container-main max-w-2xl">
        <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
          Register interest
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
          Get on our radar
        </h2>
        <p className="text-slate-400 mt-4">
          Not a formal application — just a way to let us know you're
          interested. We'll reach out when roles open.
        </p>

        {submitted ? (
          <div className="mt-8 p-6 bg-navy-800/50 border border-emerald-400/20 rounded-lg">
            <p className="text-emerald-400 font-medium">
              Thanks for your interest. Your email client should have opened
              with a pre-filled message — just hit send.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="text-sm text-slate-400 block mb-1.5">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-navy-800/50 border border-navy-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 block mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-navy-800/50 border border-navy-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 block mb-1.5">
                LinkedIn URL
              </label>
              <input
                type="url"
                name="linkedin"
                className="w-full bg-navy-800/50 border border-navy-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 transition-colors"
                placeholder="https://linkedin.com/in/..."
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 block mb-1.5">
                Brief note
              </label>
              <textarea
                name="note"
                rows={3}
                className="w-full bg-navy-800/50 border border-navy-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 transition-colors resize-none"
                placeholder="What interests you about HospitAI?"
              />
            </div>
            <button
              type="submit"
              className="px-7 py-3 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 hover:bg-cyan-400/20 hover:border-cyan-400/40 transition-all font-medium"
            >
              Register interest
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
