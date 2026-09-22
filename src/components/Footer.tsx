import React from 'react';
import { ArrowUp, Sparkles, ExternalLink, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GlowingWaves } from './GlowingWaves';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative pt-20 pb-12 overflow-hidden bg-[#02050d] dark:bg-[#02050d] light:bg-slate-900 text-slate-400 select-none border-t border-cyan-500/20">
      {/* Glowing Waves on Footer Top */}
      <GlowingWaves position="top" className="opacity-60" />

      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-cyan-500/15">
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-xs text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                AC
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.displayName} — {PERSONAL_INFO.professionalTitle}
              </h3>
            </div>
            <p className="text-xs font-mono text-cyan-400/80">
              Building, learning, and creating one project at a time.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            id="scroll-to-top-btn"
            aria-label="Scroll back to top"
            className="p-3 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:text-white hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all hover:-translate-y-1"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright & socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Areeba Munir. Software Engineering Student • Lahore, Pakistan.
          </p>

          <div className="flex items-center gap-5">
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.socials.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              Fiverr
            </a>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
