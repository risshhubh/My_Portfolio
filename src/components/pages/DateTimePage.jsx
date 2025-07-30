import React, { useEffect, useState } from "react";
import StatusBar from "../StatusBar";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaClock, FaUserTie } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const DateTimePage = ({ darkMode = false }) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const contactInfo = [
    {
      icon: <FaPhone className="text-xl" />,
      label: "Phone",
      value: "+91 9219234185",
      href: "tel:+919219234185",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-100",
      darkBgColor: "bg-green-900/20",
      action: "Call Now"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      label: "Email",
      value: "rishabhsrivastava921@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=rishabhsrivastava921@gmail.com",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-100",
      darkBgColor: "bg-red-900/20",
      action: "Send Email"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      label: "LinkedIn",
      value: "linkedin.com/in/rishabhsrivastava921",
      href: "https://www.linkedin.com/in/rishabh-srivastava-5a509232a/",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-100",
      darkBgColor: "bg-blue-900/20",
      action: "Connect"
    },
    {
      icon: <FaGithub className="text-xl" />,
      label: "GitHub",
      value: "github.com/risshhubh",
      href: "https://github.com/risshhubh",
      color: "from-gray-700 to-gray-800",
      bgColor: "bg-gray-100",
      darkBgColor: "bg-gray-800/20",
      action: ""
    }
  ];

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

  const toggleContact = () => setShowContact(!showContact);
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
              src="/My_Portfolio/profilephoto.jpg"
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

        {/* Contact and Resume Icons */}
        <div className={`w-full max-w-xs flex justify-between items-center mt-6 px-4 transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
          {/* Contact Icon - Left */}
          <div className="flex flex-col items-center cursor-pointer group" onClick={toggleContact}>
            <div className={`${darkMode ? "bg-gradient-to-tr from-gray-700 to-gray-900" : "bg-gradient-to-tr from-white to-gray-100 shadow-md border border-gray-200"} rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-transform group-hover:scale-105`}>
              <FiPhone className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />
            </div>
            <span className={`text-xs sm:text-sm font-bold mt-2 ${darkMode ? "text-gray-100" : "text-gray-800"} text-center w-16 sm:w-20 truncate`}>
              Contact
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

      {/* Contact Overlay */}
      {showContact && (
        <div className={`absolute top-0 left-0 w-full h-full ${darkMode ? "bg-[#23272f]" : "bg-white"} z-50 shadow-2xl rounded-xl sm:rounded-2xl animate-slide-up flex flex-col`} role="dialog" aria-modal="true" aria-label="Contact Me">
          <div
            className={`sticky px-3 sm:px-4 py-2 border-b z-10 flex justify-between items-center ${
              darkMode ? "bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e] border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <h2 className={`text-base sm:text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
              Contact Me
            </h2>
            <button
              onClick={toggleContact}
              className={`text-xs sm:text-sm font-medium cursor-pointer ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
              aria-label="Close Contact Me"
            >
              Close
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className={`h-full w-full bg-gradient-to-br ${darkMode ? "from-gray-900 via-gray-800 to-gray-900" : "from-blue-50 via-white to-purple-50"} px-4 py-6 overflow-y-auto hide-scrollbar`}>
              
              {/* Header Section */}
              <div className="text-center mb-8">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${darkMode ? "bg-gradient-to-br from-blue-600 to-purple-600" : "bg-gradient-to-br from-blue-500 to-purple-500"} shadow-lg`}>
                  <FaUserTie className="text-white text-2xl" />
                </div>
                <h2 className={`text-3xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Get in Touch
                </h2>
                <p className={`text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Let's connect and build something amazing together
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl cursor-pointer block ${
                      darkMode 
                        ? "bg-gray-800/50 border border-gray-700 hover:border-gray-600" 
                        : "bg-white/80 border border-gray-200 hover:border-gray-300 shadow-md"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${contact.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          <div className="text-white">
                            {contact.icon}
                          </div>
                        </div>
                        <div>
                          <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            {contact.label}
                          </p>
                          <p className={`text-base font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                            {contact.value}
                          </p>
                        </div>
                      </div>
                      {contact.action && (
                        <div className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform group-hover:scale-105 ${
                          darkMode 
                            ? "bg-gray-700 text-gray-200 group-hover:bg-gray-600" 
                            : "bg-gray-100 text-gray-700 group-hover:bg-gray-200"
                        }`}>
                          {contact.action}
                        </div>
                      )}
                    </div>
                    
                    {/* Hover Effect Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                  </a>
                ))}
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className={`p-4 rounded-xl ${darkMode ? "bg-gray-800/50 border border-gray-700" : "bg-white/80 border border-gray-200"} shadow-md`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${darkMode ? "bg-blue-900/30" : "bg-blue-100"}`}>
                      <FaMapMarkerAlt className={`text-lg ${darkMode ? "text-blue-400" : "text-blue-600"}`} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Location</p>
                      <p className={`text-base font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Noida, India</p>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl ${darkMode ? "bg-gray-800/50 border border-gray-700" : "bg-white/80 border border-gray-200"} shadow-md`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${darkMode ? "bg-green-900/30" : "bg-green-100"}`}>
                      <FaClock className={`text-lg ${darkMode ? "text-green-400" : "text-green-600"}`} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Availability</p>
                      <p className={`text-base font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Open to Work</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className={`text-center p-6 rounded-2xl ${darkMode ? "bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-gray-700" : "bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200"} shadow-lg`}>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Ready to Collaborate? 🚀
                </h3>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
                  Available for freelance, full-time, or collaborative development opportunities.
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=rishabhsrivastava921@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                      darkMode 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700" 
                        : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
                    } shadow-lg hover:shadow-xl`}
                  >
                    Start a Project
                  </a>
                  <a
                    href="tel:+919219234185"
                    className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                      darkMode 
                        ? "bg-gray-700 text-gray-200 hover:bg-gray-600" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } shadow-md hover:shadow-lg`}
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className={`mt-6 mb-8 text-center text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                <p>🌏 Based in Noida, India • Available Worldwide</p>
                <p className="mt-1">Let's turn your ideas into reality!</p>
              </div>
            </div>
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
                  href="https://drive.google.com/file/d/1kgazVMClami38aIoyD-qU39pn7LTijVz/view?usp=drive_link"
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
                  href="https://drive.google.com/file/d/1kgazVMClami38aIoyD-qU39pn7LTijVz/view?usp=drive_link"
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
