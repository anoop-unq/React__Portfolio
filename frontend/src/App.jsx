import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

// --- PERFORMANCE FIX: LAZY LOADING ---
// We use 'lazy' so these components (and their heavy images) are not downloaded
// immediately when the site loads. This fixes the 30MB payload issue.
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Footer = lazy(() => import('./components/Footer'));

// A simple loading spinner to show while components load in the background
const LoadingSpinner = () => (
  <div className="flex h-screen w-full items-center justify-center bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white">
    <div className="text-xl font-semibold">Loading...</div>
  </div>
);

// Main content component that handles routing
const MainContent = ({ darkMode }) => {
  const location = useLocation();
  
  return (
    // Suspense handles the loading state while lazy components download
    <Suspense fallback={<LoadingSpinner />}>
      
      {/* Home component is always visible on all routes (per your design) */}
      <Home darkMode={darkMode} />
      
      {/* Route Definitions - This fixes the "No routes matched" console warning */}
      <Routes>
        <Route path="/" element={<React.Fragment />} /> {/* Empty route for root to silence warning */}
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/skills" element={<Skills darkMode={darkMode} />} />
        <Route path="/experience" element={<Experience darkMode={darkMode} />} />
        <Route path="/projects" element={<Projects darkMode={darkMode} />} />
        <Route path="/contact" element={<React.Fragment />} /> {/* Empty route for contact, handled below */}
      </Routes>
      
      {/* --- LOGIC: LANDING PAGE (Long Scroll) --- */}
      {location.pathname === '/' && (
        <>
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Projects darkMode={darkMode} />
        </>
      )}

      {/* --- LOGIC: CONTACT PAGE --- */}
      {location.pathname === '/contact' && (
        <>
          <About darkMode={darkMode} />
          {/* You had these commented out, so I kept them commented */}
          {/* <Skills darkMode={darkMode} /> */}
          {/* <Experience darkMode={darkMode} /> */}
          {/* <Projects darkMode={darkMode} /> */}
          
          {/* Footer for contact page */}
          <Footer darkMode={darkMode}/>
        </>
      )}

      {/* --- LOGIC: GLOBAL FOOTER --- */}
      {/* Show footer on all pages EXCEPT contact (because contact has its own Footer above) */}
      {location.pathname !== '/contact' && <Footer darkMode={darkMode} />}

    </Suspense>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply overflow-x hidden to html and body elements
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    
    // Check system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    return () => {
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    };
  }, []);

  useEffect(() => {
    // Apply dark/light mode to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="w-full max-w-[100vw] overflow-x-hidden">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <MainContent darkMode={darkMode} />
        </main>
        {/* Footer is now inside MainContent to access 'location' correctly */}
      </div>
    </Router>
  );
};

export default App;