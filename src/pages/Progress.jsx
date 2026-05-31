import React from 'react';
import { CheckSquare, Square, Trash2, Award, Zap, CheckCircle2 } from 'lucide-react';
import { defaultSkills } from '../data/mockData';

export default function Progress({ skills, toggleSkill, resetSkills, markAllSkills }) {
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

  return (
    <div className="py-8 px-4 sm:px-8 lg:px-12 w-full space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
            Skill Progress Tracker
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Map out your frontend, backend, and DevOps milestones. Check items as you learn them.
          </p>
        </div>

        {/* Global Reset/Mark Buttons */}
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={markAllSkills}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-xl hover:bg-violet-550 hover:text-white transition-all cursor-pointer border border-violet-500/10"
          >
            <CheckCircle2 className="h-4 w-4" />
            Complete All
          </button>
          <button
            onClick={resetSkills}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold bg-rose-500/10 text-rose-605 dark:text-rose-400 rounded-xl hover:bg-rose-600 hover:text-white transition-all cursor-pointer border border-rose-500/10"
          >
            <Trash2 className="h-4 w-4" />
            Reset Progress
          </button>
        </div>
      </div>

      {/* Progress Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Radial SVG Circle Indicator */}
        <div className="glass-card rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-around gap-6 md:col-span-2 relative overflow-hidden bg-gradient-to-tr from-violet-500/[0.03] to-indigo-500/[0.03]">
          
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
              <span className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">{overallPercentage}%</span>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Finished</p>
            </div>
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-500 dark:bg-amber-400/10 dark:text-amber-400 px-3 py-1 rounded-full text-xs font-bold">
              <Zap className="h-3.5 w-3.5 fill-amber-500" />
              Progress Level
            </div>
            <h3 className="text-xl font-bold text-slate-850 dark:text-slate-150">
              You completed {completedCount} out of {totalSkills} skills!
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
              {overallPercentage === 100 
                ? "Incredible work! You have checked off every skill on our roadmap. Ready to build production portfolios!" 
                : overallPercentage >= 50
                ? "Looking good! You are past the halfway mark. Focus on backend endpoints and tools setup to round out your development skills."
                : "A journey of a thousand miles begins with a single commit. Check off elements as you study their concepts."
              }
            </p>
          </div>

        </div>

        {/* Section Breakdown Mini Tracker */}
        <div className="glass-card rounded-3xl p-6 h-full flex flex-col justify-between">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Roadmap Breakdown</h3>
          <div className="space-y-4">
            {defaultSkills.map((cat) => {
              const { completed, total, percentage } = getCategoryStats(cat);
              return (
                <div key={cat.id} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-650 dark:text-slate-350">
                    <span className="truncate">{cat.title}</span>
                    <span>{completed}/{total}</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-violet-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Skills Checkbox Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {defaultSkills.map((cat) => {
          const { percentage } = getCategoryStats(cat);
          return (
            <div key={cat.id} className="glass-card rounded-3xl p-6 space-y-4 h-fit border border-slate-200/50 dark:border-slate-800/50">
              {/* Category Header */}
              <div className="border-b border-slate-100 dark:border-slate-850 pb-3 flex justify-between items-center">
                <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-base">{cat.title}</h3>
                <span className="text-xs bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 px-2.5 py-0.5 rounded-full font-bold">
                  {percentage}%
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-3.5">
                {cat.items.map((item) => {
                  const isChecked = !!skills[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleSkill(item.id)}
                      className={`flex items-start gap-3 p-3 rounded-2xl border transition-all cursor-pointer group ${
                        isChecked
                          ? 'bg-emerald-500/[0.02] border-emerald-500/20 text-slate-800 dark:text-slate-200'
                          : 'bg-white/40 dark:bg-slate-900/30 border-slate-100 dark:border-slate-800/80 hover:border-violet-500/20 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <button 
                        className={`mt-0.5 shrink-0 transition-transform group-hover:scale-105 ${
                          isChecked ? 'text-emerald-500' : 'text-slate-400'
                        }`}
                        aria-label={`Toggle ${item.name}`}
                      >
                        {isChecked ? (
                          <CheckSquare className="h-5 w-5 fill-emerald-500/10" />
                        ) : (
                          <Square className="h-5 w-5" />
                        )}
                      </button>
                      
                      <span className={`text-xs font-semibold select-none leading-relaxed transition-all ${
                        isChecked ? 'line-through opacity-70 text-slate-500' : ''
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
