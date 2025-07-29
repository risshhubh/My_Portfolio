import React from "react";
import HomeSlides from "./HomeSlides";

const MobileFrame = ({ darkMode, setDarkMode, isAssembled = false }) => {
  return (
    <div
      className={`relative max-w-[386px] min-w-[280px] rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] transition-all duration-1000 ease-out ${
        isAssembled ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
      style={{
        background: "radial-gradient(circle at center, #f5f5f5, #c0c0c0)",
      }}
    >
      <div
        className="relative w-full max-w-[386px] min-w-[280px] rounded-[40px] sm:rounded-[50px] lg:rounded-[60px]"
        style={{
          background: "linear-gradient(145deg, #3a3a3a, #1e1e1e)",
          border: "8px solid black",
          maxHeight: "95vh",
          minHeight: "600px",
          aspectRatio: "9/19",
        }}
      >
        {/* Top Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-4 sm:w-20 sm:h-5 lg:w-24 lg:h-6 bg-black rounded-b-2xl z-20" />

        {/* Left Side Buttons */}
        <div
          className="absolute -left-1 sm:-left-1.5 lg:-left-2 top-[13%] h-8 w-[4px] sm:h-10 sm:w-[6px] lg:h-12 lg:w-[8px] z-30 rounded-l-full"
          style={{ background: "gray" }}
        />
        <div
          className="absolute -left-1 sm:-left-1.5 lg:-left-2 top-[22%] h-8 w-[4px] sm:h-10 sm:w-[6px] lg:h-12 lg:w-[8px] z-30 rounded-l-full"
          style={{ background: "gray" }}
        />

        {/* Right Side Button */}
        <div
          className="absolute -right-1.5 sm:-right-2 lg:-right-2.5 top-[17%] h-10 w-[6px] sm:h-12 sm:w-[8px] lg:h-14 lg:w-[10px] z-30 rounded-r-full"
          style={{ background: "gray" }}
        />

        {/* Inner Screen */}
        <div className="rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] overflow-hidden w-full h-full">
          <HomeSlides darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;
