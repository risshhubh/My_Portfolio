import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaEye } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

const ProjectsPage = ({ darkMode = false }) => {
  const projects = [
    {
      title: "Feasto - Restaurant Discovery App",
      description: "A comprehensive restaurant discovery and food ordering platform with real-time location services, menu management, and user reviews.",
      technologies: ["React", "Node.js", "Google Maps API", "MongoDB", "Razorpay API"],
      githubUrl: "https://github.com/risshhubh/Feasto_App.git",
      liveUrl: "https://risshhubh.github.io/Feasto_App/",
      image: "/My_Portfolio/feasto/homepage-hero.png",
      stars: 15,
      views: 120,
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring a mobile-first design and interactive components.",
      technologies: ["React", "MongoDB", "JavaScript", "Node.js","Express.js", "APIs"],
      githubUrl: "https://github.com/risshhubh/My_Portfolio.git",
      liveUrl: "https://risshhubh.github.io/My_Portfolio/",
      image: "/My_Portfolio/profilephoto.jpg",
      stars: 8,
      views: 85,
      featured: true
    },
    {
      title: "Weather App",
      description: "A real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      githubUrl: "https://github.com/risshhubh/weather-app",
      liveUrl: "https://weather-app-demo.vercel.app",
      image: "/My_Portfolio/feasto/italian-spoon-menu.png",
      stars: 4,
      views: 45,
      featured: false,
      status: "IN PRODUCTION"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT"],
      githubUrl: "https://github.com/risshhubh/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: false,
      status: "UPCOMING"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      githubUrl: "https://github.com/risshhubh/task-manager",
      liveUrl: "https://task-manager-demo.vercel.app",
      featured: false,
      status: "UPCOMING"
    },
    {
      title: "Blog Platform",
      description: "A content management system for blogs with markdown support, user authentication, and SEO optimization.",
      technologies: ["Next.js", "MongoDB", "Markdown", "Tailwind CSS"],
      githubUrl: "https://github.com/risshhubh/blog-platform",
      liveUrl: "https://blog-platform-demo.vercel.app",
      featured: false,
      status: "UPCOMING"
    }
  ];

  return (
    <div className={`h-full w-full bg-gradient-to-br ${darkMode ? "from-gray-900 via-gray-800 to-gray-900" : "from-blue-50 via-white to-purple-50"} px-4 py-6 overflow-y-auto hide-scrollbar`}>
      
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${darkMode ? "bg-gradient-to-br from-blue-600 to-purple-600" : "bg-gradient-to-br from-blue-500 to-purple-500"} shadow-lg`}>
          <FaCode className="text-white text-2xl" />
        </div>
        <h2 className={`text-3xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
          My Projects
        </h2>
        <p className={`text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Showcasing my development work and technical skills
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mb-8">
        <h3 className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
          🌟 Featured Projects
        </h3>
        <div className="space-y-6">
          {projects.filter(project => project.featured).map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
                darkMode 
                  ? "bg-gray-800/50 border border-gray-700 hover:border-gray-600" 
                  : "bg-white/80 border border-gray-200 hover:border-gray-300 shadow-md"
              }`}
            >
              <div className="p-6">
                <div className="mb-4">
                  <h4 className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {project.title}
                  </h4>
                  <p className={`text-sm mb-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? "bg-blue-900/30 text-blue-300" 
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className={`flex items-center space-x-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      <FaStar className="text-yellow-500" />
                      <span>{project.stars}</span>
                    </div>
                    <div className={`flex items-center space-x-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      <FaEye />
                      <span>{project.views}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 relative z-10">
                    <button
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 cursor-pointer select-none relative z-20 ${
                        darkMode 
                          ? "bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white" 
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Featured Project - Opening GitHub:', project.githubUrl);
                        window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <FaGithub className="text-lg" />
                      <span>Code</span>
                    </button>
                    {project.liveUrl && (
                      <button
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 cursor-pointer select-none relative z-20 ${
                          darkMode 
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700" 
                            : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
                        } shadow-lg`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Featured Project - Opening Live:', project.liveUrl);
                          window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span>Live</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Hover Effect Background */}
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="mb-8">
        <h3 className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
          📁 Other Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg ${
                darkMode 
                  ? "bg-gray-800/50 border border-gray-700 hover:border-gray-600" 
                  : "bg-white/80 border border-gray-200 hover:border-gray-300 shadow-md"
              }`}
            >
              <div className="p-3">
                <div className="mb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={`text-sm font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {project.title}
                    </h4>
                    {project.status && (
                      <span className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === "IN PRODUCTION" 
                          ? darkMode 
                            ? "bg-green-900/30 text-green-300 border border-green-600/30" 
                            : "bg-green-100 text-green-700 border border-green-200"
                          : darkMode 
                            ? "bg-yellow-900/30 text-yellow-300 border border-yellow-600/30" 
                            : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                      }`}>
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mb-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-xs">
                  <div className={`flex items-center space-x-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    <FaStar className="text-yellow-500" />
                    <span>{project.stars}</span>
                  </div>
                  <div className={`flex items-center space-x-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    <FaEye />
                    <span>{project.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className={`text-center p-6 rounded-2xl ${darkMode ? "bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-gray-700" : "bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200"} shadow-lg`}>
        <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Want to See More? 🚀
        </h3>
        <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
          Check out my GitHub profile for more projects and contributions.
        </p>
        <a
          href="https://github.com/risshhubh"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center space-x-2 px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
            darkMode 
              ? "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 hover:from-gray-600 hover:to-gray-700" 
              : "bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-500 hover:to-gray-600"
          } shadow-lg hover:shadow-xl`}
        >
          <FaGithub />
          <span>View GitHub Profile</span>
        </a>
      </div>

      {/* Footer */}
      <div className={`mt-6 mb-8 text-center text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        <p>💻 Always learning, always building • Open to collaboration</p>
        <p className="mt-1">Let's create something amazing together!</p>
      </div>
    </div>
  );
};

export default ProjectsPage; 