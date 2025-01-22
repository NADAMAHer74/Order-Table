import "./App.css";
import OrderTable from "./OrderTable";
import React, { createContext, useState } from "react";
import ToggleThemeButton from "./Components/ToggleThemeButton";

export const ThemeContext = createContext();

// Custom hook to use the ThemeContext
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <div
        className={`min-h-screen  ${
          isDarkTheme ? "dark-theme" : "light-theme"
        }`}
      >
        <div className="max-w-[1000px] min-w-[100px] w-full mx-auto p-4">
          <ToggleThemeButton />

          <OrderTable />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
