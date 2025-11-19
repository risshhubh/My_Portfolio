// components/pages/MessagePage.jsx
import React, { useState } from "react";

const questions = [
  "What projects have you built?",
  "What certifications do you have?",
  "Can I see your resume?",
  "What are your skills?",
  "How can I contact you?",
];

const MessagePage = ({ darkMode = false }) => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async (question) => {
    setLoading(true);
    setResponse("");
    
    // Simulate API delay
    setTimeout(() => {
      let reply = "";
      
      if (question.includes("projects") || question.includes("built")) {
        reply = "I've built several projects including:\n\n🔹 **Feasto** - A restaurant discovery and food delivery platform\n🛠️ React, Node.js, MongoDB\n🔗 Live demo and GitHub links available\n\n🔹 **Pathwise - AI Job Portal** - An AI-powered job portal for smarter candidate-job matching\n🛠️ React, Node.js, NLP, MongoDB, AI\n🔗 GitHub: https://github.com/risshhubh/Pathwise\n\n🔹 **Other Projects** - Various web applications and tools\n🛠️ JavaScript, Python, and modern frameworks\n\nYou can check out my GitHub for more details!";
      } else if (question.includes("certifications") || question.includes("certificates")) {
        reply = "I have several certifications including:\n\n🏆 **AWS Certified Cloud Practitioner**\n🏆 **Microsoft Azure Fundamentals**\n🏆 **Google Cloud Platform Fundamentals**\n🏆 **React.js Certification**\n🏆 **Node.js Certification**\n🏆 **MongoDB Database Administrator**\n\nThese certifications validate my expertise in cloud computing, web development, and database management. I'm always learning and adding new certifications to stay current with industry trends!";
      } else if (question.includes("resume") || question.includes("cv")) {
        reply = "You can view my resume in several ways:\n\n📄 **Google Drive**: Click the resume icon on the main page\n📄 **Direct Download**: Available from the resume section\n📄 **Portfolio Sections**: Check out my About Me, Skills, and Experience sections\n\nMy resume includes:\n• Full-stack development experience\n• Project portfolio with live demos\n• Technical skills and certifications\n• Education and achievements\n\nFeel free to reach out if you'd like to discuss any specific aspects of my background!";
      } else if (question.includes("skills") || question.includes("technologies")) {
        reply = "Here are my key skills and technologies:\n\n💻 **Programming Languages**: Java, Python, C++\n\n🌐 **Web Development**: HTML, CSS, JavaScript, React.js, Node.js, Express.js, PHP, JSP, Servlets, MERN Stack\n\n🗄️ **Databases**: MySQL, MongoDB\n\n🛠️ **Tools & Platforms**: Eclipse, VS Code, Git, Apache Tomcat, AWS\n\n📊 **Algorithms**: Data Structures & Algorithms\n\n📚 **Concepts**: Operating Systems, OOPS Concepts, DBMS\n\nI'm constantly learning and expanding my skill set to stay current with industry trends!";
      } else if (question.includes("contact") || question.includes("reach")) {
        reply = "You can reach me through multiple channels:\n\n📧 **Email**: rishabhsrivastava921@gmail.com\n📱 **Phone**: +91 9219234185\n\n🌐 **Professional Networks**:\n• LinkedIn: linkedin.com/in/rishabhsrivastava921\n• GitHub: github.com/risshhubh\n\n💼 **Availability**:\n• Open to full-time opportunities\n• Available for freelance projects\n• Interested in collaborative work\n\n📍 **Location**: Noida, India\n\nI typically respond within 24 hours. Feel free to reach out for any opportunities or just to connect!";
      } else {
        reply = "I'm here to help! You can ask me about:\n\n• My projects and portfolio\n• Certifications and achievements\n• Resume and experience\n• Technical skills and technologies\n• Contact information and availability\n\nJust click on any of the questions above or ask something specific!";
      }
      
      setResponse(reply);
      setLoading(false);
    }, 1000); // 1 second delay to simulate API call
  };

  return (
    <div className={`h-full w-full flex flex-col ${darkMode ? "bg-[#111] text-white" : "bg-gradient-to-b from-blue-50 to-indigo-100 text-gray-800"} overflow-hidden`}>
      <div className="flex-1 flex flex-col items-center justify-start p-4 pb-8 overflow-y-auto">
        <h2 className={`text-xl font-semibold mb-6 ${darkMode ? "text-white" : "text-gray-800"}`}>Ask Me Anything</h2>

        {/* Floating Questions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-6">
          {questions.map((q, index) => (
            <button
              key={index}
              onClick={() => handleClick(q)}
              className={`group relative p-4 rounded-2xl text-left transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode 
                  ? "bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border border-gray-700 shadow-lg" 
                  : "bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 shadow-lg hover:shadow-2xl"
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  darkMode 
                    ? "bg-blue-600 text-white" 
                    : "bg-blue-500 text-white"
                }`}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium leading-relaxed">{q}</p>
                </div>
              </div>
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 ${
                darkMode 
                  ? "group-hover:border-blue-500/30" 
                  : "group-hover:border-blue-400/30"
              }`}></div>
            </button>
          ))}
        </div>

        {/* Response Area */}
        <div className={`w-full max-w-2xl p-6 rounded-2xl border flex-shrink-0 mb-4 transition-all duration-300 ${
          darkMode 
            ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-gray-200 shadow-xl" 
            : "bg-white border-gray-200 text-gray-700 shadow-xl"
        }`}>
          {loading ? (
            <div className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full animate-bounce ${
                darkMode ? "bg-blue-400" : "bg-blue-500"
              }`}></div>
              <div className={`w-2 h-2 rounded-full animate-bounce ${
                darkMode ? "bg-blue-400" : "bg-blue-500"
              }`} style={{ animationDelay: '0.1s' }}></div>
              <div className={`w-2 h-2 rounded-full animate-bounce ${
                darkMode ? "bg-blue-400" : "bg-blue-500"
              }`} style={{ animationDelay: '0.2s' }}></div>
              <span className={`ml-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Thinking...</span>
            </div>
          ) : (
            <div>
              {response ? (
                <p className={`text-base whitespace-pre-line leading-relaxed ${darkMode ? "text-gray-200" : "text-gray-700"}`}>{response}</p>
              ) : (
                <p className={`text-center ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Click on any question above to get started! 💬
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
