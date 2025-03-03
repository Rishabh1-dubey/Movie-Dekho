import React from "react";

const Loader = () => {
  // Create arrays for placeholder items
  const sidebarItems = Array(6).fill(""); // Sidebar skeleton items
  const cardItems = Array(4).fill(""); // Card skeleton items

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-slate-800 to-slate-900 p-8">
      {/* Main Container */}
      <div className="flex gap-8">
        {/* Sidebar Skeleton */}
        <div className="w-[325px] bg-slate-700 rounded-lg shadow-lg animate-pulse p-6">
          {sidebarItems.map((_, index) => (
            <div
              key={index} // Add key prop
              className="h-12 bg-slate-600 rounded-lg mb-4 last:mb-0"
            ></div>
          ))}
        </div>

        {/* Main Content Skeleton */}
        <div className="flex-1">
          {/* Hero Section Skeleton */}
          <div className="h-[400px] bg-slate-700 rounded-lg shadow-lg animate-pulse p-8">
            <div className="h-8 bg-slate-600 rounded-full w-48 mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-600 rounded-full w-full"></div>
              <div className="h-4 bg-slate-600 rounded-full w-3/4"></div>
              <div className="h-4 bg-slate-600 rounded-full w-2/3"></div>
            </div>
            <div className="h-12 bg-slate-600 rounded-full w-32 mt-8"></div>
          </div>

          {/* Card Grid Skeleton */}
          <div className="mt-8">
            <div className="flex overflow-x-auto gap-6">
              {cardItems.map((_, index) => (
                <div
                  key={index} // Add key prop
                  className="flex-shrink-0 w-[250px] bg-slate-700 rounded-lg shadow-lg animate-pulse p-4"
                >
                  <div className="h-[150px] bg-slate-600 rounded-lg"></div>
                  <div className="h-4 bg-slate-600 rounded-full w-3/4 mt-4"></div>
                  <div className="h-4 bg-slate-600 rounded-full w-1/2 mt-2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;