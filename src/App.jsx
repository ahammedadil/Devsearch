import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import Dashboard from './pages/Dashboard';
import Roadmaps from './pages/Roadmaps';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import Progress from './pages/Progress';
import { useLocalStorage } from './hooks/useLocalStorage';
import { defaultSkills } from './data/mockData';

export default function App() {
  // Sync state with local storage using PRD keys
  const [theme, setTheme] = useLocalStorage('ds-theme', 'dark');
  const [completedResources, setCompletedResources] = useLocalStorage('ds-completed-resources', []);
  const [skills, setSkills] = useLocalStorage('ds-skills', {});
  const [profile, setProfile] = useLocalStorage('ds-user-profile', null);

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

  const handleResetProfile = () => {
    if (window.confirm('Are you sure you want to change your goal? This will let you re-select your role.')) {
      setProfile(null);
    }
  };

  // If profile is not set, show the onboarding screen
  if (!profile) {
    return <WelcomeScreen onComplete={(newProfile) => setProfile(newProfile)} />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        
        {/* Navbar */}
        <Navbar theme={theme} toggleTheme={toggleTheme} onResetProfile={handleResetProfile} profile={profile} />

        {/* Page Container */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <Dashboard 
                  completedResources={completedResources}
                  skills={skills}
                  profile={profile}
                  onResetProfile={handleResetProfile}
                />
              } 
            />
            <Route 
              path="/roadmaps" 
              element={
                <Roadmaps 
                  profile={profile} 
                />
              } 
            />
            <Route 
              path="/projects" 
              element={
                <Projects 
                  profile={profile} 
                />
              } 
            />
            <Route 
              path="/resources" 
              element={
                <Resources 
                  profile={profile}
                  completedResources={completedResources} 
                  toggleCompleteResource={toggleCompleteResource} 
                />
              } 
            />
            <Route 
              path="/progress" 
              element={
                <Progress 
                  profile={profile}
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
