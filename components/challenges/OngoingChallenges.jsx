import React from "react";
import OngoingChallengeCard from "./OngoingChallengeCard";

const OngoingChallenges = ({ challenges = [] }) => {
  return (
    <div className="bg-[#0E132A] p-6 rounded-2xl w-full max-w-md">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-white font-orbitron text-lg font-bold">
          My ongoing challenges
        </h2>
       
      </header>

      <div className="flex flex-col gap-4">
        {challenges.slice(0, 6).map((challenge, index) => (
          <OngoingChallengeCard key={index} challenge={challenge} />
        ))}
      </div>

       <div className="flex items-center gap-2 text-lg text-[#BFBFBF] pl-32 mt-4">
          
          <div className="flex gap-1">
            <button className="w-6 h-6 flex items-center justify-center rounded bg-[#2A2F45] border border-[#3A3F55] hover:bg-[#3A3F55] transition">
              ←
            </button>
            <span>1 - 6 of 15</span>
            <button className="w-6 h-6 flex items-center justify-center rounded bg-[#2A2F45] border border-[#3A3F55] hover:bg-[#3A3F55] transition">
              →
            </button>
          </div>
        </div>
    </div>
  );
};

export default OngoingChallenges;
