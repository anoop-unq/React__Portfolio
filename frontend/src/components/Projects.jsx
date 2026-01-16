import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { assets } from "../assets/assets.js";

// Import tool icons
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, 
  FaDatabase, FaPaintBrush, FaBootstrap, FaPython, FaFigma
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiTailwindcss, SiFramer, SiSequelize
} from 'react-icons/si';

const Projects = ({ darkMode }) => {
  const [activeIndices, setActiveIndices] = useState({});
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // New State for Tabs
  const [activeTab, setActiveTab] = useState('website');

  // Tool icons mapping
  const toolIcons = {
    html: { icon: FaHtml5, color: 'text-orange-500', bg: 'bg-orange-500' },
    css: { icon: FaCss3Alt, color: 'text-blue-500', bg: 'bg-blue-500' },
    javascript: { icon: FaJs, color: 'text-yellow-500', bg: 'bg-yellow-500' },
    react: { icon: FaReact, color: 'text-blue-400', bg: 'bg-blue-400' },
    nodejs: { icon: FaNodeJs, color: 'text-green-600', bg: 'bg-green-600' },
    express: { icon: SiExpress, color: 'text-white-900', bg: 'bg-green-100' },
    mongodb: { icon: SiMongodb, color: 'text-green-500', bg: 'bg-green-500' },
    tailwind: { icon: SiTailwindcss, color: 'text-teal-400', bg: 'bg-teal-400' },
    bootstrap: { icon: FaBootstrap, color: 'text-purple-500', bg: 'bg-purple-500' },
    framer: { icon: SiFramer, color: 'text-pink-500', bg: 'bg-pink-500' },
    git: { icon: FaGitAlt, color: 'text-red-500', bg: 'bg-red-500' },
    database: { icon: FaDatabase, color: 'text-blue-600', bg: 'bg-blue-600' },
    python: { icon: FaPython, color: 'text-blue-700', bg: 'bg-blue-700' },
    sequelize: { icon: SiSequelize, color: 'text-blue-300', bg: 'bg-blue-300' },
    design: { icon: FaPaintBrush, color: 'text-pink-400', bg: 'bg-pink-400' },
    api: { icon: FaDatabase, color: 'text-gray-500', bg: 'bg-gray-500' } // Added generic for API
  };

  const projects = [
    {
      id: 1,
      title: "Mahabharat Website",
      description: "A fully responsive Mahabharat website built with HTML, CSS, and JavaScript, featuring interactive character cards, rich animations, and a custom multi-layered navigation for an engaging user experience",
      images: [assets.k1, assets.k2, assets.k3, assets.k4, assets.k5],
      liveLink: "https://anoop-unq.github.io/Mahabharat/",
      tools: ['html', 'css', 'javascript', 'bootstrap']
    },
    {
      id: 2,
      title: "Smart-Insta",
      description: "A full-stack Instagram-style social media app built with the MERN stack, featuring secure login/signup, email verification, password reset, image uploads, likes, comments, and user profile viewing.",
      images: [assets.l1, assets.l2, assets.l3, assets.l4, assets.l5],
      liveLink: "https://mern-insta-ten.vercel.app/",
      tools: ['react', 'nodejs', 'express', 'mongodb']
    },
    {
      id: 3,
      title: "Vote Poling System",
      description: "Voting poll system built with the MERN stack, allowing users to create polls, cast votes, view results in chart form, and delete polls after results are finalized.",
      images: [assets.vote1, assets.vote2, assets.vote3, assets.vote4, assets.vote5],
      liveLink: "https://mern-vote-seven.vercel.app/",
      tools: ['react', 'nodejs', 'express', 'mongodb']
    },
    {
      id: 4,
      title: "Library Management System",
      description: "A MERN-based library system with admin and user panels. Admins can manage books and track user activity, while users can borrow and return books through full CRUD functionality.",
      images: [assets.lib1, assets.lib2, assets.lib3, assets.lib4, assets.lib5],
      liveLink: "https://library-g.vercel.app/login",
      tools: ['react', 'nodejs', 'express', 'mongodb']
    },
    {
      id: 5,
      title: "Resume Uploader",
      description: "A MERN-based PDF uploader application where users can upload, view, edit, and delete PDF files, with full CRUD functionality and the ability to add details like title, description, and upload date",
      images: [assets.pdf1, assets.pdf2, assets.pdf3, assets.pdf4, assets.pdf5],
      liveLink: "https://mern-pdf-gilt.vercel.app/",
      tools: ['react', 'nodejs', 'express', 'mongodb']
    },
    {
      id: 6,
      title: "Task-Manager",
      description: "A MERN-based task manager application where users can add tasks with title, description, and due date, as well as edit, update, and delete tasks through full CRUD functionality.",
      images: [assets.t1, assets.t20, assets.t3, assets.t4, assets.t5],
      liveLink: "https://task-manager-mern-app-navy.vercel.app/",
      tools: ['react', 'nodejs', 'express', 'mongodb']
    },
    {
      id: 7,
      title: "Wikipedia search",
      description: "A smart Wikipedia search app that brings results to life by combining multiple APIs. Along with Wikipedia data, it shows related images, videos, and summaries — all in one place for a richer search experience.",
      images: [assets.Screenshot, assets.second, assets.image, assets.Screenshot1, assets.news],
      liveLink: "https://anoop-unq.github.io/wikipedia/",
      tools: ['html', 'css', 'javascript', 'api']
    },
    {
      id: 8,
      title: "Dental Clinic",
      description: "A modern, fully responsive Dental Clinic website built with React and Tailwind that showcases services, enables online appointment booking, and delivers a smooth, animated user experience across devices.",
      images: [assets.clinc1, assets.clinc2, assets.clinc3, assets.clinc4, assets.clinc5],
      liveLink: "https://dentalclinichyd.netlify.app/",
      tools: ['react', 'tailwind', 'css', 'framer']
    },
    {
      id: 9,
      title: "Skin Care",
      description: "A responsive Skin Care website featuring elegant motion-based animations to showcase beauty services and products, developed using React.js and Tailwind CSS.",
      images: [assets.s111, assets.s2, assets.s3, assets.s4, assets.s5],
      liveLink: "https://skincarecommunity.netlify.app/",
      tools: ['react', 'tailwind', 'css', 'framer']
    },
    {
      id: 10,
      title: "Portfolio",
      description: "Designed Portfolio with fully loaded animations and responsive design using html,css,js and bootstrap",
      images: [assets.p1, assets.p2, assets.p3],
      liveLink: "https://anoop-unq.github.io/userprofile/",
      tools: ['html', 'css', 'javascript', 'bootstrap']
    },
    {
      id: 11,
      title: "Nikmal Furniture",
      description: "A modern e-commerce style furniture website designed with React.js and Tailwind CSS, featuring responsive layouts, product showcases, and smooth UI interactions.",
      images: [assets.nikmal1, assets.nikmal2, assets.nikmal3],
      liveLink: "https://nikmalfurniture.netlify.app/",
      tools: ['react', 'tailwind', 'css', 'bootstrap']
    },
    {
      id: 12,
      title: "Todo List",
      description: "A simple and user-friendly task manager built with HTML, CSS, and JavaScript. It lets you add and delete tasks, with data saved using localStorage to keep your list even after refreshing.",
      images: [assets.firstTodo, assets.secondTodo, assets.thirdTodo],
      liveLink: "https://anoop-unq.github.io/todoList/",
      tools: ['html', 'css', 'javascript','bootstrap']
    },
    {
      id: 13,
      title: "Car Landing Page",
      description: "A responsive and visually appealing landing page for a car brand. Features include a bold hero section, animated scroll effects, and clear CTAs. Built with HTML, CSS, and JavaScript for smooth, user-friendly interaction.",
      images: [assets.firstCar, assets.secondCar, assets.thirdCar],
      liveLink: "https://anoop-unq.github.io/carPage/",
      tools: ['html', 'css', 'javascript', 'bootstrap']
    },
    {
      id: 14,
      title: "Br Architecture",
      description: "Uses JavaScript to manipulate the DOM for dynamic and interactive business solutions, without relying on HTML structure.",
      images: [assets.firstBr, assets.secondBr, assets.thirdBr],
      liveLink: "https://anoop-unq.github.io/brArchitecture/",
      tools: ['html', 'css', 'javascript']
    },
    {
      id: 15,
      title: "HangMan Game",
      description: "A classic word-guessing game where players try to guess a hidden word by suggesting letters, with a limited number of incorrect guesses allowed.",
      images: [assets.firstHang, assets.secondHang, assets.thirdHang],
      liveLink: "https://anoop-unq.github.io/Hangman/",
      tools: ['html', 'css', 'javascript']
    },
  ];

  // Tool name mapping for display
  const toolNames = {
    html: 'HTML5', css: 'CSS3', javascript: 'JavaScript', react: 'React',
    nodejs: 'Node.js', express: 'Express', mongodb: 'MongoDB', tailwind: 'Tailwind',
    bootstrap: 'Bootstrap', framer: 'Framer Motion', git: 'Git', database: 'Database',
    python: 'Python', sequelize: 'Sequelize', design: 'UI/UX Design', api: 'API Integration'
  };

  // --- FILTERING LOGIC ---
  const filterMap = {
    'website': [1, 8, 9, 10, 11, 13, 14],
    'figma': [],
    'full stack': [2, 3, 4, 5, 6],
    'front end': [7, 10, 12, 15] // Included Portfolio (10) here as well
  };

  const filteredProjects = projects.filter(project => 
    filterMap[activeTab]?.includes(project.id)
  );

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Initialize active indices for each project
  useEffect(() => {
    const initialIndices = {};
    projects.forEach((project) => {
      initialIndices[project.id] = 0;
    });
    setActiveIndices(initialIndices);
  }, []);

  const handleNextSlide = (projectId, totalSlides) => {
    setActiveIndices((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % totalSlides,
    }));
  };

  const handlePrevSlide = (projectId, totalSlides) => {
    setActiveIndices((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + totalSlides) % totalSlides,
    }));
  };

  const handleIndicatorClick = (projectId, index) => {
    setActiveIndices((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  const openWithSpinner = (e, liveLink) => {
    e.preventDefault();
    window.open(liveLink, "_blank");
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-16 min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p
            className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Explore my latest work across different domains.
          </motion.p>
        </div>

        {/* --- NAVIGATION TABS (From JourneySection UI) --- */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={`inline-flex flex-wrap justify-center p-1.5 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            {['website', 'figma', 'full stack', 'front end'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 md:px-6 py-2.5 rounded-lg text-sm md:text-base font-medium transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md'
                    : darkMode
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab === 'figma' ? 'Figma Conversions' : tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* --- PROJECTS GRID --- */}
        <AnimatePresence mode="wait">
          {activeTab === 'figma' ? (
             // --- EMPTY STATE FOR FIGMA ---
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className={`p-6 rounded-full mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
                <FaFigma className="text-6xl text-purple-500" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Coming Soon
              </h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Pixel-perfect Figma to Code conversions are being updated.
              </p>
            </motion.div>
          ) : (
            // --- ACTIVE PROJECTS GRID ---
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`rounded-xl shadow-lg overflow-hidden group border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Carousel Container */}
                  <div className="relative overflow-hidden h-48 bg-gray-900">
                    <div
                      className="flex transition-transform duration-500 ease-in-out h-full"
                      style={{
                        transform: `translateX(-${
                          activeIndices[project.id] * 100
                        }%)`,
                      }}
                    >
                      {project.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="min-w-full h-full flex-shrink-0"
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Navigation Buttons */}
                    {!isMobile && (
                      <>
                        <button
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevSlide(project.id, project.images.length);
                          }}
                        >
                          <FiChevronLeft size={20} />
                        </button>
                        <button
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextSlide(project.id, project.images.length);
                          }}
                        >
                          <FiChevronRight size={20} />
                        </button>
                      </>
                    )}
                    {/* Indicators */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-10">
                      {project.images.map((_, indicatorIndex) => (
                        <button
                          key={indicatorIndex}
                          className={`${isMobile ? 'w-3 h-3' : 'w-2 h-2'} rounded-full transition-all duration-300 ${
                            indicatorIndex === activeIndices[project.id] 
                              ? 'bg-white scale-110' 
                              : 'bg-white/40 hover:bg-white/70'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleIndicatorClick(project.id, indicatorIndex);
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    
                    {/* Tools Section */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, toolIndex) => {
                          const toolConfig = toolIcons[tool];
                          if (!toolConfig) return null;
                          
                          const IconComponent = toolConfig.icon;
                          return (
                            <div
                              key={toolIndex}
                              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                                darkMode 
                                  ? 'border-gray-700 bg-gray-700/50 text-gray-300' 
                                  : 'border-gray-200 bg-gray-50 text-gray-600'
                              }`}
                            >
                              <IconComponent className={`${toolConfig.color}`} />
                              <span>{toolNames[tool]}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex justify-end mt-4 pt-4 border-t border-dashed border-gray-200 dark:border-gray-700">
                      <a
                        href={project.liveLink}
                        onClick={(e) => openWithSpinner(e, project.liveLink)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center text-sm font-semibold transition-colors duration-200 ${
                          darkMode 
                            ? 'text-blue-400 hover:text-blue-300' 
                            : 'text-blue-600 hover:text-blue-700'
                        }`}
                      >
                        Live Demo <FiExternalLink className="ml-1.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;