import React from "react";
import Image from "next/image";
import Link from "next/link";

const OngoingChallengeCard = ({ challenge }) => {
  const getBadgeColor = (type, value) => {
    const map = {
      status: {
        starter: "bg-[#439F6E]",
        workcoin: "bg-[#3B82F6]",
        web3: "bg-[#E7499F]",
      },
      difficulty: {
        easy: "bg-[#C0ECD4] text-[#439F6E]",
        medium: "bg-[#FFEAC1] text-[#FFB82E]",
        hard: "bg-[#FFD8D8] text-[#F93232]",
      },
    };
    return map[type]?.[value?.toLowerCase()] || "bg-gray-500 text-white";
  };

  return (
    <div className="flex justify-between items-start px-4 py-3 bg-[#1A1F35] rounded-xl border border-[#2A2F45] hover:border-[#3A3F55] transition-all">
      {/* Left: Image + Info */}
      <div className="flex gap-4">
        <div className="w-12 h-12 relative rounded-md overflow-hidden">
          <Image
            src={challenge.image || "/images/default-challenge.png"}
            alt={challenge.title}
            fill
            className="object-cover"
          />
        </div>
        <div>
            <div className="flex flex-row   ">
            <h3 className="text-white font-semibold text-sm leading-tight">
                {challenge.title}
            </h3>
            <div className="flex flex-row items-end ml-1">
                <div className={`text-[10px] font-semibold px-3 py-1 rounded-full ${getBadgeColor("status", challenge.status)}`}>
                {challenge.status}
                </div>
                <div className={`text-[10px] font-semibold px-3 py-1 rounded-full ${getBadgeColor("difficulty", challenge.difficulty)}`}>
                {challenge.difficulty}
                </div>
            </div>
            </div>
            <p className="text-xs text-[#BFBFBF] mt-1 leading-snug">
                {challenge.description?.slice(0, 50)}...
            </p>
        </div>
    </div>
    </div>
  );
};

export default OngoingChallengeCard;
