import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Briefcase, GraduationCap, CheckSquare, Edit3, Save, 
  ArrowRight, Award, Compass, Heart, Bookmark, Sparkles, BookOpen 
} from 'lucide-react';
import { jobsData, resourcesData, defaultSkills } from '../data/mockData';

export default function Dashboard({ savedJobs, completedResources, skills, profile, setProfile }) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState({ ...profile });

  // Calculate stats
  const savedJobsCount = savedJobs.length;
  const completedResCount = completedResources.length;
  const totalResources = resourcesData.length;
  const resourcesPercentage = totalResources > 0 ? Math.round((completedResCount / totalResources) * 100) : 0;

  // Calculate total skills and completed skills
  const totalSkills = defaultSkills.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedSkillsCount = Object.values(skills).filter(Boolean).length;
  const skillsPercentage = totalSkills > 0 ? Math.round((completedSkillsCount / totalSkills) * 100) : 0;

  // Get bookmarked jobs, or suggest some if none saved
  const hasSavedJobs = savedJobs.length > 0;
  const bookmarkedJobsList = hasSavedJobs
    ? jobsData.filter(job => savedJobs.includes(job.id)).slice(0, 3)
    : jobsData.slice(0, 3);

  // Pick a recommended skill to learn next (first uncompleted skill)
  let recommendedSkill = null;
  for (const cat of defaultSkills) {
    const uncompleted = cat.items.find(item => !skills[item.id]);
    if (uncompleted) {
      recommendedSkill = { ...uncompleted, category: cat.title };
      break;
    }
  }

  // Handle profile save
  const handleSaveProfile = (e) => {
    e.preventDefault();
    setProfile(tempProfile);
    setIsEditing(false);
  };

  return (
    <div className="py-8 px-4 sm:px-8 lg:px-12 w-full space-y-8 animate-fadeIn">
      
      {/* Hero Welcome Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-6 sm:p-10 shadow-xl shadow-indigo-500/20">
        {/* Background decorative blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-10 left-1/3 w-60 h-60 bg-indigo-500/30 rounded-full blur-2xl"></div>

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-violet-100 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Welcome to your Workspace
            </div>
            {isEditing ? (
              <form onSubmit={handleSaveProfile} className="space-y-4 max-w-md bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                <div>
                  <label className="block text-xs font-medium text-violet-100 mb-1">Your Name</label>
                  <input
                    type="text"
                    value={tempProfile.name}
                    onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
                    className="w-full bg-white/20 border border-white/20 rounded-xl px-3 py-2 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Ahammed Adil"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-violet-100 mb-1">Your Goal / Role</label>
                  <input
                    type="text"
                    value={tempProfile.role}
                    onChange={(e) => setTempProfile({ ...tempProfile, role: e.target.value })}
                    className="w-full bg-white/20 border border-white/20 rounded-xl px-3 py-2 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="BCA Student / Aspiring Frontend Developer"
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-indigo-700 text-xs font-bold hover:bg-violet-50 transition-all cursor-pointer shadow-md"
                  >
                    <Save className="h-3.5 w-3.5" />
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTempProfile({ ...profile });
                      setIsEditing(false);
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-transparent text-white border border-white/30 text-xs font-medium hover:bg-white/10 transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Hello, {profile.name}!
                </h1>
                <p className="text-violet-100 text-base sm:text-lg font-medium opacity-90">
                  {profile.role}
                </p>
              </div>
            )}
          </div>

          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 text-white hover:bg-white/25 border border-white/10 font-semibold text-xs tracking-wide uppercase transition-all duration-200 backdrop-blur-sm cursor-pointer shadow-lg"
            >
              <Edit3 className="h-4 w-4" />
              Edit Profile
            </button>
          )}
        </div>

        {/* Action Buttons in Hero */}
        {!isEditing && (
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => navigate('/jobs')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-indigo-600 font-bold hover:bg-violet-50 transition-all duration-200 cursor-pointer shadow-md text-sm"
            >
              Search Jobs
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigate('/resources')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all duration-200 cursor-pointer text-sm"
            >
              Explore Free Courses
            </button>
          </div>
        )}
      </div>

      {/* Stats Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Jobs Saved Stat Card */}
        <div 
          onClick={() => navigate('/jobs')}
          className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg dark:hover:shadow-black/20 hover:border-violet-500/30 transition-all duration-300 group cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 dark:bg-amber-400/10 dark:text-amber-400">
              <Briefcase className="h-6 w-6" />
            </div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1 group-hover:text-violet-500 transition-colors">
              Manage Jobs <ArrowRight className="h-3 w-3" />
            </span>
          </div>
          <div className="mt-6">
            <h3 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">{savedJobsCount}</h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">Jobs Bookmarked</p>
            <p className="text-xs text-slate-400 mt-2">Saved job postings looking for application</p>
          </div>
        </div>

        {/* Resources Stat Card */}
        <div 
          onClick={() => navigate('/resources')}
          className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg dark:hover:shadow-black/20 hover:border-violet-500/30 transition-all duration-300 group cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-500 dark:bg-sky-400/10 dark:text-sky-400">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1 group-hover:text-violet-500 transition-colors">
              Study Hub <ArrowRight className="h-3 w-3" />
            </span>
          </div>
          <div className="mt-4">
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">
                {completedResCount}<span className="text-sm font-normal text-slate-400">/{totalResources}</span>
              </h3>
              <span className="text-sm font-bold text-sky-500">{resourcesPercentage}%</span>
            </div>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Resources Completed</p>
            {/* Progress bar */}
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
              <div 
                className="bg-sky-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${resourcesPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Skill checklist Stat Card */}
        <div 
          onClick={() => navigate('/progress')}
          className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg dark:hover:shadow-black/20 hover:border-violet-500/30 transition-all duration-300 group cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-400">
              <CheckSquare className="h-6 w-6" />
            </div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1 group-hover:text-violet-500 transition-colors">
              Checklist <ArrowRight className="h-3 w-3" />
            </span>
          </div>
          <div className="mt-4">
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">
                {completedSkillsCount}<span className="text-sm font-normal text-slate-400">/{totalSkills}</span>
              </h3>
              <span className="text-sm font-bold text-emerald-500">{skillsPercentage}%</span>
            </div>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Skills Checked</p>
            {/* Progress bar */}
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${skillsPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

      </div>

      {/* Main Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Area: 2 Columns spanning on desktop, hosting Jobs and Resources side-by-side */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-fit">
          
          {/* Saved / Recommended Jobs Card */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between min-h-[380px]">
            <div>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Bookmark className="h-4.5 w-4.5 text-indigo-500" />
                  {hasSavedJobs ? `Saved Jobs (${savedJobsCount})` : 'Recommended Jobs'}
                </span>
                {!hasSavedJobs && (
                  <span className="text-[9px] bg-violet-500/10 text-violet-605 dark:text-violet-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    Suggested
                  </span>
                )}
              </h3>
              
              <div className="space-y-3">
                {bookmarkedJobsList.map((job) => (
                  <div 
                    key={job.id} 
                    onClick={() => navigate('/jobs')}
                    className="flex justify-between items-center p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:border-violet-500/25 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`h-9 w-9 rounded-lg bg-gradient-to-tr ${job.logoColor} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}>
                        {job.company.substring(0, 2).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-slate-850 dark:text-slate-100 text-xs group-hover:text-violet-650 dark:group-hover:text-violet-400 transition-colors truncate">
                          {job.title}
                        </h4>
                        <p className="text-[10px] text-slate-400 dark:text-slate-505 truncate">{job.company} &bull; {job.location}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/40 mt-4">
              <button 
                onClick={() => navigate('/jobs')}
                className="w-full py-2.5 rounded-xl border border-dashed border-violet-550/20 hover:border-violet-500 text-xs font-bold text-violet-600 dark:text-violet-400 text-center hover:bg-violet-500/5 transition-all cursor-pointer"
              >
                {hasSavedJobs ? 'Manage Saved Jobs' : 'Browse All Jobs'}
              </button>
            </div>
          </div>

          {/* Quick Learning Card */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between min-h-[380px] bg-gradient-to-b from-white/40 to-violet-500/[0.02] dark:from-slate-900/30 dark:to-violet-950/[0.02]">
            <div>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <BookOpen className="h-4.5 w-4.5 text-violet-500" />
                Continue Learning
              </h3>
              <div className="space-y-3">
                {resourcesData.slice(0, 3).map((res) => {
                  const isCompleted = completedResources.includes(res.id);
                  return (
                    <a
                      key={res.id}
                      href={res.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-between items-center p-3 rounded-xl bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group"
                    >
                      <div className="space-y-0.5 min-w-0 max-w-[75%]">
                        <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate group-hover:text-violet-650 dark:group-hover:text-violet-405 transition-colors">
                          {res.title}
                        </h4>
                        <p className="text-[10px] text-slate-400 dark:text-slate-505 truncate">{res.platform} &bull; {res.topic}</p>
                      </div>
                      {isCompleted ? (
                        <span className="text-[9px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-bold">Done</span>
                      ) : (
                        <span className="text-[9px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-full font-medium">Study</span>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/40 mt-4">
              <button
                onClick={() => navigate('/resources')}
                className="w-full py-2.5 rounded-xl border border-dashed border-violet-550/20 hover:border-violet-500 text-xs font-bold text-violet-605 dark:text-violet-450 text-center hover:bg-violet-500/5 transition-all cursor-pointer"
              >
                Open Library
              </button>
            </div>
          </div>

        </div>

        {/* Right Sidebar: Stacked Recommended Skill & Tip of Day */}
        <div className="space-y-6 flex flex-col justify-between h-full min-h-[380px]">
          
          {/* Recommended Next Skill Card */}
          {recommendedSkill ? (
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden flex-grow flex items-center">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 rounded-full blur-xl -mr-6 -mt-6"></div>
              <div className="flex items-start gap-3.5 relative z-10 w-full">
                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-xl shrink-0">
                  <Award className="h-5.5 w-5.5" />
                </div>
                <div className="space-y-1 flex-1 min-w-0">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-violet-500">Recommended Next Skill</span>
                  <h4 className="text-sm font-bold text-slate-850 dark:text-slate-100 truncate leading-snug">{recommendedSkill.name}</h4>
                  <p className="text-[10px] text-slate-400">Roadmap: <span className="font-semibold text-slate-600 dark:text-slate-300">{recommendedSkill.category}</span></p>
                  <div className="pt-2">
                    <button
                      onClick={() => navigate('/progress')}
                      className="inline-flex items-center gap-1 text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-750 hover:underline cursor-pointer"
                    >
                      Go to Checklist <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-6 flex-grow flex items-center justify-center bg-emerald-500/5 border border-emerald-500/10">
              <div className="text-center space-y-1 text-emerald-600 dark:text-emerald-450">
                <Award className="h-8 w-8 mx-auto animate-bounce" />
                <h4 className="text-xs font-bold">Roadmap Completed!</h4>
                <p className="text-[10px] opacity-80">All skills checked off</p>
              </div>
            </div>
          )}

          {/* Inspirational Quote Card */}
          <div className="glass-card rounded-2xl p-6 bg-gradient-to-tr from-indigo-500/[0.03] to-purple-500/[0.03] flex-grow flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="h-5 w-5 text-indigo-500 shrink-0" />
              <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">Developer Tip of the Day</h4>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 italic leading-relaxed">
              "The best portfolios aren't built in a day. They are created by consistently pushing small commits, learning syntax deeply, and solving real user problems."
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

