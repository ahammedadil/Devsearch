import React, { useState } from 'react';
import { 
  Search, Filter, Briefcase, MapPin, DollarSign, Calendar, 
  Bookmark, BookmarkCheck, ExternalLink, X, ChevronRight, CheckCircle2 
} from 'lucide-react';
import { jobsData } from '../data/mockData';

export default function Jobs({ savedJobs, toggleSaveJob }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedJobDetails, setSelectedJobDetails] = useState(null);

  // Filter jobs logic
  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesRole = selectedRole === 'All' || job.role === selectedRole;
    const matchesType = selectedType === 'All' || job.type === selectedType;

    return matchesSearch && matchesRole && matchesType;
  });

  return (
    <div className="py-8 px-4 sm:px-8 lg:px-12 w-full space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
          Developer Jobs
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Find curated entry-level jobs, remote roles, and developer internships to kickstart your career.
        </p>
      </div>

      {/* Filter and Search Panel */}
      <div className="glass-card rounded-2xl p-4 sm:p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title, company, or skills (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Role filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase hidden lg:inline">Role:</span>
            <div className="flex flex-wrap gap-1">
              {['All', 'Frontend', 'Backend', 'Fullstack'].map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedRole === role
                      ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25'
                      : 'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Type filters */}
        <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 dark:border-slate-800/50 pt-4">
          <span className="text-xs font-semibold text-slate-400 uppercase">Job Type:</span>
          <div className="flex flex-wrap gap-1.5">
            {['All', 'Remote', 'Internship', 'Full-time'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedType === type
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white/50 dark:bg-slate-900/40 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Jobs Count Alert */}
      <div className="flex justify-between items-center px-1">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'}
        </span>
      </div>

      {/* Jobs Grid */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => {
            const isSaved = savedJobs.includes(job.id);
            return (
              <div 
                key={job.id}
                className="glass-card rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg dark:hover:shadow-black/25 hover:border-violet-500/20 transition-all duration-300 relative group"
              >
                <div>
                  {/* Job Header */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Logo Icon */}
                      <div className={`h-11 w-11 rounded-xl bg-gradient-to-tr ${job.logoColor} text-white font-black text-base flex items-center justify-center shadow shadow-slate-200/30 dark:shadow-none`}>
                        {job.company.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-1">
                          {job.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{job.company}</p>
                      </div>
                    </div>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={() => toggleSaveJob(job.id)}
                      className={`p-2 rounded-lg border transition-all cursor-pointer ${
                        isSaved 
                          ? 'border-amber-200 dark:border-amber-800 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20' 
                          : 'border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                      }`}
                      aria-label="Save Job"
                    >
                      {isSaved ? (
                        <BookmarkCheck className="h-4.5 w-4.5 fill-amber-500" />
                      ) : (
                        <Bookmark className="h-4.5 w-4.5" />
                      )}
                    </button>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="text-[10px] font-bold bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 px-2.5 py-0.5 rounded-full">
                      {job.role}
                    </span>
                    <span className="text-[10px] font-bold bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2.5 py-0.5 rounded-full">
                      {job.type}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {job.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {job.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-[9px] font-semibold text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-850 px-2 py-0.5 rounded bg-slate-50/50 dark:bg-slate-900/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Job Footer Actions */}
                <div className="border-t border-slate-100 dark:border-slate-800/50 pt-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-[11px] text-slate-600 dark:text-slate-300 font-bold">
                      <DollarSign className="h-3.5 w-3.5 mr-0.5" />
                      {job.salary}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedJobDetails(job)}
                      className="px-3 py-2 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-600 dark:text-slate-300 font-bold text-xs transition-colors cursor-pointer text-center flex-1"
                    >
                      Details
                    </button>
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-violet-500/10 transition-colors cursor-pointer"
                    >
                      Apply
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl glass bg-white/30 dark:bg-slate-900/10">
          <Briefcase className="h-10 w-10 text-slate-400 mx-auto mb-3" />
          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">No jobs matched your filters</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Try clearing your search query or choosing another role filter.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedRole('All');
              setSelectedType('All');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-violet-600 text-white font-bold text-xs hover:bg-violet-700 transition-colors cursor-pointer shadow-md shadow-violet-500/15"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Job Details Modal */}
      {selectedJobDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="glass rounded-3xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl animate-scaleUp border border-slate-200 dark:border-slate-800/80">
            {/* Header info */}
            <div className="p-6 bg-gradient-to-r from-violet-600/5 to-indigo-600/5 dark:from-violet-950/10 dark:to-indigo-950/10 border-b border-slate-100 dark:border-slate-800/60 flex justify-between items-start">
              <div className="flex items-start gap-4">
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-tr ${selectedJobDetails.logoColor} text-white font-black text-xl flex items-center justify-center shadow-lg shadow-violet-500/10`}>
                  {selectedJobDetails.company.substring(0, 2).toUpperCase()}
                </div>
                <div className="space-y-1">
                  <h2 className="font-extrabold text-slate-850 dark:text-slate-150 text-xl tracking-tight leading-snug">
                    {selectedJobDetails.title}
                  </h2>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{selectedJobDetails.company}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedJobDetails(null)}
                className="p-1.5 rounded-lg border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
              {/* Quick tags */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Salary Range</span>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{selectedJobDetails.salary}</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Job Mode</span>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{selectedJobDetails.type}</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</span>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{selectedJobDetails.location}</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date Posted</span>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{selectedJobDetails.posted}</p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wide">Job Description</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedJobDetails.description}
                </p>
              </div>

              {/* Skills section */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wide">Skills Preferred</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedJobDetails.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="flex items-center gap-1 bg-violet-500/5 border border-violet-500/10 text-violet-600 dark:text-violet-400 px-3 py-1.5 rounded-xl font-bold text-xs"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-violet-500" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Actions Footer */}
            <div className="p-6 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 flex justify-between items-center">
              {/* Bookmark status toggler */}
              <button
                onClick={() => {
                  toggleSaveJob(selectedJobDetails.id);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  savedJobs.includes(selectedJobDetails.id)
                    ? 'border-amber-200 dark:border-amber-800 bg-amber-500/10 text-amber-500'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <Bookmark className="h-4.5 w-4.5" />
                {savedJobs.includes(selectedJobDetails.id) ? 'Saved' : 'Save Job'}
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedJobDetails(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={selectedJobDetails.applyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-violet-500/20 transition-all cursor-pointer"
                >
                  Apply Directly
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
