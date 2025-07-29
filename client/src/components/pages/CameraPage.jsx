import React, { useState, useRef } from "react";
import {
  FaCamera,
  FaDownload,
  FaPlus,
  FaTimes,
  FaImages,
  FaCog,
  FaBolt,
  FaSyncAlt,
} from "react-icons/fa";

const CameraPage = ({ darkMode = false }) => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [cameraMode, setCameraMode] = useState("photo");
  const canvasRef = useRef(null);

  const takeScreenshot = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, "-");
      const placeholderImage = `data:image/svg+xml;base64,${btoa(`
        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#f0f0f0"/>
          <text x="50%" y="40%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="18" fill="#333" font-weight="bold">
            📸 Screenshot Captured
          </text>
          <text x="50%" y="55%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="14" fill="#666">
            ${timestamp}
          </text>
          <text x="50%" y="70%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="12" fill="#999">
            Click download to save
          </text>
        </svg>
      `)}`;
      setCapturedImage(placeholderImage);
    }
  };

  const downloadScreenshot = () => {
    if (capturedImage) {
      const link = document.createElement("a");
      link.download = `screenshot-${Date.now()}.png`;
      link.href = capturedImage;
      link.click();
    }
  };

  const saveToPhotos = () => {
    if (capturedImage) {
      alert("Screenshot saved to Photos!");
      setCapturedImage(null);
    }
  };

  const retakePhoto = () => {
    setCapturedImage(null);
  };

  const toggleFlash = () => {
    setFlashOn(!flashOn);
  };

  const toggleCameraMode = () => {
    setCameraMode(cameraMode === "photo" ? "video" : "photo");
  };

  return (
    <div
      className={`h-full w-full bg-gradient-to-b ${
        darkMode ? "from-gray-900 to-gray-800" : "from-[#f8fbff] to-[#e6ecf3]"
      }`}
    >
      {/* Camera Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className={`p-2 rounded-full ${
            darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-100"
          } transition-colors`}
        >
          <FaCog className={`text-lg ${darkMode ? "text-white" : "text-gray-700"}`} />
        </button>
        <h2 className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
          Camera
        </h2>
        <button
          onClick={toggleFlash}
          className={`p-2 rounded-full ${
            flashOn
              ? "bg-yellow-500"
              : darkMode
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-white hover:bg-gray-100"
          } transition-colors`}
        >
          <FaBolt
            className={`text-lg ${
              flashOn ? "text-white" : darkMode ? "text-white" : "text-gray-700"
            }`}
          />
        </button>
      </div>

      {/* Camera View */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
        {!capturedImage ? (
          <div className="text-center w-full">
            <div
              className={`w-full max-w-sm mx-auto aspect-[4/3] rounded-lg border-2 border-dashed ${
                darkMode ? "border-gray-600" : "border-gray-300"
              } flex items-center justify-center mb-6 relative overflow-hidden`}
            >
              <FaCamera className={`text-6xl ${darkMode ? "text-gray-400" : "text-gray-500"}`} />

              {flashOn && (
                <div className="absolute inset-0 bg-yellow-200 opacity-50 animate-pulse"></div>
              )}

              <div className="absolute top-2 right-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    cameraMode === "photo" ? "bg-blue-500 text-white" : "bg-red-500 text-white"
                  }`}
                >
                  {cameraMode === "photo" ? "PHOTO" : "VIDEO"}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 mb-6">
              <button
                onClick={toggleCameraMode}
                className={`p-3 rounded-full ${
                  darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-100"
                } transition-colors`}
                title="Switch to Video Mode"
              >
                <FaSyncAlt className={`text-xl ${darkMode ? "text-white" : "text-gray-700"}`} />
              </button>

              <button
                onClick={takeScreenshot}
                className={`w-16 h-16 rounded-full ${
                  darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
                } text-white transition-colors flex items-center justify-center`}
              >
                <FaCamera className="text-2xl" />
              </button>

              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-3 rounded-full ${
                  darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-100"
                } transition-colors`}
                title="Settings"
              >
                <FaImages className={`text-xl ${darkMode ? "text-white" : "text-gray-700"}`} />
              </button>
            </div>

            <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Tap the camera button to take a screenshot
            </p>
          </div>
        ) : (
          <div className="text-center w-full">
            <div className="w-full max-w-sm mx-auto aspect-[4/3] rounded-lg overflow-hidden mb-6 border border-gray-200 dark:border-gray-700">
              <img
                src={capturedImage}
                alt="Captured screenshot"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-3 justify-center mb-4">
              <button
                onClick={retakePhoto}
                className={`px-4 py-2 rounded-full ${
                  darkMode ? "bg-gray-600 hover:bg-gray-700" : "bg-gray-500 hover:bg-gray-600"
                } text-white font-medium transition-colors flex items-center gap-2`}
              >
                <FaTimes className="text-sm" />
                Retake
              </button>

              <button
                onClick={saveToPhotos}
                className={`px-4 py-2 rounded-full ${
                  darkMode ? "bg-green-600 hover:bg-green-700" : "bg-green-500 hover:bg-green-600"
                } text-white font-medium transition-colors flex items-center gap-2`}
              >
                <FaPlus className="text-sm" />
                Save to Photos
              </button>

              <button
                onClick={downloadScreenshot}
                className={`px-4 py-2 rounded-full ${
                  darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
                } text-white font-medium transition-colors flex items-center gap-2`}
              >
                <FaDownload className="text-sm" />
                Download
              </button>
            </div>

            <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              Your screenshot is ready! Choose an action above.
            </p>
          </div>
        )}

        {/* Settings Panel */}
        {showSettings && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center z-10">
            <div
              className={`w-80 p-6 rounded-xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-xl`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                  Camera Settings
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className={`p-2 rounded-full ${
                    darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                  } transition-colors`}
                >
                  <FaTimes className={`text-sm ${darkMode ? "text-white" : "text-gray-700"}`} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    Flash
                  </span>
                  <button
                    onClick={toggleFlash}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      flashOn
                        ? "bg-yellow-500 text-white"
                        : darkMode
                        ? "bg-gray-600 text-gray-300"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {flashOn ? "ON" : "OFF"}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    Mode
                  </span>
                  <button
                    onClick={toggleCameraMode}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cameraMode === "photo"
                        ? "bg-blue-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {cameraMode.toUpperCase()}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
    </div>
  );
};

export default CameraPage;
