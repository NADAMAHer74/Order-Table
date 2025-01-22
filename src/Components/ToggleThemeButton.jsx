import React, { useContext } from "react";
import { ThemeContext } from "../App";

const useTheme = () => useContext(ThemeContext);
export default function ToggleThemeButton() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-end mb-4">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDarkTheme}
          onChange={toggleTheme}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
        <span
          className={`ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 ${
            isDarkTheme ? "dark-theme" : "light-theme"
          }`}
        >
          {isDarkTheme ? "Dark Mode" : "Light Mode "}
        </span>
      </label>
    </div>
  );
}
