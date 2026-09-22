import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code,
  FileCode,
  Palette,
  FileJson,
  Database,
  HardDrive,
  Server,
  GitBranch,
  GitPullRequest,
  ClipboardList,
  FileText,
  BookOpen,
  ListChecks,
  GitFork,
  Layers,
  CheckSquare,
  ShieldAlert,
  Network,
  Boxes,
  Workflow,
  GitCommit,
  TableProperties,
  Kanban,
  Sparkles,
  LayoutTemplate,
  Maximize2,
  Route,
  FolderTree,
  Users,
  RefreshCw,
  Zap,
  Globe,
  Layout,
  Terminal,
  Smartphone,
  Monitor,
  Compass,
  Cpu,
  Share2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'tech' | 'se' | 'uiux' | 'web'>('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  // Icon mapping dictionary
  const getIcon = (iconName: string) => {
    const map: Record<string, React.ReactNode> = {
      Code: <Code className="w-5 h-5 text-cyan-400" />,
      FileCode: <FileCode className="w-5 h-5 text-cyan-300" />,
      Palette: <Palette className="w-5 h-5 text-blue-400" />,
      FileJson: <FileJson className="w-5 h-5 text-teal-300" />,
      Database: <Database className="w-5 h-5 text-cyan-400" />,
      HardDrive: <HardDrive className="w-5 h-5 text-blue-300" />,
      Server: <Server className="w-5 h-5 text-teal-400" />,
      GitBranch: <GitBranch className="w-5 h-5 text-cyan-400" />,
      GitPullRequest: <GitPullRequest className="w-5 h-5 text-blue-400" />,
      ClipboardList: <ClipboardList className="w-5 h-5 text-cyan-400" />,
      FileText: <FileText className="w-5 h-5 text-teal-400" />,
      BookOpen: <BookOpen className="w-5 h-5 text-blue-300" />,
      ListChecks: <ListChecks className="w-5 h-5 text-cyan-300" />,
      GitFork: <GitFork className="w-5 h-5 text-purple-400" />,
      Layers: <Layers className="w-5 h-5 text-cyan-400" />,
      CheckSquare: <CheckSquare className="w-5 h-5 text-teal-300" />,
      ShieldAlert: <ShieldAlert className="w-5 h-5 text-blue-400" />,
      Network: <Network className="w-5 h-5 text-cyan-400" />,
      Boxes: <Boxes className="w-5 h-5 text-teal-400" />,
      Workflow: <Workflow className="w-5 h-5 text-blue-400" />,
      GitCommit: <GitCommit className="w-5 h-5 text-cyan-300" />,
      TableProperties: <TableProperties className="w-5 h-5 text-purple-300" />,
      Kanban: <Kanban className="w-5 h-5 text-teal-400" />,
      Figma: <LayoutTemplate className="w-5 h-5 text-purple-400" />,
      Sparkles: <Sparkles className="w-5 h-5 text-cyan-300" />,
      LayoutTemplate: <LayoutTemplate className="w-5 h-5 text-blue-400" />,
      Maximize2: <Maximize2 className="w-5 h-5 text-cyan-400" />,
      Route: <Route className="w-5 h-5 text-teal-300" />,
      FolderTree: <FolderTree className="w-5 h-5 text-blue-300" />,
      Users: <Users className="w-5 h-5 text-cyan-400" />,
      RefreshCw: <RefreshCw className="w-5 h-5 text-teal-400" />,
      Zap: <Zap className="w-5 h-5 text-cyan-300" />,
      Globe: <Globe className="w-5 h-5 text-blue-400" />,
      Layout: <Layout className="w-5 h-5 text-cyan-400" />,
      Terminal: <Terminal className="w-5 h-5 text-teal-300" />,
      Smartphone: <Smartphone className="w-5 h-5 text-blue-300" />,
      Monitor: <Monitor className="w-5 h-5 text-cyan-400" />,
      Compass: <Compass className="w-5 h-5 text-teal-400" />,
      Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
      Share2: <Share2 className="w-5 h-5 text-cyan-300" />
    };
    return map[iconName] || <Code className="w-5 h-5 text-cyan-400" />;
  };

  const categories = [
    { key: 'all', label: 'All Disciplines' },
    { key: 'tech', label: 'Technical Skills' },
    { key: 'se', label: 'Software Engineering' },
    { key: 'uiux', label: 'UI/UX Design' },
    { key: 'web', label: 'Web Development' },
  ];

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.categoryKey === activeTab);

  useEffect(() => {
    // GSAP ScrollTrigger animation for skills
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-card',
        {
          opacity: 0,
          y: 35,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full select-none"
    >
      {/* Background neon ambient blur */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          TECHNICAL EXPERTISE & METHODOLOGIES
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mb-4">
          My Skills
        </h2>
        <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg">
          Core competencies spanning software engineering blueprints, database architecture, UI/UX systems, and frontend implementation.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
          {categories.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                id={`skill-filter-${cat.key}`}
                onClick={() => setActiveTab(cat.key as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-300/40'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-cyan-400/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grouped Containers */}
      <div className="space-y-12">
        {filteredCategories.map((group) => (
          <div key={group.categoryKey} className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-lg sm:text-xl font-bold font-mono tracking-wide text-cyan-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                {group.title}
              </h3>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
              <span className="text-xs font-mono text-slate-400">
                {group.skills.length} competencies
              </span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-card group glass-panel p-4 rounded-2xl border border-cyan-500/15 hover:border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                      {getIcon(skill.iconName)}
                    </div>
                    {skill.isLearning && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 tracking-wider">
                        Learning
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {skill.name}
                    </h4>
                  </div>

                  {/* Cyber hover accent glow */}
                  <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl group-hover:bg-cyan-400/25 transition-all pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
