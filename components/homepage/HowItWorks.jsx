import React from "react";
import StepCard from "./StepCard";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const stepsData = [
    {
      id: 1,
      title: "Choose Your Challenge",
      description:
        "Pick a challenge that matches your skill level, whether you are a beginner or an advanced user.",
      description2:
        "Engage with interactive tasks designed to teach you key concepts on a specific blockchain ecosystem.",
      img: "Group1.png",
    },
    {
      id: 2,
      title: "Level up and compete",
      description:
        "Progress through different levels and unlock more advanced challenges.",
      description2:
        "Climb the leaderboard by earning points and competing with other learners in the community.",
      img: "Group2.png",
    },
    {
      id: 3,
      title: "Earn NFT rewards",
      description:
        "Successfully complete a challenge? Congratulations! You will earn an exclusive NFT as proof of your achievement.",
      description2:
        "Collect and showcase your NFTs in your profile—they are a testament to your growing blockchain expertise",
      img: "Group3.png",
    },
    {
      id: 4,
      title: "Join the community",
      description:
        "Share your progress, connect with other learners, and get support in our Discord or Telegram community",
      description2:
        "Participate in seasonal events and special challenges for even more rewards!",
      img: "Group4.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const ctaVariants = {
    hidden: { y: 50, opacity: 0 },
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

  return (
    <section className="pt-8 sm:pt-12 md:pt-16 pb-6 bg-gradient-to-br text-white">
      <motion.div
        className="container mx-auto pb-8 sm:pb-12 md:pb-16 px-12 sm:px-6 md:px-12 lg:px-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.header
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 text-center mb-10 sm:mb-16 md:mb-24"
          variants={headerVariants}
        >
          <motion.div
            className="hidden mr-6 sm:block bg-[#858894] w-20 md:w-24 h-px"
            variants={lineVariants}
          ></motion.div>
          <div className="max-w-md">
            <motion.h1
              className="text-[#E9E9E9] sm:px-6 sm:text-2xl md:text-[28px] font-bold mb-1 sm:mb-2"
              variants={headerVariants}
            >
              <span className="font-bold mb-2 sm:mb-4 text-2xl sm:text-2xl md:text-[28px] inline md:block">
                Learning has never been more
              </span>
              <motion.span
                className="font-bold mb-2 sm:mb-4 text-2xl sm:text-2xl md:text-[28px] text-transparent bg-clip-text bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] ml-2 md:ml-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                how it works
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-[#858894] text-sm sm:text-base md:text-[16px]"
              variants={headerVariants}
            >
              Join and make use of the platform in 4 simple steps
            </motion.p>
          </div>
          <motion.div
            className="hidden ml-6 sm:block bg-[#858894] w-20 md:w-24 h-px"
            variants={lineVariants}
          ></motion.div>
        </motion.header>

        <div className="relative flex flex-col gap-20 sm:gap-16 md:gap-20 px-0">
          <motion.div
            className="absolute left-1/2 top-8 bottom-0 w-px bg-[#858894] transform -translate-x-1/2 hidden md:block"
            variants={lineVariants}
            aria-hidden="true"
          ></motion.div>

          {stepsData.map((step, index) => (
            <motion.div
              key={step.id}
              variants={{
                hidden: { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 100,
                    delay: index * 0.2,
                  },
                },
              }}
            >
              <StepCard step={step} isEven={index % 2 !== 0} index={index} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="text-center py-8 mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 
                   bg-[url('/images/howfooter.png')] md:bg-[url('/images/howitworks.png')] 
                   bg-center bg-no-repeat bg-cover md:py-10"
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-xl sm:text-2xl md:text-[32px] font-bold"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Dive into the world of blockchain
        </motion.h2>
        <motion.p
          className="font-bold mb-2 sm:mb-4 text-xl sm:text-2xl md:text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#7D3EAF] to-[#E7499F]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Ready to start?
        </motion.p>
        <motion.p
          className="text-[#858894] text-sm sm:text-base md:text-[16px] mb-6 sm:mb-8 md:mb-10"
          variants={headerVariants}
        >
          play, learn and earn your way to blockchain mastery!
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-4"
          variants={containerVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="gradient"
              className="!rounded-2xl md:w-auto px-4 sm:py-3 sm:px-6 md:py-4 md:px-20"
              aria-label="Join a challenge"
            >
              Join a challenge
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="secondary"
              className="!rounded-2xl bg-[#40234E] md:w-auto px-4 sm:py-3 sm:px-10 md:py-4 md:px-20 bg-opacity-20"
              aria-label="Learn how to play"
            >
              Learn how to play
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
