// import { useState, useEffect } from 'react';
// import { FiMoon, FiSun, FiX, FiMenu, FiGithub, FiLinkedin, FiTwitter, FiUser } from 'react-icons/fi';
// import { assets } from '../assets/assets';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [navbarHeight, setNavbarHeight] = useState(0);

//   useEffect(() => {
//     // Check system preference for dark mode
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       setDarkMode(true);
//     }

//     // Get navbar height after component mounts
//     const updateNavbarHeight = () => {
//       const nav = document.querySelector('nav');
//       if (nav) {
//         setNavbarHeight(nav.offsetHeight);
//       }
//     };

//     updateNavbarHeight();
//     window.addEventListener('resize', updateNavbarHeight);

//     // Add scroll event listener to track active section
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section');
//       let currentSection = 'home';
      
//       sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;
//         if (window.scrollY >= sectionTop - 100 && 
//             window.scrollY < sectionTop + sectionHeight - 100) {
//           currentSection = section.id;
//         }
//       });
      
//       setActiveSection(currentSection);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', updateNavbarHeight);
//     };
//   }, []);

//   useEffect(() => {
//     // Apply dark/light mode to document
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       // Calculate the position to scroll to (top of the element minus navbar height)
//       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
//       const offsetPosition = elementPosition - navbarHeight;
      
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//       setIsMenuOpen(false);
//     } else {
//       console.error(`Element with id ${sectionId} not found`);
//     }
//   };

//   // Determine which image to use based on dark mode
//   const profileImage = darkMode ? assets.anoopanvesh : assets.AnveshMen11;

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'skills', label: 'Skills' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   return (
//     <nav className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm transition-all duration-300 shadow-sm">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//           {/* Logo/Profile */}
//           <div className="flex items-center space-x-3">
//             <div 
//               className="relative cursor-pointer group"
//               onClick={() => scrollToSection('home')}
//             >
//               <img 
//                 src={profileImage} 
//                 alt="Profile" 
//                 className="w-12 h-12 rounded-full object-cover border-2 border-amber-500 dark:border-amber-400 transition-all duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-amber-500 dark:group-hover:border-amber-400 animate-ping opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-gray-800 dark:text-white">Anoop</h1>
//               <p className="text-xs text-gray-500 dark:text-gray-400">Frontend Developer</p>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
//                   activeSection === item.id
//                     ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-gray-800'
//                     : 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>

//           {/* Right side icons */}
//           <div className="flex items-center space-x-4">
//             {/* Social Icons - Desktop */}
//             <div className="hidden md:flex items-center space-x-3">
//               <a href="https://github.com/AnoopPadakanti" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
//                 <FiGithub className="h-5 w-5" />
//               </a>
//               <a href="https://linkedin.com/in/anoop-padakanti" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
//                 <FiLinkedin className="h-5 w-5" />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
//                 <FiTwitter className="h-5 w-5" />
//               </a>
//             </div>

//             {/* Theme Toggle */}
//             <button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300"
//             >
//               {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
//             </button>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 md:hidden"
//             >
//               {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="mt-4 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg md:hidden animate-fadeIn">
//             <div className="flex flex-col space-y-2">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`px-4 py-3 rounded-md text-left text-sm font-medium transition-all duration-300 ${
//                     activeSection === item.id
//                       ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-gray-700'
//                       : 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
              
//               <div className="flex items-center justify-center space-x-4 pt-3 border-t border-gray-200 dark:border-gray-700">
//                 <a href="https://github.com/AnoopPadakanti" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
//                   <FiGithub className="h-5 w-5" />
//                 </a>
//                 <a href="https://linkedin.com/in/anoop-padakanti" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
//                   <FiLinkedin className="h-5 w-5" />
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
//                   <FiTwitter className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FiMoon, FiSun, FiX, FiMenu, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
// import { assets } from '../assets/assets';

// const Navbar = ({ darkMode, toggleDarkMode }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [navbarHeight, setNavbarHeight] = useState(0);
//   const location = useLocation();

//   useEffect(() => {
//     // Get navbar height after component mounts
//     const updateNavbarHeight = () => {
//       const nav = document.querySelector('nav');
//       if (nav) {
//         setNavbarHeight(nav.offsetHeight);
//       }
//     };

//     updateNavbarHeight();
//     window.addEventListener('resize', updateNavbarHeight);

//     return () => {
//       window.removeEventListener('resize', updateNavbarHeight);
//     };
//   }, []);

//   // Determine which image to use based on dark mode
//   const profileImage = darkMode ? assets.anoopanvesh : assets.AnveshMen11;

//   const navItems = [
//     { id: '/', label: 'Home' },
//     { id: '/about', label: 'About' },
//     { id: '/skills', label: 'Skills' },
//     { id: '/experience', label: 'Experience' },
//     { id: '/projects', label: 'Projects' },
//     { id: '/contact', label: 'Contact' },
//   ];

//   return (
//     <nav className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm transition-all duration-300 shadow-sm">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//           {/* Logo/Profile */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="relative cursor-pointer group">
//               <img 
//                 src={profileImage} 
//                 alt="Profile" 
//                 className="w-12 h-12 rounded-full object-cover border-2 border-amber-500 dark:border-amber-400 transition-all duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-amber-500 dark:group-hover:border-amber-400 animate-ping opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-gray-800 dark:text-white">Anoop</h1>
//               <p className="text-xs text-gray-500 dark:text-gray-400">Frontend Developer</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.id}
//                 to={item.id}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
//                   location.pathname === item.id
//                     ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-gray-800'
//                     : 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* Right side icons */}
//           <div className="flex items-center space-x-4">
//             {/* Social Icons - Desktop */}
//             <div className="hidden md:flex items-center space-x-3">
//               <a href="https://github.com/AnoopPadakanti" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
//                 <FiGithub className="h-5 w-5" />
//               </a>
//               <a href="https://linkedin.com/in/anoop-padakanti" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
//                 <FiLinkedin className="h-5 w-5" />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
//                 <FiTwitter className="h-5 w-5" />
//               </a>
//             </div>

//             {/* Theme Toggle */}
//             <button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300"
//             >
//               {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
//             </button>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 md:hidden"
//             >
//               {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="mt-4 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg md:hidden animate-fadeIn">
//             <div className="flex flex-col space-y-2">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.id}
//                   to={item.id}
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`px-4 py-3 rounded-md text-left text-sm font-medium transition-all duration-300 ${
//                     location.pathname === item.id
//                       ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-gray-700'
//                       : 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
              
//               <div className="flex items-center justify-center space-x-4 pt-3 border-t border-gray-200 dark:border-gray-700">
//                 <a href="https://github.com/AnoopPadakanti" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
//                   <FiGithub className="h-5 w-5" />
//                 </a>
//                 <a href="https://linkedin.com/in/anoop-padakanti" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
//                   <FiLinkedin className="h-5 w-5" />
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
//                   <FiTwitter className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMoon, FiSun, FiX, FiMenu, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { assets } from '../assets/assets';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Get navbar height after component mounts
    const updateNavbarHeight = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        setNavbarHeight(nav.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);

    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, []);

  // Scroll to section with offset for navbar height
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    console.log(element)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  // Determine which image to use based on dark mode
  const profileImage = darkMode ? assets.anoopanvesh : assets.AnveshMen11;

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'experience', label: 'Experience', path: '/experience' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Profile */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative group">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-12 h-12 rounded-full object-cover border-2 border-amber-500 dark:border-amber-400 transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-amber-500 dark:group-hover:border-amber-400 animate-ping opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">Anoop</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Frontend Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  if (!item.id === 'home') {
                    scrollToSection('home');
                  }
                 
                   else {
                    // For other sections, navigate to the route
                    window.location.href = item.path;
                  }
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-gray-800'
                    : 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-3 md:space-x-7">
            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-7">
              <a href="https://github.com/AnoopPadakanti" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/anoop-padakanti" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                <FiTwitter className="h-5 w-5" />
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2  rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300"
            >
              {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 md:hidden"
            >
              {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg md:hidden animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    if (!item.id === 'home') {
                      scrollToSection('home');
                      console.log(item.path)
                    } else {
                      // For other sections, navigate to the route
                      window.location.href = item.path;
                    }
                  }}
                  className={`px-4 py-3 rounded-md text-left text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-gray-700'
                      : 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex items-center justify-center space-x-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <a href="https://github.com/AnoopPadakanti" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                  <FiGithub className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/in/anoop-padakanti" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                  <FiLinkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                  <FiTwitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;