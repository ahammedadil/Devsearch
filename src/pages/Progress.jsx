import React from 'react';
import { CheckSquare, Square, Trash2, Zap, CheckCircle2, TrendingUp } from 'lucide-react';
import { defaultSkills } from '../data/mockData';

const roleSkillCategoryMapping = {
  'Frontend Developer': 'frontend',
  'Backend Developer': 'backend',
  'Full Stack Developer': 'frontend',
  'Data Scientist': 'tools-devops',
  'DevOps Engineer': 'tools-devops',
  'UI/UX Designer': 'frontend',
  'Student / Learner': 'frontend',
  'Just Exploring': 'frontend'
};

export default function Progress({ profile, skills, toggleSkill, resetSkills, markAllSkills }) {
  const userRole = profile?.role || 'Just Exploring';
  const highlightedCategoryId = roleSkillCategoryMapping[userRole] || 'frontend';

  // Calculate total and completed skills
  const totalSkills = defaultSkills.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedCount = Object.values(skills).filter(Boolean).length;
  const overallPercentage = totalSkills > 0 ? Math.round((completedCount / totalSkills) * 100) : 0;

  // Circular progress SVG values
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (overallPercentage / 100) * circumference;

  // Category specific stats helper
  const getCategoryStats = (cat) => {
    const total = cat.items.length;
    const completed = cat.items.filter(item => skills[item.id]).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percentage };
  };

  // Reorder categories so that the role-specific category is first (highlighted at the top)
  const orderedCategories = [...defaultSkills].sort((a, b) => {
    if (a.id === highlightedCategoryId) return -1;
    if (b.id === highlightedCategoryId) return 1;
    return 0;
  });

  // Calculate coordinates for the line chart
  const points = defaultSkills.map((cat, index) => {
    const { percentage } = getCategoryStats(cat);
    // X goes from 110 to 390
    const x = 110 + index * 130;
    // Y goes from 130 (0%) to 30 (100%)
    const y = 130 - (percentage / 100) * 100;
    return { x, y, title: cat.title, percentage };
  });

  // Create path coordinates
  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = points.length > 0 
    ? `${linePath} L ${points[points.length - 1].x} 130 L ${points[0].x} 130 Z` 
    : '';

  return (
    <div className="py-8 px-4 sm:px-8 lg:px-12 w-full space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
            Skill Progress Tracker
          </h1>
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
            Skill tracking for:{' '}
            <span className="px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
              {userRole}
            </span>
          </p>
        </div>

        {/* Global Reset/Mark Buttons */}
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={markAllSkills}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-xl hover:bg-violet-600 hover:text-white transition-all cursor-pointer border border-violet-500/10"
          >
            <CheckCircle2 className="h-4 w-4" />
            Complete All
          </button>
          <button
            onClick={resetSkills}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-xl hover:bg-rose-600 hover:text-white transition-all cursor-pointer border border-rose-500/10"
          >
            <Trash2 className="h-4 w-4" />
            Reset Progress
          </button>
        </div>
      </div>

      {/* Progress Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Radial SVG Circle Indicator */}
        <div className="glass-card rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-around gap-6 lg:col-span-1 relative overflow-hidden bg-gradient-to-tr from-violet-500/[0.02] to-indigo-500/[0.02] border border-slate-200/50 dark:border-slate-800/40">
          
          <div className="relative h-32 w-32 flex items-center justify-center shrink-0">
            {/* SVG Track Circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r={radius}
                className="stroke-slate-200 dark:stroke-slate-800"
                strokeWidth="10"
                fill="transparent"
              />
              <circle
                cx="64"
                cy="64"
                r={radius}
                className="stroke-violet-600 dark:stroke-violet-400 transition-all duration-700 ease-out"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-3xl font-black text-slate-800 dark:text-slate-100">{overallPercentage}%</span>
              <p className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide">Finished</p>
            </div>
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full text-[10px] font-bold">
              <Zap className="h-3.5 w-3.5 fill-amber-500/20" />
              Metrics
            </div>
            <h3 className="text-base font-black text-slate-850 dark:text-slate-100">
              Goal Progress
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              {overallPercentage === 100 
                ? "Incredible work! Checked off every single skill. Ready to build production portfolios!" 
                : overallPercentage >= 50
                ? "Looking good! You are past the halfway mark. Focus on backend topics next."
                : "A journey of a thousand miles begins with a single commit. Check off elements as you learn."
              }
            </p>
          </div>

        </div>

        {/* Custom SVG Performance Graph with X and Y Axes */}
        <div className="glass-card rounded-3xl p-6 flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/40 lg:col-span-2 relative overflow-hidden bg-gradient-to-tr from-violet-500/[0.01] to-indigo-500/[0.01]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-405 uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4" /> Performance Analytics
            </h3>
            <span className="text-[10px] font-extrabold text-violet-650 dark:text-violet-400 px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/10">
              Confidence Curve
            </span>
          </div>

          {/* SVG Line / Area Graph */}
          <div className="w-full relative h-[150px]">
            <svg className="w-full h-full" viewBox="0 0 450 160">
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Y-Axis Horizontal Gridlines */}
              <line x1="70" y1="30" x2="410" y2="30" stroke="currentColor" className="text-slate-200 dark:text-slate-800/60" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="70" y1="55" x2="410" y2="55" stroke="currentColor" className="text-slate-200 dark:text-slate-800/60" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="70" y1="80" x2="410" y2="80" stroke="currentColor" className="text-slate-200 dark:text-slate-800/60" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="70" y1="105" x2="410" y2="105" stroke="currentColor" className="text-slate-200 dark:text-slate-800/60" strokeWidth="1" strokeDasharray="4,4" />

              {/* Draw Axis Lines */}
              {/* Y-Axis Line */}
              <line x1="70" y1="20" x2="70" y2="130" stroke="currentColor" className="text-slate-350 dark:text-slate-700" strokeWidth="1.5" />
              {/* X-Axis Line */}
              <line x1="70" y1="130" x2="420" y2="130" stroke="currentColor" className="text-slate-350 dark:text-slate-700" strokeWidth="1.5" />

              {/* Y-Axis Tick Labels */}
              <text x="60" y="34" textAnchor="end" className="text-[9px] font-bold fill-slate-500 dark:fill-slate-400">100%</text>
              <text x="60" y="59" textAnchor="end" className="text-[9px] font-bold fill-slate-500 dark:fill-slate-400">75%</text>
              <text x="60" y="84" textAnchor="end" className="text-[9px] font-bold fill-slate-500 dark:fill-slate-400">50%</text>
              <text x="60" y="109" textAnchor="end" className="text-[9px] font-bold fill-slate-500 dark:fill-slate-400">25%</text>
              <text x="60" y="134" textAnchor="end" className="text-[9px] font-bold fill-slate-500 dark:fill-slate-400">0%</text>

              {/* Area Under Curve */}
              {areaPath && <path d={areaPath} fill="url(#areaGradient)" />}

              {/* Connection Line */}
              {linePath && (
                <path 
                  d={linePath} 
                  fill="none" 
                  stroke="#8b5cf6" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_2px_8px_rgba(139,92,246,0.3)]"
                />
              )}

              {/* Render Points & X-Axis Labels */}
              {points.map((p, idx) => (
                <g key={idx} className="group">
                  {/* Outer glowing point */}
                  <circle cx={p.x} cy={p.y} r="6" fill="#8b5cf6" fillOpacity="0.4" className="animate-pulse" />
                  {/* Inner solid point */}
                  <circle cx={p.x} cy={p.y} r="4" fill="#a78bfa" stroke="#8b5cf6" strokeWidth="1.5" />
                  
                  {/* Tooltip percentage label directly above point */}
                  <text 
                    x={p.x} 
                    y={p.y - 10} 
                    textAnchor="middle" 
                    className="text-[9px] font-black fill-slate-700 dark:fill-slate-350"
                  >
                    {p.percentage}%
                  </text>

                  {/* X-Axis Category Label */}
                  <text 
                    x={p.x} 
                    y="146" 
                    textAnchor="middle" 
                    className="text-[9px] font-bold fill-slate-605 dark:fill-slate-400"
                  >
                    {p.title}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

      </div>

      {/* Skills Checkbox Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {orderedCategories.map((cat) => {
          const { percentage } = getCategoryStats(cat);
          const isHighlight = cat.id === highlightedCategoryId;
          return (
            <div 
              key={cat.id} 
              className={`glass-card rounded-3xl p-6 space-y-4 h-fit border transition-all duration-300 ${
                isHighlight 
                  ? 'border-violet-500/30 shadow-violet-500/5 shadow-md bg-gradient-to-b from-violet-500/[0.01] to-transparent' 
                  : 'border-slate-200/50 dark:border-slate-800/50'
              }`}
            >
              {/* Category Header */}
              <div className="border-b border-slate-100 dark:border-slate-850 pb-3 flex justify-between items-center">
                <h3 className="font-extrabold text-slate-805 dark:text-slate-100 text-sm flex items-center gap-2">
                  <span>{cat.title}</span>
                  {isHighlight && (
                    <span className="text-[8px] font-black uppercase bg-violet-600 text-white px-2 py-0.5 rounded-md">
                      Focus Area
                    </span>
                  )}
                </h3>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                  isHighlight 
                    ? 'bg-violet-600 text-white' 
                    : 'bg-slate-150 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}>
                  {percentage}%
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {cat.items.map((item) => {
                  const isChecked = !!skills[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleSkill(item.id)}
                      className={`flex items-start gap-3 p-3 rounded-2xl border transition-all cursor-pointer group ${
                        isChecked
                          ? 'bg-emerald-500/[0.03] border-emerald-500/30 text-slate-800 dark:text-slate-200 dark:border-emerald-500/20'
                          : 'bg-white/40 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800/80 hover:border-violet-500/25 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <button 
                        className={`mt-0.5 shrink-0 transition-transform group-hover:scale-105 ${
                          isChecked ? 'text-emerald-550 animate-pulse' : 'text-slate-400'
                        }`}
                        aria-label={`Toggle ${item.name}`}
                      >
                        {isChecked ? (
                          <CheckSquare className="h-5 w-5 fill-emerald-500/10 text-emerald-600" />
                        ) : (
                          <Square className="h-5 w-5 text-slate-450" />
                        )}
                      </button>
                      
                      <span className={`text-xs font-semibold select-none leading-relaxed transition-all ${
                        isChecked ? 'line-through opacity-60 text-slate-500 dark:text-slate-400' : ''
                      }`}>
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
