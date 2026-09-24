import React, { useState, useEffect } from 'react';
import { GraduationCap, Award, Laptop, Sparkles, BookOpen, CheckCircle2, ArrowUpRight, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    return typeof window !== 'undefined' ? localStorage.getItem('areeba_custom_profile_photo') : null;
  });

  useEffect(() => {
    const handleStorage = () => {
      setCustomPhoto(localStorage.getItem('areeba_custom_profile_photo'));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);
  return (
    <section
      id="about"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full select-none"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          BACKGROUND & PHILOSOPHY
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mb-4">
          About Me
        </h2>
        <p className="text-base sm:text-lg font-medium text-cyan-400/90 font-mono tracking-wide">
          Software Engineering Student • UI/UX Enthusiast • Web Developer
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Narrative Bio & Focus (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.08)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full blur-2xl pointer-events-none" />

          <div>
            {/* Supporting Personal Branding Quote with Profile Portrait */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-4 sm:p-5 rounded-2xl bg-[#090b12]/80 border border-[rgba(212,175,55,0.35)] text-slate-200 text-sm font-mono leading-relaxed mb-6 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[rgba(212,175,55,0.5)] shadow-[0_0_20px_rgba(212,175,55,0.25)] shrink-0 group bg-[#07080c] flex items-center justify-center">
                {customPhoto ? (
                  <img
                    src={customPhoto}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="text-xl font-bold font-mono text-[#F5D38A]">
                    {PERSONAL_INFO.monogram}
                  </span>
                )}
              </div>
              <div className="flex items-start gap-3">
                <span className="text-3xl text-[#D4AF37] leading-none font-serif">“</span>
                <p className="flex-1 text-[#F5D38A]/90">{PERSONAL_INFO.supportingText}</p>
              </div>
            </div>

            {/* Main Paragraph 1 */}
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-base sm:text-lg leading-relaxed mb-5">
              {PERSONAL_INFO.aboutParagraph1}
            </p>

            {/* Main Paragraph 2 */}
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
              {PERSONAL_INFO.aboutParagraph2}
            </p>
          </div>

          {/* Academic Highlights Grid */}
          <div className="pt-6 border-t border-cyan-500/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/50 border border-white/5">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Academic Excellence</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Consistent 4.00 GPA achieved in 1st semester & maintained in 2nd semester.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/50 border border-white/5">
              <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Hands-on Engineering</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Real modeling, SRS specifications, UML diagrams, and frontend deployments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Futuristic Stats & Identity Card (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
          {/* Main 4.00 GPA Highlight Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-400/40 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase">
                ACADEMIC PERFORMANCE
              </span>
              <Award className="w-5 h-5 text-cyan-400" />
            </div>

            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-5xl sm:text-6xl font-extrabold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-400">
                4.00
              </span>
              <span className="text-lg font-mono text-cyan-400/80 font-bold">GPA</span>
            </div>

            <p className="text-xs text-slate-300 font-mono mb-4">
              First Semester: 4.00 GPA • Second Semester: 4.00 GPA
            </p>

            <div className="flex items-center gap-2 text-xs text-teal-300 bg-teal-950/50 p-2.5 rounded-xl border border-teal-500/30 font-mono">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Unblemished perfect academic standing maintained throughout both semesters.</span>
            </div>
          </div>

          {/* Key Stat Cards 2x2 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-cyan-500/20 flex flex-col justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase">Role / Field</span>
              <div className="my-2">
                <span className="text-lg font-bold text-white block">SE Student</span>
                <span className="text-[11px] text-cyan-400 font-mono">Lahore, Pakistan</span>
              </div>
              <Cpu className="w-4 h-4 text-cyan-400 self-end" />
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-cyan-500/20 flex flex-col justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase">Projects</span>
              <div className="my-2">
                <span className="text-2xl font-bold font-mono text-white block">9+</span>
                <span className="text-[11px] text-cyan-400 font-mono">Academic & Web</span>
              </div>
              <BookOpen className="w-4 h-4 text-teal-400 self-end" />
            </div>
          </div>

          {/* Continuous Learning Banner */}
          <div className="glass-panel p-4 rounded-2xl border border-blue-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <div>
                <span className="text-xs font-mono font-semibold text-white block">
                  Continuous Learning
                </span>
                <span className="text-[11px] text-slate-400">
                  Targeting internship & entry-level engineering roles
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-cyan-400 px-2 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
              Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
