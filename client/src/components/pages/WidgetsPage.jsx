import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { FaWalking, FaBatteryHalf, FaBell, FaCalendarAlt, FaNewspaper, FaMusic } from "react-icons/fa";
import StatusBar from "../StatusBar";

const widgets = [
  { title: "Weather", value: "29°C, Sunny", icon: <WiDaySunny size={24} /> },
  { title: "Steps", value: "7,560 steps", icon: <FaWalking size={20} /> },
  { title: "Battery", value: "82%", icon: <FaBatteryHalf size={20} /> },
  { title: "Alarm", value: "07:00 AM", icon: <FaBell size={18} /> },
  { title: "Events", value: "Meeting at 2PM", icon: <FaCalendarAlt size={18} /> },
  { title: "News", value: "Market up by 120pts", icon: <FaNewspaper size={18} /> },
  { title: "Now Playing", value: "Daylight - David Kushner", icon: <FaMusic size={18} /> },
];

const WidgetsPage = ({ darkMode = false }) => {
  return (
    <>
      <div className={`${darkMode ? "bg-[#23272f]" : "bg-[#23272f]"} pt-2`}>
        <StatusBar darkMode={darkMode} />
      </div>
      <div className={`flex flex-col items-center justify-start h-full ${darkMode ? "bg-[#1a1a1a]" : "bg-white"} px-6 pt-4 pb-10 overflow-y-auto`}>
        <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? "text-white" : "text-gray-800"}`}>Widgets</h2>
        <div className="grid grid-cols-2 gap-4 w-full">
          {widgets.map((widget, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 shadow-md transition-all duration-300 
              ${index % 3 === 0 ? 'col-span-2 h-28' : 'h-24'} 
              ${darkMode ? "bg-[#2e2e2e] text-gray-100" : "bg-gray-100 text-gray-800"} 
              flex flex-col justify-between`}
            >
              <div className="flex items-center gap-2 text-sm font-medium">
                {widget.icon}
                <span>{widget.title}</span>
              </div>
              <div className="text-base font-semibold">{widget.value}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WidgetsPage;
