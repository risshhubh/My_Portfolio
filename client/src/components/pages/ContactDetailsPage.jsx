// components/pages/ContactDetailsPage.jsx
import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactDetailsPage = ({ darkMode = false }) => {
  return (
    <div className={`h-full w-full bg-gradient-to-b ${darkMode ? "from-gray-800 to-gray-900" : "from-white to-gray-100"} px-5 py-6 overflow-y-auto hide-scrollbar`}>
      <h2 className={`text-2xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>Get in Touch</h2>

      <div className="space-y-5">

        <div className="flex items-center space-x-4">
          <FaPhone className="text-green-600" />
          <a href="tel:+919219234185" className="text-base text-blue-600 underline">
            +91 9219234185
          </a>
        </div>

       <div className="flex items-center space-x-4">
  <FaEnvelope className="text-red-500" />
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=rishabhsrivastava921@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-base text-blue-600 underline"
  >
    rishabhsrivastava921@gmail.com
  </a>
</div>


        <div className="flex items-center space-x-4">
          <FaLinkedin className="text-blue-700" />
          <a
            href="https://www.linkedin.com/in/rishabh-srivastava-5a509232a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-blue-600 underline"
          >
            linkedin.com/in/rishabhsrivastava921
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <FaGithub className={`${darkMode ? "text-gray-300" : "text-gray-800"}`} />
          <a
            href="https://github.com/risshhubh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-blue-600 underline"
          >
            github.com/risshhubh
          </a>
        </div>
      </div>

      <div className={`mt-10 text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        Available for freelance, full-time, or collaborative dev opportunities.
        <br />
        Based in Noida, India 🌏
      </div>
    </div>
  );
};

export default ContactDetailsPage;
