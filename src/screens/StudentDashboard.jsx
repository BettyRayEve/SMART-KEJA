import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../lib/auth-context";
import { supabase } from "../lib/supabase";
import { PropertyCard } from "../components/PropertyCard";
import { Search, Map, Heart, MessageSquare, Compass, Filter, RefreshCw } from "lucide-react";

export function StudentDashboard() {
  const { profile, session } = useAuth();
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState(50000); // max price

  const displayName = profile?.full_name || session?.user?.email?.split("@")[0] || "Student";

  const fetchProperties = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from("properties")
        .select(`
          *,
          property_images (
            url,
            sort_order
          )
        `)
        .eq("status", "vacant");

      if (error) throw error;
      setProperties(data || []);
    } catch (err) {
      console.error("Error fetching properties:", err);
      setError("Failed to load properties. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const filteredProperties = properties.filter((prop) => {
    const matchesSearch =
      prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (prop.address && prop.address.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (prop.description && prop.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (prop.amenities && prop.amenities.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())));

    const matchesPrice = Number(prop.price) <= priceFilter;

    return matchesSearch && matchesPrice;
  });

  const quickActions = [
    { label: "Search", icon: Search, onClick: () => navigate("/search") },
    { label: "Map View", icon: Map, onClick: () => navigate("/map") },
    { label: "Saved", icon: Heart, onClick: () => navigate("/saved") },
    { label: "Messages", icon: MessageSquare, onClick: () => navigate("/messages") },
  ];

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-start">
      {/* Desktop Sidebar: Greeting & Quick Actions & Filters */}
      <aside className="hidden md:flex flex-col w-72 shrink-0 gap-6">
        {/* Profile Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-[#0600ba] text-lg">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="font-bold text-gray-900 leading-snug">Hello, {displayName} 👋</h2>
              <span className="text-xs font-semibold text-[#0600ba] uppercase tracking-wider">Student Profile</span>
            </div>
          </div>
        </div>

        {/* Desktop Quick Actions Sidebar */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="mb-3 text-sm font-bold text-gray-900 uppercase tracking-wider">Quick Actions</h3>
          <ul className="space-y-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <li key={action.label}>
                  <button
                    onClick={action.onClick}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  >
                    <Icon className="h-4 w-4 text-[#0600ba]" />
                    <span>{action.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Filter Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-4 w-4 text-[#0600ba]" />
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Filters</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">
                Max Price: Ksh {priceFilter.toLocaleString()}
              </label>
              <input
                type="range"
                min="5000"
                max="50000"
                step="1000"
                value={priceFilter}
                onChange={(e) => setPriceFilter(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0600ba]"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-semibold mt-1">
                <span>Ksh 5k</span>
                <span>Ksh 50k</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Feed Container */}
      <div className="flex-1 space-y-6">
        {/* Mobile Header Greeting */}
        <div className="block md:hidden">
          <h1 className="text-2xl font-extrabold text-gray-900">Hello, {displayName} 👋</h1>
          <p className="text-sm text-gray-500">Find your next student home</p>
        </div>

        {/* Search Header Area */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for houses, areas, or amenities (e.g., Wi-Fi, Water)..."
              className="block w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm text-gray-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <button
            onClick={fetchProperties}
            className="inline-flex items-center justify-center gap-2 p-2.5 border border-gray-300 rounded-xl bg-white shadow-sm hover:bg-gray-50 text-gray-700 transition-colors"
            title="Refresh Feed"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Quick Actions (Grid Grid-cols-4) */}
        <div className="block md:hidden">
          <h2 className="mb-3 text-sm font-bold text-gray-900 uppercase tracking-wider">Quick Actions</h2>
          <div className="grid grid-cols-4 gap-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.label}
                  onClick={action.onClick}
                  className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:bg-gray-50 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#0600ba]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 tracking-tight">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Property List/Feed Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-950">Nearby Properties</h2>
            <p className="text-xs text-gray-500 font-medium">
              Showing {filteredProperties.length} vacant rooms
            </p>
          </div>
        </div>

        {/* Properties Feed Grid */}
        {loading ? (
          /* Skeleton Loader */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse rounded-xl border border-gray-250 bg-white p-4 space-y-4">
                <div className="aspect-video w-full rounded-lg bg-gray-200"></div>
                <div className="h-4 w-2/3 rounded bg-gray-200"></div>
                <div className="h-4 w-1/2 rounded bg-gray-200"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-12 rounded bg-gray-200"></div>
                  <div className="h-6 w-12 rounded bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
            <p className="font-semibold mb-2">{error}</p>
            <button
              onClick={fetchProperties}
              className="mt-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        ) : filteredProperties.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <Compass className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">No vacant properties found</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto">
              We couldn't find any rooms matching your search. Try adjusting your filters or search terms.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
