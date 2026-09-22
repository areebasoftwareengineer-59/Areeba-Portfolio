import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('areeba_theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const handleToggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('areeba_theme', 'light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('areeba_theme', 'dark');
    }
  };

  // Initialize Lenis Smooth Scroll integrated with GSAP ScrollTrigger
  useEffect(() => {
    if (!preloaderDone) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
    };
  }, [preloaderDone]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el);
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el);
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#040711] dark:bg-[#040711] light:bg-[#f8fafc] text-[#f1f5f9] dark:text-[#f1f5f9] light:text-[#0f172a] font-sans antialiased overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Interactive Cursor Follower Glow */}
      <CursorGlow />

      {/* Cinematic Preloader */}
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* Main Website Structure */}
      <div
        id="portfolio-main-content"
        className={`transition-opacity duration-700 ${
          preloaderDone ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Navigation Bar */}
        <Navbar isDark={isDark} onToggleTheme={handleToggleTheme} />

        {/* Main Content Area */}
        <main>
          <Hero
            onExploreWork={scrollToProjects}
            onContactClick={scrollToContact}
          />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <JourneyTimeline />
          <AchievementsSection />
          <ContactSection />
        </main>

        {/* Futuristic Footer */}
        <Footer />
      </div>
    </div>
  );
}
