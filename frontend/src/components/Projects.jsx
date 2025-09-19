// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { assets } from "../assets/assets.js";

// const Projects = () => {
//   const [activeIndices, setActiveIndices] = useState({});
//   const sectionRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   const projects = [
    // {
    //   id: 1,
    //   title: "Mahabharat Website",
    //   description:
    //     "A fully responsive Mahabharat website built with HTML, CSS, and JavaScript, featuring interactive character cards, rich animations, and a custom multi-layered navigation for an engaging user experience",
    //   images: [assets.k1, assets.k2, assets.k3, assets.k4, assets.k5],
    //   liveLink: "https://anoop-unq.github.io/Mahabharat/",
    // },
    // {
    //   id: 2,
    //   title: "Wikipedia search",
    //   description:
    //     "A smart Wikipedia search app that brings results to life by combining multiple APIs. Along with Wikipedia data, it shows related images, videos, and summaries — all in one place for a richer search experience.",
    //   images: [
    //     assets.Screenshot,
    //     assets.second,
    //     assets.image,
    //     assets.Screenshot1,
    //     assets.news,
    //   ],
    //   liveLink: "https://anoop-unq.github.io/wikipedia/",
    // },
    // {
    //   id: 3,
    //   title: "Dental Clinic",
    //   description:
    //     "A modern, fully responsive Dental Clinic website built with React and Tailwind that showcases services, enables online appointment booking, and delivers a smooth, animated user experience across devices.",
    //   images: [
    //     assets.clinc1,
    //     assets.clinc2,
    //     assets.clinc3,
    //     assets.clinc4,
    //     assets.clinc5,
    //   ],
    //   liveLink: "https://dentalclinic-web.netlify.app/",
    // },
    // {
    //   id: 4,
    //   title: "Skin Care",
    //   description:
    //     "A responsive Skin Care website featuring elegant motion-based animations to showcase beauty services and products, developed using React.js and Tailwind CSS.",
    //   images: [assets.s111, assets.s2, assets.s3, assets.s4, assets.s5],
    //   liveLink: "https://skincarecommunity.netlify.app/",
    // },
    // {
    //   id: 5,
    //   title: "Nikmal Furniture",
    //   description:
    //     "A modern e-commerce style furniture website designed with React.js and Tailwind CSS, featuring responsive layouts, product showcases, and smooth UI interactions.",
    //   images: [assets.nikmal1, assets.nikmal2, assets.nikmal3],
    //   liveLink: "https://nikmalfurniture.netlify.app/",
    // },
    // {
    //   id: 6,
    //   title: "Todo List",
    //   description:
    //     "A simple and user-friendly task manager built with HTML, CSS, and JavaScript. It lets you add and delete tasks, with data saved using localStorage to keep your list even after refreshing.",
    //   images: [assets.firstTodo, assets.secondTodo, assets.thirdTodo],
    //   liveLink: "https://anoop-unq.github.io/todoList/",
    // },
    // {
    //   id: 7,
    //   title: "Car Landing Page",
    //   description:
    //     "A responsive and visually appealing landing page for a car brand. Features include a bold hero section, animated scroll effects, and clear CTAs. Built with HTML, CSS, and JavaScript for smooth, user-friendly interaction.",
    //   images: [assets.firstCar, assets.secondCar, assets.thirdCar],
    //   liveLink: "https://anoop-unq.github.io/carPage/",
    // },
    // {
    //   id: 8,
    //   title: "Br Architecture",
    //   description:
    //     "Uses JavaScript to manipulate the DOM for dynamic and interactive business solutions, without relying on HTML structure.",
    //   images: [assets.firstBr, assets.secondBr, assets.thirdBr],
    //   liveLink: "https://anoop-unq.github.io/brArchitecture/",
    // },
    // {
    //   id: 9,
    //   title: "HangMan Game",
    //   description:
    //     "A classic word-guessing game where players try to guess a hidden word by suggesting letters, with a limited number of incorrect guesses allowed.",
    //   images: [assets.firstHang, assets.secondHang, assets.thirdHang],
    //   liveLink: "https://anoop-unq.github.io/Hangman/",
    // },
    // {
    //   id: 10,
    //   title: "Smart-Insta",
    //   description:
    //     "A full-stack Instagram-style social media app built with the MERN stack, featuring secure login/signup, email verification, password reset, image uploads, likes, comments, and user profile viewing.",
    //   images: [assets.l1, assets.l2, assets.l3, assets.l4, assets.l5],
    //   liveLink: "https://mern-insta-ten.vercel.app/",
    // },
    // {
    //   id: 11,
    //   title: "Task-Manager",
    //   description:
    //     "A MERN-based task manager application where users can add tasks with title, description, and due date, as well as edit, update, and delete tasks through full CRUD functionality.",
    //   images: [assets.t1, assets.t20, assets.t3, assets.t4, assets.t5],
    //   liveLink: "https://task-manager-mern-app-navy.vercel.app/",
    // },
//   ];

//   // Check if device is mobile
//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkIsMobile();
//     window.addEventListener("resize", checkIsMobile);

//     return () => {
//       window.removeEventListener("resize", checkIsMobile);
//     };
//   }, []);

//   // Initialize active indices for each project
//   useEffect(() => {
//     const initialIndices = {};
//     projects.forEach((project) => {
//       initialIndices[project.id] = 0;
//     });
//     setActiveIndices(initialIndices);
//   }, []);

//   const handleNextSlide = (projectId, totalSlides) => {
//     setActiveIndices((prev) => ({
//       ...prev,
//       [projectId]: (prev[projectId] + 1) % totalSlides,
//     }));
//   };

//   const handlePrevSlide = (projectId, totalSlides) => {
//     setActiveIndices((prev) => ({
//       ...prev,
//       [projectId]: (prev[projectId] - 1 + totalSlides) % totalSlides,
//     }));
//   };

//   const handleIndicatorClick = (projectId, index) => {
//     setActiveIndices((prev) => ({
//       ...prev,
//       [projectId]: index,
//     }));
//   };

//   const openWithSpinner = (e, liveLink) => {
//     e.preventDefault();
//     window.open(liveLink, "_blank");
//   };

//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       className="py-16 bg-gray-50 dark:bg-gray-900"
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <motion.h2
//             className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             Projects
//           </motion.h2>
//           <motion.p
//             className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             Here are some of my recent projects that showcase my skills and
//             experience.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//             >
//               {/* Carousel Container */}
//               <div className="relative overflow-hidden h-48">
//                 <div
//                   className="flex transition-transform duration-500 ease-in-out h-full"
//                   style={{
//                     transform: `translateX(-${
//                       activeIndices[project.id] * 100
//                     }%)`,
//                   }}
//                 >
//                   {project.images.map((image, imgIndex) => (
//                     <div
//                       key={imgIndex}
//                       className="min-w-full h-full flex-shrink-1 "
//                     >
                    
//                       <img
//                         src={image}
//                         alt={`${project.title} screenshot ${imgIndex + 1}`}
//                         className="w-full h-full object-cover "
//                       />
                     
//                     </div>
//                   ))}
//                 </div>

//                 {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
//                 {!isMobile && (
//                   <>
//                     <button
//                       className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       onClick={() =>
//                         handlePrevSlide(project.id, project.images.length)
//                       }
//                     >
//                       <FiChevronLeft size={20} />
//                     </button>
//                     <button
//                       className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       onClick={() =>
//                         handleNextSlide(project.id, project.images.length)
//                       }
//                     >
//                       <FiChevronRight size={20} />
//                     </button>
//                   </>
//                 )}
//                 <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
//                   {project.images.map((_, indicatorIndex) => (
//                     <button
//                       key={indicatorIndex}
//                      className={`${isMobile ? 'w-3 h-3' : 'w-2 h-2'} rounded-full ${indicatorIndex === activeIndices[project.id] ? 'gradient-indicator' : 'gradient-indicator-inactive'}`}
//                       onClick={() =>
//                         handleIndicatorClick(project.id, indicatorIndex)
//                       }
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Project Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
//                   {project.description}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <a
//                     href={project.liveLink}
//                     onClick={(e) => openWithSpinner(e, project.liveLink)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
//                   >
//                     Live Project
//                     <FiExternalLink className="ml-1" />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { assets } from "../assets/assets.js";

const Projects = ({ darkMode }) => {
  const [activeIndices, setActiveIndices] = useState({});
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Mahabharat Website",
      description:
        "A fully responsive Mahabharat website built with HTML, CSS, and JavaScript, featuring interactive character cards, rich animations, and a custom multi-layered navigation for an engaging user experience",
      images: [assets.k1, assets.k2, assets.k3, assets.k4, assets.k5],
      liveLink: "https://anoop-unq.github.io/Mahabharat/",
    },
    {
      id: 2,
      title: "Wikipedia search",
      description:
        "A smart Wikipedia search app that brings results to life by combining multiple APIs. Along with Wikipedia data, it shows related images, videos, and summaries — all in one place for a richer search experience.",
      images: [
        assets.Screenshot,
        assets.second,
        assets.image,
        assets.Screenshot1,
        assets.news,
      ],
      liveLink: "https://anoop-unq.github.io/wikipedia/",
    },
    {
      id: 3,
      title: "Dental Clinic",
      description:
        "A modern, fully responsive Dental Clinic website built with React and Tailwind that showcases services, enables online appointment booking, and delivers a smooth, animated user experience across devices.",
      images: [
        assets.clinc1,
        assets.clinc2,
        assets.clinc3,
        assets.clinc4,
        assets.clinc5,
      ],
      liveLink: "https://dentalclinichyd.netlify.app/",
    },
    {
      id: 4,
      title: "Skin Care",
      description:
        "A responsive Skin Care website featuring elegant motion-based animations to showcase beauty services and products, developed using React.js and Tailwind CSS.",
      images: [assets.s111, assets.s2, assets.s3, assets.s4, assets.s5],
      liveLink: "https://skincarecommunity.netlify.app/",
    },
    {
      id: 5,
      title: "Nikmal Furniture",
      description:
        "A modern e-commerce style furniture website designed with React.js and Tailwind CSS, featuring responsive layouts, product showcases, and smooth UI interactions.",
      images: [assets.nikmal1, assets.nikmal2, assets.nikmal3],
      liveLink: "https://nikmalfurniture.netlify.app/",
    },
    {
      id: 6,
      title: "Todo List",
      description:
        "A simple and user-friendly task manager built with HTML, CSS, and JavaScript. It lets you add and delete tasks, with data saved using localStorage to keep your list even after refreshing.",
      images: [assets.firstTodo, assets.secondTodo, assets.thirdTodo],
      liveLink: "https://anoop-unq.github.io/todoList/",
    },
    {
      id: 7,
      title: "Car Landing Page",
      description:
        "A responsive and visually appealing landing page for a car brand. Features include a bold hero section, animated scroll effects, and clear CTAs. Built with HTML, CSS, and JavaScript for smooth, user-friendly interaction.",
      images: [assets.firstCar, assets.secondCar, assets.thirdCar],
      liveLink: "https://anoop-unq.github.io/carPage/",
    },
    {
      id: 8,
      title: "Br Architecture",
      description:
        "Uses JavaScript to manipulate the DOM for dynamic and interactive business solutions, without relying on HTML structure.",
      images: [assets.firstBr, assets.secondBr, assets.thirdBr],
      liveLink: "https://anoop-unq.github.io/brArchitecture/",
    },
        {
      id: 9,
      title: "Portfolio",
      description: "Designed Portfolio with fully loaded animations and responsive design using html,css,js and bootstrap",
      images: [assets.p1, assets.p2, assets.p3],
      liveLink: "https://anoop-unq.github.io/userprofile/",
    },
    {
      id: 10,
      title: "HangMan Game",
      description:
        "A classic word-guessing game where players try to guess a hidden word by suggesting letters, with a limited number of incorrect guesses allowed.",
      images: [assets.firstHang, assets.secondHang, assets.thirdHang],
      liveLink: "https://anoop-unq.github.io/Hangman/",
    },
    {
      id: 11,
      title: "Smart-Insta",
      description:
        "A full-stack Instagram-style social media app built with the MERN stack, featuring secure login/signup, email verification, password reset, image uploads, likes, comments, and user profile viewing.",
      images: [assets.l1, assets.l2, assets.l3, assets.l4, assets.l5],
      liveLink: "https://mern-insta-ten.vercel.app/",
    },
    {
      id: 12,
      title: "Task-Manager",
      description:
        "A MERN-based task manager application where users can add tasks with title, description, and due date, as well as edit, update, and delete tasks through full CRUD functionality.",
      images: [assets.t1, assets.t20, assets.t3, assets.t4, assets.t5],
      liveLink: "https://task-manager-mern-app-navy.vercel.app/",
    },
     {
      id: 13,
      title: "Vote Poling System",
      description:"Voting poll system built with the MERN stack, allowing users to create polls, cast votes, view results in chart form, and delete polls after results are finalized.",
      images: [assets.vote1, assets.vote2, assets.vote3, assets.vote4, assets.vote5],
      liveLink: "https://mern-vote-seven.vercel.app/",
    },
     {
      id: 14,
      title: "Library Management System",
      description:
      "A MERN-based library system with admin and user panels. Admins can manage books and track user activity, while users can borrow and return books through full CRUD functionality.",
      images: [assets.lib1, assets.lib2, assets.lib3, assets.lib4, assets.lib5],
      liveLink: "https://library-g.vercel.app/login",
    },
     {
      id: 15,
      title: "Resume Uploader",
      description:"A MERN-based PDF uploader application where users can upload, view, edit, and delete PDF files, with full CRUD functionality and the ability to add details like title, description, and upload date",
      images: [assets.pdf1, assets.pdf2, assets.pdf3, assets.pdf4, assets.pdf5],
      liveLink: "https://mern-pdf-gilt.vercel.app/",
    },
  ];

  

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
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
      className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Projects
          </motion.h2>
          <motion.p
            className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Here are some of my recent projects that showcase my skills and
            experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`rounded-xl shadow-lg overflow-hidden group ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Carousel Container */}
              <div className="relative overflow-hidden h-48">
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
                      className="min-w-full h-full flex-shrink-1 "
                    >
                    
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        className="w-full h-full object-cover "
                      />
                     
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
                {!isMobile && (
                  <>
                    <button
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() =>
                        handlePrevSlide(project.id, project.images.length)
                      }
                    >
                      <FiChevronLeft size={20} />
                    </button>
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() =>
                        handleNextSlide(project.id, project.images.length)
                      }
                    >
                      <FiChevronRight size={20} />
                    </button>
                  </>
                )}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                  {project.images.map((_, indicatorIndex) => (
                    <button
                      key={indicatorIndex}
                     className={`${isMobile ? 'w-3 h-3' : 'w-2 h-2'} rounded-full ${indicatorIndex === activeIndices[project.id] ? 'gradient-indicator' : 'gradient-indicator-inactive'}`}
                      onClick={() =>
                        handleIndicatorClick(project.id, indicatorIndex)
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    onClick={(e) => openWithSpinner(e, project.liveLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-sm font-medium ${darkMode ? 'text-blue-400 hover:underline' : 'text-blue-600 hover:underline'}`}
                  >
                    Live Project
                    <FiExternalLink className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;