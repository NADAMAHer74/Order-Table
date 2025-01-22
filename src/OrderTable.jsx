import React, { useState, useContext } from "react";
import SearchBar from "./Components/SearchBar";
import FilterButton from "./Components/FilterButton";
import SortByDateButton from "./Components/SortByDateButton";
import { ThemeContext } from "./App";

const ordersHeader = [
  "Order ID",
  "Customer Name",
  "Order Status",
  "Order Items",
  "Created At",
];

const orders = [
  {
    id: 1,
    customerName: "Alice",
    status: "New",
    items: ["item A", "item B"],
    createdAt: "2025-01-20",
  },

  {
    id: 2,
    customerName: "Bola",
    status: "Delivered",
    items: ["item E"],
    createdAt: "2025-01-08",
  },
  {
    id: 3,
    customerName: "Justin",
    status: "New",
    items: ["item F", "item G"],
    createdAt: "2025-01-21",
  },
  {
    id: 4,
    customerName: "Lola",
    status: "Delivered",
    items: ["item H"],
    createdAt: "2025-01-10",
  },
];

const useTheme = () => useContext(ThemeContext);
export default function OrderTable() {
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchOrders, setSearchOrders] = useState(orders);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"

  const { isDarkTheme } = useTheme();

  // Handle search functionality
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchText(searchValue);

    const filtered = orders.filter(
      (order) =>
        (filterStatus === "All" || order.status === filterStatus) &&
        (order.customerName.toLowerCase().includes(searchValue) ||
          String(order.id).includes(searchValue))
    );
    setSearchOrders(filtered);
  };

  // Handle filter functionality
  const handleFilter = (status) => {
    setFilterStatus(status);
    setIsDropdownOpen(false);

    const filtered = orders.filter(
      (order) => status === "All" || order.status === status
    );
    setSearchOrders(filtered);
  };

  const sortByDate = () => {
    const sortedOrders = [...orders].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setSearchOrders(sortedOrders);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <>
      <div className="w-full ">
        <div className="flex flex-nowrap items-center gap-4 mb-4">
          {/* Search Bar */}
          <SearchBar searchText={searchText} handleSearch={handleSearch} />

          {/* Filter Button with Dropdown */}
          <FilterButton
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            handleFilter={handleFilter}
          />

          {/* Sort Button */}
          <SortByDateButton sortOrder={sortOrder} sortByDate={sortByDate} />
        </div>
        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="table-auto  overflow-x-scroll md:overflow-x-hidden  border-separate border-spacing-0 border border-gray-300 w-full">
            <thead>
              <tr>
                {ordersHeader.map((header, index) => (
                  <th
                    key={index}
                    className="border border-gray-300 px-2 py-1 text-xs sm:text-sm md:text-base whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {searchOrders.length > 0 ? (
                searchOrders.map((order) => (
                  <tr
                    key={order.id}
                    className={`odd:bg-gray-200 even:bg-white custom-cell ${
                      isDarkTheme ? "dark-theme" : "light-theme"
                    }`}
                  >
                    <td
                      className={`border border-gray-300 px-2 py-1 text-xs sm:text-sm md:text-base 
                  whitespace-nowrap ${
                    isDarkTheme ? "bg-gray-700" : "border-gray-300"
                  }`}
                    >
                      {order.id}
                    </td>
                    <td
                      className={`border border-gray-300 px-2 py-1 text-xs sm:text-sm md:text-base 
                  overflow-hidden text-ellipsis whitespace-nowrap ${
                    isDarkTheme ? "bg-gray-700" : "border-gray-300"
                  }`}
                    >
                      {order.customerName}
                    </td>
                    <td
                      className={`border border-gray-300 px-2 py-1 text-xs sm:text-sm md:text-base 
                   whitespace-nowrap ${
                     isDarkTheme ? "bg-gray-700" : "border-gray-300"
                   }`}
                    >
                      {order.status}
                    </td>
                    <td
                      className={`border border-gray-300 px-2 py-1 text-xs sm:text-sm md:text-base 
                  whitespace-nowrap ${
                    isDarkTheme ? "bg-gray-700" : "border-gray-300"
                  }`}
                    >
                      {order.items.join(", ")}
                    </td>
                    <td
                      className={`border border-gray-300 px-2 py-1 text-xs sm:text-sm md:text-base 
                 whitespace-nowrap ${
                   isDarkTheme ? "bg-gray-700" : "border-gray-300"
                 }`}
                    >
                      {order.createdAt}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={ordersHeader.length}
                    className="text-center py-4 text-gray-500"
                  >
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
