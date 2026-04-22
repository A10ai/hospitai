import { Link } from 'react-router-dom';
import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-navy-700/50 bg-navy-950">
      <div className="container-main py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <Link to="/" className="text-xl font-bold text-white">
              Hospit<span className="text-cyan-400">AI</span>
            </Link>
            <p className="text-slate-500 text-sm mt-3 max-w-xs">
              The AI operating system for hotels.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[...NAV_LINKS, { label: 'Contact', href: '/contact' }].map(
              (link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} HospitAI Ltd (Company No. 17129584). All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            hello@hospitai.uk
          </p>
        </div>
      </div>
    </footer>
  );
}
