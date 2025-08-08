// components/StatusBar.jsx
import React, { useState, useEffect } from "react";
import { MdSignalCellular4Bar, MdBatteryFull, MdSignalCellularConnectedNoInternet0Bar } from "react-icons/md";


const StatusBar = ({ darkMode = false }) => {
  const [currentTime, setCurrentTime] = useState("");
  const [batteryLevel, setBatteryLevel] = useState(82);
  const [isCharging, setIsCharging] = useState(false);

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Simulate battery level changes (for demo purposes)
  useEffect(() => {
    const simulateBattery = () => {
      // Simulate battery drain and charging
      setBatteryLevel(prev => {
        if (isCharging) {
          return Math.min(100, prev + 1); // Charge 1% every 30 seconds
        } else {
          return Math.max(20, prev - 1); // Drain 1% every 30 seconds
        }
      });
    };

    const batteryInterval = setInterval(simulateBattery, 30000); // Update every 30 seconds
    return () => clearInterval(batteryInterval);
  }, [isCharging]);

  // Simulate charging state changes
  useEffect(() => {
    const chargingInterval = setInterval(() => {
      setIsCharging(prev => !prev);
    }, 120000); // Toggle charging state every 2 minutes

    return () => clearInterval(chargingInterval);
  }, []);

  // Get battery icon based on level
  const getBatteryIcon = () => {
    if (batteryLevel >= 80) return "text-green-400";
    if (batteryLevel >= 50) return "text-yellow-400";
    if (batteryLevel >= 20) return "text-orange-400";
    return "text-red-400";
  };

  // Get battery percentage color
  const getBatteryTextColor = () => {
    if (batteryLevel >= 80) return "text-green-400";
    if (batteryLevel >= 50) return "text-yellow-400";
    if (batteryLevel >= 20) return "text-orange-400";
    return "text-red-400";
  };

  return (
    <div className={`flex justify-between items-center px-3 sm:px-4 pt-2 sm:pt-3 pb-1 w-full text-xs sm:text-sm ${darkMode ? "text-white" : "text-white"}`}>
      <span className="font-medium">{currentTime}</span>
      <div className="flex items-center gap-1 sm:gap-2">
        {/* 5G+ Signal Indicator */}
        <div className="flex items-center">
          <span className={`text-xs font-bold ${darkMode ? "text-blue-300" : "text-blue-200"}`}>5G+</span>
        </div>
        
        {/* Cellular Signal */}
        <MdSignalCellular4Bar className={`text-base sm:text-lg ${darkMode ? "text-white" : "text-white"}`} />
        
        {/* Battery Percentage */}
        <span className={`text-xs sm:text-sm font-medium ${getBatteryTextColor()}`}>
          {Math.round(batteryLevel)}%
        </span>
        
        {/* Battery Icon */}
        <div className="relative">
          <MdBatteryFull className={`text-base sm:text-lg ${getBatteryIcon()}`} />
          {isCharging && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
