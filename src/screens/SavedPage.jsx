import React from "react";
import { Heart, Compass } from "lucide-react";

export function SavedPage() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          Saved Properties
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Properties you've bookmarked for later.
        </p>
      </div>

      {/* Empty State */}
      <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-16 text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-pink-50 dark:bg-pink-900/20 mb-4 mx-auto">
          <Heart className="h-8 w-8 text-pink-400 dark:text-pink-500" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
          No saved properties yet
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
          Tap the heart icon on any property card to save it here for quick access later.
        </p>
      </div>
    </div>
  );
}
