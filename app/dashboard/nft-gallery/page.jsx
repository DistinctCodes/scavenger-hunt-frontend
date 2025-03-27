"use client";
import React, { useState } from "react";

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
          "This will be where the cards will be rendered"
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
