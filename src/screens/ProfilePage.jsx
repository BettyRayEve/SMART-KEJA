import React from "react";
import { useAuth } from "../lib/auth-context";
import { User, Mail, Phone, Shield, Settings, LogOut } from "lucide-react";

export function ProfilePage() {
  const { profile, session, signOut, role } = useAuth();

  const displayName = profile?.full_name || session?.user?.email?.split("@")[0] || "User";
  const email = session?.user?.email || "—";

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          Profile
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Manage your account settings.
        </p>
      </div>

      {/* Profile Card */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl font-bold shadow-md">
            {displayName.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{displayName}</h2>
            <span className="inline-flex items-center gap-1.5 mt-1 rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-0.5 text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              <Shield className="h-3 w-3" />
              {role || "student"}
            </span>
          </div>
        </div>

        <div className="space-y-4 border-t border-gray-100 dark:border-gray-700 pt-5">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-gray-400 dark:text-gray-500" />
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Email</p>
              <p className="text-sm text-gray-900 dark:text-gray-100">{email}</p>
            </div>
          </div>

          {profile?.full_name && (
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-gray-400 dark:text-gray-500" />
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Full Name</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">{profile.full_name}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Account Actions */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-3">
          Account
        </h3>
        <div className="space-y-1">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <Settings className="h-4 w-4 text-gray-400 dark:text-gray-500" />
            <span>Account Settings</span>
          </button>
          <button
            onClick={async () => {
              try { await signOut(); } catch (e) { console.error(e); }
            }}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
