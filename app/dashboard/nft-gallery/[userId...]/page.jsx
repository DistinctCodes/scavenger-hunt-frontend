"use client";
import NftCard from "@/components/dashboard/NftCard";
import React, { useState } from "react";

const listOfNft = [
  {
    nftImage: "/images/nft1.png",
    nftName: "Nova Echo",
    nftNumber: "#1324",
    nftValue: "1.99ETH",
  },
  {
    nftImage: "/images/nft2.png",
    nftName: "Apex Eon",
    nftNumber: "#029",
    nftValue: "1.99ETH",
  },
  {
    nftImage: "/images/nft3.png",
    nftName: "Alpha Neon",
    nftNumber: "#4673",
    nftValue: "1.99ETH",
  },
  {
    nftImage: "/images/nft4.png",
    nftName: "Goat Man",
    nftNumber: "3643",
    nftValue: "1.99ETH",
  },
];

const NftCardGallery = () => {
  const [hasNFTs, setHasNFTs] = useState(true);
  return (
    <div className="pt-12 w-full lg:w-11/12 mx-auto">
      <div className="flex  font-orbitron">
        <select
          name="All Categories"
          id="All Categories"
          className="bg-[#FD7DFF1A] *:border-sky-700  py-3 px-4 "
          value="All "
        >
          <option className="bg-stone-500" value="All Categories">
            All Categories
          </option>
          <option className="bg-transparent" value="1">
            list
          </option>
          <option className="bg-transparent" value="2">
            list
          </option>
          <option className="bg-transparent" value="3">
            list
          </option>
        </select>
        <select
          name="All Chains"
          id="All Chains"
          className="bg-[#FD7DFF1A] *:bg-transparent px-4 py-3"
        >
          <option value="All Chains " className="bg-transparent">
            All Chains
          </option>
        </select>
      </div>

      <div
        className={`${
          hasNFTs
            ? " grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 "
            : ""
        } justify-center lg:w-11/12 pt-12 `}
      >
        {hasNFTs ? (
          listOfNft.map(({ nftImage, nftName, nftNumber, nftValue }) => (
            <NftCard
              key={nftNumber}
              nftImage={nftImage}
              nftName={nftName}
              nftNumber={nftNumber}
              nftValue={nftValue}
            />
          ))
        ) : (
          <div className="h-screen flex flex-col justify-items-start items-center gap-y-8 text-[#BFBFBF]">
            <h1 className="font-orbitron text-xl">Good to have you here!!</h1>
            <p className="font-spaceGrotesk">
              After join a challenge and winning, you win see your NFT herre.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NftCardGallery;
