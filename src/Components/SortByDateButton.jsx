import React from "react";

export default function SortByDateButton({ sortOrder, sortByDate }) {
  return (
    <>
      <button
        className="btn border border-indigo-950 rounded-lg text-sm  "
        onClick={sortByDate}
      >
        Sort by Date ({sortOrder === "asc" ? "Newest" : "Oldest"})
      </button>
    </>
  );
}
