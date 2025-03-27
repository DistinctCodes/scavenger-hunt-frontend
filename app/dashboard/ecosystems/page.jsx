"use client"
import { useState, useEffect } from 'react';
import StarknetLogo from "@/public/ecosystems/Starknet_Symbol.png"
import WorldcoinLogo from "@/public/ecosystems/Worldcoin_Symbol.png"
import EcosystemCard from "@/components/ui/EcosystemCard"
import CompletedEcosystemCard from "@/components/ui/CompletedEcosystemCard"
import bannerImg from "@/public/images/ecosystem-banner.png"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Page = () => {
  const [isReturningUser, setIsReturningUser] = useState(false);

  const toggleUserState = () => setIsReturningUser(!isReturningUser);

  const ecosystems = [
    {
      title: "Worldcoin",
      description: "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: WorldcoinLogo,
    },
    {
      title: "Stellar",
      description: "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: StarknetLogo,
    },
    {
      title: "Stellar",
      description: "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: StarknetLogo,
    },
    {
      title: "Worldcoin",
      description: "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: WorldcoinLogo,
    },
    {
      title: "Stellar",
      description: "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: StarknetLogo,
    },
    {
      title: "Stellar",
      description: "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: StarknetLogo,
    },
  ];

  // Sample data for completed ecosystems
  const completedEcosystems = [
    {
      title: "Worldcoin",
      body: "Dive into the Worldcoin ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: WorldcoinLogo,
    },
    {
      title: "StarkNet",
      body: "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: StarknetLogo,
    },
  ];

  // Slider settings for ongoing ecosystems
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 pt-12 pb-32">
      {/* Demo toggle button - remove in production */}
      <button 
      type='button'
        onClick={toggleUserState}
        className="fixed top-24 right-4 z-50 bg-purple-600 text-white px-4 py-2 rounded-md"
      >
        {isReturningUser ? 'Switch to New User' : 'Switch to Returning User'}
      </button>

      <div>
        <div className="border-[#EC48994D] border rounded-[10px] p-4 sm:p-6 md:p-[32px] relative overflow-hidden">
          <Image
            src={bannerImg || "/placeholder.svg"}
            alt="ecosystem banner"
            width={600}
            height={300}
            className="w-full h-full absolute inset-0 object-cover"  
          />
          <div className="bg-[#060B1CB2] z-20 absolute w-full h-full inset-0" />
          <div className="relative z-20">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-6 bg-[linear-gradient(130deg,rgba(125,62,175,1)_21%,rgba(231,73,159,1)_100%)] text-transparent bg-clip-text w-fit">
              Ecosystems
            </h1>
            <p className="text-[#BFBFBF] font-light text-sm sm:text-lg md:text-[20px] md:leading-[30px] max-w-[900px]">
              Where you take control of your Web3 journey! Here, you can explore and master a variety of blockchain
              ecosystems through fun, interactive challenges. Whether you're curious about Ethereum, Solana, Polygon,
              StarkNet, or beyond, there's a world of learning and rewards waiting for you.
            </p>
          </div>
        </div>
      </div>

      {/* Completed & Ongoing Ecosystems Section (only for returning users) */}
      {isReturningUser && (
        <div  className="w-full grid grid-cols-12 gap-8 items-stretch py-12">
          <div className="col-span-12 w-full xl:col-span-7 p-4 border-2 border-white/5 rounded-xl">
            <div className="text-xl flex sm:text-2xl font-black text-white w-full text-center pb-8">
              My Ongoing Ecosystems
            </div>

            <div className="slider-container">
              <Slider {...sliderSettings}>
                {ecosystems.slice(0, 5).map((ecosystem, index) => (
                  <div key={`ongoing-${index}`} className="px-2">
                    <EcosystemCard {...ecosystem} />
                  </div>
                ))}
              </Slider>
              
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 col-span-12 w-full xl:col-span-5 flex flex-col items-center justify-center mx-auto space-y-8">
            <div className="text-xl flex sm:text-2xl font-black text-white w-full text-center">
              My Completed Ecosystems
            </div>

            <div className="flex flex-col w-full space-y-2">
              {completedEcosystems.map((ecosystem, index) => (
                <CompletedEcosystemCard key={`completed-${index}`} {...ecosystem} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Default Ecosystems Section (shown to all users) */}
      <div className="pt-10 sm:pt-16 md:pt-20">
        <div className="flex items-center gap-4 sm:gap-8 md:gap-12 mb-6 sm:mb-8">
          <div className="text-[20px] sm:text-lg md:text-[20px] md:w-fit w-full md:text-start text-center font-semibold">
            Scavenger hunt Ecosystem
          </div>
          <div className="flex-1 md:block hidden">
            <hr className="w-56 border-[white]/20 p-0 m-0" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-16 lg:gap-20">
          {ecosystems.map((ecosystem, index) => (
            <EcosystemCard key={index} {...ecosystem} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page