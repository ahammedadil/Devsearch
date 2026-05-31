import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs';
import Resources from './pages/Resources';
import Progress from './pages/Progress';
import { useLocalStorage } from './hooks/useLocalStorage';
import { defaultSkills } from './data/mockData';

export default function App() {
  // Sync state with local storage
  const [theme, setTheme] = useLocalStorage('devsearch-theme', 'dark');
  const [savedJobs, setSavedJobs] = useLocalStorage('devsearch-saved-jobs', []);
  const [completedResources, setCompletedResources] = useLocalStorage('devsearch-completed-resources', []);
  const [skills, setSkills] = useLocalStorage('devsearch-skills-progress', {});
  const [profile, setProfile] = useLocalStorage('devsearch-profile-info', {
    name: 'Ahammed Adil C T',
    role: 'BCA Student & Aspiring Frontend Engineer'
  });

  // Apply dark mode theme to HTML root
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Toggle handlers
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleSaveJob = (jobId) => {
    setSavedJobs((prevJobs) =>
      prevJobs.includes(jobId)
        ? prevJobs.filter((id) => id !== jobId)
        : [...prevJobs, jobId]
    );
  };

  const toggleCompleteResource = (resourceId) => {
    setCompletedResources((prevRes) =>
      prevRes.includes(resourceId)
        ? prevRes.filter((id) => id !== resourceId)
        : [...prevRes, resourceId]
    );
  };

  const toggleSkill = (skillId) => {
    setSkills((prevSkills) => ({
      ...prevSkills,
      [skillId]: !prevSkills[skillId]
    }));
  };

  const resetSkills = () => {
    if (window.confirm('Are you sure you want to reset all checked skills?')) {
      setSkills({});
    }
  };

  const markAllSkills = () => {
    const updated = {};
    defaultSkills.forEach((cat) => {
      cat.items.forEach((item) => {
        updated[item.id] = true;
      });
    });
    setSkills(updated);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        
        {/* Navbar */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Page Container */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <Dashboard 
                  savedJobs={savedJobs} 
                  completedResources={completedResources}
                  skills={skills}
                  profile={profile}
                  setProfile={setProfile}
                />
              } 
            />
            <Route 
              path="/jobs" 
              element={
                <Jobs 
                  savedJobs={savedJobs} 
                  toggleSaveJob={toggleSaveJob} 
                />
              } 
            />
            <Route 
              path="/resources" 
              element={
                <Resources 
                  completedResources={completedResources} 
                  toggleCompleteResource={toggleCompleteResource} 
                />
              } 
            />
            <Route 
              path="/progress" 
              element={
                <Progress 
                  skills={skills} 
                  toggleSkill={toggleSkill} 
                  resetSkills={resetSkills}
                  markAllSkills={markAllSkills}
                />
              } 
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}
