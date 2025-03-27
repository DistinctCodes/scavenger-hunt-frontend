import Image from "next/image";
import React from "react";

const NftCard = ({ nftImage, nftName, nftNumber, nftValue }) => {
  return (
    <div className="w-56 rounded-[17%] overflow-hidden shadow-lg relative cursor-pointer">
      <div className="relative w-full h-64 overflow-hidden">
        <Image 
          src={nftImage} 
          alt=""
          width={300}
          height={100}
          className="opacity-70 h-[62%] overflow-hidden object-cover object-top"
        />
        <div className="absolute px-6 py-4 bottom-0 left-0 right-0 bg-[#121727] opacity-80  text-white  flex justify-between items-center">
          <div className="flex flex-col  w-full justify-center mx-auto gap-y-4">
            <div className="flex justify-between items-center font-orbitron">
              <h2 className="text-lg ">{nftName}</h2>
              <p className="text-sm text-[#858894]"> {nftNumber}</p>
            </div>
            <div className=" flex font-spaceGrotesk">
              <p className="text-sm text-[#858894]">Floor : </p>
              <p className="text-sm font-semibold pl-2"> { nftValue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;