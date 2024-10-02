"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactMe from "./Contact";
import Projects from "./Project";
import About from "./About";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("projects");

  const sections = {
    about: <About />,
    projects: <Projects />,
    contact: <ContactMe />,
  };

  return (
    <div className="my-9 w-full flex flex-col items-center justify-center">
      {/* NavBar */}
      <nav className="my-8 flex flex-wrap justify-center gap-4 md:gap-6">
        {Object.keys(sections).map((section) => (
          <motion.button
            key={section}
            className={`px-4 py-2 md:px-6 md:py-2 rounded-md border-2 border-transparent transition duration-300 ease-in-out ${
              activeSection === section
                ? "bg-white text-black border-white"
                : "bg-transparent text-white hover:bg-white hover:text-black border border-white"
            }`}
            onClick={() => setActiveSection(section)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        ))}
      </nav>

      {/* Content Section */}
      <section className="my-9 w-11/12 max-w-2xl md:max-w-4xl p-6 md:p-8 bg-black shadow-lg rounded-lg border-2 border-gray-700">
        {sections[activeSection]}
      </section>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-white">
        Welcome to My Portfolio
      </h2>
      <p className="text-base md:text-lg text-center text-gray-400">
        Explore my work, projects, and get in touch.
      </p>
    </div>
  );
}

