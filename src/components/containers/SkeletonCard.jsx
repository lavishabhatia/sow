import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-full h-[350px] bg-gray-200 animate-pulse rounded-xl shadow-md">
      <div className="w-full h-[200px] bg-gray-300 rounded-t-xl"></div>
      <div className="p-4 space-y-3">
        <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
