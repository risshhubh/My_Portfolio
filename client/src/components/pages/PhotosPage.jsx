import React, { useState, useRef } from "react";
import { FaFolder, FaImages, FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaCompress } from "react-icons/fa";
import getImagePath from "../../utils/imagePaths";

const PhotosPage = ({ darkMode = false }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const fullScreenRef = useRef(null);

  const albums = [
    {
      id: "feasto",
      name: "Feasto",
      description: "Project Screenshots",
      icon: "🍽️",
      photos: [
        {
          src: getImagePath("/feasto/homepage-hero.png"),
          alt: "Feasto Homepage - Hero Section with 'Dine Like Royalty'"
        },
        {
          src: getImagePath("/feasto/restaurant-listing.png"),
          alt: "Feasto Restaurant Grid - Featured Restaurants"
        },
        {
          src: getImagePath("/feasto/italian-spoon-menu.png"),
          alt: "The Italian Spoon Menu - Restaurant Menu Page"
        },
        {
          src: getImagePath("/feasto/pizza-restaurants.png"),
          alt: "Top Pizza Restaurants - Category Browse with Sidebar"
        },
        {
          src: getImagePath("/feasto/italian-spoon-menu-grid.png"),
          alt: "The Italian Spoon Menu Grid - Menu Items Layout"
        },
        {
          src: getImagePath("/feasto/welcome-page.png"),
          alt: "Feasto Welcome Page - Burger and Fries Hero Image"
        },
        {
          src: getImagePath("/feasto/login-modal.png"),
          alt: "Feasto Login Modal - Authentication Overlay"
        },
        {
          src: getImagePath("/feasto/signup-modal.png"),
          alt: "Feasto Sign Up Modal - Registration Form"
        }
      ]
    }
  ];

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const handleBackClick = () => {
    setSelectedAlbum(null);
  };

  const handlePhotoClick = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
    setIsFullScreen(false);
  };

  const handlePreviousPhoto = () => {
    if (selectedAlbum && currentPhotoIndex > 0) {
      const newIndex = currentPhotoIndex - 1;
      setCurrentPhotoIndex(newIndex);
      setSelectedPhoto(selectedAlbum.photos[newIndex]);
    }
  };

  const handleNextPhoto = () => {
    if (selectedAlbum && currentPhotoIndex < selectedAlbum.photos.length - 1) {
      const newIndex = currentPhotoIndex + 1;
      setCurrentPhotoIndex(newIndex);
      setSelectedPhoto(selectedAlbum.photos[newIndex]);
    }
  };

  const toggleFullScreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await fullScreenRef.current.requestFullscreen();
        setIsFullScreen(true);
      } catch (err) {
        console.log('Error attempting to enable full screen:', err);
      }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullScreen(false);
      } catch (err) {
        console.log('Error attempting to exit full screen:', err);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (selectedPhoto) {
      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowLeft') {
        handlePreviousPhoto();
      } else if (e.key === 'ArrowRight') {
        handleNextPhoto();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullScreen();
      }
    }
  };

  // Add keyboard event listener
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhoto, currentPhotoIndex, selectedAlbum]);

  // Listen for fullscreen change
  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  if (selectedAlbum) {
    return (
      <div className={`h-full w-full p-4 pb-24 overflow-y-auto bg-gradient-to-b ${darkMode ? "from-gray-900 to-gray-800" : "from-[#f8fbff] to-[#e6ecf3]"}`}>
        {/* Album Header */}
        <div className="flex items-center gap-3 mb-5">
          <button
            onClick={handleBackClick}
            className={`p-2 rounded-full ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white hover:bg-gray-100"} transition-colors`}
          >
            <FaArrowLeft className={`text-lg ${darkMode ? "text-white" : "text-gray-700"}`} />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{selectedAlbum.icon}</span>
            <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
              {selectedAlbum.name}
            </h2>
          </div>
        </div>

        {/* Album Description */}
        <p className={`text-sm mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          {selectedAlbum.description}
        </p>

        {/* Photos Grid */}
        {selectedAlbum.photos.length === 0 ? (
          <div className={`text-center py-12 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            <FaImages className="text-4xl mx-auto mb-3 opacity-50" />
            <p className="text-lg font-medium mb-2">No screenshots yet</p>
            <p className="text-sm">Add your Feasto project screenshots to showcase your work!</p>
            <div className={`mt-4 p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
              <p className="text-xs">
                <strong>To add screenshots:</strong><br />
                1. Place your images in the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">public/feasto/</code> folder<br />
                2. Update the photos array in this component<br />
                3. Your screenshots will appear here automatically
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {selectedAlbum.photos.map((photo, idx) => (
              <div 
                key={idx} 
                className="rounded-xl overflow-hidden shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handlePhotoClick(photo, idx)}
              >
                <img src={photo.src} alt={photo.alt} className="w-full h-32 object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* Full Screen Modal */}
        {selectedPhoto && (
          <>
            {/* Mobile Screen Fade Away Effect */}
            <div 
              className={`fixed inset-0 z-40 transition-all duration-700 ease-in-out pointer-events-none ${
                isFullScreen 
                  ? "bg-black bg-opacity-60 backdrop-blur-sm" 
                  : "bg-transparent"
              }`}
              style={{
                background: isFullScreen 
                  ? 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 100%)'
                  : 'transparent'
              }}
            />
            
            {/* Main Modal */}
            <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-700 ease-in-out ${
              isFullScreen 
                ? "bg-black bg-opacity-98 backdrop-blur-md" 
                : "bg-black bg-opacity-90"
            }`}>
              <div 
                ref={fullScreenRef} 
                className={`relative max-w-full max-h-full transition-all duration-700 ease-in-out transform ${
                  isFullScreen 
                    ? "scale-100 opacity-100" 
                    : "scale-95 opacity-90"
                }`}
              >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all duration-300 ease-in-out transform ${
                  isFullScreen ? "scale-100 opacity-100" : "scale-90 opacity-80"
                }`}
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Full Screen Toggle Button */}
              <button
                onClick={toggleFullScreen}
                className={`absolute top-4 right-16 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all duration-300 ease-in-out transform ${
                  isFullScreen ? "scale-100 opacity-100" : "scale-90 opacity-80"
                }`}
                title={isFullScreen ? "Exit Full Screen (F)" : "Enter Full Screen (F)"}
              >
                {isFullScreen ? <FaCompress className="text-xl" /> : <FaExpand className="text-xl" />}
              </button>

              {/* Navigation Buttons */}
              {currentPhotoIndex > 0 && (
                <button
                  onClick={handlePreviousPhoto}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all duration-300 ease-in-out transform ${
                    isFullScreen ? "scale-100 opacity-100" : "scale-90 opacity-80"
                  }`}
                >
                  <FaChevronLeft className="text-xl" />
                </button>
              )}

              {currentPhotoIndex < selectedAlbum.photos.length - 1 && (
                <button
                  onClick={handleNextPhoto}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all duration-300 ease-in-out transform ${
                    isFullScreen ? "scale-100 opacity-100" : "scale-90 opacity-80"
                  }`}
                >
                  <FaChevronRight className="text-xl" />
                </button>
              )}

              {/* Photo */}
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.alt} 
                className={`max-w-full max-h-full object-contain rounded-lg transition-all duration-700 ease-in-out transform ${
                  isFullScreen 
                    ? "scale-100 opacity-100" 
                    : "scale-95 opacity-90"
                }`}
              />

              {/* Photo Counter */}
              <div className={`absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-3 rounded-lg transition-all duration-300 ease-in-out transform ${
                isFullScreen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-80 translate-y-2"
              }`}>
                <p className="text-xs opacity-75">
                  {currentPhotoIndex + 1} of {selectedAlbum.photos.length}
                </p>
                <p className="text-xs opacity-75 mt-1">
                  Press F for full screen • Use arrow keys to navigate
                                 </p>
               </div>
             </div>
           </div>
         </>
         )}
      </div>
    );
  }

  return (
    <div className={`h-full w-full p-4 pb-24 overflow-y-auto bg-gradient-to-b ${darkMode ? "from-gray-900 to-gray-800" : "from-[#f8fbff] to-[#e6ecf3]"}`}>
      <h2 className="text-xl font-bold mb-5 text-gray-800 dark:text-white flex items-center gap-2">
        <span role="img" aria-label="Photos">🖼️</span> Photos
      </h2>
      
      {/* Albums Grid */}
      <div className="grid grid-cols-2 gap-4">
        {albums.map((album) => (
          <div
            key={album.id}
            onClick={() => handleAlbumClick(album)}
            className={`rounded-xl overflow-hidden shadow border cursor-pointer transition-all hover:scale-105 ${
              darkMode 
                ? "border-gray-700 bg-gray-800 hover:bg-gray-700" 
                : "border-gray-200 bg-white hover:bg-gray-50"
            }`}
          >
            <div className="p-4 text-center">
              <div className="text-3xl mb-2">{album.icon}</div>
              <h3 className={`font-semibold mb-1 ${darkMode ? "text-white" : "text-gray-800"}`}>
                {album.name}
              </h3>
              <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {album.description}
              </p>
              <div className={`mt-2 text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                {album.photos.length} {album.photos.length === 1 ? 'screenshot' : 'screenshots'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>Click on an album to view project screenshots</p>
      </div>
    </div>
  );
};

export default PhotosPage; 