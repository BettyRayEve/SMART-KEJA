import React, { useEffect, useState } from "react";
import { MapPin, List, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";

export function MapPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const { data, error: fetchErr } = await supabase
          .from("properties")
          .select("id, title, address, price, status, location")
          .eq("status", "vacant");

        if (fetchErr) throw fetchErr;
        setProperties(data || []);
      } catch (err) {
        console.error("Error fetching map properties:", err);
        setError("Failed to load property locations.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Lazy-load Leaflet only on client side
  useEffect(() => {
    let cancelled = false;
    import("leaflet/dist/leaflet.css").then(() => {
      if (!cancelled) setMapReady(true);
    });
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="flex flex-col gap-4 h-[calc(100vh-8rem)]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
            Map View
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            {loading ? "Loading locations..." : `${properties.length} properties found`}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
            <List className="h-4 w-4" />
            <span className="hidden sm:inline">List View</span>
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-gray-100 dark:bg-gray-800 relative shadow-sm">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin text-[#0600ba] mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Loading map data...</p>
            </div>
          </div>
        ) : error ? (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-red-300 mx-auto mb-3" />
              <p className="text-sm font-semibold text-red-600 dark:text-red-400">{error}</p>
            </div>
          </div>
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-16 w-16 text-[#0600ba] mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                Interactive Map
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                {properties.length === 0
                  ? "No vacant properties are currently available to display on the map."
                  : `${properties.length} vacant properties are ready. The interactive Leaflet map will render here with location markers.`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
