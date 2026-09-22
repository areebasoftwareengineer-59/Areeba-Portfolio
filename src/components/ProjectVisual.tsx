import React, { useState } from 'react';
import {
  FileText,
  Layers,
  Globe,
  Image,
  Calculator,
  Music,
  Clock,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Database,
  Layout,
  ExternalLink,
  Maximize2
} from 'lucide-react';
import { Project } from '../types';

interface ProjectVisualProps {
  project: Project;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  // If an image URL is specified and hasn't errored, display the authentic project picture
  if (project.imageUrl && !imageError) {
    return (
      <div className="relative w-full h-48 sm:h-52 md:h-56 bg-slate-950 overflow-hidden group/vis flex flex-col justify-between">
        {/* Real Screenshot Picture */}
        <img
          src={project.imageUrl}
          alt={project.title}
          onError={() => setImageError(true)}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Dark Gradients & Studio Edge Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-[#050508]/60 pointer-events-none" />
        <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

        {/* Top Badges */}
        <div className="relative z-10 p-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-[rgba(212,175,55,0.4)] text-[10px] font-mono text-[#F5D38A] font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(212,175,55,0.25)]">
            {project.badge || project.category}
          </span>
          {project.liveUrl && (
            <span className="px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-400/40 text-[10px] font-mono text-emerald-300 flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Deployment
            </span>
          )}
        </div>

        {/* Hover Inspect Overlay */}
        <div className="relative z-10 p-3 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#050508]/95 via-[#050508]/50 to-transparent">
          <span className="text-[11px] font-mono text-slate-300 flex items-center gap-1">
            <span className="text-amber-400">●</span> Click to view details
          </span>
          <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-[rgba(212,175,55,0.6)] text-[#F5D38A] text-[11px] font-mono font-medium flex items-center gap-1 shadow-[0_0_12px_rgba(212,175,55,0.3)]">
            <Maximize2 className="w-3 h-3" />
            Inspect
          </span>
        </div>
      </div>
    );
  }

  switch (project.visualType) {
    case 'sms-system':
      return (
        <div className="w-full h-full min-h-[190px] bg-gradient-to-br from-[#06102b] via-[#091838] to-[#040817] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          {/* Cyber Blueprint Grid */}
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 border border-cyan-400/50 text-[11px] font-mono text-cyan-300 font-bold flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5" />
              SRS & UML SYSTEM
            </span>
            <span className="text-xs font-mono text-slate-400">2026 Academic Capstone</span>
          </div>

          {/* Schematic Diagram Preview Mockup */}
          <div className="relative z-10 my-3 p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex items-center justify-around gap-2 text-center">
            <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/40">
              <p className="text-[10px] font-mono text-cyan-300">Admin Role</p>
              <div className="w-8 h-1 bg-cyan-400/50 mx-auto mt-1 rounded-full" />
            </div>
            <div className="text-cyan-400 text-xs font-mono">⇄</div>
            <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/40">
              <p className="text-[10px] font-mono text-blue-300">Educore Core</p>
              <div className="w-8 h-1 bg-blue-400/50 mx-auto mt-1 rounded-full" />
            </div>
            <div className="text-cyan-400 text-xs font-mono">⇄</div>
            <div className="p-2 rounded-lg bg-teal-950/60 border border-teal-500/40">
              <p className="text-[10px] font-mono text-teal-300">Student Portal</p>
              <div className="w-8 h-1 bg-teal-400/50 mx-auto mt-1 rounded-full" />
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>UML • ERD • DBMS • C++</span>
            <span className="text-cyan-400 font-semibold">SRS v1.0 Spec</span>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />
        </div>
      );

    case 'figma-portal':
      return (
        <div className="w-full h-full min-h-[170px] bg-gradient-to-br from-[#120e2a] via-[#1a1438] to-[#0a071a] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 cyber-grid opacity-25" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-purple-500/20 border border-purple-400/50 text-[11px] font-mono text-purple-300 font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              FIGMA PROTOTYPE
            </span>
            <span className="text-xs font-mono text-purple-300/80">UI/UX Redesign</span>
          </div>

          <div className="relative z-10 my-2 grid grid-cols-3 gap-2">
            <div className="h-10 rounded-lg bg-purple-900/40 border border-purple-500/30 p-1.5 flex flex-col justify-between">
              <div className="w-6 h-1 bg-purple-300/50 rounded-full" />
              <div className="w-10 h-1 bg-purple-400/30 rounded-full" />
            </div>
            <div className="h-10 rounded-lg bg-cyan-900/40 border border-cyan-500/30 p-1.5 flex flex-col justify-between">
              <div className="w-8 h-1 bg-cyan-300/50 rounded-full" />
              <div className="w-6 h-1 bg-cyan-400/30 rounded-full" />
            </div>
            <div className="h-10 rounded-lg bg-blue-900/40 border border-blue-500/30 p-1.5 flex flex-col justify-between">
              <div className="w-7 h-1 bg-blue-300/50 rounded-full" />
              <div className="w-9 h-1 bg-blue-400/30 rounded-full" />
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Sitemaps • User Flows</span>
            <span className="text-purple-300">Interactive Figma System</span>
          </div>
        </div>
      );

    case 'voyageur':
      return (
        <div className="w-full h-full min-h-[170px] bg-gradient-to-br from-[#061b2e] via-[#092842] to-[#040e1a] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 border border-cyan-400/50 text-[11px] font-mono text-cyan-300 font-bold flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              LIVE WEB APP
            </span>
            <span className="text-xs font-mono text-cyan-400">Vercel Live</span>
          </div>

          <div className="relative z-10 my-2 p-2.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-400/70" />
              <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
              <span className="w-2 h-2 rounded-full bg-green-400/70" />
              <span className="text-[10px] font-mono text-slate-400 ml-2">voyageur.vercel.app</span>
            </div>
            <div className="h-6 bg-cyan-950/40 rounded flex items-center px-2 text-[10px] font-mono text-cyan-300">
              Responsive Explorer UI
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>HTML • CSS • JS</span>
            <span className="text-cyan-400">Active Deployment</span>
          </div>
        </div>
      );

    case 'gallery':
      return (
        <div className="w-full h-full min-h-[170px] bg-gradient-to-br from-[#0d1c24] via-[#102733] to-[#050e12] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-teal-500/20 border border-teal-400/50 text-[11px] font-mono text-teal-300 font-bold flex items-center gap-1.5">
              <Image className="w-3.5 h-3.5" />
              INTERACTIVE GALLERY
            </span>
            <span className="text-xs font-mono text-teal-400">Vercel Live</span>
          </div>

          <div className="relative z-10 my-2 grid grid-cols-4 gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-10 rounded-md bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-[10px] font-mono text-teal-300"
              >
                IMG_{i}
              </div>
            ))}
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Frontend Layout & DOM</span>
            <span className="text-teal-400">Filter & Presentation</span>
          </div>
        </div>
      );

    case 'calculator':
      return (
        <div className="w-full h-full min-h-[170px] bg-gradient-to-br from-[#121528] via-[#171c36] to-[#080a14] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-400/50 text-[11px] font-mono text-blue-300 font-bold flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              LOGIC & COMPUTATION
            </span>
            <span className="text-xs font-mono text-blue-400">Vercel Live</span>
          </div>

          <div className="relative z-10 my-2 p-2 rounded-xl bg-slate-950/90 border border-blue-500/30 font-mono text-right">
            <div className="text-[10px] text-slate-500">f(x) = (24 × 8) + 128</div>
            <div className="text-lg font-bold text-cyan-300">320.00</div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>JavaScript Logic Engine</span>
            <span className="text-blue-400">Interactive UI</span>
          </div>
        </div>
      );

    case 'music':
      return (
        <div className="w-full h-full min-h-[170px] bg-gradient-to-br from-[#170e28] via-[#21123a] to-[#0d0717] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-purple-500/20 border border-purple-400/50 text-[11px] font-mono text-purple-300 font-bold flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5" />
              AUDIO EXPERIENCE
            </span>
            <span className="text-xs font-mono text-purple-300">Vercel Live</span>
          </div>

          <div className="relative z-10 my-2 flex items-end justify-center gap-1.5 h-10">
            {[40, 75, 50, 90, 60, 85, 45, 95, 70, 40].map((h, idx) => (
              <div
                key={idx}
                className="w-2 bg-gradient-to-t from-purple-500 to-cyan-400 rounded-full"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Web Audio & DOM UI</span>
            <span className="text-purple-300">Interactive Player</span>
          </div>
        </div>
      );

    case 'queueless':
      return (
        <div className="w-full h-full min-h-[170px] bg-gradient-to-br from-[#0c1f26] via-[#102d38] to-[#061014] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-teal-500/20 border border-teal-400/50 text-[11px] font-mono text-teal-300 font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              QUEUE SYSTEM CONCEPT
            </span>
            <span className="text-xs font-mono text-teal-400">Concept Preview</span>
          </div>

          <div className="relative z-10 my-2 p-2 rounded-xl bg-slate-900/80 border border-teal-500/30 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
              <span className="text-teal-200">Ticket #A-42</span>
            </div>
            <span className="text-slate-400 text-[11px]">Est. 4 min</span>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>UI/UX & Queue Algorithm</span>
            <span className="text-teal-300">Zero Wait Friction</span>
          </div>
        </div>
      );

    case 'focusflow':
      return (
        <div className="w-full h-full min-h-[170px] bg-gradient-to-br from-[#081829] via-[#0d243c] to-[#040c14] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-400/50 text-[11px] font-mono text-blue-300 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              PRODUCTIVITY SYSTEM
            </span>
            <span className="text-xs font-mono text-blue-400">Vercel Live</span>
          </div>

          <div className="relative z-10 my-2 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin-slow flex items-center justify-center text-[10px] font-mono text-cyan-300">
              25m
            </div>
            <div className="text-xs font-mono text-slate-300">
              <p className="font-semibold text-white">Focus Session</p>
              <p className="text-[10px] text-cyan-400">Flow State Active</p>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Responsive Layouts</span>
            <span className="text-blue-400">Frontend Web</span>
          </div>
        </div>
      );

    case 'rentie':
      return (
        <div className="w-full h-full min-h-[170px] bg-gradient-to-br from-[#061823] via-[#092233] to-[#030d12] p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-teal-500/20 border border-teal-400/50 text-[11px] font-mono text-teal-300 font-bold flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              GROWTH PLATFORM
            </span>
            <span className="text-xs font-mono text-teal-400">Vercel Live</span>
          </div>

          <div className="relative z-10 my-2 p-2 rounded-xl bg-slate-900/80 border border-teal-500/30 flex items-center justify-around text-center text-xs font-mono">
            <div>
              <span className="text-[10px] text-slate-400 block">Listings</span>
              <span className="font-bold text-white">128+</span>
            </div>
            <div className="w-[1px] h-6 bg-slate-700" />
            <div>
              <span className="text-[10px] text-slate-400 block">Verified</span>
              <span className="font-bold text-teal-300">100%</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>HTML • CSS • JavaScript</span>
            <span className="text-teal-400">Modern Architecture</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full min-h-[160px] bg-slate-900 flex items-center justify-center text-xs font-mono text-slate-400">
          Project Graphic
        </div>
      );
  }
};
