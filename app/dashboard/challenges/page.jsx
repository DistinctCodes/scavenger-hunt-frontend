"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ChallengeCard from "@/components/challenges/ChallengeCard"; 

const page = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [filteredChallenges, setFilteredChallenges] = useState([]);

  const tabs = ["All", "Stellar", "starknet", "Web3", "Worldcoin"];

  const challenges = [
    {
      id: 1,
      title: "The Cryptic Key",
      description: "Decode mysterious blockchain clues to protect the network.",
      status: "active",
      players: "9k",
      timeLeft: "2D : 4H : 55M",
      image: "/images/challenge1.png",
      nftType: "Rare NFT",
      ecosystem: "starknet",
      level: "easy",
    },
    {
      id: 2,
      title: "The Zero-Knowledge Trial",
      description:
        "Explore and understand the secrets of zero-knowledge proofs.",
      status: "active",
      players: "7k",
      timeLeft: "3D : 8H : 42M",
      image: "/images/challenge2.png",
      nftType: "Rare NFT",
      ecosystem: "starknet",
      level: "medium",
    },
    {
      id: 3,
      title: "Stargazer's Compass",
      description: "Navigate the Stellar network to unlock the reward.",
      status: "active",
      players: "5k",
      timeLeft: "1D : 12H : 30M",
      image: "/images/challenge3.png",
      nftType: "Legendary NFT",
      ecosystem: "Stellar",
      level: "hard",
    },
    {
      id: 4,
      title: "Blockchain Labyrinth",
      description: "A legendary cross-blockchain open-world puzzle adventure.",
      status: "upcoming",
      players: "3k",
      timeLeft: "5D : 2H : 15M",
      image: "/images/challenge4.png",
      nftType: "Rare NFT",
      ecosystem: "Web3",
      level: "medium",
    },
    {
      id: 5,
      title: "Cryptic Codex",
      description:
        "Decipher the scrolls of smart contracts to claim the reward.",
      status: "active",
      players: "6k",
      timeLeft: "4D : 6H : 20M",
      image: "/images/challenge5.png",
      nftType: "Rare NFT",
      ecosystem: "Web3",
      level: "easy",
    },
    {
      id: 6,
      title: "Genesis Key",
      description: "Master the art of DeFi oracle to claim your reward.",
      status: "active",
      players: "8k",
      timeLeft: "2D : 18H : 10M",
      image: "/images/challenge6.png",
      nftType: "Legendary NFT",
      ecosystem: "Worldcoin",
      level: "hard",
    },
  ];

  useEffect(() => {
    if (activeTab === "All") {
      setFilteredChallenges(challenges);
    } else {
      const filtered = challenges.filter(
        (challenge) =>
          challenge.ecosystem.toLowerCase() === activeTab.toLowerCase()
      );
      setFilteredChallenges(filtered);
    }
  }, [activeTab]);

  return (
    <div className="w-full h-full mx-auto pt-4 relative overflow-y-auto">

      <div className="relative z-10 px-4 md:px-8 lg:px-12 pb-16">
        <div className="mb-10 w-full relative rounded-lg overflow-hidden md:h-[16rem] h-[11.25rem] md:p-[2.5rem] p-4 opacity-90">
          <Image
            src="/images/challenge.jpg"
            alt="bg"
            width={1000}
            height={256}
            className="w-full h-full absolute top-0 left-0"
          />
          <h1 className="text-xl md:text-4xl font-bold bg-gradient-to-r from-[#7D3EAF] via-[#E7499F] to-[#E7499F] bg-clip-text text-transparent md:mb-6 font-orbitron relative top-5">
            Challenges
          </h1>
          <p className="text-gray-300 max-w-3xl relative top-5 md:text-base text-xs">
            Where you take control of your Web3 journey. Here, you can explore
            and master a variety of blockchain ecosystems through fun,
            interactive challenges. Whether you're curious about Ethereum,
            Solana, Polygon, StarkNet, or beyond, there's a world of learning
            and rewards waiting for you.
          </p>
        </div>

        <div className="flex justify-center font-orbitron w-full md:mt-24 mb-4">
          <div
            className="flex md:space-x-2 space-x-1 bg-[#1F1633] md:rounded-lg rounded-xl p-1 md:w-fit mx-auto mb-4 
        md:justify-center
        scale-90 sm:scale-100 origin-center"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
              text-sm 
              md:rounded-lg rounded-full 
              transition-all 
              duration-300 
              md:w-[8.5rem] md:h-[1.8rem]
              md:px-0 md:py-0
              px-2 py-1
              flex justify-center items-center
              ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] text-white"
                  : "text-[#6B7280] hover:bg-[#261f35]"
              }
            `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Challenge Cards Grid (Now using ChallengeCard) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChallenges.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              title={challenge.title}
              description={challenge.description}
              status={challenge.status}
              players={challenge.players}
              timeLeft={challenge.timeLeft}
              image={challenge.image}
              nftType={challenge.nftType}
              bigCard={false}
            />
          ))}
        </div>

        {filteredChallenges.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">
              No challenges found
            </h3>
            <p className="text-gray-400">
              No challenges are currently available in this ecosystem. Please
              check back later or explore other categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
