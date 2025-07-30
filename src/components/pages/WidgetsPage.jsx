import React, { useState, useEffect } from "react";
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";
import { FaWalking, FaBatteryHalf, FaBell, FaCalendarAlt, FaNewspaper, FaMusic, FaSun, FaMoon } from "react-icons/fa";
import StatusBar from "../StatusBar";

const WidgetsPage = ({ darkMode = false, setDarkMode }) => {
  const [currentTime, setCurrentTime] = useState("");
  const [weather, setWeather] = useState({ temp: 29, condition: "Sunny", icon: "sunny" });

  const [batteryLevel, setBatteryLevel] = useState(82);
  const [isCharging, setIsCharging] = useState(false);
  const [alarmTime, setAlarmTime] = useState("07:00 AM");
  const [events, setEvents] = useState("Meeting at 2PM");
  const [news, setNews] = useState("Market up by 120pts");
  const [music, setMusic] = useState("Daylight - David Kushner");

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

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Simulate weather changes
  useEffect(() => {
    const weatherConditions = [
      { temp: 29, condition: "Sunny", icon: "sunny" },
      { temp: 25, condition: "Cloudy", icon: "cloudy" },
      { temp: 22, condition: "Rainy", icon: "rain" },
      { temp: 18, condition: "Cool", icon: "cloudy" },
      { temp: 32, condition: "Hot", icon: "sunny" }
    ];

    const updateWeather = () => {
      const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
      setWeather(randomWeather);
    };

    const weatherInterval = setInterval(updateWeather, 10000); // Change every 10 seconds
    return () => clearInterval(weatherInterval);
  }, []);



  // Sync battery with StatusBar - use the same logic
  useEffect(() => {
    const updateBattery = () => {
      setBatteryLevel(prev => {
        if (isCharging) {
          return Math.min(100, prev + 1); // Charge 1% every 30 seconds
        } else {
          return Math.max(20, prev - 1); // Drain 1% every 30 seconds
        }
      });
    };

    const batteryInterval = setInterval(updateBattery, 30000); // Update every 30 seconds
    return () => clearInterval(batteryInterval);
  }, [isCharging]);

  // Simulate charging state changes (same as StatusBar)
  useEffect(() => {
    const chargingInterval = setInterval(() => {
      setIsCharging(prev => !prev);
    }, 120000); // Toggle charging state every 2 minutes

    return () => clearInterval(chargingInterval);
  }, []);

  // Simulate alarm time changes
  useEffect(() => {
    const alarmTimes = ["07:00 AM", "08:30 AM", "06:45 AM", "09:15 AM"];
    const updateAlarm = () => {
      const randomAlarm = alarmTimes[Math.floor(Math.random() * alarmTimes.length)];
      setAlarmTime(randomAlarm);
    };

    const alarmInterval = setInterval(updateAlarm, 15000); // Change every 15 seconds
    return () => clearInterval(alarmInterval);
  }, []);

  // Simulate event changes
  useEffect(() => {
    const eventList = [
      "Meeting at 2PM",
      "Call with client",
      "Team standup",
      "Project review",
      "Lunch break",
      "Code review"
    ];
    
    const updateEvents = () => {
      const randomEvent = eventList[Math.floor(Math.random() * eventList.length)];
      setEvents(randomEvent);
    };

    const eventInterval = setInterval(updateEvents, 12000); // Change every 12 seconds
    return () => clearInterval(eventInterval);
  }, []);

  // Simulate news updates
  useEffect(() => {
    const newsUpdates = [
      "Market up by 120pts",
      "Tech stocks rally",
      "New AI breakthrough",
      "Crypto gains 5%",
      "Startup funding news",
      "Global markets stable"
    ];
    
    const updateNews = () => {
      const randomNews = newsUpdates[Math.floor(Math.random() * newsUpdates.length)];
      setNews(randomNews);
    };

    const newsInterval = setInterval(updateNews, 18000); // Change every 18 seconds
    return () => clearInterval(newsInterval);
  }, []);

  // Simulate music changes
  useEffect(() => {
    const musicTracks = [
      "Daylight - David Kushner",
      "Blinding Lights - Weeknd",
      "Shape of You - Ed Sheeran",
      "Bad Guy - Billie Eilish",
      "Dance Monkey - Tones",
      "Levitating - Dua Lipa"
    ];
    
    const updateMusic = () => {
      const randomTrack = musicTracks[Math.floor(Math.random() * musicTracks.length)];
      setMusic(randomTrack);
    };

    const musicInterval = setInterval(updateMusic, 20000); // Change every 20 seconds
    return () => clearInterval(musicInterval);
  }, []);

  // Get weather icon based on condition
  const getWeatherIcon = () => {
    switch (weather.icon) {
      case "sunny":
        return <WiDaySunny size={24} />;
      case "cloudy":
        return <WiCloudy size={24} />;
      case "rain":
        return <WiRain size={24} />;
      case "snow":
        return <WiSnow size={24} />;
      case "thunder":
        return <WiThunderstorm size={24} />;
      default:
        return <WiDaySunny size={24} />;
    }
  };

  const widgets = [
    { 
      title: "Weather", 
      value: `${weather.temp}°C, ${weather.condition}`, 
      icon: getWeatherIcon() 
    },
    { 
      title: "Theme", 
      value: darkMode ? "Dark Mode" : "Light Mode", 
      icon: darkMode ? <FaMoon size={20} className="text-blue-400" /> : <FaSun size={20} className="text-yellow-500" />,
      onClick: () => setDarkMode(!darkMode),
      isToggle: true
    },
    { 
      title: "Battery", 
      value: `${Math.round(batteryLevel)}%`, 
      icon: <FaBatteryHalf size={20} /> 
    },
    { 
      title: "Alarm", 
      value: alarmTime, 
      icon: <FaBell size={18} /> 
    },
    { 
      title: "Events", 
      value: events, 
      icon: <FaCalendarAlt size={18} /> 
    },
    { 
      title: "News", 
      value: news, 
      icon: <FaNewspaper size={18} /> 
    },
    { 
      title: "Now Playing", 
      value: music, 
      icon: <FaMusic size={18} /> 
    },
  ];

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
              onClick={widget.onClick}
                             className={`rounded-xl p-4 shadow-md transition-all duration-300 
               ${index % 3 === 0 ? 'col-span-2 h-28' : 'h-24'} 
               ${darkMode ? "bg-[#2e2e2e] text-gray-100" : "bg-gray-100 text-gray-800"} 
               flex flex-col justify-between cursor-pointer hover:scale-105`}
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
