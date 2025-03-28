import React from "react";
import Image from "next/image";

function CompleteChallenges({ image, title, platform, level, description }) {
  const getLevelBorderColor = (level) => {
    if (level.toLowerCase() === "easy") return "border-[#439F6E]"; // Green
    if (level.toLowerCase() === "medium") return "border-[#FFB82E]"; // Yellow
    if (level.toLowerCase() === "hard") return "border-[#F93232]"; // Red
    return "border-gray-400"; // Default
  };

  const getLevelBackgroundColor = (level) => {
    if (level.toLowerCase() === "easy") return "bg-[#C0ECD4]";
    if (level.toLowerCase() === "medium") return "bg-[#FFEAC1]";
    if (level.toLowerCase() === "hard") return "bg-[#FFD8D8]";
    return "bg-gray-400"; // Default
  };

  const getLevelTextColor = (level) => {
    if (level.toLowerCase() === "easy") return "text-[#439F6E]";
    if (level.toLowerCase() === "medium") return "text-[#FFB82E]";
    if (level.toLowerCase() === "hard") return "text-[#F93232]";
    return "text-gray-400"; // Default
  };

  return (
    <div className="flex items-center w-[361px] h-[70px] rounded-[10px] bg-[#060B1C] bg-opacity-60 border border-[#060B1C] px-3 gap-3 relative">
      {/* Background overlay */}
      <div className="w-1/2 bg-[#060B1C] h-full absolute top-0 left-0 z-[1] rounded-r-[10px]"/>
      <div className="z-20 flex gap-3 items-center w-full h-full px-1">

      <div className="w-[38px] h-[50px] rounded overflow-hidden relative z-10">
        <Image
          src={image}
          alt="card-image"
          width={38}
          height={50}
          className="inset-0 object-cover w-full h-full"
        />
      </div>
      
      <div className="w-full space-y-1 ">
        <div className="flex justify-between items-center">
          <h2 className="text-center font-orbitron font-semibold text-sm">
            {title}
          </h2>
          <div className="flex gap-1">
            <div className="text-[8px] font-medium w-[60px] h-4 flex justify-center items-center rounded bg-white bg-opacity-20 font-orbitron">
              {platform}
            </div>
            <div
              className={`text-[8px] font-medium w-[60px] h-4 flex justify-center items-center rounded border font-orbitron ${getLevelBorderColor(
                level
              )} ${getLevelBackgroundColor(level)} ${getLevelTextColor(level)}`}
            >
              {level}
            </div>
          </div>
        </div>
        <p className="font-normal text-[10px] text-[#BFBFBF]">{description}</p>
      </div>
      </div>
    </div>
  );
}

export default CompleteChallenges;
