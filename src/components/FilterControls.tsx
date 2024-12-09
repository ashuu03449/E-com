"use client";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { BsGrid3X3Gap, BsList } from "react-icons/bs";

export default function FilterControls() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="bg-[#F9F1E7] -mt-3 mb-10 px-5 py-3 md:py-5 flex flex-col sm:flex-row items-center justify-between rounded-lg shadow-md">
      {/* Filter & Toggle Buttons */}
      <div className="flex items-center justify-between sm:justify-start space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
        {/* Filter Button */}
        <button className="flex items-center space-x-2 text-gray-800 hover:text-gray-900 font-semibold transition duration-300">
          <FaFilter />
          <span className="text-sm">Filter</span>
        </button>

        {/* Grid/List Toggle */}
        <div className="flex space-x-3">
          <button
            className={`p-2 rounded-lg ${view === "grid" ? "bg-gray-900 text-white" : "bg-white text-gray-900 border border-gray-300"}`}
            onClick={() => setView("grid")}
          >
            <BsGrid3X3Gap size={20} />
          </button>
          <button
            className={`p-2 rounded-lg ${view === "list" ? "bg-gray-900 text-white" : "bg-white text-gray-900 border border-gray-300"}`}
            onClick={() => setView("list")}
          >
            <BsList size={20} />
          </button>
        </div>
      </div>

      {/* Results & Sort Options */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 w-full sm:w-auto">
        {/* Showing Results */}
        <span className="text-sm text-gray-700 sm:mb-0 mb-3 sm:mr-4">
          Showing <b>1–16</b> of <b>32</b> results
        </span>

        {/* Show Dropdown */}
        <div className="flex items-center space-x-3 sm:mr-4 mb-3 sm:mb-0">
          <span className="text-sm text-gray-700">Show</span>
          <select
            className="border border-gray-300 rounded-lg bg-transparent bg-slate-500 bg-opacity-10  px-3 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200"
            defaultValue="16"
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
          </select>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-700">Sort by</span>
          <select
            className="border border-gray-300 bg-transparent bg-slate-500 bg-opacity-10 rounded-lg px-3 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200"
            defaultValue="Default"
          >
            <option value="Default">Default</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
}
