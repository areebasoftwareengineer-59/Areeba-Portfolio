import React from 'react';
import { X, ExternalLink, CheckCircle, Database, Layers, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { ProjectVisual } from './ProjectVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#040711]/90 backdrop-blur-2xl overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#091124] border border-cyan-400/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.25)] text-white overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-72 h-36 bg-cyan-500/15 blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase">
            {project.category}
          </span>
          {project.year && (
            <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-white/10 text-slate-400 text-xs font-mono">
              {project.year}
            </span>
          )}
          {project.badge && (
            <span className="px-2.5 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-mono">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
          {project.title}
        </h3>

        {/* Visual Preview Box */}
        <div className="w-full rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.35)] mb-6 shadow-[0_0_35px_rgba(212,175,55,0.15)] bg-slate-950">
          {project.imageUrl ? (
            <div className="relative w-full max-h-80 sm:max-h-96 overflow-hidden group">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/90 via-transparent to-transparent pointer-events-none" />
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FFF6E5] to-[#D4AF37] text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-transform"
                >
                  <span>Open Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ) : (
            <ProjectVisual project={project} />
          )}
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features / Work Specifications */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6 p-4 rounded-2xl bg-slate-950/60 border border-cyan-500/20">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Key Features & Architectural Deliverables:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2.5">
            Technologies & Tools:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-cyan-500/20">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            Close
          </button>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all"
            >
              <span>Launch Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/40">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Academic Concept & Modeling Preview</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
