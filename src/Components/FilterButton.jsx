import React, { useContext } from "react";
import { FaFilter } from "react-icons/fa";
import { ThemeContext } from "../App";

const useTheme = () => useContext(ThemeContext);
export default function FilterButton({
  isDropdownOpen,
  setIsDropdownOpen,
  handleFilter,
}) {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <div className="relative">
        <button
          className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none"
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <FaFilter className="mr-2" />
          Filter
        </button>

        {isDropdownOpen && (
          <div
            className={`absolute mt-2 bg-white shadow-md rounded-md border border-gray-300 w-40 z-10 ${
              isDarkTheme ? "dark-theme" : "light-theme"
            }`}
          >
            <ul className="flex flex-col">
              <li
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleFilter("All")}
              >
                All Orders
              </li>
              <li
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleFilter("New")}
              >
                New Orders
              </li>
              <li
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleFilter("Delivering")}
              >
                Delivering
              </li>
              <li
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleFilter("Delivered")}
              >
                Delivered
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
