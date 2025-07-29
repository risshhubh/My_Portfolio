// components/pages/SkillsDetailsPage.jsx
import React from "react";

const skills = {
  "Programming Languages": ["Java", "Python", "C++"],
  "Web Development": [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "PHP",
    "JSP",
    "Servlets",
    "MERN Stack"
  ],
  Databases: ["MySQL", "MongoDB"],
  "Tools & Platforms": ["Eclipse", "VS Code", "Git", "Apache Tomcat"],
  Algorithms: ["Data Structures & Algorithms"],
  Concepts: ["Operating Systems", "OOPS Concepts", "DBMS"]
};

const SkillsDetailsPage = ({ darkMode = false }) => {
  return (
    <div className={`h-full w-full overflow-y-auto p-4 bg-gradient-to-br ${darkMode ? "from-gray-800 to-gray-900" : "from-gray-100 to-gray-300"}`}>
      <h2 className={`text-xl font-bold mb-4 text-center ${darkMode ? "text-white" : "text-gray-800"}`}>My Skills</h2>
      <div className="space-y-4 pb-20">
        {Object.entries(skills).map(([category, items], idx) => (
          <div
            key={idx}
            className={`${darkMode ? "bg-gray-700 bg-opacity-80" : "bg-white bg-opacity-80"} backdrop-blur-md rounded-xl p-4 shadow-md`}
          >
            <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-sm border ${darkMode ? "bg-gray-600 text-gray-200 border-gray-500" : "bg-gray-200 text-gray-800 border-gray-300"}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsDetailsPage;
