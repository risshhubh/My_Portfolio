import React, { useEffect, useState } from "react";
import StatusBar from "../StatusBar";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaClock, FaUserTie, FaCode } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import ProjectsPage from "./ProjectsPage";
import getImagePath from "../../utils/imagePaths";

const DateTimePage = ({ darkMode = false }) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [showProjects, setShowProjects] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);



  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      setDate(
        now.toLocaleDateString([], {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    // Trigger animations after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  // Greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  // Google search handler
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.google.value.trim();
    if (query) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
    }
  };

  const toggleProjects = () => setShowProjects(!showProjects);
  const toggleResume = () => setShowResume(!showResume);

  return (
    <div
      className={`w-full h-full flex flex-col relative bg-gradient-to-b ${darkMode ? "from-gray-900 via-gray-800 to-gray-700" : "from-blue-50 via-indigo-50 to-purple-50"}`}
      aria-label="Mobile home screen"
    >
      {/* --- Dark Status Bar Area --- */}
      <div className={`${darkMode ? "bg-[#23272f]" : "bg-[#23272f]"} pt-2`}>
        <StatusBar currentTime={time} darkMode={darkMode} />
      </div>

      {/* --- Main Home Content --- */}
      <div className="flex-1 flex flex-col items-center justify-start pt-8 sm:pt-12 px-4">
        {/* Profile Image */}
        <div className={`flex flex-col items-center mb-8 transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          <div className={`w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 ${darkMode ? "border-white/20" : "border-white/30"} shadow-lg mb-4 relative`}>
            <img 
              src={getImagePath("/profilephoto.jpg")}
              alt="Rishabh Srivastava"
              className="w-full h-full object-cover"
              onLoad={() => console.log('Profile image loaded successfully')}
              onError={(e) => {
                console.log('Profile image failed to load, showing fallback');
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Placeholder fallback */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl lg:text-3xl" style={{ display: 'none' }}>
              RS
            </div>
          </div>
          <span className={`text-xl sm:text-2xl font-semibold tracking-wide text-center ${darkMode ? "text-white/90" : "text-gray-800"}`}>
            Rishabh Srivastava
          </span>
        </div>

        {/* Time & Date */}
        <div className={`flex flex-col items-center mb-6 select-none transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <span className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold drop-shadow-md tracking-tight ${darkMode ? "text-white" : "text-gray-800"}`}>{time}</span>
          <span className={`text-base sm:text-lg lg:text-xl mt-2 font-medium tracking-wide ${darkMode ? "text-gray-200" : "text-gray-600"}`}>{date}</span>
        </div>
        
        {/* Greeting */}
        <div className={`mb-3 text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide text-center transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${darkMode ? "text-white/90" : "text-gray-800"}`} style={{ transitionDelay: '600ms' }}>
          {getGreeting()} 👋
        </div>
        
        {/* Welcome Message */}
        <div className={`mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg font-medium text-center px-2 transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${darkMode ? "text-blue-300" : "text-blue-600"}`} style={{ transitionDelay: '800ms' }}>
          Welcome to my Portfolio
        </div>
        
        {/* Google Search Bar */}
        <form
          className={`w-full max-w-xs flex items-center rounded-full shadow-lg px-3 py-2 gap-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${darkMode ? "bg-[#23272f]/90" : "bg-white/90"}`}
          onSubmit={handleSearch}
          role="search"
          aria-label="Google search"
          style={{ transitionDelay: '1000ms' }}
        >
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-3.5-3.5" /></svg>
          <input
            type="text"
            name="google"
            autoComplete="off"
            placeholder="Search Google..."
            className={`flex-1 bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base ${darkMode ? "text-white" : "text-gray-900"}`}
            aria-label="Search Google"
          />
          <button
            type="submit"
            className="ml-2 px-3 py-1 rounded-full bg-blue-600 text-white font-semibold text-xs sm:text-sm hover:bg-blue-700 transition"
            aria-label="Search"
          >
            Search
          </button>
        </form>

        {/* Projects and Resume Icons */}
        <div className={`w-full max-w-xs flex justify-between items-center mt-6 px-4 transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
          {/* Projects Icon - Left */}
          <div className="flex flex-col items-center cursor-pointer group" onClick={toggleProjects}>
            <div className={`${darkMode ? "bg-gradient-to-tr from-gray-700 to-gray-900" : "bg-gradient-to-tr from-white to-gray-100 shadow-md border border-gray-200"} rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-transform group-hover:scale-105`}>
              <FaCode className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />
            </div>
            <span className={`text-xs sm:text-sm font-bold mt-2 ${darkMode ? "text-gray-100" : "text-gray-800"} text-center w-16 sm:w-20 truncate`}>
              Projects
            </span>
          </div>

          {/* Resume Icon - Right */}
          <div className="flex flex-col items-center cursor-pointer group" onClick={toggleResume}>
            <div className={`${darkMode ? "bg-gradient-to-tr from-gray-700 to-gray-900" : "bg-gradient-to-tr from-white to-gray-100 shadow-md border border-gray-200"} rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-transform group-hover:scale-105`}>
              <MdDescription className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />
            </div>
            <span className={`text-xs sm:text-sm font-bold mt-2 ${darkMode ? "text-gray-100" : "text-gray-800"} text-center w-16 sm:w-20 truncate`}>
              Resume
            </span>
          </div>
        </div>
      </div>

      {/* --- Bottom Home Dock --- */}
      <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out ${isLoaded ? 'opacity-50' : 'opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
        <div className={`w-24 h-1.5 rounded-full ${darkMode ? "bg-white" : "bg-gray-400"}`} />
      </div>

      {/* Projects Overlay */}
      {showProjects && (
        <div className={`absolute top-0 left-0 w-full h-full ${darkMode ? "bg-[#23272f]" : "bg-white"} z-50 shadow-2xl rounded-xl sm:rounded-2xl animate-slide-up flex flex-col`} role="dialog" aria-modal="true" aria-label="Projects">
          <div
            className={`sticky px-3 sm:px-4 py-2 border-b z-10 flex justify-between items-center ${
              darkMode ? "bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e] border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <h2 className={`text-base sm:text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
              Projects
            </h2>
            <button
              onClick={toggleProjects}
              className={`text-xs sm:text-sm font-medium cursor-pointer ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
              aria-label="Close Projects"
            >
              Close
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ProjectsPage darkMode={darkMode} />
          </div>
        </div>
      )}

      {/* Resume Overlay */}
      {showResume && (
        <div className={`absolute top-0 left-0 w-full h-full ${darkMode ? "bg-[#23272f]" : "bg-white"} z-50 shadow-2xl rounded-xl sm:rounded-2xl animate-slide-up flex flex-col`} role="dialog" aria-modal="true" aria-label="My Resume">
          <div
            className={`sticky px-3 sm:px-4 py-2 border-b z-10 flex justify-between items-center ${
              darkMode ? "bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e] border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <h2 className={`text-base sm:text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
              My Resume
            </h2>
            <button
              onClick={toggleResume}
              className={`text-xs sm:text-sm font-medium cursor-pointer ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
              aria-label="Close My Resume"
            >
              Close
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="max-w-md mx-auto text-center">
              {/* Resume Preview Card */}
              <div className={`mb-6 p-6 rounded-xl shadow-lg ${darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${darkMode ? "bg-blue-600" : "bg-blue-500"}`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>My Resume</h3>
                <p className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  View my professional experience, skills, and qualifications
                </p>
                <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  PDF Document • Updated recently
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href="https://drive.google.com/file/d/1mqY1I_D6UsD3ktfwDVduHAegNnE4tWns/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    darkMode 
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl" 
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Resume on Google Drive
                  </div>
                </a>
                
                <a
                  href="https://drive.google.com/file/d/1mqY1I_D6UsD3ktfwDVduHAegNnE4tWns/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    darkMode 
                      ? "bg-gray-700 text-gray-100 hover:bg-gray-600 border border-gray-600" 
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </div>
                </a>
              </div>

              {/* Additional Info */}
              <div className={`mt-6 p-4 rounded-lg ${darkMode ? "bg-gray-800/50" : "bg-gray-50"}`}>
                <p className={`text-xs text-center ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  💡 Tip: Click "View Resume on Google Drive" to see the full document with better formatting
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Overlay Wrapper
const Overlay = ({ title, onClose, children, darkMode = false }) => (
  <div className={`absolute top-0 left-0 w-full h-full ${darkMode ? "bg-[#23272f]" : "bg-white"} z-50 shadow-2xl rounded-xl sm:rounded-2xl animate-slide-up flex flex-col`} role="dialog" aria-modal="true" aria-label={title}>
    <div
      className={`sticky top--5 px-3 sm:px-4 py-2 border-b z-10 flex justify-between items-center ${
        darkMode ? "bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e] border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <h2 className={`text-base sm:text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
        {title}
      </h2>
      <button
        onClick={onClose}
        className={`text-xs sm:text-sm font-medium cursor-pointer ${
          darkMode ? "text-blue-400" : "text-blue-600"
        }`}
        aria-label={`Close ${title}`}
      >
        Close
      </button>
    </div>
    <div className="flex-1 overflow-y-auto">{children}</div>
  </div>
);

export default DateTimePage;
