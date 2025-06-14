"use client";

import React from "react";
import Image from "next/image";

const NFTShowcase = ({ nfts }) => {
  return (
    <div className="w-full rounded-lg p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white lg:text-3xl font-semibold text-base md:text-lg">
          My NFT Collections
        </h2>
        <a href="#" className="text-sm text-blue-400 hover:underline">
          View all
        </a>
      </div>

      {/* NFT Cards */}
      <div className="flex md:gap-4 justify-center">
        {nfts.slice(0, 3).map((nft, index) => (
          <div
            key={index}
            className="flex-1 max-w-[250px] sm:max-w-[200px] md:max-w-[220px] rounded-xl md:rounded-2xl overflow-hidden text-white"
          >
            <div className="relative w-full h-40 sm:h-52 md:h-60">
              <Image
                src={nft.image}
                alt={nft.name}
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute bottom-10 left-0 lg:w-[176px] w-[200px] rounded-bl-2xl rounded-br-2xl lg:ml-3 lg:mr-6 p-2 bg-black/50 backdrop-blur-sm">
                <div className="flex justify-between items-start font-orbitron text-xs sm:text-sm">
                  <h3 className="truncate flex-1 mr-1">{nft.name}</h3>
                  <span className="text-xs text-gray-300 whitespace-nowrap">
                    #{nft.number}
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-spaceGrotesk mt-1">
                  Floor: <span className="text-white">{nft.floor}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3 Blue Dots - Always Visible */}
      <div className="flex justify-center mt-6 gap-3">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className="w-3 h-3 rounded-full bg-blue-500"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default NFTShowcase;
