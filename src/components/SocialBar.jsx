import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { useState } from "react";

const previews = {
  github: require("./assets/Screenshot (1213).png"),
  linkedin: require("./assets/Screenshot (1214).png"),
  leetcode: require("./assets/Screenshot (1215).png"),
};

export default function LinkBar() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex justify-center space-x-6 p-4 border border-gray-700 rounded-xl shadow-lg bg-gray-900 bg-opacity-60 backdrop-blur-lg w-[40rem]">
      {/* GitHub Icon */}
      <div className="flex flex-col items-center group">
        <FaGithub
          className="text-gray-300 text-4xl cursor-pointer transition duration-500 ease-in-out transform hover:text-white hover:scale-110"
          onMouseEnter={() => setHovered("github")}
          onMouseLeave={() => setHovered(null)}
        />
        {hovered === "github" && (
          <img
            src={previews.github}
            alt="GitHub Preview"
            className="absolute top-20 w-72 h-auto max-h-72 object-contain rounded-lg shadow-2xl transition-all duration-500 ease-in-out transform opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
          />
        )}
      </div>

      {/* LinkedIn Icon */}
      <div className="flex flex-col items-center group">
        <FaLinkedin
          className="text-gray-300 text-4xl cursor-pointer transition duration-500 ease-in-out transform hover:text-white hover:scale-110"
          onMouseEnter={() => setHovered("linkedin")}
          onMouseLeave={() => setHovered(null)}
        />
        {hovered === "linkedin" && (
          <img
            src={previews.linkedin}
            alt="LinkedIn Preview"
            className="absolute top-20 w-72 h-auto max-h-72 object-contain rounded-lg shadow-2xl transition-all duration-500 ease-in-out transform opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
          />
        )}
      </div>

      {/* LeetCode Icon */}
      <div className="flex flex-col items-center group">
        <FaCode
          className="text-gray-300 text-4xl cursor-pointer transition duration-500 ease-in-out transform hover:text-white hover:scale-110"
          onMouseEnter={() => setHovered("leetcode")}
          onMouseLeave={() => setHovered(null)}
        />
        {hovered === "leetcode" && (
          <img
            src={previews.leetcode}
            alt="LeetCode Preview"
            className="absolute top-20 w-72 h-auto max-h-72 object-contain rounded-lg shadow-2xl transition-all duration-500 ease-in-out transform opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
          />
        )}
      </div>
    </div>
  );
}
