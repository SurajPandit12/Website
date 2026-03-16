"use client"

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // saving light/dark into local storage
  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem("isDarkMode"));
    if (savedMode !== null) {
      // sets dark mode
      setIsDarkMode(savedMode);
      // update color scheme
      updateColorScheme(savedMode);
    } else {
      setIsDarkMode(true);
      updateColorScheme(true);
    }
  }, []);

  // applies light/dark mode
  const updateColorScheme = (isDark) => {
    const scheme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", scheme);
  };

  // toggles between light/dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", JSON.stringify(newMode));
    updateColorScheme(newMode);
  };

  // sun/moon gets toggled
  return (
    <button onClick={toggleDarkMode}>{isDarkMode ? <Moon /> : <Sun />}</button>
  );
};

export default DarkModeToggle;
