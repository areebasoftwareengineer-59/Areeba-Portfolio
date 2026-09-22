import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail, Sparkles, Code2, GraduationCap, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProfileFrame } from './ProfileFrame';
import { SplineHeroScene } from './SplineHeroScene';
import { GlowingWaves } from './GlowingWaves';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Floating Neon Orbs
    gsap.to('.glow-orb-1', {
      y: -28,
      x: 15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    gsap.to('.glow-orb-2', {
      y: 24,
      x: -18,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    gsap.to('.glow-orb-3', {
      y: -18,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Hero GSAP Entrance Timeline
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      '#hero-status-badge',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );

    tl.fromTo(
      '#hero-main-heading',
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out' },
      '-=0.3'
    );

    tl.fromTo(
      '#hero-second-heading',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    );

    tl.fromTo(
      '#hero-third-line',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    );

    tl.fromTo(
      '#hero-description',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    );

    tl.fromTo(
      '#hero-cta-buttons',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out' },
      '-=0.3'
    );

    tl.fromTo(
      '#hero-profile-container',
      { opacity: 0, x: 80, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    );

    tl.fromTo(
      '#spline-3d-container',
      { opacity: 0, x: 50 },
      { opacity: 0.7, x: 0, duration: 1.2, ease: 'power3.out' },
      '-=1'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[#040711] dark:bg-[#040711] light:bg-[#f8fafc] text-white select-none"
    >
      {/* 3D Spline Interactive Scene / Canvas */}
      <SplineHeroScene />

      {/* Floating Neon Orbs Background */}
      <div className="glow-orb-1 absolute top-1/4 left-8 md:left-1/6 w-80 h-80 rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none" />
      <div className="glow-orb-2 absolute bottom-1/3 right-10 md:right-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-[130px] pointer-events-none" />
      <div className="glow-orb-3 absolute top-1/3 right-12 w-64 h-64 rounded-full bg-purple-600/15 blur-[110px] pointer-events-none" />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20 dark:opacity-20 light:opacity-5 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Buttons (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Small Label: AVAILABLE FOR INTERNSHIP OPPORTUNITIES */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[rgba(212,175,55,0.4)] bg-[#0d0e15]/80 backdrop-blur-md text-[#F5D38A] text-xs font-mono tracking-widest uppercase mb-6 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
              <span>{PERSONAL_INFO.statusLabel}</span>
            </div>

            {/* Main Heading: Hi, I'm Areeba */}
            <h1
              id="hero-main-heading"
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-3 text-center lg:text-left"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#F5D38A] to-[#D4AF37] inline-block drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]">
                {PERSONAL_INFO.displayName}
              </span>
            </h1>

            {/* Second Heading: Software Engineering Student */}
            <h2
              id="hero-second-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-200 mb-2 text-center lg:text-left"
            >
              {PERSONAL_INFO.secondaryTitle}
            </h2>

            {/* Third Line: Tagline */}
            <div
              id="hero-third-line"
              className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-slate-400 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{PERSONAL_INFO.tagline}</span>
            </div>

            {/* Description */}
            <p
              id="hero-description"
              className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8"
            >
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div
              id="hero-cta-buttons"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5 w-full sm:w-auto"
            >
              {/* Explore My Work Button */}
              <button
                id="hero-btn-work"
                onClick={onExploreWork}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#050508] bg-gradient-to-r from-[#FFF6E5] via-[#F5D38A] to-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              {/* Let's Talk Button */}
              <button
                id="hero-btn-contact"
                onClick={onContactClick}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F5D38A] bg-[#090b12]/80 hover:bg-[#131520] border border-[rgba(212,175,55,0.4)] hover:border-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <Mail className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>Let's Talk</span>
              </button>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="mt-10 pt-6 border-t border-[rgba(212,175,55,0.2)] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>4.00 Cumulative GPA</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#D4AF37]" />
                <span>9 Academic & Web Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right Column: Areeba's Profile Frame (5 cols) */}
          <div
            id="hero-profile-container"
            className="lg:col-span-5 flex items-center justify-center w-full"
          >
            <ProfileFrame
              displayName={PERSONAL_INFO.displayName}
              professionalTitle={PERSONAL_INFO.professionalTitle}
              avatarUrl={PERSONAL_INFO.avatarUrl}
            />
          </div>
        </div>
      </div>

      {/* Animated Glowing Wave at Bottom of Hero */}
      <GlowingWaves position="bottom" />
    </section>
  );
};
