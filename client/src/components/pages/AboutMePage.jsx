import React from "react";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaHeart,
  FaTrophy,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaLaptopCode,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaBook,
  FaGamepad,
  FaMusic,
  FaCamera,
  FaPlane,
  FaCoffee,
} from "react-icons/fa";
import getImagePath from "../../utils/imagePaths";

const AboutMePage = ({ darkMode = false }) => {
  return (
    <div
      className={`h-full w-full bg-gradient-to-b ${
        darkMode ? "from-gray-900 to-gray-800" : "from-[#f8fbff] to-[#e6ecf3]"
      } overflow-y-auto`}
    >


      <div className="p-4 space-y-6 pb-8">
        {/* Profile Section */}
        <div className={`rounded-xl p-6 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
          <div className="text-center">
            <img 
              src={getImagePath("/profilephoto.jpg")}
              alt="Rishabh Srivastava"
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-gray-200 dark:border-gray-600 shadow-lg"
            />
            <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
              Rishabh Srivastava
            </h2>
            <p className={`text-lg ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
              Computer Science Student
            </p>
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Passionate about web development and creating digital experiences
            </p>
          </div>
        </div>

        {/* Personal Information */}
        <div className={`rounded-xl p-6 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className={`text-blue-500 ${darkMode ? "text-blue-400" : "text-blue-500"}`} />
              <div>
                <p className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Location</p>
                <p className={`${darkMode ? "text-white" : "text-gray-800"}`}>Noida, India</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className={`text-blue-500 ${darkMode ? "text-blue-400" : "text-blue-500"}`} />
              <div>
                <p className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Email</p>
                <p className={`${darkMode ? "text-white" : "text-gray-800"}`}>rishabhsrivastava921@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className={`rounded-xl p-6 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
          <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
            <FaGraduationCap className="text-blue-500" />
            Education
          </h3>
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
              <div className="flex justify-between items-start mb-2">
                <h4 className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
                  Bachelor of Technology in Computer Science
                </h4>
                <span className={`text-sm px-2 py-1 rounded-full ${darkMode ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-800"}`}>
                  2022 - 2026
                </span>
              </div>
              <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                KCC Institute of Technology and Management
              </p>
              <p className={`text-sm mt-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Focused on web development, software engineering, and modern programming technologies
              </p>
            </div>
          </div>
        </div>









        {/* Interests & Hobbies */}
        <div className={`rounded-xl p-6 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
          <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
            <FaHeart className="text-red-500" />
            Interests & Hobbies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className={`w-12 h-12 mx-auto mb-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-100"} flex items-center justify-center`}>
                <FaCode className="text-blue-500" />
              </div>
              <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>Coding</p>
            </div>
            <div className="text-center">
              <div className={`w-12 h-12 mx-auto mb-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-100"} flex items-center justify-center`}>
                <FaBook className="text-green-500" />
              </div>
              <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>Learning</p>
            </div>
            <div className="text-center">
              <div className={`w-12 h-12 mx-auto mb-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-100"} flex items-center justify-center`}>
                <FaMusic className="text-purple-500" />
              </div>
              <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>Music</p>
            </div>
            <div className="text-center">
              <div className={`w-12 h-12 mx-auto mb-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-100"} flex items-center justify-center`}>
                <FaGamepad className="text-orange-500" />
              </div>
              <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>Gaming</p>
            </div>
          </div>
        </div>



        {/* About Me */}
        <div className={`rounded-xl p-6 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
          <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
            <FaLightbulb className="text-yellow-500" />
            About Me
          </h3>
          <div className={`space-y-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            <p className="leading-relaxed text-justify">
              I'm a Computer Science student at KCC Institute of Technology and Management, passionate about web development and creating interactive digital experiences. 
              I love working with React and modern web technologies to build responsive and user-friendly applications.
            </p>
            <p className="leading-relaxed text-justify">
              This portfolio showcases my journey in web development, featuring various app-like pages that demonstrate my skills in React, 
              responsive design, and interactive UI components. I'm constantly learning and exploring new technologies to improve my development skills.
            </p>
            <p className="leading-relaxed text-justify">
              When I'm not coding, I enjoy gaming, listening to music, and staying updated with the latest tech trends. 
              I'm excited to continue growing as a developer and take on new challenges in the world of web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage; 