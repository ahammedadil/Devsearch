import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Map, Lightbulb, GraduationCap, CheckSquare,
  Flame, ArrowRight, Zap, Trophy, Compass
} from 'lucide-react';
import { roadmapsData, projectsData, resourcesData, defaultSkills } from '../data/mockData';

const tips = [
  "Build projects you're actually curious about — curiosity beats discipline.",
  "Code every day, even if it's just 20 minutes. Consistency wins.",
  "Read other people's code on GitHub — it's the fastest way to learn real patterns.",
  "Document as you build. Future-you will thank present-you.",
  "Push to GitHub daily. Your commit graph is your silent resume.",
  "Teach what you learn. Writing a blog post solidifies knowledge.",
  "Don't tutorial-hop. Pick one resource and see it through to the end.",
  "Learn to read error messages carefully — they usually tell you the exact problem.",
  "Write clean code, but don't optimize prematurely. Working code is better than perfect non-existent code.",
  "ಬೆಂಗಳೂರು (Bangalore) is a major tech hub — look for local developer meetups to build your network!",
  "Master Git early. Knowing how to branch, merge, and rebase will save you hours of panic.",
  "Invest time in learning keyboard shortcuts for your IDE. Tiny improvements compound over time.",
  "When stuck, step away from the screen. A 10-minute walk solves more bugs than staring in frustration.",
  "Break large problems into tiny, verifiable steps. Solve them one by one.",
  "Before writing code, explain your solution out loud or draw it on a whiteboard.",
  "Don't memorize syntax. Understand concepts and search structures efficiently.",
  "Practice writing good, descriptive commit messages. Collaboration becomes ten times easier.",
  "Always write code as if the person maintaining it is a violent psychopath who knows where you live.",
  "Learn how the browser rendering engine works under the hood. It changes how you write frontend components.",
  "Optimize for readability first. Code is read far more often than it is written.",
  "Write unit tests for complex business logic. It builds confidence when refactoring.",
  "Understand relational database indexing. Bad query speeds are almost always index issues.",
  "Embrace constructive reviews. Code reviews are meant to refine the codebase, not criticize the coder.",
  "Keep your functions short, cohesive, and focused on doing one single thing well.",
  "Don't neglect CSS fundamentals. Tailwind is great, but raw layouts knowledge makes you irreplaceable.",
  "Understand CORS early on — it will save you countless network debug headaches later.",
  "Avoid global states whenever local variables or component props suffice.",
  "Always keep secrets, API tokens, and passwords out of your Git source history.",
  "Deploy your code to production early. Staging setups expose environment mismatches immediately.",
  "Measure your performance curve, not how fast others seem to code. Everyone grows differently.",
  "Stay curious! The best developers are lifelong students who enjoy the process of discovering new paradigms."
];

const roleMappings = {
  'Frontend Developer': {
    roadmapId: 'frontend',
    resourceTopics: ['HTML', 'CSS', 'JavaScript', 'React'],
    projectCategories: ['Frontend'],
    skillCategory: 'frontend',
    gradient: 'from-violet-600 via-fuchsia-600 to-indigo-750',
    shadow: 'shadow-violet-900/30 text-violet-600 dark:text-violet-400',
    bgLight: 'bg-violet-500/10',
    badgeColor: 'bg-violet-500/20 text-violet-100 border border-violet-500/30',
    tagline: 'Crafting responsive, interactive, and beautiful pixel-perfect user experiences.'
  },
  'Backend Developer': {
    roadmapId: 'backend',
    resourceTopics: ['Backend', 'Tools'],
    projectCategories: ['Full Stack'],
    skillCategory: 'backend',
    gradient: 'from-blue-600 via-indigo-600 to-cyan-705',
    shadow: 'shadow-blue-900/30 text-blue-600 dark:text-blue-400',
    bgLight: 'bg-blue-500/10',
    badgeColor: 'bg-blue-500/20 text-blue-100 border border-blue-500/30',
    tagline: 'Designing high-performance APIs, robust server architectures, and scalable database schemas.'
  },
  'Full Stack Developer': {
    roadmapId: 'fullstack',
    resourceTopics: ['JavaScript', 'React', 'Backend'],
    projectCategories: ['Frontend', 'Full Stack'],
    skillCategory: 'frontend',
    gradient: 'from-indigo-600 via-purple-650 to-violet-750',
    shadow: 'shadow-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    bgLight: 'bg-indigo-500/10',
    badgeColor: 'bg-indigo-500/20 text-indigo-100 border border-indigo-500/30',
    tagline: 'Bridging the gap between beautiful user interfaces and powerful background architectures.'
  },
  'Data Scientist': {
    roadmapId: 'datascience',
    resourceTopics: ['Tools', 'Backend'],
    projectCategories: ['AI/ML'],
    skillCategory: 'tools-devops',
    gradient: 'from-emerald-600 via-teal-650 to-cyan-705',
    shadow: 'shadow-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    bgLight: 'bg-emerald-500/10',
    badgeColor: 'bg-emerald-500/20 text-emerald-100 border border-emerald-500/30',
    tagline: 'Extracting clean insights, building predictive models, and visualizing complex datasets.'
  },
  'DevOps Engineer': {
    roadmapId: 'devops',
    resourceTopics: ['Tools', 'Backend'],
    projectCategories: ['Full Stack'],
    skillCategory: 'tools-devops',
    gradient: 'from-orange-600 via-amber-600 to-red-700',
    shadow: 'shadow-orange-900/30 text-orange-600 dark:text-orange-400',
    bgLight: 'bg-orange-500/10',
    badgeColor: 'bg-orange-500/20 text-orange-100 border border-orange-500/30',
    tagline: 'Automating deployment pipelines, containerizing workloads, and orchestrating cloud environments.'
  },
  'UI/UX Designer': {
    roadmapId: 'uiux',
    resourceTopics: ['HTML', 'CSS'],
    projectCategories: ['Frontend'],
    skillCategory: 'frontend',
    gradient: 'from-pink-600 via-fuchsia-600 to-rose-700',
    shadow: 'shadow-pink-900/30 text-pink-600 dark:text-pink-400',
    bgLight: 'bg-pink-500/10',
    badgeColor: 'bg-pink-500/20 text-pink-100 border border-pink-500/30',
    tagline: 'Stitching empathy with visual design and creating intuitive customer journeys and Figma styleguides.'
  },
  'Student / Learner': {
    roadmapId: 'frontend',
    resourceTopics: ['HTML', 'CSS', 'JavaScript'],
    projectCategories: ['Frontend'],
    skillCategory: 'frontend',
    gradient: 'from-sky-600 via-blue-650 to-indigo-705',
    shadow: 'shadow-sky-900/30 text-sky-600 dark:text-sky-400',
    bgLight: 'bg-sky-500/10',
    badgeColor: 'bg-sky-500/20 text-sky-100 border border-sky-500/30',
    tagline: 'Laying a solid foundation in computer science, logic design, and core programming paradigms.'
  },
  'Just Exploring': {
    roadmapId: 'fullstack',
    resourceTopics: ['HTML', 'JavaScript', 'React'],
    projectCategories: ['Frontend', 'Full Stack'],
    skillCategory: 'frontend',
    gradient: 'from-slate-700 via-slate-800 to-slate-950',
    shadow: 'shadow-slate-900/30 text-slate-600 dark:text-slate-400',
    bgLight: 'bg-slate-500/10',
    badgeColor: 'bg-slate-500/20 text-slate-100 border border-slate-500/30',
    tagline: 'Tasting a bit of everything and understanding what excites you the most in coding.'
  }
};

export default function Dashboard({ completedResources, skills, profile, onResetProfile }) {
  const navigate = useNavigate();
  const tip = tips[new Date().getDate() % tips.length];

  const activeMapping = roleMappings[profile?.role] || roleMappings['Just Exploring'];

  // Dynamic calculations based on matching role filters
  // 1. Roadmap Phases
  const matchedRoadmap = roadmapsData.find(r => r.id === activeMapping.roadmapId) || roadmapsData[0];
  const roadmapPhasesCount = matchedRoadmap.steps.length;

  // 2. Resources Count & Done
  const roleResources = resourcesData.filter(r => activeMapping.resourceTopics.includes(r.topic));
  const resourcesCompletedCount = roleResources.filter(r => completedResources.includes(r.id)).length;

  // 3. Projects Available
  const roleProjects = projectsData.filter(p => activeMapping.projectCategories.includes(p.category));
  const projectsAvailableCount = roleProjects.length;

  // 4. Skills Completed (within their skillCategory)
  const matchedSkillCat = defaultSkills.find(c => c.id === activeMapping.skillCategory) || defaultSkills[0];
  const catSkillsCount = matchedSkillCat.items.length;
  const catSkillsCompletedCount = matchedSkillCat.items.filter(item => skills[item.id]).length;

  // 5. Global Skills (for overall progress ring)
  const totalGlobalSkills = defaultSkills.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedGlobalSkills = Object.keys(skills).filter(key => skills[key]).length;
  const progressPct = totalGlobalSkills > 0 ? Math.round((completedGlobalSkills / totalGlobalSkills) * 100) : 0;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const firstName = profile?.name?.split(' ')[0] || 'Developer';

  return (
    <div className="py-8 px-4 sm:px-8 lg:px-12 w-full space-y-8 animate-fadeIn">

      {/* ── Personalized Welcome Banner ── */}
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${activeMapping.gradient} p-6 sm:p-8 shadow-xl ${activeMapping.shadow}`}>
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-xl" />
        <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 blur-lg" />
        
        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white border border-white/10">
                Goal Active
              </span>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${activeMapping.badgeColor}`}>
                {profile?.role}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {getGreeting()}, {firstName}! 👋
            </h1>
            <p className="text-white/80 text-xs sm:text-sm font-medium max-w-xl leading-relaxed">
              {activeMapping.tagline}
            </p>
            <div className="pt-2 flex gap-3">
              <button 
                onClick={onResetProfile}
                className="text-[10px] font-bold bg-white/15 hover:bg-white/25 text-white px-3.5 py-1.5 rounded-xl border border-white/15 transition-all cursor-pointer"
              >
                Change Learning Goal
              </button>
            </div>
          </div>

          {/* Overall Progress Ring Widget */}
          <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md rounded-3xl px-6 py-5 border border-white/20 shrink-0 shadow-lg">
            <div className="relative h-20 w-20 flex items-center justify-center">
              <svg className="h-20 w-20 -rotate-90" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="6.5" />
                <circle
                  cx="32" cy="32" r="26" fill="none"
                  stroke="white" strokeWidth="6.5"
                  strokeDasharray={`${2 * Math.PI * 26}`}
                  strokeDashoffset={`${2 * Math.PI * 26 * (1 - progressPct / 100)}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-white font-black text-base">
                {progressPct}%
              </span>
            </div>
            <div className="text-center">
              <p className="text-white text-[10px] font-black uppercase tracking-wider">
                Overall Progress
              </p>
              <p className="text-white/60 text-[9px] font-semibold mt-0.5">
                {completedGlobalSkills} / {totalGlobalSkills} skills
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Row (Role Personalized) ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Roadmap Phases', value: roadmapPhasesCount, icon: Map, color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-500/10' },
          { label: 'Projects Available', value: projectsAvailableCount, icon: Lightbulb, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-500/10' },
          { label: 'Resources Done', value: `${resourcesCompletedCount}/${roleResources.length}`, icon: GraduationCap, color: 'text-sky-600 dark:text-sky-400', bg: 'bg-sky-500/10' },
          { label: 'Skills Completed', value: `${catSkillsCompletedCount}/${catSkillsCount}`, icon: CheckSquare, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-500/10' },
        ].map(s => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="glass-card rounded-2xl p-4 flex items-center gap-3 border border-slate-200/50 dark:border-slate-800/40">
              <div className={`h-11 w-11 rounded-xl ${s.bg} flex items-center justify-center shrink-0`}>
                <Icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <div>
                <p className={`text-xl sm:text-2xl font-black ${s.color}`}>{s.value}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Quick Navigation Cards (PRD requirement) ── */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Compass className="h-5 w-5 text-violet-500" />
          <h2 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm uppercase tracking-wider">
            Quick Navigation Hub
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: `${profile?.role} Roadmap`,
              desc: `Access your step-by-step career milestones. Currently structured into ${roadmapPhasesCount} full phases of concepts and tasks.`,
              icon: Map,
              color: 'from-violet-500 to-indigo-650',
              route: '/roadmaps',
              badge: 'Visual Path'
            },
            {
              title: `Curated Learning Resources`,
              desc: `Access free, hand-picked documentation, courses, and playlists matching topics: ${activeMapping.resourceTopics.join(', ')}.`,
              icon: GraduationCap,
              color: 'from-sky-500 to-blue-650',
              route: '/resources',
              badge: 'Free Guides'
            },
            {
              title: `${activeMapping.projectCategories.join(' & ')} Projects`,
              desc: `Apply your knowledge to build real, deployable portfolio pieces. ${projectsAvailableCount} domain-specific ideas waiting.`,
              icon: Lightbulb,
              color: 'from-amber-500 to-orange-600',
              route: '/projects',
              badge: 'Hands-on Projects'
            },
            {
              title: `Update Progress Checklist`,
              desc: `Check off development competencies. Your primary skill focus is ${matchedSkillCat.title} (${catSkillsCompletedCount}/${catSkillsCount} done).`,
              icon: CheckSquare,
              color: 'from-emerald-500 to-teal-605',
              route: '/progress',
              badge: 'Interactive Tracker'
            }
          ].map(card => {
            const Icon = card.icon;
            return (
              <button
                key={card.title}
                onClick={() => navigate(card.route)}
                className="glass-card rounded-3xl p-5 text-left border border-slate-200/50 dark:border-slate-800/40 hover:border-violet-500/20 hover:shadow-lg transition-all duration-300 flex items-start justify-between gap-4 group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-extrabold uppercase bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2.5 py-0.5 rounded-full">
                      {card.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-800 dark:text-slate-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                      {card.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-violet-600 dark:text-violet-400 hover:underline">
                    Explore Now <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                
                <div className={`h-11 w-11 rounded-2xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center shadow-md shrink-0`}>
                  <Icon className="h-5 w-5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Tip of the Day Panel ── */}
      <div className="relative overflow-hidden glass-card rounded-3xl p-6 border border-amber-200/40 dark:border-amber-800/20 bg-gradient-to-tr from-amber-500/[0.01] to-orange-500/[0.01]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-xl" />
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-amber-500/10">
            <Flame className="h-4 w-4 text-amber-500" />
          </div>
          <h2 className="font-extrabold text-slate-800 dark:text-slate-100 text-xs uppercase tracking-wider">Dev Tip of the Day</h2>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic max-w-4xl">
          "{tip}"
        </p>
      </div>
    </div>
  );
}
