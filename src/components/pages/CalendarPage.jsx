import React from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date();
const currentMonth = today.toLocaleString("default", { month: "long" });
const currentYear = today.getFullYear();
const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

const CalendarPage = ({ darkMode }) => {
  return (
    <div className={`h-full w-full p-4 pb-24 overflow-y-auto bg-gradient-to-b ${darkMode ? "from-gray-900 to-gray-800" : "from-[#f8fbff] to-[#e6ecf3]"}`}>
      <h2 className="text-xl font-bold mb-5 text-gray-800 dark:text-white flex items-center gap-2">
        <span role="img" aria-label="Calendar">📅</span> Calendar
      </h2>
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-4 w-full max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">{currentMonth} {currentYear}</span>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {days.map(day => (
            <div key={day} className="font-bold text-gray-700 dark:text-gray-200 text-xs py-1">{day}</div>
          ))}
          {Array.from({ length: firstDay }).map((_, idx) => (
            <div key={"empty-" + idx}></div>
          ))}
          {Array.from({ length: daysInMonth }).map((_, idx) => {
            const isToday = idx + 1 === today.getDate();
            return (
              <div
                key={idx}
                className={`py-2 rounded-full text-sm ${isToday ? "bg-blue-600 text-white font-bold" : "text-gray-800 dark:text-gray-100"}`}
              >
                {idx + 1}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">Simple calendar. Add your own events!</div>
    </div>
  );
};

export default CalendarPage; 