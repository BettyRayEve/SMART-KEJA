import React from "react";
import { MessageSquare, Send } from "lucide-react";

export function MessagesPage() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          Messages
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Communicate directly with landlords.
        </p>
      </div>

      {/* Empty State */}
      <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-16 text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 dark:bg-blue-900/20 mb-4 mx-auto">
          <MessageSquare className="h-8 w-8 text-blue-400 dark:text-blue-500" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
          No conversations yet
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
          When you contact a landlord about a property, your conversation will appear here.
        </p>
      </div>
    </div>
  );
}
