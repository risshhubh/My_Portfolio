// components/pages/CertificatesPage.jsx
import React from "react";
import { Award } from "lucide-react";

const certificates = [
  {
    name: "IBM Web & Mobile Development Certificate",
    description:
      "Completed IBM professional training with hands-on projects including the Feasto App.",
    link: "https://courses.ibmmooc.skillsnetwork.site/certificates/79d8a0803ba9483bad07507b49e40633",
  },
  {
    name: "Java Web Development with AI - HCL Tech",
    description:
      "Built AI chatbot and smart planner using Java, JSP, Servlets, and XAMPP SQL.",
    link: "https://uplearning-lms.career-shaper.com/mod/customcert/view.php?id=725204&downloadown=1",
  },
  {
    name: "Cisco Badge: Introduction to Cyber Security",
    description:
      "Earned a badge from Cisco for completing the Intro to Cyber Security course.",
    link: "https://www.credly.com/badges/42375a2c-5798-4b97-8cfa-68b582076beb/linked_in_profile",
  },
];

const CertificatesPage = ({ darkMode = false }) => {
  return (
    <div className={`h-full w-full bg-gradient-to-b ${darkMode ? "from-gray-800 to-gray-900" : "from-[#f8fbff] to-[#e6ecf3]"} p-4 pb-24 overflow-y-auto hide-scrollbar`}>
      <div className="flex items-center gap-2 mb-5">
        <Award className="text-blue-600" size={26} />
        <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Certificates & Badges</h2>
      </div>

      <div className="space-y-6">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className={`${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"} rounded-2xl shadow-md border p-4 transition-all hover:shadow-lg`}
          >
            <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>{cert.name}</h3>
            <p className={`text-sm mt-1 mb-4 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              {cert.description}
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;
