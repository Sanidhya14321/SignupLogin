import React from 'react';
import { motion } from 'framer-motion';
import About from './About';
import Navbar from './Navbar';
const Hero = ({ userDetails }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
        <div className="hero-container flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 md:p-10 lg:p-12">
      <motion.h1
        className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        Welcome to Our Application
      </motion.h1>

      <motion.div
        className="user-details bg-gray-700 p-4 rounded-lg shadow-lg mb-6 w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold text-center">User Details</h2>
        {userDetails ? (
          <ul className="mt-2 text-center">
            <li><strong>Email:</strong> {userDetails.email}</li>
          </ul>
        ) : (
          <p className="text-center">No user logged in.</p>
        )}
      </motion.div>

      <motion.h2
        className="text-2xl md:text-3xl font-semibold mb-2 text-center"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        Technologies Used
      </motion.h2>

      <motion.ul
        className="list-disc list-inside text-lg mx-4 md:mx-10 text-left"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        <li>React.js</li>
        <li>Firebase for Authentication</li>
        <li>Framer Motion for Animations</li>
        <li>React Router for Navigation</li>
      </motion.ul>
    </div>
    <About/>
    </div>
  );
};

export default Hero;
