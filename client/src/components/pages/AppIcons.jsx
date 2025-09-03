import React, { useState } from "react";
import {
  FiSettings,
  FiCamera,
  FiMessageSquare,
  FiMusic,
  FiMail,
  FiPhone,
  FiAward,
  FiLinkedin,
  FiUser,
} from "react-icons/fi";
import { MdPhoto, MdEventNote, MdDescription } from "react-icons/md";
import { FaRegStickyNote, FaTools, FaCode } from "react-icons/fa";
import SettingsPage from "./SettingsPage";
import ContactDetailsPage from "./ContactDetailsPage";
import SkillsDetailsPage from "./SkillsDetailsPage";
import SocialLinksPage from "./SocialLinksPage";
import CertificatesPage from "./CertificatesPage";
import AboutMePage from "./AboutMePage";
import StatusBar from "../StatusBar";
import PhotosPage from "./PhotosPage";
import MessagesPage from "./MessagesPage";
import MusicPage from "./MusicPage";
import CalendarPage from "./CalendarPage";
import ProjectsPage from "./ProjectsPage";
import NotesPage from "./NotesPage";
import CameraPage from "./CameraPage";
import getImagePath from "../../utils/imagePaths";

const AppIcons = ({ darkMode, setDarkMode, onSubpageChange }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);

  // Check if any subpage is open
  const isAnySubpageOpen = showSettings || showContact || showSkills || showSocialLinks || 
                          showResume || showCertificates || showPhotos || showMessages || 
                          showMusic || showCalendar || showNotes || showCamera || showAboutMe || showProjects;

  // Notify parent component when subpage state changes
  React.useEffect(() => {
    if (onSubpageChange) {
      onSubpageChange(isAnySubpageOpen);
    }
  }, [isAnySubpageOpen, onSubpageChange]);

  const toggleSettings = () => setShowSettings(!showSettings);
  const toggleContact = () => setShowContact(!showContact);
  const toggleSkills = () => setShowSkills(!showSkills);
  const toggleSocialLinks = () => setShowSocialLinks(!showSocialLinks);
  const toggleResume = () => setShowResume(!showResume);
  const toggleCertificates = () => setShowCertificates(!showCertificates);
  const togglePhotos = () => setShowPhotos(!showPhotos);
  const toggleMessages = () => setShowMessages(!showMessages);
  const toggleMusic = () => setShowMusic(!showMusic);
  const toggleCalendar = () => setShowCalendar(!showCalendar);
  const toggleProjects = () => setShowProjects(!showProjects);
  const toggleNotes = () => setShowNotes(!showNotes);
  const toggleCamera = () => setShowCamera(!showCamera);
  const toggleAboutMe = () => setShowAboutMe(!showAboutMe);

  const apps = [
    { name: "Photos", icon: <MdPhoto className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />, onClick: togglePhotos },
    { name: "Messages", icon: <FiMessageSquare className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />, onClick: toggleMessages },
    { name: "Camera", icon: <FiCamera className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />, onClick: toggleCamera },
    { name: "Music", icon: <FiMusic className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />, onClick: toggleMusic },
    { name: "Notes", icon: <FaRegStickyNote className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />, onClick: toggleNotes },
    { name: "Calendar", icon: <MdEventNote className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />, onClick: toggleCalendar },
    { name: "Projects", icon: <FaCode className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />, onClick: toggleProjects },
    {
      name: "Mail",
      icon: <FiMail className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />,
      onClick: () =>
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=rishabhsrivastava921@gmail.com",
          "_blank"
        ),
    },
    {
      name: "About Me",
      icon: <FiUser className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />,
      onClick: toggleAboutMe,
    },
    {
      name: "Resume",
      icon: <MdDescription className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />,
      onClick: toggleResume,
    },
    {
      name: "Certificates",
      icon: <FiAward className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />,
      onClick: toggleCertificates,
    },
    {
      name: "Contact",
      icon: <FiPhone className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />,
      onClick: toggleContact,
    },
    {
      name: "Skills",
      icon: <FaTools className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />,
      onClick: toggleSkills,
    },
    {
      name: "Social Links",
      icon: <FiLinkedin className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />,
      onClick: toggleSocialLinks,
    },
    {
      name: "Settings",
      icon: <FiSettings className={`${darkMode ? "text-white" : "text-gray-800"} text-xl sm:text-2xl`} />,
      onClick: toggleSettings,
    },
  ];

  return (
    <>
      <div className={`${darkMode ? "bg-[#23272f]" : "bg-[#23272f]"} pt-2`}>
        <StatusBar darkMode={darkMode} />
      </div>
      <div className={`h-full w-full bg-gradient-to-b ${darkMode ? "from-[#23272f] to-[#18181b]" : "from-[#f8f9fa] to-[#e9ecef]"} flex justify-center items-start pt-8 sm:pt-10 px-2 sm:px-3 relative overflow-y-auto`}>
        <div className="grid grid-cols-3 gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-x-10 justify-items-center w-full max-w-xs mx-auto">
          {apps.map((app, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center cursor-pointer group"
              onClick={app.onClick}
              tabIndex={0}
              aria-label={app.name}
              role="button"
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && app.onClick && app.onClick()}
            >
              <div className={`${darkMode ? "bg-gradient-to-tr from-gray-700 to-gray-900" : "bg-gradient-to-tr from-white to-gray-100 shadow-md border border-gray-200"} rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-transform group-hover:scale-105`}>
                {app.icon}
              </div>
              <span className={`text-xs sm:text-sm font-bold mt-2 ${darkMode ? "text-gray-100" : "text-gray-800"} text-center w-16 sm:w-20 truncate`}>
                {app.name}
              </span>
            </div>
          ))}
        </div>

        {/* Settings Overlay */}
        {showSettings && (
          <Overlay title="Settings" onClose={toggleSettings} darkMode={darkMode}>
            <SettingsPage darkMode={darkMode} setDarkMode={setDarkMode} />
          </Overlay>
        )}

        {/* Contact Overlay */}
        {showContact && (
          <Overlay title="Contact Me" onClose={toggleContact} darkMode={darkMode}>
            <ContactDetailsPage darkMode={darkMode} />
          </Overlay>
        )}

        {/* Skills Overlay */}
        {showSkills && (
          <Overlay title="Skills" onClose={toggleSkills} darkMode={darkMode}>
            <SkillsDetailsPage darkMode={darkMode} />
          </Overlay>
        )}

        {/* Social Links Overlay */}
        {showSocialLinks && (
          <Overlay title="Social Links" onClose={toggleSocialLinks} darkMode={darkMode}>
            <SocialLinksPage darkMode={darkMode} />
          </Overlay>
        )}

        {/* Certificates Overlay */}
        {showCertificates && (
          <Overlay title="Certificates" onClose={toggleCertificates} darkMode={darkMode}>
            <CertificatesPage darkMode={darkMode} />
          </Overlay>
        )}

        {/* Photos Overlay */}
        {showPhotos && (
          <Overlay title="Photos" onClose={togglePhotos} darkMode={darkMode}>
            <PhotosPage darkMode={darkMode} />
          </Overlay>
        )}
        {/* Messages Overlay */}
        {showMessages && (
          <Overlay title="Messages" onClose={toggleMessages} darkMode={darkMode}>
            <MessagesPage darkMode={darkMode} />
          </Overlay>
        )}
        {/* Music Overlay */}
        {showMusic && (
          <Overlay title="Music" onClose={toggleMusic} darkMode={darkMode}>
            <MusicPage darkMode={darkMode} />
          </Overlay>
        )}
        {/* Calendar Overlay */}
        {showCalendar && (
          <Overlay title="Calendar" onClose={toggleCalendar} darkMode={darkMode}>
            <CalendarPage darkMode={darkMode} />
          </Overlay>
        )}
        {/* Projects Overlay */}
        {showProjects && (
          <Overlay title="Projects" onClose={toggleProjects} darkMode={darkMode}>
            <ProjectsPage darkMode={darkMode} />
          </Overlay>
        )}

        {/* Notes Overlay */}
        {showNotes && (
          <Overlay title="Notes" onClose={toggleNotes} darkMode={darkMode}>
            <NotesPage darkMode={darkMode} />
          </Overlay>
        )}

        {/* Camera Overlay */}
        {showCamera && (
          <Overlay title="Camera" onClose={toggleCamera} darkMode={darkMode}>
            <CameraPage darkMode={darkMode} />
          </Overlay>
        )}

        {/* About Me Overlay */}
        {showAboutMe && (
          <Overlay title="About Me" onClose={toggleAboutMe} darkMode={darkMode}>
            <AboutMePage darkMode={darkMode} />
          </Overlay>
        )}

        {/* Resume Overlay */}
        {showResume && (
          <div className={`absolute top-0 left-0 w-full h-full ${darkMode ? "bg-[#23272f]" : "bg-white"} z-50 flex flex-col animate-slide-up`}>
            <div className={`sticky ${darkMode ? "bg-[#23272f]" : "bg-white"} px-3 sm:px-4 py-2 sm:py-3 border-b z-10 flex justify-between items-center ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
              <h2 className={`text-base sm:text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>My Resume</h2>
              <button
                onClick={toggleResume}
                className={`text-xs sm:text-sm font-medium cursor-pointer ${darkMode ? "text-blue-400" : "text-blue-600"}`}
                aria-label="Close Resume"
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
                    href={getImagePath("/RESUME.pdf")}
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
                      View Resume
                    </div>
                  </a>
                  
                  <a
                    href={getImagePath("/RESUME.pdf")}
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
                    💡 Tip: Click "View Resume" to see the full document in your browser
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
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

export default AppIcons;