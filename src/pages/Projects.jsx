import React, { useState } from 'react';
import { Lightbulb, Search, Clock, ExternalLink, Code2, Star } from 'lucide-react';
import { projectsData } from '../data/mockData';

const roleCategoriesMapping = {
  'Frontend Developer': ['Frontend'],
  'Backend Developer': ['Full Stack'],
  'Full Stack Developer': ['Frontend', 'Full Stack'],
  'Data Scientist': ['AI/ML'],
  'DevOps Engineer': ['Full Stack'],
  'UI/UX Designer': ['Frontend'],
  'Student / Learner': ['Frontend'],
  'Just Exploring': ['Frontend', 'Full Stack']
};

const difficultyOrder = {
  'Beginner': 1,
  'Intermediate': 2,
  'Advanced': 3
};

export default function Projects({ profile }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const userRole = profile?.role || 'Just Exploring';
  const allowedCategories = roleCategoriesMapping[userRole] || ['Frontend'];

  // 1. Filter by role domain category first
  const roleFilteredProjects = projectsData.filter(p => allowedCategories.includes(p.category));

  // 2. Sort by difficulty: Beginner first, then Intermediate, then Advanced
  const sortedRoleProjects = [...roleFilteredProjects].sort((a, b) => {
    return (difficultyOrder[a.difficulty] || 1) - (difficultyOrder[b.difficulty] || 1);
  });

  // 3. Apply search query and difficulty filter
  const finalFilteredProjects = sortedRoleProjects.filter(p => {
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchDiff = selectedDifficulty === 'All' || p.difficulty === selectedDifficulty;
    return matchSearch && matchDiff;
  });

  const getDifficultyStyle = (diff) => {
    switch (diff) {
      case 'Beginner': return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40';
      case 'Intermediate': return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/40';
      case 'Advanced': return 'bg-rose-105 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800/40';
      default: return 'bg-slate-100 dark:bg-slate-800 text-slate-600';
    }
  };

  const getDifficultyStars = (diff) => {
    switch (diff) {
      case 'Beginner': return 1;
      case 'Intermediate': return 2;
      case 'Advanced': return 3;
      default: return 1;
    }
  };

  // Group by difficulty for count display based on allowed projects
  const counts = {
    Beginner: roleFilteredProjects.filter(p => p.difficulty === 'Beginner').length,
    Intermediate: roleFilteredProjects.filter(p => p.difficulty === 'Intermediate').length,
    Advanced: roleFilteredProjects.filter(p => p.difficulty === 'Advanced').length,
  };

  return (
    <div className="py-8 px-4 sm:px-8 lg:px-12 w-full space-y-8 animate-fadeIn">

      {/* Header */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20">
            <Lightbulb className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
              Personalized Project Ideas
            </h1>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2 mt-1">
              Projects filtered for:{' '}
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                {userRole}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Difficulty stats strip */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Beginner', count: counts.Beginner, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-500/10 dark:bg-emerald-500/5' },
          { label: 'Intermediate', count: counts.Intermediate, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-500/10 dark:bg-amber-500/5' },
          { label: 'Advanced', count: counts.Advanced, color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-500/10 dark:bg-rose-500/5' },
        ].map(stat => (
          <div key={stat.label} className={`glass-card rounded-2xl p-4 text-center ${stat.bg}`}>
            <p className={`text-2xl font-black ${stat.color}`}>{stat.count}</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{stat.label} Projects</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="glass-card rounded-3xl p-4 sm:p-5 space-y-4 border border-slate-200/50 dark:border-slate-800/40">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects or tech stack (e.g. React, Node, CSS)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 placeholder-slate-450 text-xs focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
          />
        </div>
        <div className="flex flex-wrap gap-4 pt-1 border-t border-slate-100 dark:border-slate-850/50 items-center justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Difficulty Filter:</span>
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map(d => (
              <button
                key={d}
                onClick={() => setSelectedDifficulty(d)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedDifficulty === d
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-805 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          <span className="text-[10px] font-bold text-slate-400">
            Category Mapped: <span className="text-slate-600 dark:text-slate-300 font-extrabold">{allowedCategories.join(', ')}</span>
          </span>
        </div>
      </div>

      {/* Count bar */}
      <div className="flex justify-between items-center px-1">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          Showing {finalFilteredProjects.length} {finalFilteredProjects.length === 1 ? 'Project' : 'Projects'}
        </span>
        {(searchQuery || selectedDifficulty !== 'All') && (
          <button
            onClick={() => { setSearchQuery(''); setSelectedDifficulty('All'); }}
            className="text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Project Cards Grid */}
      {finalFilteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {finalFilteredProjects.map(project => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-5 flex flex-col justify-between hover:shadow-md dark:hover:shadow-black/25 hover:border-violet-500/20 transition-all duration-300 group border border-slate-200/50 dark:border-slate-800/40"
            >
              <div>
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${project.color} mb-4 opacity-70`} />

                {/* Header */}
                <div className="flex justify-between items-start gap-3 mb-3">
                  <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm leading-snug group-hover:text-violet-650 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full shrink-0 ${getDifficultyStyle(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3].map(n => (
                    <Star
                      key={n}
                      className={`h-3 w-3 ${n <= getDifficultyStars(project.difficulty) ? 'fill-amber-400 text-amber-400' : 'text-slate-200 dark:text-slate-700'}`}
                    />
                  ))}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4 space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Key Features</p>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map(f => (
                      <span key={f} className="text-[9px] font-bold bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tech Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map(tech => (
                      <span
                        key={tech}
                        className={`text-[9px] font-extrabold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${project.color} text-white opacity-95`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-100 dark:border-slate-850/50 pt-4 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-405 font-bold">
                  <Clock className="h-3.5 w-3.5" />
                  {project.timeEst}
                </div>
                <a
                  href={`https://github.com/search?q=${encodeURIComponent(project.githubSearch)}&type=repositories`}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r ${project.color} text-white font-extrabold text-[11px] shadow-sm hover:opacity-90 transition-opacity cursor-pointer`}
                >
                  <Code2 className="h-3.5 w-3.5" />
                  See on GitHub
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
          <Lightbulb className="h-10 w-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <h3 className="font-bold text-slate-800 dark:text-slate-100">No projects found</h3>
          <p className="text-xs text-slate-550 dark:text-slate-400 mt-1">Try changing your search or filter combination.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedDifficulty('All'); }}
            className="mt-4 px-4 py-2 rounded-xl bg-violet-600 text-white font-bold text-xs hover:bg-violet-700 transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
}
