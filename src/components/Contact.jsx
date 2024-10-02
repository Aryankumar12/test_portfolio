"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactMe() {
  const phoneNumber = "8630412121";
  const whatsappNumber = "8630412121";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center p-8 md:p-16 bg-gray-900 rounded-lg shadow-2xl w-full max-w-3xl mx-auto border border-gray-700"
    >
      {/* Heading */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
      >
        Contact Me
      </motion.h2>

      {/* Phone Number */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg md:text-2xl text-gray-300 mb-8 text-center"
      >
        Reach out to me at <span className="text-white">{phoneNumber}</span>
      </motion.p>

      {/* WhatsApp Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-6"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-20 h-20 md:w-24 md:h-24 object-contain"
        />
      </motion.div>

      {/* Button */}
      <motion.a
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        href={`https://wa.me/${whatsappNumber}?text=Hi`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 md:px-8 md:py-4 bg-white text-black text-lg md:text-xl font-semibold rounded-lg shadow-md hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
        >
          Send Hi
        </motion.button>
      </motion.a>
    </motion.div>
  );
}
