import React, { useState } from 'react';
import { 
  Search, BookOpen, Video, FileText, CheckCircle2, 
  ExternalLink, GraduationCap, Clock, BarChart3, HelpCircle 
} from 'lucide-react';
import { resourcesData } from '../data/mockData';

export default function Resources({ completedResources, toggleCompleteResource }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  // Filter logic
  const filteredResources = resourcesData.filter((res) => {
    const matchesSearch = 
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.platform.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTopic = selectedTopic === 'All' || res.topic === selectedTopic;
    const matchesType = selectedType === 'All' || res.type === selectedType;

    return matchesSearch && matchesTopic && matchesType;
  });

  // Calculate statistics for the selected topic
  const currentTopicResources = resourcesData.filter(r => selectedTopic === 'All' || r.topic === selectedTopic);
  const totalCount = currentTopicResources.length;
  const completedCount = currentTopicResources.filter(r => completedResources.includes(r.id)).length;
  const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Helper to render type icons
  const getTypeIcon = (type) => {
    switch (type) {
      case 'Video':
        return <Video className="h-4 w-4" />;
      case 'Docs':
        return <FileText className="h-4 w-4" />;
      case 'Course':
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (diff) => {
    switch (diff) {
      case 'Advanced':
        return 'text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-950/20';
      case 'Intermediate':
        return 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-950/20';
      case 'Beginner':
      default:
        return 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/20';
    }
  };

  return (
    <div className="py-8 px-4 sm:px-8 lg:px-12 w-full space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
          Learning Resources
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Hand-picked, high-quality, completely free programming tutorials, channels, and document hubs.
        </p>
      </div>

      {/* Overview stats panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left Search Inputs */}
        <div className="md:col-span-2 glass-card rounded-2xl p-5 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search resources, topics, or platforms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-all"
              />
            </div>
            
            {/* Type selector */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 text-slate-650 dark:text-slate-350 text-xs focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
            >
              <option value="All">All Types</option>
              <option value="Course">Courses</option>
              <option value="Video">Videos / Playlists</option>
              <option value="Docs">Documentation</option>
            </select>
          </div>

          {/* Topic filter bar */}
          <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-slate-100 dark:border-slate-800/40">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Topic:</span>
            <div className="flex flex-wrap gap-1">
              {['All', 'HTML', 'CSS', 'JavaScript', 'React', 'Backend', 'Tools'].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedTopic === topic
                      ? 'bg-violet-650 text-white shadow-sm'
                      : 'bg-white/50 dark:bg-slate-900/40 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/80 hover:bg-slate-55 dark:hover:bg-slate-800'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Topic Progress Summary Card */}
        <div className="glass-card rounded-2xl p-5 bg-gradient-to-tr from-sky-500/5 to-violet-500/5 flex flex-col justify-between h-full border border-sky-500/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {selectedTopic} Progress
            </span>
            <span className="text-xs font-black text-sky-600 dark:text-sky-400">
              {completedCount}/{totalCount} Completed
            </span>
          </div>
          <div>
            <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100">{completionPercentage}%</h4>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-sky-400 to-indigo-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2">
              Mark cards completed to increase this percentage.
            </p>
          </div>
        </div>
      </div>

      {/* Grid List */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => {
            const isCompleted = completedResources.includes(res.id);
            return (
              <div 
                key={res.id}
                className={`glass-card rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group border ${
                  isCompleted 
                    ? 'border-emerald-500/30 dark:border-emerald-500/20 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.01]' 
                    : 'border-slate-200/60 dark:border-slate-800/80'
                }`}
              >
                <div>
                  {/* Category and Icon info */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-md">
                      {res.platform}
                    </span>

                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                      {getTypeIcon(res.type)}
                      {res.type}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {res.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {res.description}
                  </p>

                  {/* Sub-meta tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="text-[9px] font-semibold bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 px-2 py-0.5 rounded">
                      {res.topic}
                    </span>
                    <span className={`text-[9px] font-semibold px-2 py-0.5 rounded ${getDifficultyColor(res.difficulty)}`}>
                      {res.difficulty}
                    </span>
                    <span className="text-[9px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {res.duration}
                    </span>
                  </div>
                </div>

                {/* Resource Card Footer Actions */}
                <div className="border-t border-slate-100 dark:border-slate-800/50 pt-4 mt-2 flex justify-between items-center">
                  
                  {/* Mark complete toggle */}
                  <button
                    onClick={() => toggleCompleteResource(res.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isCompleted
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                        : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                    }`}
                  >
                    <CheckCircle2 className={`h-4 w-4 ${isCompleted ? 'fill-emerald-500 text-white' : ''}`} />
                    {isCompleted ? 'Completed' : 'Mark Complete'}
                  </button>

                  <a
                    href={res.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    Open
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl glass bg-white/30 dark:bg-slate-900/10">
          <GraduationCap className="h-10 w-10 text-slate-400 mx-auto mb-3" />
          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">No learning resource found</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Try changing your filters or searching a different term.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTopic('All');
              setSelectedType('All');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-violet-600 text-white font-bold text-xs hover:bg-violet-700 transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
}
