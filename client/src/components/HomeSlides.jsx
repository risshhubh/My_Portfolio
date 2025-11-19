import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import DateTimePage from "./pages/DateTimePage";
import AppIcons from "./pages/AppIcons";
import WidgetsPage from "./pages/WidgetsPage";
import SlideTip from "./SlideTip";

const screens = [
  { id: "datetime", Component: DateTimePage },
  { id: "appicons", Component: AppIcons },
  { id: "widgets", Component: WidgetsPage },
];

const HomeSlides = ({ darkMode, setDarkMode }) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isSubpageOpen, setIsSubpageOpen] = useState(false);

  // Swipe Handlers (mouse, touch, trackpad) - disabled when subpage is open
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (!isSubpageOpen) {
        setCurrentScreen((prev) => (prev + 1) % screens.length);
      }
    },
    onSwipedRight: () => {
      if (!isSubpageOpen) {
        setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
      }
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
  });

  // Keyboard Arrow Navigation - disabled when subpage is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isSubpageOpen) {
        if (e.key === "ArrowRight") {
          setCurrentScreen((prev) => (prev + 1) % screens.length);
        } else if (e.key === "ArrowLeft") {
          setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSubpageOpen]);

  return (
    <div
      {...swipeHandlers}
      className="relative w-full h-full overflow-hidden"
      aria-label="Main mobile screens"
      tabIndex={0}
    >
      {/* Sliding Screens */}
      <div
        className="flex transition-transform duration-500 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${currentScreen * 100}%)` }}
      >
        {screens.map(({ Component, id }) => (
          <div key={id} className="w-full flex-shrink-0 h-full">
            <Component 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
              onSubpageChange={id === "appicons" || id === "datetime" ? setIsSubpageOpen : undefined}
            />
          </div>
        ))}
      </div>
      {/* Global slide tip: right arrow on first screen, left arrow on others. Hidden when any subpage is open */}
      {!isSubpageOpen && (
        currentScreen === 1 ? (
          // AppIcons screen: show both left and right arrows
          <>
            <SlideTip
              direction="left"
              position="left"
              popoverText="Go back"
              onClick={() => setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length)}
            />
            <SlideTip
              direction="right"
              position="right"
              popoverText="Go forward"
              onClick={() => setCurrentScreen((prev) => (prev + 1) % screens.length)}
            />
          </>
        ) : (
          // Default: single tip. On first screen show a longer popover so user notices it
          <SlideTip
            direction={currentScreen === 0 ? "right" : "left"}
            position={currentScreen === 0 ? "right" : "right"}
            popoverText={currentScreen === 0 ? "Slide to view more" : "Slide to go back"}
            showDelay={1200}
            hideDelay={currentScreen === 0 ? 9000 : 6000}
            onClick={() => {
              if (currentScreen === 0) {
                setCurrentScreen((prev) => (prev + 1) % screens.length);
              } else {
                setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
              }
            }}
          />
        )
      )}
      {/* Navigation Dots */}
      <div className="absolute bottom-7 w-full flex justify-center gap-3" aria-label="Screen navigation dots">
        {screens.map((screen, index) => (
          <button
            key={screen.id}
            onClick={() => setCurrentScreen(index)}
            aria-label={`Go to screen ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentScreen ? (darkMode ? "bg-white w-4" : "bg-black w-4") : (darkMode ? "bg-gray-600" : "bg-gray-400")
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlides;
