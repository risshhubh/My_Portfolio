// components/pages/ContactDetailsPage.jsx
import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaClock, FaUserTie } from "react-icons/fa";

const ContactDetailsPage = ({ darkMode = false }) => {
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

  return (
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
  );
};

export default ContactDetailsPage;
