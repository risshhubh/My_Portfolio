import React, { useEffect, useState, useRef } from "react";

const ClockPage = ({ darkMode }) => {
  const [time, setTime] = useState(new Date());
  const [stopwatch, setStopwatch] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setStopwatch(prev => prev + 1), 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [running]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className={`h-full w-full p-4 pb-24 overflow-y-auto bg-gradient-to-b ${darkMode ? "from-gray-900 to-gray-800" : "from-[#f8fbff] to-[#e6ecf3]"}`}>
      <h2 className="text-xl font-bold mb-5 text-gray-800 dark:text-white flex items-center gap-2">
        <span role="img" aria-label="Clock">⏰</span> Clock
      </h2>
      <div className="flex flex-col items-center gap-8 mt-8">
        {/* Digital Clock */}
        <div className="text-5xl font-mono font-bold text-gray-900 dark:text-white">
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
        </div>
        {/* Stopwatch */}
        <div className="flex flex-col items-center">
          <div className="text-2xl font-mono font-semibold text-blue-600 dark:text-blue-400 mb-2">{formatTime(stopwatch)}</div>
          <div className="flex gap-2">
            <button
              onClick={() => setRunning(!running)}
              className="px-4 py-1 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              {running ? "Pause" : "Start"}
            </button>
            <button
              onClick={() => { setStopwatch(0); setRunning(false); }}
              className="px-4 py-1 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">Digital clock and stopwatch. Add more features!</div>
    </div>
  );
};

export default ClockPage; 