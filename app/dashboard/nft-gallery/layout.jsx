import "../../globals.css";

const NftGalaryLayout = ({ children }) => {
  return (
    <main>
      <div className="bg-[url('/images/nft_Banner_img.png')] p-4  lg:h-60 bg-no-repeat bg-center md:bg-cover  flex flex-col justify-center gap-y-2 md:gap-y-5  pl-4 md:pl-14 w-full  lg:w-11/12  mx-auto rounded-lg border-[1px] md:border-x-[1px] xl:border-x-[1px] outline-offset-0 border-[#EC48994D]  overflow-hidden  ">
        <h1 className="bg-gradient-to-r from-[#7D3EAF] via-[#7D3EAF] via-[-100%] to-[#E7499F]  bg-clip-text text-transparent font-orbitron font-semibold text-xl md:text-3xl">
          NFT&apos;s Collected
        </h1>
        <p className="text-[#BFBFBF]  w-3/4 text-sm md:text-lg font-spaceGrotesk">
          This main is a showcase of your hard-earned achievements! Every time
          you complete a challenge on scavengerhunt, you earn a unique NFT that
          represents your progress and skills in the world of blockchain.
        </p>
      </div>
      
      <main>{children}</main>
    </main>
  );
};

export default NftGalaryLayout;
