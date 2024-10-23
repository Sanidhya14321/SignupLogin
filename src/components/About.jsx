import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    
    <div className="about-container flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 md:p-10 lg:p-12 pt-20">
      <motion.h1
        className="about-title text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        About This Application
      </motion.h1>

      <motion.div
        className="about-description max-w-2xl mx-auto text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p variants={itemVariants} className="text-lg mb-4">
          This web application serves as a platform for users to register, log in, and explore features designed with user experience in mind.
        </motion.p>
        <motion.p variants={itemVariants} transition={{ delay: 0.2 }}>
          Built using the MERN stack, this application provides seamless interaction with Firebase for authentication, ensuring a secure and efficient way to manage user data.
        </motion.p>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-4 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        Tech Stack Used
      </motion.h2>

      <motion.ul
        className="list-disc list-inside text-lg mb-12 mx-4 md:mx-10 text-left space-y-2"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {[
          { name: "MongoDB", desc: "A NoSQL database used to store user information and other application data." },
          { name: "Express.js", desc: "A web application framework for Node.js that provides a robust set of features." },
          { name: "React.js", desc: "A JavaScript library for building user interfaces." },
          { name: "Node.js", desc: "A JavaScript runtime built on Chrome's V8 engine." },
          { name: "Firebase", desc: "A platform for application development with tools like authentication and real-time databases." },
          { name: "Framer Motion", desc: "A library for animations in React that adds smooth transitions." }
        ].map((tech, index) => (
          <motion.li key={index} variants={itemVariants} transition={{ delay: index * 0.1 }} className="flex flex-col md:flex-row justify-between">
            <strong>{tech.name}:</strong> <span>{tech.desc}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-4 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        About Me
      </motion.h2>

      <motion.div
        className="about-description max-w-2xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p variants={itemVariants} className="text-lg mb-4">
          I am a MERN stack developer with experience in multiple programming languages including Python, C, and C++.
        </motion.p>
        <motion.p variants={itemVariants} transition={{ delay: 0.2 }}>
          My passion lies in exploring future technologies, particularly blockchain, artificial intelligence (AI), and machine learning (ML).
        </motion.p>
        <motion.p variants={itemVariants} transition={{ delay: 0.4 }}>
          I am dedicated to continuous learning and applying my skills to create impactful and innovative solutions.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
