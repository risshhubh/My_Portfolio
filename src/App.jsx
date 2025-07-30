import React, { useEffect, useState } from "react";
import MobileFrame from "./components/MobileFrame";

const App = () => {
  // Dark mode state (default: system preference)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  // Simple assembly state
  const [isAssembled, setIsAssembled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Simple assembly animation
  useEffect(() => {
    const timer = setTimeout(() => setIsAssembled(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return <MobileFrame darkMode={darkMode} setDarkMode={setDarkMode} isAssembled={isAssembled} />;
};

export default App;
