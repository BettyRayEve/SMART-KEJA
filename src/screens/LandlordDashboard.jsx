import React, { useEffect, useState } from "react";
import { useAuth } from "../lib/auth-context";
import { supabase } from "../lib/supabase";
import { Building2, Users, DollarSign, Plus, BarChart3, RefreshCw, Home, AlertTriangle } from "lucide-react";

export function LandlordDashboard() {
  const { profile, session } = useAuth();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const displayName = profile?.full_name || session?.user?.email?.split("@")[0] || "Landlord";

  const fetchProperties = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fetchErr } = await supabase
        .from("properties")
        .select("*")
        .eq("landlord_id", session?.user?.id);

      if (fetchErr) throw fetchErr;
      setProperties(data || []);
    } catch (err) {
      console.error("Error fetching landlord properties:", err);
      setError("Failed to load your properties.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user?.id) fetchProperties();
  }, [session?.user?.id]);

  const totalProperties = properties.length;
  const vacantCount = properties.filter((p) => p.status === "vacant").length;
  const occupiedCount = properties.filter((p) => p.status === "occupied").length;

  const stats = [
    { label: "Total Properties", value: totalProperties, icon: Building2, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { label: "Vacant Units", value: vacantCount, icon: Home, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
    { label: "Occupied Units", value: occupiedCount, icon: Users, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/20" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
            Hello, {displayName} 🏠
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Manage your rental properties and track payments.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchProperties}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0600ba] text-sm font-bold text-white hover:bg-blue-800 transition-colors shadow-sm">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add Property</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bg}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">{stat.value}</p>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Properties Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Your Properties</h2>
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
            {properties.length} total
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 space-y-3">
                <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-3 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-3 w-1/3 rounded bg-gray-200 dark:bg-gray-700" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-6 text-center text-red-700 dark:text-red-400">
            <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
            <p className="font-semibold">{error}</p>
            <button
              onClick={fetchProperties}
              className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        ) : properties.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-16 text-center">
            <Building2 className="h-14 w-14 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">No properties listed</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-6">
              Start by adding your first rental property. Students will be able to discover it through search and map views.
            </p>
            <button className="inline-flex items-center gap-2 rounded-lg bg-[#0600ba] px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-800 transition-colors shadow-sm">
              <Plus className="h-4 w-4" />
              Add Your First Property
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {properties.map((property) => (
              <div
                key={property.id}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 line-clamp-1">{property.title}</h3>
                  <span className={`shrink-0 ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                    property.status === "vacant"
                      ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                      : property.status === "occupied"
                      ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  }`}>
                    {property.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-1">
                  {property.address || "No address set"}
                </p>
                <p className="text-lg font-extrabold text-gray-900 dark:text-gray-100">
                  Ksh {Number(property.price).toLocaleString()}
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium"> / month</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
