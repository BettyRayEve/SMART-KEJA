import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../lib/auth-context";
import { Mail, Lock, Eye, EyeOff, GraduationCap, Home, AlertCircle, User, Phone } from "lucide-react";

export function LoginPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();

  const role = searchParams.get("role") || "student";
  const isStudent = role === "student";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      if (!isLogin) {
        if (password !== confirmPassword) {
          throw new Error("Passwords do not match.");
        }
        if (!fullName.trim()) {
          throw new Error("Full Name is required for registration.");
        }
        await signUp(email, password, role, fullName, phone);
        // Email confirmation is disabled — session is returned immediately.
        // Navigate to the appropriate dashboard.
        if (role === "landlord") {
          navigate("/landlord");
        } else {
          navigate("/student-dashboard");
        }
      } else {
        await signIn(email, password);
        // Successful login - routing is handled here
        if (role === "landlord") {
          navigate("/landlord");
        } else {
          navigate("/student-dashboard");
        }
      }
    } catch (err) {
      console.error("Auth error details:", err);
      let errorText = "An unexpected error occurred. Please try again.";
      
      if (err?.name === "AuthRetryableFetchError" || err?.message === "{}" || (err?.message && err.message.includes("AuthRetryableFetchError"))) {
        errorText = "Internal server error (500). Please check your connection or contact support.";
      } else if (err?.message && err.message !== "{}") {
        errorText = err.message;
      } else if (err?.error_description) {
        errorText = err.error_description;
      } else if (typeof err === "string") {
        errorText = err;
      } else {
        errorText = JSON.stringify(err, Object.getOwnPropertyNames(err));
      }
      
      setErrorMsg(errorText);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-10 px-4 flex flex-col justify-center">
      <div className="w-full max-w-md mx-auto md:shadow-lg md:rounded-xl md:border md:border-gray-200 md:bg-white md:p-8 p-4">
        {/* Header Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            {isStudent ? (
              <GraduationCap className="h-8 w-8 text-[#0600ba]" />
            ) : (
              <Home className="h-8 w-8 text-[#3fc17b]" />
            )}
            <span className="text-2xl font-bold text-gray-900">
              SmartKeja {isStudent ? "Student" : "Landlord"}
            </span>
          </div>
          <h2 className="text-xl font-bold text-gray-900">
            {!isLogin ? "Create your account" : "Welcome Back"}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {!isLogin ? "Sign up as a " : "Sign in to your account as a "}
            <span className={isStudent ? "font-bold text-[#0600ba]" : "font-bold text-[#2a9d5e]"}>
              {role}
            </span>
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-start gap-2 text-sm">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name input (Register only) */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="fullName">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <User className="h-5 w-5" />
                </div>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="block w-full pl-11 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          )}

          {/* Phone Number input (Register only) */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="phone">
                Phone Number (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Phone className="h-5 w-5" />
                </div>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+254 700 000 000"
                  className="block w-full pl-11 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          )}

          {/* Email input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Mail className="h-5 w-5" />
              </div>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="block w-full pl-11 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Password input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Lock className="h-5 w-5" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="block w-full pl-11 pr-11 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-650 focus:outline-none"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password input (Register only) */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-11 pr-11 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-650 focus:outline-none"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          )}

          {/* Remember me & Forgot Password */}
          {isLogin && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>Remember me</span>
              </label>
              <button type="button" className="font-semibold text-blue-600 hover:text-blue-800 focus:outline-none">
                Forgot Password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2.5 rounded-lg text-white font-bold transition-all shadow-sm flex justify-center items-center ${
              isStudent
                ? "bg-[#0600ba] hover:bg-blue-800 disabled:bg-blue-300"
                : "bg-[#3fc17b] hover:bg-emerald-700 disabled:bg-emerald-300"
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : !isLogin ? (
              "Register"
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200"></span>
          </div>
          <span className="relative bg-white px-3 text-xs text-gray-505 uppercase">
            or continue with
          </span>
        </div>

        {/* OAuth Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors focus:outline-none"
          >
            <img src="/google-logo-1.png" alt="Google" className="h-5 w-5 object-contain" onError={(e) => {
              e.currentTarget.style.display = 'none';
            }} />
            <span>Google</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors focus:outline-none"
          >
            <img src="/image-1.png" alt="Facebook" className="h-5 w-5 object-contain" onError={(e) => {
              e.currentTarget.style.display = 'none';
            }} />
            <span>Facebook</span>
          </button>
        </div>

        {/* Mode Toggle Link */}
        <div className="mt-8 text-center text-sm">
          <span className="text-gray-505">
            {!isLogin ? "Already have an account? " : "Don't have an account? "}
          </span>
          <button
            type="button"
            onClick={() => {
              setErrorMsg("");
              setIsLogin(!isLogin);
            }}
            className="font-bold text-blue-600 hover:text-blue-800 focus:outline-none"
          >
            {!isLogin ? "Login" : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
}
