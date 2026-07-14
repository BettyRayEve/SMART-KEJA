import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../lib/auth-context";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";

export function NotFoundPage() {
  const navigate = useNavigate();
  const { session, role } = useAuth();

  const handleGoHome = () => {
    if (session) {
      if (role === "landlord") {
        navigate("/landlord");
      } else {
        navigate("/student-dashboard");
      }
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
      <div className="relative mb-8">
        <div className="text-[10rem] font-extrabold text-gray-100 dark:text-gray-800 leading-none select-none">
          404
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <AlertTriangle className="h-20 w-20 text-amber-400 dark:text-amber-500" />
        </div>
      </div>

      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-3">
        Page Not Found
      </h1>
      <p className="text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </button>
        <button
          onClick={handleGoHome}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0600ba] text-sm font-bold text-white hover:bg-blue-800 transition-colors shadow-sm"
        >
          <Home className="h-4 w-4" />
          Go Home
        </button>
      </div>
    </div>
  );
}
