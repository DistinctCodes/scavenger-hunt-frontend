import Image from "next/image";
import React from "react";

interface NftCollectionCardProps {
  nftImage: any;
  nftName: string;
  nftNumber: string;
  nftValue: number | string;
}

const NftCollectionCard: React.FC<NftCollectionCardProps> = ({
  nftImage,
  nftName,
  nftNumber,
  nftValue,
}) => {
  return (
    <div className="w-[300px] px-2  mx-auto  md:w-56 overflow-hidden shadow-lg relative cursor-pointer group">
      <div className="relative w-full h-[333px] md:h-64 overflow-hidden rounded-[17%] ">
        {/* NFT Image */}
        <div className="hover-scale  h-[72%] md:h-[64%] overflow-hidden">
          <Image
            src={nftImage}
            alt={`${nftName} NFT`}
            width={300}
            height={250}
            className=" opacity-70 imgNft  w-full object-cover object-top"
          />
        </div>

        {/* NFT Details Overlay */}
        <div className="absolute px-6 py-4 bottom-0 left-0 right-0 bg-[#121727] opacity-80 text-white flex justify-between items-center">
          <div className="flex flex-col w-full justify-center mx-auto gap-y-4">
            {/* NFT Name and Number */}
            <div className="flex justify-between items-center font-orbitron">
              <h2 className="text-md truncate max-w-[60%]">{nftName}</h2>
              <p className="text-sm text-[#858894]">{nftNumber}</p>
            </div>

            {/* NFT Value */}
            <div className="flex font-spaceGrotesk items-center">
              <p className="text-sm text-[#858894]">Floor:</p>
              <p className="text-sm font-semibold pl-2">{nftValue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCollectionCard;
