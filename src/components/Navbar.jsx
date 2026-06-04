import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X, Code2, Home, Map, GraduationCap, CheckSquare, Lightbulb } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, profile, onResetProfile }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Dashboard', icon: Home },
    { to: '/roadmaps', label: 'Roadmaps', icon: Map },
    { to: '/projects', label: 'Projects', icon: Lightbulb },
    { to: '/resources', label: 'Resources', icon: GraduationCap },
    { to: '/progress', label: 'Progress', icon: CheckSquare },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-md shadow-indigo-500/25">
              <Code2 className="h-5 w-5" />
            </div>
            <NavLink to="/" className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent tracking-tight">
              DevSearch
            </NavLink>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-violet-500/10 text-violet-600 dark:text-violet-400 dark:bg-violet-400/10'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </NavLink>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {profile && (
              <div className="hidden lg:flex items-center gap-2.5 mr-2">
                <span className="text-[10px] font-extrabold px-2.5 py-1 bg-violet-500/10 dark:bg-violet-400/10 text-violet-600 dark:text-violet-400 rounded-lg max-w-[160px] truncate">
                  {profile.role}
                </span>
                <button 
                  onClick={onResetProfile}
                  className="text-[10px] font-bold text-slate-400 hover:text-rose-500 dark:hover:text-rose-450 transition-colors cursor-pointer"
                  title="Change Goal"
                >
                  Change Goal
                </button>
              </div>
            )}

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 cursor-pointer shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-4.5 w-4.5 text-amber-400" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all duration-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-violet-500/10 text-violet-600 dark:text-violet-400'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </NavLink>
              );
            })}

            {profile && (
              <div className="pt-4 mt-2 border-t border-slate-200/50 dark:border-slate-800/50 px-4 flex flex-col gap-1.5">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Role: <span className="font-extrabold text-violet-600 dark:text-violet-455">{profile.role}</span>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onResetProfile();
                  }}
                  className="text-left text-xs font-bold text-rose-500 py-1 cursor-pointer"
                >
                  Change Developer Goal
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
