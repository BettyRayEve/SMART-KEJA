import React from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Home } from "lucide-react";

export function WelcomePage() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col md:flex-row md:items-stretch bg-gray-50">
      {/* Left side (Desktop): Branding/Logo area */}
      <div className="flex flex-col justify-center items-center flex-1 bg-gradient-to-br from-blue-50 to-emerald-50 p-8 text-center border-b border-gray-100 md:border-b-0 md:border-r md:p-16">
        <div className="max-w-lg">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            <span className="text-[#4f6df5]">SMART</span>
            <span className="text-[#34b56f]">KEJA</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
            Find Verified Student Accommodation Near Campus
          </h2>
          <p className="text-gray-600 md:text-lg">
            Directly connect with verified landlords, view locations on maps, track lease contracts, and log payments easily. No brokers, no hidden fees.
          </p>
        </div>
      </div>

      {/* Right side: Action buttons */}
      <div className="flex flex-col justify-center items-center flex-1 p-8 bg-white">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center md:text-left mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Started</h3>
            <p className="text-gray-500">Choose your profile role to log in or register.</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleRoleSelection("student")}
              className="flex items-center justify-between w-full p-5 rounded-xl border-2 border-transparent bg-[#0600ba] text-white hover:bg-blue-800 transition-all shadow-md group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-lg text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-lg">I'm a Student</span>
                  <span className="block text-sm text-blue-200">Find housing and log payments</span>
                </div>
              </div>
              <span className="text-xl font-bold transition-transform group-hover:translate-x-1">→</span>
            </button>

            <button
              onClick={() => handleRoleSelection("landlord")}
              className="flex items-center justify-between w-full p-5 rounded-xl border-2 border-[#1eee6e] bg-gray-50 text-[#3fc17b] hover:bg-emerald-50 transition-all shadow-md group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-100 rounded-lg text-[#3fc17b]">
                  <Home className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-lg text-[#2a9d5e]">I'm a Landlord</span>
                  <span className="block text-sm text-gray-500">Manage listings and rent ledgers</span>
                </div>
              </div>
              <span className="text-xl font-bold text-[#3fc17b] transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          <div className="mt-8 text-center text-xs text-gray-400">
            Find. Connect. Stay. • Powered by SmartKeja
          </div>
        </div>
      </div>
    </div>
  );
}
