import React, { useState } from "react";
import nftOne from "../../../public/assets/nfts/nftOneRz.png";
import nftTwo from "../../../public/assets/nfts/nftTwoRz.png";
import nftThree from "../../../public/assets/nfts/nftThreRz.png";
import nftFour from "../../../public/assets/nfts/nftFour.png";
import nftFive from "../../../public/assets/nfts/nftFive.png";
import nftSix from "../../../public/assets/nfts/nftSix.png";
import NftCollectionCard from "../../../components/dashboard/NftCollectionCard";

const NftCardGallery = () => {
  const [hasNFTs, setHasNFTs] = useState(true);

  const detailsNft = [
    { img: nftOne, id: 1, title: "Nova Echo", eth: "1.99", tag: "#1324" },
    { img: nftTwo, id: 2, title: "Apex Eno", eth: "1.99", tag: "#029" },
    { img: nftThree, id: 3, title: "Alpha Neon", eth: "1.99", tag: "#4673" },
    { img: nftSix, id: 4, title: "Goat man", eth: "1.99", tag: "#134" },
    { img: nftFive, id: 5, title: "Frwnzy punk", eth: "1.99", tag: "#777" },
    { img: nftFour, id: 6, title: "Billard jynx", eth: "1.99", tag: "#824" },
  ];

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

      <div className={`${hasNFTs ? "" : ""} justify-center lg:w-11/12 pt-12 `}>
        {hasNFTs ? (
          <div className=" my-5 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
            {detailsNft.map((data) => (
              <div className="card-inview" key={data.id}>
                <NftCollectionCard
                  nftImage={data.img}
                  nftName={data.title}
                  nftNumber={data.tag}
                  nftValue={data.eth}
                />
              </div>
            ))}
          </div>
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
