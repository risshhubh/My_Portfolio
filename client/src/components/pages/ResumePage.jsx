import React from "react";
import getImagePath from "../../utils/imagePaths";

const ResumePage = () => {
  return (
    <div className="h-full w-full flex flex-col bg-white overflow-hidden pt-2 pb-3">
      {/* Header */}
      <div className="py-4 text-lg font-semibold text-center text-gray-800 bg-gray-100 border-b mx-2 rounded-md">
        My Resume
      </div>

      {/* Resume Preview */}
      <div className="my-2 mx-2 rounded-md overflow-hidden shadow border h-[80vh]">
        <iframe
          src={getImagePath("/RESUME.pdf")}
          title="Resume"
          className="w-full h-full"
          style={{ border: "none" }}
        />
      </div>

      {/* Download/View Buttons */}
      <div className="px-4 pt-2 pb-3 bg-gray-100 text-center rounded-md mx-2 border-t shadow-sm space-y-2">
        <a
          href={getImagePath("/RESUME.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
        >
          View Resume
        </a>
        <br />
        <a
          href={getImagePath("/RESUME.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumePage;
