import React, { useState } from 'react';
import { Code2, Sparkles, Map, GraduationCap, CheckSquare, Lightbulb, ArrowRight, User } from 'lucide-react';

export default function WelcomeScreen({ onComplete }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [step, setStep] = useState(1); // 1 = name, 2 = role, 3 = loading/done animation
  const [error, setError] = useState('');

  const roles = [
    { 
      label: 'Student / Learner', 
      emoji: '🎓',
      desc: 'Build foundational knowledge in computer science, code logic, and core web techs.'
    },
    { 
      label: 'Frontend Developer', 
      emoji: '🎨',
      desc: 'Design beautiful, responsive interface components and react states that users love.'
    },
    { 
      label: 'Backend Developer', 
      emoji: '⚙️',
      desc: 'Architect APIs, configure routing middleware, and organize databases.'
    },
    { 
      label: 'Full Stack Developer', 
      emoji: '🚀',
      desc: 'Bridge frontend visual layouts and server-side databases as a complete coder.'
    },
    { 
      label: 'Data Scientist', 
      emoji: '📊',
      desc: 'Analyze raw data trends, write predictive models, and render statistical charts.'
    },
    { 
      label: 'DevOps Engineer', 
      emoji: '☁️',
      desc: 'Automate build pipelines, host clouds, and manage servers.'
    },
    { 
      label: 'UI/UX Designer', 
      emoji: '✏️',
      desc: 'Create wireframes, conduct user research, and build Figma design frameworks.'
    },
    { 
      label: 'Just Exploring', 
      emoji: '🔍',
      desc: 'Dip your toes in multiple paths and see what sparks your interest.'
    },
  ];

  const features = [
    { icon: Map, label: 'Roadmaps', desc: 'Visual Career Tracks', color: 'text-violet-400' },
    { icon: Lightbulb, label: 'Projects', desc: 'Curated Portfolios', color: 'text-amber-400' },
    { icon: GraduationCap, label: 'Resources', desc: 'Top Free Guides', color: 'text-sky-400' },
    { icon: CheckSquare, label: 'Tracker', desc: 'Interactive Milestones', color: 'text-emerald-400' },
  ];

  const handleNameNext = () => {
    if (!name.trim()) {
      setError('Please enter your name to begin your journey.');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleFinish = (selectedRole) => {
    const finalRole = selectedRole || role || 'Just Exploring';
    setStep(3);
    setTimeout(() => {
      onComplete({ name: name.trim(), role: finalRole });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center bg-slate-950 overflow-y-auto px-4 py-8">
      {/* Animated visual blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-fuchsia-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />

      <div className="relative w-full max-w-2xl mx-auto z-10 my-auto">

        {/* Step 3 ── Done animation */}
        {step === 3 && (
          <div className="text-center space-y-6 animate-fadeIn py-12">
            <div className="text-8xl animate-bounce mb-4">🚀</div>
            <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none">
              Welcome aboard, <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{name}</span>!
            </h2>
            <p className="text-slate-400 text-base max-w-md mx-auto leading-relaxed">
              Personalizing your roadmap, resource filters, and dashboard interface...
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto mt-6 animate-pulse" />
          </div>
        )}

        {/* Step 1 ── Enter Name */}
        {step === 1 && (
          <div className="space-y-10 animate-fadeIn">
            {/* Brand */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center mb-1">
                <div className="p-5 rounded-3xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-2xl shadow-violet-900/60 animate-float">
                  <Code2 className="h-10 w-10" />
                </div>
              </div>
              <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-tight">
                Embark on <br/>
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-405 to-indigo-400 bg-clip-text text-transparent">DevSearch</span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
                A personalized developer learning platform for CS students. Select your goal, follow interactive roadmaps, and track your skills.
              </p>
            </div>

            {/* Feature pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
              {features.map(f => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex flex-col items-center text-center gap-2 sm:gap-3 bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-5 transition-all hover:bg-white/10 hover:-translate-y-1 duration-300">
                    <div className={`${f.color} shrink-0 bg-white/5 p-2.5 rounded-xl`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white leading-snug">{f.label}</p>
                      <p className="text-[10px] text-slate-450 mt-1 leading-normal">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Name Input Form */}
            <div className="max-w-md mx-auto space-y-5">
              <label className="block text-xs font-black text-slate-400 text-center uppercase tracking-widest">
                What should we call you? 👋
              </label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={e => { setName(e.target.value); setError(''); }}
                  onKeyDown={e => e.key === 'Enter' && handleNameNext()}
                  placeholder="Enter your name..."
                  autoFocus
                  className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white/10 focus:border-transparent transition-all"
                />
              </div>
              {error && (
                <p className="text-sm text-rose-400 font-bold text-center animate-pulse">{error}</p>
              )}
              <button
                onClick={handleNameNext}
                className="w-full py-4.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-650 hover:from-violet-500 hover:to-indigo-500 text-white font-black text-base flex items-center justify-center gap-2 shadow-2xl shadow-violet-950/65 hover:shadow-violet-500/25 transition-all cursor-pointer transform hover:-translate-y-0.5 duration-200"
              >
                Let's Begin
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2 ── Pick a Goal */}
        {step === 2 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-bold px-4 py-1.5 rounded-full">
                <Sparkles className="h-4 w-4 text-violet-400" />
                Hi, {name}!
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
                Choose Your Goal
              </h2>
              <p className="text-base text-slate-400 max-w-md mx-auto leading-relaxed">
                DevSearch adapts instantly — tailoring roadmaps, projects, and resources to your specific goals.
              </p>
            </div>

            {/* Elaborate Role Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[380px] overflow-y-auto pr-2 scrollbar-thin">
              {roles.map(r => (
                <button
                  key={r.label}
                  onClick={() => handleFinish(r.label)}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-violet-600/20 hover:border-violet-500/40 text-left transition-all cursor-pointer group hover:scale-[1.02] duration-300"
                >
                  <span className="text-3xl shrink-0 p-2 bg-white/5 rounded-xl block group-hover:scale-110 transition-transform">{r.emoji}</span>
                  <div className="space-y-1">
                    <span className="text-base font-black text-slate-205 group-hover:text-white transition-colors block">
                      {r.label}
                    </span>
                    <span className="text-xs text-slate-400 group-hover:text-slate-350 leading-relaxed block">
                      {r.desc}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 py-4 rounded-2xl border border-white/10 text-slate-400 hover:text-white text-sm font-bold transition-all hover:bg-white/5 cursor-pointer"
              >
                ← Back
              </button>
              <button
                onClick={() => handleFinish('Just Exploring')}
                className="w-2/3 py-4 rounded-2xl border border-white/15 text-slate-300 hover:text-white text-sm font-bold hover:bg-white/5 transition-all cursor-pointer"
              >
                Skip for now (Just Exploring) →
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
