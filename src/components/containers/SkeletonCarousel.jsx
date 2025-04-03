import React from "react";

const SkeletonCarousel = () => {
  return (
    <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="w-[250px] h-[150px] bg-gray-200 animate-pulse rounded-xl shadow-md"
          ></div>
        ))}
    </div>
  );
};

export default SkeletonCarousel;
