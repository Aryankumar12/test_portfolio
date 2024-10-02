"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/solid"; // Using Heroicons for skill checkmarks

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-10 md:p-20 bg-gradient-to-b from-gray-800 to-black text-white rounded-lg shadow-2xl w-full max-w-6xl mx-auto">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h2>

      {/* Animated Profile Image */}
      <motion.img
        src="https://via.placeholder.com/150" // Replace with your image URL
        alt="Profile"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-40 h-40 md:w-52 md:h-52 rounded-full mb-8 shadow-lg object-cover"
      />

      {/* About Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-lg md:text-xl text-gray-300 mb-10 text-center max-w-3xl leading-relaxed"
      >
        Hello! I'm <span className="text-white font-semibold">Aryan Kumar</span>, a passionate developer skilled in building dynamic and responsive web applications. I enjoy creating sleek, efficient user interfaces using React and Next.js. Let's build something impactful together!
      </motion.p>

      {/* Skills with Heroicons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        {["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Node.js"].map(
          (skill, index) => (
            <motion.span
              key={index}
              className="flex items-center px-4 py-2 bg-white text-black rounded-md shadow-md text-sm md:text-base font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
              {skill}
            </motion.span>
          )
        )}
      </motion.div>
    </div>
  );
}
