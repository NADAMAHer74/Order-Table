import React, { useContext } from "react";
import { ThemeContext } from "../App";

const useTheme = () => useContext(ThemeContext);
export default function SearchBar({ searchText, handleSearch }) {
  const { isDarkTheme } = useTheme();
  return (
    <>
      <input
        type="text"
        placeholder="Search by Customer Name or ID"
        value={searchText}
        onChange={handleSearch}
        className={`border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none w-10/12 ${
          isDarkTheme ? "dark-theme" : "light-theme"
        }`}
      />
    </>
  );
}
