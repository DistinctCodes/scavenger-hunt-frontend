import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FeatureSection = () => {
  const features = [
    {
      frame1: "/images/frame1.png",
      frame: "/images/frame.png",
      title: "Gameplay & Learning Experience",
      description:
        "Gain knowledge in different blockchain ecosystems by learning while solving puzzles, games, and other challenges.",
    },
    {
      frame1: "/images/frame1.png",
      frame: "/images/frame.png",
      title: "Reward & Progression",
      description:
        "Earn unique NFTs for completing challenges. Unlock rewards based on your progress as you climb up the leaderboard.",
    },

    {
      frame1: "/images/frame1.png",
      frame: "/images/frame.png",
      title: "Blockchain & Wallet Integration",
      description: "Easily and securely connect your wallet.",
    },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const statsVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const cardVariants = {
    hidden: (i) => ({
      x: (i - 1) * 100,
      opacity: 0,
      scale: 0.8,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const featureVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center md:bg-black text-white overflow-hidden">
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

      <motion.div
        className="relative sm:pt-0 pt-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{
            once: false,
            amount: 0.2,
            margin: "-100px",
          }}
          variants={featureVariants}
        >
          <h2 className="mb-10 p-2 text-[20px] md:flex flex-col items-center font-medium font-orbitron text-wrap text-2xl text-center mt-[5rem]">
            Learning has never been more <br />
            <span className="text-[20px] bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] bg-clip-text text-transparent text-3xl font-bold">
              fun and rewarding
            </span>
          </h2>
          <h4 className="text-center lg:w-full sm:w-10 mb-5 md:text-[#858894] font-spaceGrotesk md:flex md:flex-col md:items-center mt-3">
            Embark on digital treasure hunt and claim your NFT{" "}
            <br className="lg:hidden" /> rewards
          </h4>

          <div className="flex flex-row sm:block md:flex items-center justify-center gap-[8rem] w-full ml-6">
            <div className="hidden md:block relative justify-center items-center mt-20 mb-6 h-[400px] md:w-[50%] lg:ml-16">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  className={`absolute w-[200px] h-[320px] bg-[#121727] rounded-xl shadow-lg p-4 text-white transition-all duration-500 cursor-pointer mb-10
                  ${index === 0 ? "z-10 -translate-x-40 scale-95" : ""}
                  ${index === 1 ? "z-20 scale-100 shadow-2xl" : ""}
                  ${index === 2 ? "z-10 translate-x-40 scale-95" : ""}
                  hover:z-30 hover:scale-110`}
                >
                  <div className="relative w-full h-40">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="mt-4 font-spaceGrotesk text-[15px] text-center">
                    {card.title}
                  </h4>
                  <button
                    className={`mt-4 w-full py-2 rounded-md text-white ${card.btnColor}`}
                  >
                    {card.buttonText}
                  </button>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="justify-center text-white pr-[15px] flex flex-col sm:w-[50%] sm:items-center"
              variants={featureVariants}
            >
              <div className="max-w-2xl mx-auto space-y-5">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-7 items-start"
                    variants={featureVariants}
                  >
                    <div className="relative w-10 h-10 flex-shrink-0 mt-6">
                      <div className="relative w-full h-full">
                        <Image
                          src={feature.frame1}
                          alt="Frame 1"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute w-full h-full top-3 left-3">
                        <Image
                          src={feature.frame}
                          alt="Frame"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-5 text-base font-orbitron">
                        {feature.title}
                      </h3>
                      <p className="text-[#C4C4C4CC] font-spaceGrotesk">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.button
                className="mt-[30px] mx-auto w-[80%] md:px-6 font-spaceGrotesk py-3 bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] text-white rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get started for free!
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeatureSection;
