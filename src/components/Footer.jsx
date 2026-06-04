import React from 'react';
import { Code2, Heart, Map, Lightbulb, GraduationCap, CheckSquare } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  const links = [
    { to: '/roadmaps', label: 'Roadmaps', icon: Map },
    { to: '/projects', label: 'Projects', icon: Lightbulb },
    { to: '/resources', label: 'Resources', icon: GraduationCap },
    { to: '/progress', label: 'Progress', icon: CheckSquare },
  ];

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-950/30 backdrop-blur-sm transition-colors duration-300 py-8 mt-auto">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col items-start gap-3 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 text-white">
                <Code2 className="h-4 w-4" />
              </div>
              <span className="font-extrabold text-slate-800 dark:text-slate-200 text-base">DevSearch</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Your all-in-one developer hub for IT roadmaps, project ideas, free learning resources, and skill progress tracking.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
              Built with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> by Ahammed Adil C T
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Explore</p>
            <div className="flex flex-col gap-2">
              {links.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Connect</p>
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all"
                aria-label="GitHub">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all"
                aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="border-t border-slate-200/30 dark:border-slate-800/30 mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} DevSearch. All rights reserved. Designed and developed by Ahammed Adil C T
          </p>
          <p className="text-[10px] text-slate-400 dark:text-slate-500">
            Open source · Free forever
          </p>
        </div>
      </div>
    </footer>
  );
}
