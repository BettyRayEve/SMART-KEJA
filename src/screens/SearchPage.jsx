import React from "react";
import { useNavigate } from "react-router-dom";
import { Search as SearchIcon, SlidersHorizontal, MapPin, Compass } from "lucide-react";

export function SearchPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          Search Properties
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Find your ideal student accommodation near campus.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
            <SearchIcon className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Search by area, amenities, or property name..."
            className="block w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
          />
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-semibold">
          <SlidersHorizontal className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </div>

      {/* Quick Location Tags */}
      <div className="flex flex-wrap gap-2">
        {["South B", "Langata", "Kilimani", "Rongai", "Juja", "Kitengela"].map((area) => (
          <button
            key={area}
            className="rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-1.5 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
          >
            <MapPin className="h-3 w-3 inline mr-1" />
            {area}
          </button>
        ))}
      </div>

      {/* Empty State */}
      <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-16 text-center">
        <Compass className="h-14 w-14 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
          Start your search
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-6">
          Use the search bar above to find available student housing, or try one of the quick location filters.
        </p>
        <button
          onClick={() => navigate("/map")}
          className="inline-flex items-center gap-2 rounded-lg bg-[#0600ba] px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-800 transition-colors shadow-sm"
        >
          <MapPin className="h-4 w-4" />
          Explore on Map
        </button>
      </div>
    </div>
  );
}
