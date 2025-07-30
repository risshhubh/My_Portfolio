import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaCode } from "react-icons/fa";

const SocialLinksPage = ({ darkMode = false }) => {
  const socialLinks = [
    {
      icon: <FaLinkedin className="text-blue-600 text-2xl" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rishabh-srivastava-5a509232a/",
    },
    {
      icon: <FaGithub className={`${darkMode ? "text-white" : "text-gray-800"} text-2xl`} />,
      name: "GitHub",
      url: "https://github.com/Risshhubh",
    },
    {
      icon: <FaTwitter className="text-blue-400 text-2xl" />,
      name: "Twitter",
      url: "https://x.com/Rishabhsri_cs?t=mabRFfozL_V8nDmO8zlB2A&s=09",
    },
    {
      icon: <FaCode className="text-yellow-400 text-2xl" />,
      name: "LeetCode",
      url: "https://leetcode.com/u/rishabhsrivastavacode/",
    },
  ];

  return (
    <div className={`w-full h-full px-4 py-6 flex flex-col items-center gap-6 overflow-y-auto ${darkMode ? "bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e] text-white" : "bg-gradient-to-br from-white to-gray-50 text-gray-900"} rounded-2xl`}>
      <h2 className={`text-2xl font-semibold tracking-wide text-center mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
        Connect with Me
      </h2>
      <div className="w-full flex flex-col gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 p-4 rounded-xl shadow transition duration-300 ${darkMode ? "bg-[#2a2a2a] hover:bg-[#383838]" : "bg-white hover:bg-gray-50 border border-gray-200"}`}
          >
            {link.icon}
            <span className={`text-lg font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinksPage;
