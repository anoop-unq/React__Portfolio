// import React, { useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Experience from './components/Experience';
// import Footer from './components/Footer';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import { DarkModeProvider } from './context/DarkModeContext';

// const App = () => {
//   useEffect(() => {
//     // Apply overflow-x hidden to html and body elements
//     document.documentElement.style.overflowX = 'hidden';
//     document.body.style.overflowX = 'hidden';
    
//     return () => {
//       document.documentElement.style.overflowX = '';
//       document.body.style.overflowX = '';
//     };
//   }, []);

//   // Inline styles for fixing overflow
//   const styles = {
//     htmlBody: {
//       overflowX: 'hidden'
//     },
//     container: {
//       maxWidth: '100%',
//       paddingLeft: '1rem',
//       paddingRight: '1rem'
//     },
//     fullWidth: {
//       width: '100%',
//       maxWidth: '100vw',
//       overflowX: 'hidden'
//     },
//     media: {
//       maxWidth: '100%',
//       height: 'auto'
//     }
//   };

//   return (
//     <DarkModeProvider>
//     <div style={styles.fullWidth}>
//       {/* Your existing components will go here */}
//       <div style={styles.fullWidth}>
//         {/* Navbar */}
//         <Navbar />
//         <main>
//         {/* Home */}
//         <Home/>
//         {/* About */}
//         <About />
//         <Skills />
//         {/* Experience */}
//         <Experience />
//         <Projects />
//         </main>
//         <Footer />
//       </div>
//     </div>
//     </DarkModeProvider>
//   );
// };

// export default App;




import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

// Main content component that handles routing
const MainContent = ({ darkMode }) => {
  const location = useLocation();
  
  return (
    <>
      {/* Home component is always visible on all routes */}
      <Home darkMode={darkMode} />
      
      {/* Show additional components based on route */}
      <Routes>
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/skills" element={<Skills darkMode={darkMode} />} />
        <Route path="/experience" element={<Experience darkMode={darkMode} />} />
        <Route path="/projects" element={<Projects darkMode={darkMode} />} />
        <Route path="/contact" element={<Footer darkMode={darkMode} />} />
      </Routes>
      
      {/* Show all components on home page */}
      {location.pathname === '/' && (
        <>
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Projects darkMode={darkMode} />
        </>
      )}
    </>
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
        {/* Always show footer at the bottom */}
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
};

export default App;