// import React, { useState, useEffect, useRef } from 'react';
// import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend, FiUser, FiBriefcase, FiMessageSquare } from 'react-icons/fi';
// import { motion } from 'framer-motion';
// import emailjs from 'emailjs-com';

// const Footer = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [navbarHeight, setNavbarHeight] = useState(0);
//   const sectionRef = useRef(null);
  
//   // Navigation items - same as in Navbar
//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'skills', label: 'Skills' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   // Get navbar height after component mounts
//   useEffect(() => {
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

//   // Initialize EmailJS (you'll need to replace these with your actual IDs)
//   useEffect(() => {
//     // You can initialize EmailJS here if needed
//     // emailjs.init("VEoURhQxIBwz2YqoD");
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Replace these with your actual EmailJS credentials
//     const serviceID = 'service_al0oa5o';
//     const templateID = 'template_vhwkh7b';
//     const userID = 'VEoURhQxIBwz2YqoD';

//     // Get current date
//     const currentDate = new Date().toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });

//     // Send email using EmailJS
//     emailjs.send(serviceID, templateID, {
//       from_name: formData.name,
//       from_email: formData.email,
//       subject: formData.subject,
//       message: formData.message,
//       to_name: 'Your Name', // Your name that will receive the email
//       reply_to: formData.email,
//       date: currentDate,
//       year: new Date().getFullYear()
//     }, userID)
//     .then((response) => {
//       console.log('SUCCESS!', response.status, response.text);
//       setIsSubmitted(true);
//       setIsLoading(false);
      
//       // Reset form after successful submission
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
      
//       // Reset submission status after 5 seconds
//       setTimeout(() => {
//         setIsSubmitted(false);
//       }, 5000);
//     })
//     .catch((err) => {
//       console.error('FAILED...', err);
//       alert('There was an error sending your message. Please try again later.');
//       setIsLoading(false);
//     });
//   };

//   // Function to scroll to section (same as in Navbar)
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
//     } else {
//       console.error(`Element with id ${sectionId} not found`);
//     }
//   };

//   return (
//     <section id="contact" ref={sectionRef}>
//       <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8 overflow-hidden">
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
//             {/* Contact Form Section */}
//             <motion.div 
//               className="bg-gray-800 p-8 rounded-xl shadow-2xl"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-2xl font-bold mb-6 flex items-center">
//                 <FiSend className="mr-2 text-blue-400" />
//                 Get In Touch
//               </h3>
//               <p className="text-gray-400 mb-6">
//                 Interested in working together? Have a project in mind? Feel free to reach out!
//               </p>
              
//               {isSubmitted ? (
//                 <motion.div 
//                   className="bg-green-900/30 text-green-400 p-4 rounded-lg mb-6 text-center"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                 >
//                   <p>Thank you for your message! I'll get back to you soon.</p>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="relative">
//                       <FiUser className="absolute left-3 top-3 text-gray-500" />
//                       <input 
//                         type="text" 
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your Name"
//                         className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors"
//                         required
//                       />
//                     </div>
//                     <div className="relative">
//                       <FiMail className="absolute left-3 top-3 text-gray-500" />
//                       <input 
//                         type="email" 
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Your Email"
//                         className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="relative">
//                     <FiBriefcase className="absolute left-3 top-3 text-gray-500" />
//                     <input 
//                       type="text" 
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="Subject"
//                       className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors"
//                       required
//                     />
//                   </div>
//                   <div className="relative">
//                     <FiMessageSquare className="absolute left-3 top-3 text-gray-500" />
//                     <textarea 
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Your Message"
//                       rows="4"
//                       className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors"
//                       required
//                     ></textarea>
//                   </div>
//                   <motion.button 
//                     type="submit"
//                     disabled={isLoading}
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
//                     whileHover={{ scale: isLoading ? 1 : 1.02 }}
//                     whileTap={{ scale: isLoading ? 1 : 0.98 }}
//                   >
//                     {isLoading ? (
//                       <>
//                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 极狐 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         Send Message
//                         <FiSend className="ml-2" />
//                       </>
//                     )}
//                   </motion.button>
//                 </form>
//               )}
//             </motion.div>

//             {/* Information Section */}
//             <motion.div 
//               className="flex flex-col justify-between"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">
//                   Let's Create Something Amazing Together
//                 </h3>
//                 <p className="text-gray-400 mb-6 leading-relaxed">
//                   I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
//                   Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
//                 </p>
                
//                 <div className="mb-8">
//                   <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//                   <div className="grid grid-cols-2 gap-3">
//                     {navItems.map((item, index) => (
//                       <motion.button 
//                         key={index}
//                         onClick={() => scrollToSection(item.id)}
//                         className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group text-left"
//                         whileHover={{ x: 5 }}
//                       >
//                         <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                         {item.label}
//                       </motion.button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
//                 <div className="flex space-x-4">
//                   <motion.a 
//                     href="https://github.com/AnoopPadakanti" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-gray-700 p-3 rounded-lg text-gray-300 hover:bg-gray-600 hover:text-white transition-all duration-300"
//                     whileHover={{ y: -5, scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <FiGithub className="h-5 w-5" />
//                   </motion.a>
//                   <motion.a 
//                     href="https://linkedin.com/in/anoop-padakanti" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-gray-700 p-3 rounded-lg text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
//                     whileHover={{ y: -5, scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <FiLinkedin className="h-5 w-5" />
//                   </motion.a>
//                   <motion.a 
//                     href="https://twitter.com" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-gray-700 p-3 rounded-lg text-gray-300 hover:bg-blue-400 hover:text-white transition-all duration-300"
//                     whileHover={{ y: -5, scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <FiTwitter className="h-5 w-5" />
//                   </motion.a>
//                   <motion.a 
//                     href="mailto:youremail@example.com" 
//                     className="bg-gray-700 p-3 rounded-lg text-gray-300 hover:bg-red-500 hover:text-white transition-all duration-300"
//                     whileHover={{ y: -5, scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <FiMail className="h-5 w-5" />
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Copyright Section */}
//           <motion.div 
//             className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
//             <div className="flex justify-center space-x-6 mt-2">
//               <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
//               <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
//             </div>
//           </motion.div>
//         </div>

//         {/* Background decorative elements */}
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
//           <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>
//           <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
//         </div>
//       </footer>
//     </section>
//   );
// };

// export default Footer;

import React, { useState, useEffect, useRef } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend, FiUser, FiBriefcase, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
const Footer = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const sectionRef = useRef(null);
  
  // Navigation items - same as in Navbar
  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'experience', label: 'Experience', path: '/experience' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  // Get navbar height after component mounts
  useEffect(() => {
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

  // Initialize EmailJS (you'll need to replace these with your actual IDs)
  useEffect(() => {
    // You can initialize EmailJS here if needed
    // emailjs.init("VEoURhQxIBwz2YqoD");
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Replace these with your actual EmailJS credentials
    const serviceID = 'service_al0oa5o';
    const templateID = 'template_vhwkh7b';
    const userID = 'VEoURhQxIBwz2YqoD';

    // Get current date
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Your Name', // Your name that will receive the email
      reply_to: formData.email,
      date: currentDate,
      year: new Date().getFullYear()
    }, userID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('There was an error sending your message. Please try again later.');
      setIsLoading(false);
    });
  };

  // Function to scroll to section (same as in Navbar)
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    console.log(element)
    if (element) {
      // Calculate the position to scroll to (top of the element minus navbar height)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.error(`Element with id ${sectionId} not found`);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      
      className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <footer className={`relative pt-16 pb-8 overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' : 'bg-gradient-to-b from-gray-50 to-gray-100'}`}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Form Section */}
            <motion.div 
              className={`p-8 rounded-xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                <FiSend className="mr-2 text-blue-400" />
                Get In Touch
              </h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Interested in working together? Have a project in mind? Feel free to reach out!
              </p>
              
              {isSubmitted ? (
                <motion.div 
                  className="bg-green-900/30 text-green-400 p-4 rounded-lg mb-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <p>Thank you for your message! I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <FiUser className="absolute left-3 top-3 text-gray-500" />
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                        required
                      />
                    </div>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-3 text-gray-500" />
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                        required
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <FiBriefcase className="absolute left-3 top-3 text-gray-500" />
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                      required
                    />
                  </div>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3 top-3 text-gray-500" />
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="4"
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                      required
                    ></textarea>
                  </div>
                  <motion.button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 极狐 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 极狐 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiSend className="ml-2" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
            
            {/* Information Section */}
            <motion.div 
              className="flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Let's Create Something Amazing Together
                </h3>
                <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
                
                <div className="mb-8">
                  
                  <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Quick Links</h4>
                  <div className="grid grid-cols-2 gap-3">
                   {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  if (!item.id === 'home') {
                    scrollToSection('home');
                  } else {
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
                </div>
              </div>

              <div>
                <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Connect with me</h4>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://github.com/AnoopPadakanti" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-all duration-300 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'}`}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub className="h-5 w-5" />
                  </motion.a>
                  <motion.a 
                    href="https://linkedin.com/in/anoop-padakanti" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-all duration-300 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white'}`}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiLinkedin className="h-5 w-5" />
                  </motion.a>
                  <motion.a 
                    href="https://x.com/AnoopPadak8099" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-all duration-300 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-blue-400 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white'}`}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiTwitter className="h-5 w-5" />
                  </motion.a>
                  <motion.a 
                    href="mailto:padakantianoop7@gmail.com" 
                    className={`p-3 rounded-lg transition-all duration-300 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-red-500 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white'}`}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiMail className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Copyright Section */}
          <motion.div 
            className={`border-t pt-8 text-center text-sm ${darkMode ? 'border-gray-700 text-gray-500' : 'border-gray-300 text-gray-600'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-2">
              <a href="#" className={`hover:text-blue-400 transition-colors ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>Privacy Policy</a>
              <a href="#" className={`hover:text-blue-400 transition-colors ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>Terms of Service</a>
            </div>
          </motion.div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <div className={`absolute bottom-0 left-1/4 w-32 h-32 rounded-full filter blur-3xl ${darkMode ? 'bg-blue-900 opacity-20' : 'bg-blue-200 opacity-30'}`}></div>
          <div className={`absolute bottom-0 right-1/4 w-24 h-24 rounded-full filter blur-3xl ${darkMode ? 'bg-purple-900 opacity-20' : 'bg-purple-200 opacity-30'}`}></div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;