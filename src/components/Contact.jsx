import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <div>
    <div className="contact-container flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 md:p-10 lg:p-12 pt-20">
      <motion.h1
        className="contact-title text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        Get in Touch
      </motion.h1>

      <motion.div
        className="contact-description max-w-2xl mx-auto text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p variants={itemVariants} className="text-lg mb-4">
          I would love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out.
        </motion.p>
        <motion.p variants={itemVariants} transition={{ delay: 0.2 }}>
          Please fill out the form below, and I will get back to you as soon as possible.
        </motion.p>
      </motion.div>

      <motion.form
        className="contact-form bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="mb-4">
          <label htmlFor="name" className="block text-sm mb-2">Name</label>
          <motion.input
            id="name"
            type="text"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            variants={itemVariants}
          />
        </motion.div>

        <motion.div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-2">Email</label>
          <motion.input
            id="email"
            type="email"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            variants={itemVariants}
            transition={{ delay: 0.1 }}
          />
        </motion.div>

        <motion.div className="mb-4">
          <label htmlFor="message" className="block text-sm mb-2">Message</label>
          <motion.textarea
            id="message"
            rows="4"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          ></motion.textarea>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition duration-200"
          variants={itemVariants}
          transition={{ delay: 0.3 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      <motion.div
        className="mt-12 max-w-2xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          Follow Me
        </motion.h2>
        <motion.div className="flex justify-center space-x-4">
          <a href="https://github.com/Sanidhya14321" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sanidhya-vats-9344522b7/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
            LinkedIn
          </a>
          <a href="mailto:sanidhya14321@gmail.com" className="text-orange-500 hover:text-orange-600">
            Email
          </a>
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
};

export default Contact;
