import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Sparkles } from 'lucide-react';
import gsap from 'gsap';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animation for mobile menu items when opened
  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.fromTo(
        '.mobile-nav-link',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
      );
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#040711]/80 dark:bg-[#040711]/80 light:bg-white/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo: AREEBA. */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            id="nav-logo"
            className="group flex items-center gap-2 focus:outline-none rounded-lg p-1"
          >
            <div className="flex items-center">
              <span className="font-syne font-black text-xl tracking-wider text-white uppercase group-hover:text-[#F5D38A] transition-colors">
                AREEBA
              </span>
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] ml-0.5 animate-pulse" />
            </div>
          </a>

          {/* Desktop Navigation Centered */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center px-4 py-1.5 rounded-full bg-[#0a0c14]/80 backdrop-blur-xl border border-[rgba(212,175,55,0.25)] shadow-[0_0_25px_rgba(212,175,55,0.08)]"
          >
            <ul className="flex items-center space-x-1 sm:space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      id={`nav-link-${item.id}`}
                      className={`relative px-4 py-1.5 text-xs font-mono font-medium tracking-wider uppercase transition-all duration-200 rounded-full inline-block ${
                        isActive
                          ? 'text-[#F5D38A] font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.4)]'
                          : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-[#F5D38A] hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4AF37] shadow-[0_0_6px_#D4AF37]" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right side controls: Theme toggle, Socials & Let's Talk CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label="Toggle Dark / Light Mode"
              className="p-2 rounded-xl border border-[rgba(212,175,55,0.3)] bg-slate-950/70 text-[#F5D38A] hover:text-white hover:border-[#D4AF37] transition-all duration-300 shadow-sm focus:outline-none"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-[#F5D38A] hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-amber-500 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Let's Talk Pill from Reference Image */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              id="nav-cta-talk"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-[#050508] bg-gradient-to-r from-[#FFF6E5] to-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all transform hover:scale-105"
            >
              <span>LET'S TALK</span>
              <span>↗</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2.5 rounded-xl border border-cyan-500/30 bg-slate-900/70 text-cyan-400 hover:text-white hover:border-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Glassmorphic Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-30 flex flex-col justify-center items-center bg-[#040711]/95 dark:bg-[#040711]/95 light:bg-slate-900/95 backdrop-blur-2xl px-6 md:hidden"
        >
          {/* Futuristic subtle background glow */}
          <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center space-y-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              NAVIGATION MATRIX
            </div>

            <ul className="w-full space-y-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      id={`mobile-nav-${item.id}`}
                      className={`mobile-nav-link block py-3 px-6 rounded-2xl text-lg font-medium tracking-wider uppercase transition-all duration-200 border ${
                        isActive
                          ? 'text-cyan-300 font-bold bg-cyan-500/20 border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                          : 'text-slate-300 border-white/5 hover:text-cyan-300 hover:border-cyan-500/30 hover:bg-slate-800/40'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="pt-4 border-t border-cyan-500/20 w-full flex justify-center items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                Internship Ready
              </span>
              <span>•</span>
              <span>4.00 GPA</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
