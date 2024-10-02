"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  // Placeholder projects
  const projects = [
    {
      title: "Project One",
      description: "A short description of Project One goes here.",
      liveLink: "#",
      image: "https://via.placeholder.com/300", // Placeholder image
    },
    {
      title: "Project Two",
      description: "A short description of Project Two goes here.",
      liveLink: "#",
      image: "https://via.placeholder.com/300", // Placeholder image
    },
    // Add more projects as needed
  ];

  return (
    <div className="flex flex-col items-center p-10 md:p-20 bg-gradient-to-b from-black to-gray-800 text-white rounded-lg shadow-2xl w-full max-w-6xl mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-black rounded-md text-sm md:text-base font-medium shadow-md transition duration-300 ease-in-out hover:bg-green-500 hover:text-white"
              >
                View Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
