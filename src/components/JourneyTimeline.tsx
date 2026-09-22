import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Milestone, Sparkles, CheckCircle2 } from 'lucide-react';
import { LEARNING_JOURNEY } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const JourneyTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.timeline-item',
        {
          opacity: 0,
          y: 45,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full select-none"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Milestone className="w-3.5 h-3.5 text-cyan-400" />
          ACADEMIC & TECHNICAL PROGRESSION
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mb-4">
          My Learning Journey
        </h2>
        <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg">
          The continuous roadmap from foundational computer science principles to software engineering modeling and practical web applications.
        </p>
      </div>

      {/* Glowing Vertical Timeline Container */}
      <div className="relative">
        {/* Central Glowing Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-blue-500 to-teal-400 shadow-[0_0_15px_#22d3ee] rounded-full opacity-70" />

        <div className="space-y-12">
          {LEARNING_JOURNEY.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.title}
                className={`timeline-item relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } gap-6 md:gap-12 pl-12 md:pl-0`}
              >
                {/* Glowing Node on Timeline */}
                <div className="absolute left-4 md:left-1/2 top-5 -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#050a19] border-2 border-cyan-400 shadow-[0_0_12px_#22d3ee] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
                  </div>
                </div>

                {/* Content Card (Takes half width on desktop) */}
                <div
                  className={`w-full md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.08)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 hover:-translate-y-1 ${
                    isEven ? 'md:text-left' : 'md:text-left'
                  }`}
                >
                  {/* Step number and phase */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                      PHASE 0{index + 1}
                    </span>
                    {item.highlight && (
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-[10px] font-mono text-cyan-300">
                        {item.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mb-3">
                    {item.roleOrPhase}
                  </p>

                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-cyan-500/15">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-slate-900 border border-cyan-500/20 text-[10px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
