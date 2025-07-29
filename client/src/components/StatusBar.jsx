// components/StatusBar.jsx
import React from "react";
import { MdSignalCellular4Bar, MdBatteryFull } from "react-icons/md";

const StatusBar = ({ darkMode = false }) => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={`flex justify-between items-center px-3 sm:px-4 pt-2 sm:pt-3 pb-1 w-full text-xs sm:text-sm ${darkMode ? "text-white" : "text-white"}`}>
      <span className="font-medium">{currentTime}</span>
      <div className="flex items-center gap-1 sm:gap-2">
        <MdSignalCellular4Bar className={`text-base sm:text-lg ${darkMode ? "text-white" : "text-white"}`} />
        <span className={`text-xs sm:text-sm ${darkMode ? "text-white" : "text-white"}`}>82%</span>
        <MdBatteryFull className="text-base sm:text-lg text-green-400" />
      </div>
    </div>
  );
};

export default StatusBar;
