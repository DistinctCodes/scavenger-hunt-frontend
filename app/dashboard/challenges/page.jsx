"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ChallengeCard from "@/components/challenges/ChallengeCard";
import ChallengesSection from "@/components/challenges/ChallengeSection";
import ChallengeMainCard from "@/components/challenges/ChallengeMainCard";
import { dummyChallenges, dummyCompletedChallenges } from "@/lib/mockdata";
import OnGoingChallenges from "@/components/challenges/OnGoingChallengesContainer";
import CompleteChallenges from "@/components/challenges/CompleteChallenges";
import Button from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";

const Page = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [filteredChallenges, setFilteredChallenges] = useState([]);
  const [isReturningUser, setIsReturningUser] = useState(true);

  const tabs = ["All", "Stellar", "starknet", "Web3", "Worldcoin"];
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [autoplay, setAutoplay] = useState(null);

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
  }, [activeTab, challenges]); // Added challenges to dependency array

  // Check if we're on mobile view
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Set up autoplay for mobile
  useEffect(() => {
    let interval;

    const startAutoplay = () => {
      if (api?.canScrollNext) {
        interval = setInterval(() => {
          if (api.canScrollNext()) {
            api.scrollNext();
          } else {
            api.scrollTo(0);
          }
        }, 3000);
        setAutoplay(interval);
      }
    };

    const stopAutoplay = () => {
      if (interval) {
        clearInterval(interval);
        setAutoplay(null);
      }
    };

    if (!api || !isMobile) {
      stopAutoplay();
      return;
    }

    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, [api, isMobile]);

  // Handle pause on user interaction
  const handleUserInteraction = () => {
    // Pause autoplay when user interacts with carousel
    if (autoplay) {
      clearInterval(autoplay);

      // Resume after 5 seconds of inactivity
      const timeout = setTimeout(() => {
        if (isMobile && api) {
          const newInterval = setInterval(() => {
            if (api.canScrollNext()) {
              api.scrollNext();
            } else {
              api.scrollTo(0);
            }
          }, 3000);
          setAutoplay(newInterval);
        }
      }, 5000);

      return () => clearTimeout(timeout);
    }
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (index) => {
    api?.scrollTo(index);
    handleUserInteraction();
  };
  return (
    <div className="w-full h-full mx-auto pt-4 relative overflow-y-auto">
      <div className="relative z-10 px-4 md:px-8 lg:px-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 w-full relative rounded-lg overflow-hidden md:h-[16rem] h-[11.25rem] md:p-[2.5rem] p-4 opacity-90"
        >
          <Image
            src="/images/challenge.jpg"
            alt="bg"
            width={1000}
            height={256}
            className="w-full h-full absolute top-0 left-0"
          />
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-4xl font-bold bg-gradient-to-r from-[#7D3EAF] via-[#E7499F] to-[#E7499F] bg-clip-text text-transparent md:mb-6 font-orbitron relative top-5"
          >
            Challenges
          </motion.h1>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 max-w-3xl relative top-5 md:text-base text-xs"
          >
            Where you take control of your Web3 journey. Here, you can explore
            and master a variety of blockchain ecosystems through fun,
            interactive challenges. Whether you&apos;re curious about Ethereum,
            Solana, Polygon, StarkNet, or beyond, there&apos;s a world of
            learning and rewards waiting for you.
          </motion.p>
        </motion.div>

        {isReturningUser && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:h-[421px] w-full flex md:flex-row flex-col items-center md:justify-between md:mt-24 mb-4"
          >
            <main className="border md:mb-0 mb-[12rem] border-[#121727] rounded-[30px] w-[576px] h-[389px] flex justify-center py-4">
              <div className="w-[510px] flex flex-col space-y-5 h-full">
                <h2 className="text-center font-orbitron font-semibold text-[20px]">
                  My Ongoing Challenges
                </h2>
                <Carousel
                  setApi={setApi}
                  opts={{
                    align: "start",
                    loop: true,
                    slidesToScroll: 1,
                  }}
                  className="w-full h-full"
                  onMouseEnter={handleUserInteraction}
                  onTouchStart={handleUserInteraction}
                >
                  <CarouselContent className="-ml-4 h-full">
                    {dummyChallenges.map((challenge, index) => (
                      <CarouselItem
                        key={index}
                        className="pl-4 basis-1/2 md:basis-1/2"
                      >
                        <OnGoingChallenges {...challenge} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                <div className="flex justify-center w-full">
                  <div className="flex space-x-4">
                    {[0, 1, 2, 3].map((index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="icon"
                        className={`w-4 h-4 p-0 rounded-full ${
                          index === current % 3
                            ? "bg-[#3B82F6]"
                            : "bg-[#3B82F680]"
                        }`}
                        onClick={() => handleDotClick(index)}
                      >
                        <span className="sr-only">Go to slide {index + 1}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </main>
            <main className="bg-white bg-opacity-5 rounded-[20px] h-full md:w-[406px] w-full flex flex-col space-y-5 py-4">
              <h2 className="text-center font-orbitron font-semibold text-[20px]">
                My completed challenges
              </h2>
              <div className="flex items-center flex-col gap-2">
                {dummyCompletedChallenges.map((challenge, index) => (
                  <CompleteChallenges key={index} {...challenge} />
                ))}
              </div>
              <div className="flex justify-end items-center mt-4 pr-6 gap-2">
                <button className="bg-[#060B1C] rounded-[6px] size-[26px]">
                  <Image
                    src="/images/arrow-right-icon.svg"
                    alt="card-arrow"
                    width={12}
                    height={12}
                    className="m-auto rotate-180"
                  />
                </button>
                <p className="text-semibold text-[12px] font-orbitron">
                  1 - 3 of 3
                </p>
                <button className="bg-[#060B1C] rounded-[6px] size-[26px]">
                  <Image
                    src="/images/arrow-right-icon.svg"
                    alt="card-arrow"
                    width={12}
                    height={12}
                    className="m-auto"
                  />
                </button>
              </div>
            </main>
          </motion.section>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center font-orbitron w-full md:mt-24 mb-4"
        >
          <div className="flex md:space-x-2 space-x-1 bg-[#1F1633] md:rounded-lg rounded-xl p-1 md:w-fit mx-auto mb-4 md:justify-center scale-90 sm:scale-100 origin-center">
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChallenges.map((challenge) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ChallengeCard
                title={challenge.title}
                description={challenge.description}
                status={challenge.status}
                players={challenge.players}
                timeLeft={challenge.timeLeft}
                image={challenge.image}
                nftType={challenge.nftType}
                bigCard={false}
              />
            </motion.div>
          ))}
        </div>

        {filteredChallenges.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">
              No challenges found
            </h3>
            <p className="text-gray-400">
              No challenges are currently available in this ecosystem. Please
              check back later or explore other categories.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Page;
