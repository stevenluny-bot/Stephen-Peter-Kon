import { ArrowUp, Mail, Linkedin, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-800 py-10 text-sm text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <BrandLogo size="sm" />
              <span className="text-base font-bold text-white">
                {PERSONAL_INFO.fullName}
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              {PERSONAL_INFO.title}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send email"
              className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {PERSONAL_INFO.fullName}. All rights reserved.</span>
            <span aria-hidden="true">/</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3 h-3 text-zinc-400" />
              {PERSONAL_INFO.location}
            </span>
          </div>

          <div className="text-zinc-400 font-mono text-[11px]">
            Built with curiosity, clarity, and purpose.
          </div>
        </div>
      </div>
    </footer>
  );
}
