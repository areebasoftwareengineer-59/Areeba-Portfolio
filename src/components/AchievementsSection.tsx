import React from 'react';
import { Award, GraduationCap, CheckCircle2, Shield, Star, BookOpen } from 'lucide-react';
import { ACADEMIC_ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section
      id="achievements"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Award className="w-3.5 h-3.5 text-cyan-400" />
          SCHOLASTIC EXCELLENCE
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mb-4">
          Academic Achievements
        </h2>
        <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg">
          Maintained strong academic performance throughout the Software Engineering program.
        </p>
      </div>

      {/* Achievement Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {ACADEMIC_ACHIEVEMENTS.map((item, idx) => (
          <div
            key={item.semester}
            className="glass-panel p-8 rounded-3xl border border-cyan-400/40 hover:border-cyan-300/80 shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:shadow-[0_0_35px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl group-hover:scale-125 transition-transform pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase">
                {item.badge}
              </span>
              <GraduationCap className="w-6 h-6 text-cyan-400" />
            </div>

            <div className="mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">
                {item.semester}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-extrabold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-400">
                  4.00
                </span>
                <span className="text-xl font-mono text-cyan-400 font-bold">GPA</span>
              </div>
            </div>

            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="pt-4 border-t border-cyan-500/20 flex items-center gap-2 text-xs font-mono text-teal-300">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Highest Academic Standing</span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Banner */}
      <div className="mt-12 max-w-4xl mx-auto glass-panel p-6 rounded-2xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/30">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Consistent Academic Discipline</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Reflects strong problem-solving capacity, consistency, and dedication to software engineering fundamentals.
            </p>
          </div>
        </div>

        <div className="px-4 py-2 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold whitespace-nowrap">
          Cumulative 4.00 GPA
        </div>
      </div>
    </section>
  );
};
