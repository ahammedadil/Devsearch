import React, { useState } from 'react';
import { Clock, BarChart3, Map, ExternalLink, GraduationCap, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { roadmapsData } from '../data/mockData';

const roleToRoadmapId = {
  'Frontend Developer': 'frontend',
  'Backend Developer': 'backend',
  'Full Stack Developer': 'fullstack',
  'Data Scientist': 'datascience',
  'DevOps Engineer': 'devops',
  'UI/UX Designer': 'uiux',
  'Student / Learner': 'frontend',
  'Just Exploring': 'fullstack'
};

// Helper to parse subtopics dynamically from descriptions
const getTopicsList = (desc) => {
  if (!desc) return [];
  return desc
    .split(/,|\band\b/)
    .map(s => {
      let cleaned = s.trim();
      // Remove trailing periods
      if (cleaned.endsWith('.')) cleaned = cleaned.slice(0, -1);
      return cleaned.replace(/^\w/, c => c.toUpperCase());
    })
    .filter(s => s.length > 1 && s.length < 40 && !s.toLowerCase().includes('choose'));
};

export default function Roadmaps({ profile }) {
  const [expandedPhases, setExpandedPhases] = useState({});

  const userRole = profile?.role || 'Just Exploring';
  const roadmapId = roleToRoadmapId[userRole] || 'frontend';
  const roadmap = roadmapsData.find(r => r.id === roadmapId) || roadmapsData[0];

  const togglePhase = (phaseNumber) => {
    setExpandedPhases(prev => ({
      ...prev,
      [phaseNumber]: !prev[phaseNumber]
    }));
  };

  const getDifficultyColor = (diff) => {
    switch (diff) {
      case 'Beginner Friendly': return 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Intermediate': return 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'Advanced':
      default: return 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20';
    }
  };

  return (
    <div className="py-8 px-4 sm:px-8 lg:px-12 w-full space-y-8 animate-fadeIn">
      
      {/* ── Header Area with Role Badge ── */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25">
            <Map className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
              Your Career Roadmap
            </h1>
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-2 mt-1">
              Your personalized roadmap for:{' '}
              <span className="px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                {userRole}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* ── Overview Main Card ── */}
      <div className={`glass-card rounded-3xl overflow-hidden border ${roadmap.borderColor || 'border-violet-500/20'} transition-all duration-300 shadow-md`}>
        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-start justify-between gap-6 relative">
          
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{roadmap.icon}</span>
              <div>
                <h2 className="text-2xl font-black text-slate-850 dark:text-slate-100">
                  {roadmap.title} Track
                </h2>
                <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                  <span className={`text-[10px] font-bold px-3 py-0.5 rounded-full border ${getDifficultyColor(roadmap.difficulty)}`}>
                    {roadmap.difficulty}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <Clock className="h-3.5 w-3.5 text-slate-400" /> {roadmap.duration}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <BarChart3 className="h-3.5 w-3.5 text-slate-400" /> {roadmap.steps.length} learning phases
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-450 leading-relaxed max-w-3xl">
              {roadmap.description}
            </p>
          </div>

          <div className="shrink-0 pt-2 flex flex-col gap-2 w-full md:w-auto">
            <a
              href={`https://roadmap.sh/${roadmap.id}`}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r ${roadmap.color || 'from-violet-600 to-indigo-600'} text-white font-extrabold text-xs shadow-md hover:opacity-90 transition-all duration-200 cursor-pointer`}
            >
              Interactive roadmap.sh Version
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Timeline list (Winding Alternating Journey Path) ── */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 pb-3">
          <h3 className="font-extrabold text-sm text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Curriculum Journey
          </h3>
          <span className="text-xs font-bold text-violet-600 dark:text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" /> {roadmap.steps.length} Phases Active
          </span>
        </div>

        {/* Path container: Alternating steps on desktop */}
        <div className="relative space-y-12 md:space-y-20 py-4">
          
          {/* Main glowing road track line in center (desktop) / left (mobile) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-indigo-500 rounded-full opacity-30 dark:opacity-20" />
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-indigo-500 rounded-full opacity-40 blur-[2px] hidden md:block" />

          {roadmap.steps.map((step, idx) => {
            const parsedTopics = getTopicsList(step.desc);
            const isCollapsed = !!expandedPhases[step.phase];
            const isLeft = idx % 2 === 0;

            return (
              <div 
                key={idx} 
                className={`flex flex-col md:flex-row items-stretch relative w-full ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual milestone bubble exactly in the center for desktop, left for mobile */}
                <div className={`absolute left-6 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-gradient-to-tr ${roadmap.color || 'from-violet-600 to-indigo-650'} text-white font-black text-base flex items-center justify-center shadow-xl border-4 border-slate-100 dark:border-slate-950 hover:scale-125 hover:rotate-12 transition-all duration-300 z-10 cursor-pointer`}>
                  {step.phase}
                </div>

                {/* Left/Right Card container */}
                <div className={`w-full md:w-[calc(50%-3rem)] ml-14 md:ml-0 ${
                  isLeft ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'
                }`}>
                  
                  {/* Card Content with elegant entrance animation */}
                  <div className="glass-card rounded-3xl p-6 border border-slate-250 dark:border-slate-800/60 hover:border-violet-500/40 hover:shadow-xl transition-all duration-300 space-y-4 relative group hover:-translate-y-1">
                    
                    {/* Connecting triangle pointer pointing to central track (desktop only) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rotate-45 bg-white/80 dark:bg-slate-900/80 border-slate-200/50 dark:border-slate-800/40 ${
                      isLeft 
                        ? '-right-2 border-r border-t' 
                        : '-left-2 border-l border-b'
                    }`} />

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-black text-violet-600 dark:text-violet-405 uppercase tracking-widest block">
                          Phase {step.phase}
                        </span>
                        <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 mt-1 leading-snug">
                          {step.title}
                        </h4>
                      </div>
                      
                      <button
                        onClick={() => togglePhase(step.phase)}
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-violet-500/10 hover:text-violet-650 dark:hover:text-violet-400 transition-colors cursor-pointer shrink-0"
                        aria-label="Toggle details"
                      >
                        {isCollapsed ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
                      </button>
                    </div>

                    {!isCollapsed && (
                      <div className="space-y-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 animate-fadeIn">
                        <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed text-left">
                          {step.desc}
                        </p>

                        {parsedTopics.length > 0 && (
                          <div className="space-y-2.5 text-left">
                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest block">
                              Key Subtopics
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {parsedTopics.map((topic, tIdx) => (
                                <span 
                                  key={tIdx} 
                                  className="text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-300 px-3.5 py-1 rounded-xl border border-slate-200/50 dark:border-slate-800/40 hover:border-violet-500/20 hover:bg-violet-500/5 transition-all cursor-default"
                                >
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}
