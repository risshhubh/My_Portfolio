// components/pages/SettingsPage.jsx
import React, { useState } from "react";
import { 
  FaWifi, 
  FaBluetooth, 
  FaBell, 
  FaMoon, 
  FaLock, 
  FaSun, 
  FaUser, 
  FaInfoCircle, 
  FaPalette, 
  FaShieldAlt, 
  FaCog, 
  FaDownload, 
  FaGlobe, 
  FaVolumeUp, 
  FaBatteryThreeQuarters,
  FaMobile,
  FaLaptop,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaTimes
} from "react-icons/fa";

const SettingsPage = ({ darkMode = false, setDarkMode }) => {
  const [showAbout, setShowAbout] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);

  const settingGroups = [
    {
      title: "Appearance",
      items: [
        { 
          icon: darkMode ? <FaMoon className="text-purple-500" /> : <FaSun className="text-yellow-500" />, 
          label: "Dark Mode", 
          type: "toggle", 
          default: darkMode,
          customToggle: true
        },
        { 
          icon: <FaPalette className="text-pink-500" />, 
          label: "Theme", 
          value: darkMode ? "Dark" : "Light",
          type: "info"
        },
        { 
          icon: <FaMobile className="text-blue-500" />, 
          label: "Display", 
          value: "Responsive",
          type: "info"
        },
      ],
    },
    {
      title: "Network & Connectivity",
      items: [
        { icon: <FaWifi className="text-blue-500" />, label: "Wi-Fi", value: "Work_WiFi", type: "info" },
        { icon: <FaBluetooth className="text-indigo-500" />, label: "Bluetooth", type: "toggle", default: true },
        { icon: <FaGlobe className="text-green-500" />, label: "Cellular", value: "5G", type: "info" },
      ],
    },
    {
      title: "System & Privacy",
      items: [
        { icon: <FaBell className="text-yellow-500" />, label: "Notifications", type: "toggle", default: true },
        { icon: <FaMoon className="text-purple-500" />, label: "Focus Mode", type: "toggle", default: false },
        { icon: <FaLock className="text-red-500" />, label: "Privacy", value: "Standard", type: "action", action: () => setShowPrivacy(true) },
        { icon: <FaShieldAlt className="text-green-500" />, label: "Security", value: "Protected", type: "info" },
      ],
    },
    {
      title: "Accessibility",
      items: [
        { icon: <FaVolumeUp className="text-orange-500" />, label: "Sound", type: "toggle", default: true },
        { icon: <FaBatteryThreeQuarters className="text-green-500" />, label: "Battery Saver", type: "toggle", default: false },
        { icon: <FaCog className="text-gray-500" />, label: "Accessibility", value: "Standard", type: "action", action: () => setShowAccessibility(true) },
      ],
    },
    {
      title: "Portfolio Info",
      items: [
        { 
          icon: <FaUser className="text-blue-500" />, 
          label: "About Me", 
          value: "View Details", 
          type: "action", 
          action: () => setShowAbout(true) 
        },
        { 
          icon: <FaInfoCircle className="text-purple-500" />, 
          label: "Version", 
          value: "v2.0.0", 
          type: "info" 
        },
        { 
          icon: <FaDownload className="text-green-500" />, 
          label: "Last Updated", 
          value: "Dec 2024", 
          type: "info" 
        },
      ],
    },
  ];

  const [toggles, setToggles] = useState(() => {
    const initial = {};
    settingGroups.forEach(group => {
      group.items.forEach(item => {
        if (item.type === "toggle" && !item.customToggle) {
          initial[item.label] = item.default;
        }
      });
    });
    return initial;
  });

  const handleToggle = (label) => {
    setToggles(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const AboutMeModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className={`sticky top-0 px-6 py-4 border-b ${darkMode ? "border-gray-700" : "border-gray-200"} flex justify-between items-center`}>
          <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>About Me & Portfolio</h3>
          <button
            onClick={() => setShowAbout(false)}
            className={`p-2 rounded-full ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
          >
            <FaTimes className={`text-lg ${darkMode ? "text-white" : "text-gray-700"}`} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Personal Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>👨‍💻 About Me</h4>
            <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Hi! I'm <strong className={darkMode ? "text-blue-400" : "text-blue-600"}>Rishabh Srivastava</strong>, a passionate Full Stack Developer with expertise in modern web technologies. 
              I love creating innovative solutions and building user-friendly applications that make a difference.
            </p>
          </div>

          {/* Portfolio Structure */}
          <div>
            <h4 className={`text-lg font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>📱 Portfolio Structure</h4>
            <div className={`rounded-lg p-4 ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
              <p className={`text-sm leading-relaxed mb-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                This portfolio is designed as an <strong className={darkMode ? "text-green-400" : "text-green-600"}>interactive mobile app interface</strong> to showcase my skills and projects in a unique, engaging way.
              </p>
              
              <div className="space-y-2">
                <div className={`flex items-center space-x-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <span className="text-blue-500">📸</span>
                  <span className="text-sm"><strong>Photos App:</strong> Project screenshots and visual portfolio</span>
                </div>
                <div className={`flex items-center space-x-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <span className="text-green-500">📝</span>
                  <span className="text-sm"><strong>Notes App:</strong> To-do list and task management demo</span>
                </div>
                <div className={`flex items-center space-x-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <span className="text-purple-500">📞</span>
                  <span className="text-sm"><strong>Contact App:</strong> Professional contact information</span>
                </div>
                <div className={`flex items-center space-x-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <span className="text-orange-500">🛠️</span>
                  <span className="text-sm"><strong>Skills App:</strong> Technical skills and expertise</span>
                </div>
                <div className={`flex items-center space-x-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <span className="text-red-500">🏆</span>
                  <span className="text-sm"><strong>Certificates App:</strong> Professional certifications</span>
                </div>
                <div className={`flex items-center space-x-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <span className="text-indigo-500">🔗</span>
                  <span className="text-sm"><strong>Social Links App:</strong> Professional social media presence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Why This Design */}
          <div>
            <h4 className={`text-lg font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>🎯 Why This Design?</h4>
            <div className={`rounded-lg p-4 ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
              <ul className={`text-sm space-y-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span><strong>Interactive Experience:</strong> Stands out from traditional static portfolios</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span><strong>Mobile-First Design:</strong> Demonstrates responsive design skills</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span><strong>Modern UI/UX:</strong> Shows understanding of current design trends</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span><strong>Technical Showcase:</strong> Demonstrates React, Tailwind CSS, and modern web development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span><strong>Memorable Experience:</strong> Creates lasting impression on potential employers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>📞 Get In Touch</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <FaGithub className="text-xl text-gray-700 dark:text-gray-300" />
                <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>GitHub</span>
                <FaExternalLinkAlt className="text-xs text-gray-500 ml-auto" />
              </a>
              
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <FaLinkedin className="text-xl text-blue-600" />
                <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>LinkedIn</span>
                <FaExternalLinkAlt className="text-xs text-gray-500 ml-auto" />
              </a>
              
              <a
                href="mailto:rishabhsrivastava921@gmail.com"
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <FaEnvelope className="text-xl text-red-500" />
                <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Email</span>
                <FaExternalLinkAlt className="text-xs text-gray-500 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PrivacyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`w-full max-w-lg rounded-2xl shadow-2xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className={`px-6 py-4 border-b ${darkMode ? "border-gray-700" : "border-gray-200"} flex justify-between items-center`}>
          <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Privacy Settings</h3>
          <button
            onClick={() => setShowPrivacy(false)}
            className={`p-2 rounded-full ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
          >
            <FaTimes className={`text-lg ${darkMode ? "text-white" : "text-gray-700"}`} />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            <p className="mb-3">This portfolio respects your privacy and doesn't collect personal data.</p>
            <ul className="space-y-2">
              <li>• No cookies or tracking</li>
              <li>• No data collection</li>
              <li>• Open source code</li>
              <li>• Secure connections only</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const AccessibilityModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`w-full max-w-lg rounded-2xl shadow-2xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className={`px-6 py-4 border-b ${darkMode ? "border-gray-700" : "border-gray-200"} flex justify-between items-center`}>
          <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Accessibility</h3>
          <button
            onClick={() => setShowAccessibility(false)}
            className={`p-2 rounded-full ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
          >
            <FaTimes className={`text-lg ${darkMode ? "text-white" : "text-gray-700"}`} />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            <p className="mb-3">This portfolio is designed with accessibility in mind:</p>
            <ul className="space-y-2">
              <li>• High contrast themes</li>
              <li>• Keyboard navigation</li>
              <li>• Screen reader friendly</li>
              <li>• Responsive design</li>
              <li>• Clear typography</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`h-full w-full bg-gradient-to-b ${darkMode ? "from-gray-800 to-gray-900" : "from-gray-100 to-gray-200"} px-4 py-6 overflow-y-auto hide-scrollbar`}>
      <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>Settings</h2>

      {settingGroups.map((group, gIdx) => (
        <div key={gIdx} className="mb-6">
          <h3 className={`text-lg font-semibold mb-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{group.title}</h3>
          <div className={`rounded-2xl shadow-inner ${darkMode ? "bg-gray-700 divide-gray-600" : "bg-white divide-gray-200"} divide-y overflow-hidden`}>
            {group.items.map((item, iIdx) => (
              <div
                key={iIdx}
                className={`flex items-center justify-between px-4 py-4 transition duration-200 ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-50"} ${item.type === "action" ? "cursor-pointer" : ""}`}
                onClick={item.type === "action" ? item.action : undefined}
              >
                <div className="flex items-center space-x-4">
                  <div className={`${darkMode ? "bg-gray-600" : "bg-gray-100"} p-2 rounded-full`}>{item.icon}</div>
                  <span className={`text-base font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>{item.label}</span>
                </div>

                {/* Render Value, Toggle, or Action */}
                {item.type === "toggle" ? (
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={item.customToggle ? darkMode : toggles[item.label]}
                      onChange={() => {
                        if (item.customToggle && setDarkMode) {
                          setDarkMode(!darkMode);
                        } else {
                          handleToggle(item.label);
                        }
                      }}
                      className="sr-only peer"
                    />
                    <div className={`w-11 h-6 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full transition-all duration-200 ${darkMode ? "bg-gray-600 peer-checked:bg-blue-500" : "bg-gray-300 peer-checked:bg-blue-500"}`} />
                    <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md peer-checked:translate-x-full transition-transform duration-200" />
                  </label>
                ) : item.type === "action" ? (
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{item.value}</span>
                    <FaExternalLinkAlt className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
                  </div>
                ) : (
                  <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modals */}
      {showAbout && <AboutMeModal />}
      {showPrivacy && <PrivacyModal />}
      {showAccessibility && <AccessibilityModal />}
    </div>
  );
};

export default SettingsPage;
