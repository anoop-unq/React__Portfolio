import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiChevronLeft, FiChevronRight, FiX, FiMaximize2, FiLayers } from "react-icons/fi";
import { assets } from "../assets/assets.js";

// Import tool icons
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, 
  FaDatabase, FaPaintBrush, FaBootstrap, FaPython, FaFigma
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiTailwindcss, SiFramer, SiSequelize
} from 'react-icons/si';

// --- OPTIMIZED IMAGE COMPONENT ---
const ImageWithLoader = ({ src, alt, className, onClick, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gray-100 dark:bg-gray-800 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onClick={onClick}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-lg scale-105'
        } ${onClick ? 'cursor-pointer hover:scale-105' : ''}`}
      />
    </div>
  );
};

const Projects = ({ darkMode }) => {
  const [activeIndices, setActiveIndices] = useState({});
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Tabs State
  const [activeTab, setActiveTab] = useState('website');

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Tool icons mapping
  const toolIcons = {
    html: { icon: FaHtml5, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    css: { icon: FaCss3Alt, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    javascript: { icon: FaJs, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    react: { icon: FaReact, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    nodejs: { icon: FaNodeJs, color: 'text-green-600', bg: 'bg-green-600/10' },
    express: { icon: SiExpress, color: 'text-gray-500', bg: 'bg-gray-100' },
    mongodb: { icon: SiMongodb, color: 'text-green-500', bg: 'bg-green-500/10' },
    tailwind: { icon: SiTailwindcss, color: 'text-teal-400', bg: 'bg-teal-400/10' },
    bootstrap: { icon: FaBootstrap, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    framer: { icon: SiFramer, color: 'text-pink-500', bg: 'bg-pink-500/10' },
    git: { icon: FaGitAlt, color: 'text-red-500', bg: 'bg-red-500/10' },
    database: { icon: FaDatabase, color: 'text-blue-600', bg: 'bg-blue-600/10' },
    python: { icon: FaPython, color: 'text-blue-700', bg: 'bg-blue-700/10' },
    sequelize: { icon: SiSequelize, color: 'text-blue-300', bg: 'bg-blue-300/10' },
    design: { icon: FaPaintBrush, color: 'text-pink-400', bg: 'bg-pink-400/10' },
    figma: { icon: FaFigma, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    api: { icon: FaDatabase, color: 'text-gray-500', bg: 'bg-gray-500/10' }
  };

  // --- FIGMA PROJECTS DATA ---
  const figmaProjects = [
    {
      id: 101, 
      title: "Audit (Audit Dashboard)",
      description: "A premium Figma-to-Code conversion project charged at 8,000 for its complexity and precision. I delivered 100% pixel-perfect accuracy, matching every color gradient, button state, and layout model exactly as provided in the design files. It features a fully responsive implementation of static data with a professional, natural feel.",
      liveLink: "https://audit-ruby-one.vercel.app/",
      images: [assets.figmaD1, assets.figmaD2, assets.figmaD3, assets.figmaD4, assets.figmaD5],
      mobileThumbnails: [
        assets.figmaA1, assets.figmaA2, assets.figmaA3, assets.figmaA4, 
        assets.figmaA5, assets.figmaA6, assets.figmaA7, assets.figmaA8, assets.figmaA9
      ],
      // UPDATED: Removed UI/UX, Added CSS as requested
      tools: ['figma', 'react','tailwind', 'css'] 
    },
  ];

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

  const toolNames = {
    html: 'HTML5', css: 'CSS3', javascript: 'JavaScript', react: 'React',
    nodejs: 'Node.js', express: 'Express', mongodb: 'MongoDB', tailwind: 'Tailwind',
    bootstrap: 'Bootstrap', framer: 'Framer Motion', git: 'Git', database: 'Database',
    python: 'Python', sequelize: 'Sequelize', design: 'UI/UX Design', api: 'API Integration',
    figma: 'Figma to Code'
  };

  const filterMap = {
    'website': [1, 8, 9, 10, 11, 13, 14],
    'figma': [], 
    'full stack': [2, 3, 4, 5, 6],
    'front end': [7, 10, 12, 15] 
  };

  const filteredProjects = projects.filter(project => 
    filterMap[activeTab]?.includes(project.id)
  );

  const displayProjects = activeTab === 'figma' ? figmaProjects : filteredProjects;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const initialIndices = {};
    [...projects, ...figmaProjects].forEach((project) => {
      initialIndices[project.id] = 0;
    });
    setActiveIndices(initialIndices);
  }, []);

  // --- CAROUSEL NAVIGATION ---
  const handleNextSlide = (projectId, totalSlides) => {
    setActiveIndices((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalSlides,
    }));
  };

  const handlePrevSlide = (projectId, totalSlides) => {
    setActiveIndices((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalSlides) % totalSlides,
    }));
  };

  const handleIndicatorClick = (projectId, index) => {
    setActiveIndices((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  // --- LIGHTBOX NAVIGATION ---
  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextLightboxImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevLightboxImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
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
      {/* --- LIGHTBOX (WITH NAVIGATION) --- */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all border border-white/10 z-50"
              onClick={() => setLightboxOpen(false)}
            >
              <FiX size={24} />
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 md:left-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50"
              onClick={prevLightboxImage}
            >
              <FiChevronLeft size={32} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex} // Key change triggers animation
              src={lightboxImages[lightboxIndex]}
              alt="Full View"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              className="absolute right-4 md:right-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50"
              onClick={nextLightboxImage}
            >
              <FiChevronRight size={32} />
            </button>
            
            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 bg-black/50 px-4 py-1 rounded-full text-sm">
              {lightboxIndex + 1} / {lightboxImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p
            className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Explore my latest work across different domains.
          </motion.p>
        </div>

        {/* --- NAVIGATION TABS --- */}
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
                {tab === 'figma' ? 'Figma to Code' : tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* --- PROJECTS GRID --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`flex flex-col rounded-2xl overflow-hidden group border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  darkMode 
                    ? 'bg-[#111827] border-gray-800 shadow-black/50 hover:shadow-blue-900/10 hover:border-gray-700' 
                    : 'bg-white border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-blue-100/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* 1. CAROUSEL SECTION */}
                {/* FIX FOR IMAGE ISSUE: Used aspect-video for better ratio */}
                <div className="relative overflow-hidden aspect-video bg-gray-900">
                  <div
                    className="flex transition-transform duration-500 ease-out h-full"
                    style={{
                      transform: `translateX(-${(activeIndices[project.id] || 0) * 100}%)`,
                    }}
                  >
                    {project.images.map((image, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        // =========================================================================
                        // FIX: 'flex: 0 0 100%' FORCES the slide to be exactly 100% of the parent width
                        // This prevents any "second image" or "half image" issues.
                        // =========================================================================
                        className="w-full h-full flex-shrink-0"
                        style={{ flex: '0 0 100%' }} 
                      >
                        <ImageWithLoader 
                          src={image} 
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Desktop Nav Controls */}
                  {!isMobile && project.images.length > 1 && (
                    <>
                      <button
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevSlide(project.id, project.images.length);
                        }}
                      >
                        <FiChevronLeft size={20} />
                      </button>
                      <button
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10"
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
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 z-10">
                    {project.images.map((_, indicatorIndex) => (
                      <button
                        key={indicatorIndex}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          indicatorIndex === (activeIndices[project.id] || 0)
                            ? 'bg-blue-500 w-6' // Active Blue
                            : darkMode ? 'bg-white/40 w-2 hover:bg-white/60' : 'bg-gray-300 w-2 hover:bg-gray-400' // Dark Gray in Light mode
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleIndicatorClick(project.id, indicatorIndex);
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* 2. CARD CONTENT */}
                <div className="p-7 flex flex-col flex-grow relative">
                  <div className="flex justify-between items-start mb-3 gap-3">
                    <h3 className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    
                    {/* PREMIUM PRICE BADGE */}
                    {activeTab === 'figma' && (
                        <div className={`flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${
                          darkMode 
                            ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20 text-green-400' 
                            : 'bg-green-50 border-green-200 text-green-700'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                          8k Project
                        </div>
                    )}
                  </div>
                  
                  <p className={`text-sm leading-relaxed mb-6 font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  {/* Tools Section */}
                  {/* FIX FOR SKILLS WRAPPING: flex-nowrap + overflow-x-auto */}
                  <div className="mb-6">
                    <div className="flex flex-nowrap gap-1.5 overflow-x-auto hide-scroll pb-1">
                      {project.tools.map((tool, toolIndex) => {
                        const toolConfig = toolIcons[tool];
                        if (!toolConfig) return null;
                        const IconComponent = toolConfig.icon;
                        return (
                          <div
                            key={toolIndex}
                            // Added flex-shrink-0 and whitespace-nowrap to FORCE single line
                            className={`flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors border whitespace-nowrap ${
                              darkMode 
                                ? `bg-gray-800/50 border-gray-700/50 text-gray-300 hover:bg-gray-800 hover:border-gray-600` 
                                : `bg-gray-50 border-gray-100 text-gray-600 hover:bg-white hover:shadow-sm`
                            }`}
                          >
                            <IconComponent className={`${toolConfig.color} text-sm`} />
                            <span>{toolNames[tool]}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-auto"></div>

                  {/* 3. MOBILE THUMBNAILS (Rectangular & Big) */}
                  {activeTab === 'figma' && project.mobileThumbnails && (
                    <div className="mb-6 pt-5 border-t border-dashed border-gray-200 dark:border-gray-800">
                      <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                            <FiLayers className="text-blue-500" /> Figma Design Frames
                          </div>
                          <span className="text-[10px] text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">Scroll →</span>
                      </div>
                      
                      <div className="flex gap-3 overflow-x-auto pb-2 hide-scroll snap-x">
                          {project.mobileThumbnails.map((mobImg, mIdx) => (
                            <div 
                              key={mIdx}
                              className="relative flex-shrink-0 w-20 aspect-[9/16] rounded-md overflow-hidden cursor-pointer snap-start border border-gray-200 dark:border-gray-700 group/thumb"
                              onClick={() => openLightbox(project.mobileThumbnails, mIdx)}
                            >
                              <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/20 transition-colors z-10 flex items-center justify-center">
                                <FiMaximize2 className="text-white opacity-0 group-hover/thumb:opacity-100 scale-75 transition-all" />
                              </div>
                              <ImageWithLoader 
                                src={mobImg} 
                                alt="Mobile UI" 
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* 4. FOOTER: LIVE LINK */}
                  <div className={`pt-5 border-t border-gray-100 dark:border-gray-800 flex justify-end`}>
                    <a
                      href={project.liveLink}
                      onClick={(e) => openWithSpinner(e, project.liveLink)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                        darkMode 
                          ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/20' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200'
                      }`}
                    >
                      Live Demo <FiExternalLink />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;