import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Eye, ArrowUpRight, Sparkles, FolderGit2, Star } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectVisual } from './ProjectVisual';
import { ProjectModal } from './ProjectModal';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Software Engineering' | 'Web Development' | 'UI/UX'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filters = ['All', 'Software Engineering', 'Web Development', 'UI/UX'] as const;

  const filteredProjects =
    selectedFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  // GSAP animation when filter changes
  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll('.project-card'),
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );
    }
  }, [selectedFilter]);

  // Initial ScrollTrigger entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        {
          opacity: 0,
          y: 60,
          scale: 0.92,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.9,
          stagger: 0.12,
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
      id="projects"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full select-none"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-blue-600/15 blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
          CURATED PORTFOLIO
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg">
          Academic, UI/UX and Web Development Projects
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
          {filters.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                id={`project-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-300/50'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-cyan-400/50'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bento Grid Layout (Desktop) / Vertical Cards (Mobile) */}
      <div
        ref={gridRef}
        id="projects-bento-grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
      >
        {filteredProjects.map((project, index) => {
          const isEducore = project.id === 'educore-sms';
          const projectNum = String(index + 1).padStart(2, '0');

          return (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className={`project-card group glass-panel rounded-3xl border border-cyan-500/20 hover:border-cyan-400/70 p-6 flex flex-col justify-between shadow-[0_10px_30px_-10px_rgba(6,182,212,0.1)] hover:shadow-[0_15px_40px_-5px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden ${
                isEducore && selectedFilter === 'All'
                  ? 'lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-[#091530]/90 to-[#050b1a]/95'
                  : ''
              }`}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Visual Media Container */}
                <div className="w-full rounded-2xl overflow-hidden border border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors mb-5 shadow-inner">
                  <ProjectVisual project={project} />
                </div>

                {/* Card Top Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                    PROJECT {projectNum}
                  </span>
                  <div className="flex items-center gap-2">
                    {isEducore && (
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-cyan-400 text-cyan-400" />
                        Featured Capstone
                      </span>
                    )}
                    <span className="text-xs font-mono text-slate-400">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-cyan-500/20 group-hover:border-cyan-500/40 text-[11px] font-mono text-slate-300 group-hover:text-cyan-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 rounded-lg bg-slate-900/40 text-[11px] font-mono text-slate-400">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Action Buttons Row */}
                <div className="pt-4 border-t border-cyan-500/20 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Specifications</span>
                  </button>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 group-hover:translate-x-0.5"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:border-cyan-400 transition-colors"
                    >
                      <span>Project Preview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
