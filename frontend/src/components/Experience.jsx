// import { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   SiPostman, 
//   SiGit, 
//   SiGithub, 
//   SiVercel, 
//   SiNetlify, 
//   SiFirebase, 
//   SiRender,
//   SiMongodb,
//   SiExpress,
//   SiReact,
//   SiNodedotjs
// } from 'react-icons/si';
// import { 
//   FaBriefcase, 
//   FaGraduationCap, 
//   FaTools, 
//   FaLaptopCode,
//   FaServer,
//   FaDatabase,
//   FaCloudUploadAlt,
//   FaServicestack
// } from 'react-icons/fa';

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.1
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 30, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }
// };

// const cardVariants = {
//   hidden: { scale: 0.95, opacity: 0 },
//   visible: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut"
//     }
//   }
// };

// const Experience = () => {
//   const [activeTab, setActiveTab] = useState('experience');
//   const sectionRef = useRef(null);

//   return (
//     <section
//       id="experience" 
//       ref={sectionRef} 
//       className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4 md:px-8"
//     >
//       <div className="container mx-auto max-w-6xl">
//         {/* Section Header */}
//         <motion.div 
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 1.7 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//               Professional Journey
//             </span>
//           </h2>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//             My career path and growth in the world of web development
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4"></div>
//         </motion.div>

//         {/* Navigation Tabs */}
//         <motion.div 
//           className="flex justify-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <div className="inline-flex bg-gray-800 p-1 rounded-lg">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setActiveTab('experience')}
//               className={`px-6 py-2 rounded-md transition-all ${activeTab === 'experience' ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
//             >
//               Experience
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setActiveTab('education')}
//               className={`px-6 py-2 rounded-md transition-all ${activeTab === 'education' ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
//             >
//               Education
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setActiveTab('tools')}
//               className={`px-6 py-2 rounded-md transition-all ${activeTab === 'tools' ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
//             >
//               Tools
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Experience Section */}
//         {activeTab === 'experience' && (
//           <motion.div 
//             className="bg-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-xl"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.5 }}
//           >
//             <motion.h2 
//               className="text-2xl font-bold mb-8 text-green-400 flex items-center"
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <FaBriefcase className="h-6 w-6 mr-2" />
//               Professional Experience
//             </motion.h2>
            
//             <motion.div 
//               className="space-y-8"
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//             >
//               <motion.div 
//                 className="relative pl-8 pb-8 border-l-2 border-green-500"
//                 variants={itemVariants}
//               >
//                 <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
//                 <motion.div 
//                   className="bg-gray-900 p-6 rounded-xl"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <h3 className="text-xl font-semibold">Web Developer Intern</h3>
//                   <p className="text-green-400 mb-2">Labmentix • Feb 2025 - May 2025</p>
//                   <p className="text-gray-400">Developed and maintained responsive web applications using React, JavaScript, and Tailwind CSS. Collaborated with UX designers to implement user-friendly interfaces.</p>
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     <span className="bg-gray-800 text-green-300 px-3 py-1 rounded-full text-sm">React</span>
//                     <span className="bg-gray-800 text-green-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
//                     <span className="bg-gray-800 text-green-300 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
//                     <span className="bg-gray-800 text-green-300 px-3 py-1 rounded-full text-sm">UI/UX Design</span>
//                   </div>
//                 </motion.div>
//               </motion.div>
              
//               <motion.div 
//                 className="relative pl-8 pb-8 border-l-2 border-green-500"
//                 variants={itemVariants}
//               >
//                 <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
//                 <motion.div 
//                   className="bg-gray-900 p-6 rounded-xl"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <h3 className="text-xl font-semibold">Full Stack Web Developer Intern</h3>
//                   <p className="text-green-400 mb-2">Unified Private Limited • April 2025 - June 2025</p>
//                   <p className="text-gray-400">Assisted in developing both frontend and backend components of web applications. Gained experience with Node.js, Express, and MongoDB databases.</p>
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     <span className="bg-gray-800 text-green-300 px-3 py-1 rounded-full text-sm">Node.js</span>
//                     <span className="bg-gray-800 text-green-300 px-3 py-1 rounded-full text-sm">Express</span>
//                     <span className="bg-gray-800 text-green-300 px-3 py-1 rounded-full text-sm">MongoDB</span>
//                     <span className="bg-gray-800 text-green-300 px-3 py-1 rounded-full text-sm">Full Stack</span>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Education Section */}
//         {activeTab === 'education' && (
//           <motion.div 
//             className="bg-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-xl"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.5 }}
//           >
//             <motion.h2 
//               className="text-2xl font-bold mb-8 text-blue-400 flex items-center"
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <FaGraduationCap className="h-6 w-6 mr-2" />
//               Education & Learning
//             </motion.h2>
            
//             <motion.div 
//               className="space-y-8"
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//             >
//               <motion.div 
//                 className="relative pl-8 pb-8 border-l-2 border-blue-500"
//                 variants={itemVariants}
//               >
//                 <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
//                 <motion.div 
//                   className="bg-gray-900 p-6 rounded-xl"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <h3 className="text-xl font-semibold">Bachelor's in Computer Applications</h3>
//                   <p className="text-blue-400 mb-2">Nizam College • 2021 - 2024</p>
//                   <p className="text-gray-400">Focused on software development principles, algorithms, data structures, and web technologies. Completed projects in web development and database management.</p>
//                 </motion.div>
//               </motion.div>
              
//               <motion.div 
//                 className="relative pl-8 pb-8 border-l-2 border-blue-500"
//                 variants={itemVariants}
//               >
//                 <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
//                 <motion.div 
//                   className="bg-gray-900 p-6 rounded-xl"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <h3 className="text-xl font-semibold">Full Stack Courses</h3>
//                   <p className="text-blue-400 mb-2">10000 Coders</p>
//                   <p className="text-gray-400">Continuously expanding knowledge through online learning platforms. Completed courses in React, Node.js, UI/UX design, and responsive web development.</p>
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     <span className="bg-gray-800 text-blue-300 px-3 py-1 rounded-full text-sm">React Certification</span>
//                     <span className="bg-gray-800 text-blue-300 px-3 py-1 rounded-full text-sm">JavaScript ES6+</span>
//                     <span className="bg-gray-800 text-blue-300 px-3 py-1 rounded-full text-sm">Responsive Design</span>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Tools Section */}
//         {activeTab === 'tools' && (
//           <motion.div 
//             className="bg-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-xl"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.5 }}
//           >
//             <motion.h2 
//               className="text-2xl font-bold mb-8 text-purple-400 flex items-center"
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <FaTools className="h-6 w-6 mr-2" />
//               Development Tools
//             </motion.h2>
            
//             <motion.div 
//               className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//             >
//               <motion.div 
//                 className="bg-gray-900 p-6 rounded-xl"
//                 variants={cardVariants}
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
//                   <FaLaptopCode className="h-5 w-5 mr-2 text-blue-400" />
//                   Development & Code Editors
//                 </h3>
//                 <motion.div 
//                   className="grid grid-cols-2 gap-4"
//                   variants={containerVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, margin: "-50px" }}
//                 >
//                   <motion.div 
//                     className="flex flex-col items-center p-4 bg-gray-800 rounded-lg"
//                     variants={itemVariants}
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     <div className="bg-blue-500 p-3 rounded-full mb-2">
//                       <FaServicestack className="h-6 w-6 text-white"/>
//                     </div>
//                     <span className="text-gray-300 text-sm text-center mt-2">VS Code</span>
//                   </motion.div>
//                   <motion.div 
//                     className="flex flex-col items-center p-4 bg-gray-800 rounded-lg"
//                     variants={itemVariants}
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     <div className="bg-orange-500 p-3 rounded-full mb-2">
//                       <SiPostman className="h-6 w-6 text-white" />
//                     </div>
//                     <span className="text-gray-300 text-sm text-center mt-2">Postman</span>
//                   </motion.div>
//                   <motion.div 
//                     className="flex flex-col items-center p-4 bg-gray-800 rounded-lg"
//                     variants={itemVariants}
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     <div className="bg-red-500 p-3 rounded-full mb-2">
//                       <SiGit className="h-6 w-6 text-white" />
//                     </div>
//                     <span className="text-gray-300 text-sm text-center mt-2">Git</span>
//                   </motion.div>
//                   <motion.div 
//                     className="flex flex-col items-center p-4 bg-gray-800 rounded-lg"
//                     variants={itemVariants}
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     <div className="bg-purple-500 p-3 rounded-full mb-2">
//                       <SiGithub className="h-6 w-6 text-white" />
//                     </div>
//                     <span className="text-gray-300 text-sm text-center mt-2">GitHub</span>
//                   </motion.div>
//                 </motion.div>
//               </motion.div>
              
//               <motion.div 
//                 className="bg-gray-900 p-6 rounded-xl"
//                 variants={cardVariants}
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
//                   <FaCloudUploadAlt className="h-5 w-5 mr-2 text-green-400" />
//                   Deployment & Platforms
//                 </h3>
//                 <motion.div 
//                   className="grid grid-cols-2 gap-4"
//                   variants={containerVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, margin: "-50px" }}
//                 >
//                   <motion.div 
//                     className="flex flex-col items-center p-4 bg-gray-800 rounded-lg"
//                     variants={itemVariants}
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     <div className="bg-black p-3 rounded-full mb-2">
//                       <SiVercel className="h-6 w-6 text-white" />
//                     </div>
//                     <span className="text-gray-300 text-sm text-center mt-2">Vercel</span>
//                   </motion.div>
//                   <motion.div 
//                     className="flex flex-col items-center p-4 bg-gray-800 rounded-lg"
//                     variants={itemVariants}
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     <div className="bg-blue-600 p-3 rounded-full mb-2">
//                       <SiNetlify className="h-6 w-6 text-white" />
//                     </div>
//                     <span className="text-gray-300 text-sm text-center mt-2">Netlify</span>
//                   </motion.div>
//                   <motion.div 
//                     className="flex flex-col items-center p-4 bg-gray-800 rounded-lg"
//                     variants={itemVariants}
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     <div className="bg-yellow-500 p-3 rounded-full mb-2">
//                       <SiFirebase className="h-6 w-6 text-white" />
//                     </div>
//                     <span className="text-gray-300 text-sm text-center mt-2">Firebase</span>
//                   </motion.div>
//                   <motion.div 
//                     className="flex flex-col items-center p-4 bg-gray-800 rounded-lg"
//                     variants={itemVariants}
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     <div className="bg-green-600 p-3 rounded-full mb-2">
//                       <SiRender className="h-6 w-6 text-white" />
//                     </div>
//                     <span className="text-gray-300 text-sm text-center mt-2">Render</span>
//                   </motion.div>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
            
//             <motion.div 
//               className="bg-gray-900 p-6 rounded-xl"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
//                 <FaServer className="h-5 w-5 mr-2 text-purple-400" />
//                 MERN Stack Tools
//               </h3>
//               <motion.div 
//                 className="grid grid-cols-2 md:grid-cols-4 gap-4"
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-50px" }}
//               >
//                 <motion.div 
//                   className="flex flex-col items-center p-4 bg-gray-800 rounded-lg"
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <div className="bg-green-600 p-3 rounded-full mb-2">
//                     <SiMongodb className="h-6 w-6 text-white" />
//                   </div>
//                   <span className="text-gray-300 text-sm text-center">MongoDB</span>
//                 </motion.div>
//                 <motion.div 
//                   className="flex flex-col items-center p-4 bg-gray-800 rounded-lg"
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <div className="bg-gray-700 p-3 rounded-full mb-2">
//                     <SiExpress className="h-6 w-6 text-white" />
//                   </div>
//                   <span className="text-gray-300 text-sm text-center">Express.js</span>
//                 </motion.div>
//                 <motion.div 
//                   className="flex flex-col items-center p-4 bg-gray-800 rounded-lg"
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <div className="bg-cyan-500 p-3 rounded-full mb-2">
//                     <SiReact className="h-6 w-6 text-white" />
//                   </div>
//                   <span className="text-gray-300 text-sm text-center">React</span>
//                 </motion.div>
//                 <motion.div 
//                   className="flex flex-col items-center p-4 bg-gray-800 rounded-lg"
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <div className="bg-emerald-500 p-3 rounded-full mb-2">
//                     <SiNodedotjs className="h-6 w-6 text-white" />
//                   </div>
//                   <span className="text-gray-300 text-sm text-center">Node.js</span>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Experience;


import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiPostman, 
  SiGit, 
  SiGithub, 
  SiVercel, 
  SiNetlify, 
  SiFirebase, 
  SiRender,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs
} from 'react-icons/si';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaTools, 
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloudUploadAlt,
  FaServicestack
} from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Experience = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('experience');
  const sectionRef = useRef(null);

  return (
    <section
      id="experience" 
      ref={sectionRef} 
      className={`min-h-screen py-16 px-4 md:px-8 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.7 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Professional Journey
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My career path and growth in the world of web development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={`inline-flex p-1 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2 rounded-md transition-all ${activeTab === 'experience' ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white' : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}
            >
              Experience
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-md transition-all ${activeTab === 'education' ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white' : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}
            >
              Education
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('tools')}
              className={`px-6 py-2 rounded-md transition-all ${activeTab === 'tools' ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white' : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}
            >
              Tools
            </motion.button>
          </div>
        </motion.div>

        {/* Experience Section */}
        {activeTab === 'experience' && (
          <motion.div 
            className={`p-6 md:p-8 rounded-2xl border shadow-xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className={`text-2xl font-bold mb-8 flex items-center ${darkMode ? 'text-green-400' : 'text-green-600'}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaBriefcase className="h-6 w-6 mr-2" />
              Professional Experience
            </motion.h2>
            
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                className="relative pl-8 pb-8 border-l-2 border-green-500"
                variants={itemVariants}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                <motion.div 
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Web Developer Intern</h3>
                  <p className="text-green-400 mb-2">Labmentix • Feb 2025 - May 2025</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Developed and maintained responsive web applications using React, JavaScript, and Tailwind CSS. Collaborated with UX designers to implement user-friendly interfaces.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-green-300' : 'bg-green-100 text-green-700'}`}>React</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-green-300' : 'bg-green-100 text-green-700'}`}>JavaScript</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-green-300' : 'bg-green-100 text-green-700'}`}>Tailwind CSS</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-green-300' : 'bg-green-100 text-green-700'}`}>UI/UX Design</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="relative pl-8 pb-8 border-l-2 border-green-500"
                variants={itemVariants}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                <motion.div 
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Full Stack Web Developer Intern</h3>
                  <p className="text-green-400 mb-2">Unified Private Limited • April 2025 - June 2025</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Assisted in developing both frontend and backend components of web applications. Gained experience with Node.js, Express, and MongoDB databases.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-green-300' : 'bg-green-100 text-green-700'}`}>Node.js</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-green-300' : 'bg-green-100 text-green-700'}`}>Express</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-green-300' : 'bg-green-100 text-green-700'}`}>MongoDB</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-green-300' : 'bg-green-100 text-green-700'}`}>Full Stack</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Education Section */}
        {activeTab === 'education' && (
          <motion.div 
            className={`p-6 md:p-8 rounded-2xl border shadow-xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className={`text-2xl font-bold mb-8 flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaGraduationCap className="h-6 w-6 mr-2" />
              Education & Learning
            </motion.h2>
            
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                className="relative pl-8 pb-8 border-l-2 border-blue-500"
                variants={itemVariants}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <motion.div 
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Bachelor's in Computer Applications</h3>
                  <p className="text-blue-400 mb-2">Nizam College • 2021 - 2024</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Focused on software development principles, algorithms, data structures, and web technologies. Completed projects in web development and database management.</p>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="relative pl-8 pb-8 border-l-2 border-blue-500"
                variants={itemVariants}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <motion.div 
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Full Stack Courses</h3>
                  <p className="text-blue-400 mb-2">10000 Coders</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Continuously expanding knowledge through online learning platforms. Completed courses in React, Node.js, UI/UX design, and responsive web development.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>React Certification</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>JavaScript ES6+</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>Responsive Design</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Tools Section */}
        {activeTab === 'tools' && (
          <motion.div 
            className={`p-6 md:p-8 rounded-2xl border shadow-xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className={`text-2xl font-bold mb-8 flex items-center ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaTools className="h-6 w-6 mr-2" />
              Development Tools
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className={`text-lg font-semibold mb-4 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  <FaLaptopCode className="h-5 w-5 mr-2 text-blue-400" />
                  Development & Code Editors
                </h3>
                <motion.div 
                  className="grid grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div 
                    className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="bg-blue-500 p-3 rounded-full mb-2">
                      <FaServicestack className="h-6 w-6 text-white"/>
                    </div>
                    <span className={`text-sm text-center mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>VS Code</span>
                  </motion.div>
                  <motion.div 
                    className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="bg-orange-500 p-3 rounded-full mb-2">
                      <SiPostman className="h-6 w-6 text-white" />
                    </div>
                    <span className={`text-sm text-center mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Postman</span>
                  </motion.div>
                  <motion.div 
                    className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="bg-red-500 p-3 rounded-full mb-2">
                      <SiGit className="h-6 w-6 text-white" />
                    </div>
                    <span className={`text-sm text-center mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Git</span>
                  </motion.div>
                  <motion.div 
                    className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="bg-purple-500 p-3 rounded-full mb-2">
                      <SiGithub className="h-6 w-6 text-white" />
                    </div>
                    <span className={`text-sm text-center mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>GitHub</span>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className={`text-lg font-semibold mb-4 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  <FaCloudUploadAlt className="h-5 w-5 mr-2 text-green-400" />
                  Deployment & Platforms
                </h3>
                <motion.div 
                  className="grid grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div 
                    className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="bg-black p-3 rounded-full mb-2">
                      <SiVercel className="h-6 w-6 text-white" />
                    </div>
                    <span className={`text-sm text-center mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Vercel</span>
                  </motion.div>
                  <motion.div 
                    className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="bg-blue-600 p-3 rounded-full mb-2">
                      <SiNetlify className="h-6 w-6 text-white" />
                    </div>
                    <span className={`text-sm text-center mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Netlify</span>
                  </motion.div>
                  <motion.div 
                    className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="bg-yellow-500 p-3 rounded-full mb-2">
                      <SiFirebase className="h-6 w-6 text-white" />
                    </div>
                    <span className={`text-sm text-center mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Firebase</span>
                  </motion.div>
                  <motion.div 
                    className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="bg-green-600 p-3 rounded-full mb-2">
                      <SiRender className="h-6 w-6 text-white" />
                    </div>
                    <span className={`text-sm text-center mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Render</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className={`text-lg font-semibold mb-4 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                <FaServer className="h-5 w-5 mr-2 text-purple-400" />
                MERN Stack Tools
              </h3>
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-green-600 p-3 rounded-full mb-2">
                    <SiMongodb className="h-6 w-6 text-white" />
                  </div>
                  <span className={`text-sm text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>MongoDB</span>
                </motion.div>
                <motion.div 
                  className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-gray-700 p-3 rounded-full mb-2">
                    <SiExpress className="h-6 w-6 text-white" />
                  </div>
                  <span className={`text-sm text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Express.js</span>
                </motion.div>
                <motion.div 
                  className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-cyan-500 p-3 rounded-full mb-2">
                    <SiReact className="h-6 w-6 text-white" />
                  </div>
                  <span className={`text-sm text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>React</span>
                </motion.div>
                <motion.div 
                  className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-emerald-500 p-3 rounded-full mb-2">
                    <SiNodedotjs className="h-6 w-6 text-white" />
                  </div>
                  <span className={`text-sm text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Node.js</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;