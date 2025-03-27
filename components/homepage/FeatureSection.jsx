import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      frame1: "/images/frame1.png",
      frame: "/images/frame.png",
      title: "Gameplay & Learning Experience",
      description:
        "Gain knowledge in different blockchain ecosystems by learning while solving puzzles, games, and other challenges."
    },
    {
      frame1: "/images/frame1.png",
      frame: "/images/frame.png",
      title: "Reward & Progression",
      description:
        "Earn unique NFTs for completing challenges. Unlock rewards based on your progress as you climb up the leaderboard."
    },
    
    {
        frame1: "/images/frame1.png",
        frame: "/images/frame.png",
        title: "Blockchain & Wallet Integration",
        description: "Easily and securely connect your wallet.",
    }
    
    
  ];

  const cards = [
    {
      image: "/images/comp.png",
      title: "Play and Compete",
      buttonText: "Join",
      btnColor: "bg-purple-600",
    },
    {
      image: "/images/game.png",
      title: "Join an ecosystem Challenge",
      buttonText: "Search",
      btnColor: "bg-orange-500",
    },
    {
      image: "/images/ai.png",
      title: "Win an NFT",
      buttonText: "Claim",
      btnColor: "bg-[#C96479]",
    },
  ];



  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center  md: bg-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/image3.png')",
            backgroundPosition: "60% center", 
            backgroundSize: "cover",
          }}
          >
          
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
      </div>
        <div className="relative sm:pt-0 pt-28 ">
            <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-[#E68AAFB2] w-[100%] h-[170px] lg:h-[9rem]  rounded-3xl lg:rounded-full px-6 lg:px-12 text-center  py-4 lg:py-0">
              <div className="lg:relative  absolute lg:-left-12 sm:-top-5   -translate-y-28 lg:translate-y-5 bg-[#A855F7] w-[7rem] h-[7rem] lg:w-[9rem] lg:h-[9rem] rounded-full flex flex-col items-center justify-center text-white">
                <h1 className="font-orbitron text-xl lg:text-2xl font-medium">1,000+</h1>
                <p className="text-[#BFBFBF] text-xs lg:text-sm">Active users</p>
              </div>

              <div className="flex   lg:flex-row  justify-between  items-center gap-11 lg:gap-32  mt-8 lg:mt-0 ">
                <div className="flex flex-col items-center">
                  <div className="bg-[#FF4690] w-12 h-12 flex items-center justify-center rounded-full mb-2 border border-white">
                    <svg fill="white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <circle cx="16" cy="16" r="15" fill="white" />
                      <path d="M7.51,26a5.48,5.48,0,0,1-1.44-.19A5.6,5.6,0,0,1,2.19,19l2.33-8.84A5.54,5.54,0,0,1,7.11,6.73a5.43,5.43,0,0,1,4.15-.54A5.52,5.52,0,0,1,14.7,9h2.6a5.49,5.49,0,0,1,3.44-2.81,5.43,5.43,0,0,1,4.15.54,5.57,5.57,0,0,1,2.59,3.41L29.81,19a5.6,5.6,0,0,1-3.89,6.83,5.43,5.43,0,0,1-4.15-.54,5.54,5.54,0,0,1-2.59-3.41L19,21H13l-.23.86a5.54,5.54,0,0,1-2.59,3.41A5.46,5.46,0,0,1,7.51,26Z" fill="#FF4690" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg lg:text-xl font-orbitron font-medium">3,000+</h3>
                  <p className="text-[#BFBFBF] text-sm lg:text-[15px]">Games played</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-[#3A8DFF] w-12 h-12 flex items-center justify-center rounded-full mb-2 border border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
                      <rect x="6" y="4" width="12" height="16" rx="2" ry="2" />
                      <path d="M12 9 L14 12 L12 15 L10 12 Z" fill="white" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg lg:text-xl font-orbitron font-medium">300+</h3>
                  <p className="text-[#D4D4D4] text-sm lg:text-[15px]">NFT’s minted</p>
                </div>

                <div className="flex flex-col items-center lg:pr-10">
                  <div className="bg-[#9F58FF] w-12 h-12 flex items-center justify-center rounded-full mb-2 border border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2" className="w-8 h-8">
                      <circle cx="32" cy="20" r="8" />
                      <path d="M16 50c0-8 8-12 16-12s16 4 16 12" />
                      <path d="M12 20a4 4 0 1 0 0-8l-3 4z" />
                      <path d="M52 18h-4v6l2 2 2-2z" />
                      <rect x="24" y="36" width="16" height="8" rx="2" />
                      <circle cx="28" cy="40" r="1" />
                      <circle cx="36" cy="40" r="1" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg lg:text-xl font-orbitron font-medium">300+</h3>
                  <p className="text-[#D4D4D4] text-sm lg:text-[15px]">NFT’s minted</p>
          </div>
      </div>
</div>
      <div>
        
            <h2 className="mb-10 p-2 text-[20px] md:flex flex-col items-center font-medium font-orbitron text-wrap text-2xl text-center mt-[5rem]">
              Learning has never been more <br /> <span className="text-[20px] bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] bg-clip-text text-transparent text-3xl font-bold">
                fun and rewarding
              </span>
            </h2>
            <h4 className="text-center lg:w-full sm:w-10  mb-5 md:text-[#858894] font-spaceGrotesk md:flex md:flex-col md:items-center mt-3   ">

              Embark on digital treasure hunt  and claim your NFT <br className='lg:hidden' /> rewards
            </h4>

              
          <div className="flex flex-row sm:block md:flex  items-center justify-center gap-[8rem] w-full ml-6">
              <div className="hidden md:flex md:relative justify-center items-center mt-20 mb-6 h-[400px] md:w-[50%]  md:hidden lg:block  lg:ml-16">
                {cards.map((card, index) => (
                <div
                    key={index}
                    className={`absolute w-[200px] h-[320px] bg-[#121727] rounded-xl shadow-lg p-4 text-white transition-all duration-500 cursor-pointer mb-10
                    ${index === 0 ? "z-10 -translate-x-40 scale-95" : ""}
                    ${index === 1 ? "z-20 scale-100 shadow-2xl" : ""}
                    ${index === 2 ? "z-10 translate-x-40 scale-95" : ""}
                    hover:z-30 hover:scale-110`}
                    >
                    <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-lg" />
                    <h4 className="mt-4 font-spaceGrotesk text-[15px] text-center">{card.title}</h4>
                    <button className={`mt-4 w-full py-2 rounded-md text-white  ${card.btnColor}`}>
                    {card.buttonText}
                    </button>
                  </div>
                ))}
            </div>
            <div className="justify-center text-white pr-[15px] flex flex-col sm:w-[50%]  sm:items-center ">
                <div className="max-w-2xl mx-auto space-y-5">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-7 items-start">
                      <div className="relative w-10 h-10 flex-shrink-0 mt-6">
                        <img src={feature.frame1} alt="Frame 1" className="w-full h-full object-cover" />
                        <img
                            src={feature.frame}
                            alt="Frame"
                            className="absolute  w-full h-full top-3 left-3 object-cover m-auto"
                        />
                      </div>
                        <div className=''>
                          <h3 className="font-semibold mb-5 text-base font-orbitron ">{feature.title}</h3>
                          <p className="text-[#C4C4C4CC] font-spaceGrotesk">{feature.description}</p>
                    </div>
                  </div>
                  ))}
              </div>
                <button className='mt-[30px] mx-auto w-[80%]  md:px-6 font-spaceGrotesk py-3 bg-gradient-to-r from-[#7D3EAF] to-[#E7499F]  text-white rounded-lg '>Get started for free!</button>
              </div> 
            </div> 
      </div>

    </div>
       
 </section>
  );
};

export default FeatureSection;
