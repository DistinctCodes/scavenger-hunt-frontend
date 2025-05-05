// HeroSection.jsx
"use client";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col items-start justify-center w-full min-h-screen px-6 overflow-hidden text-white bg-black md:px-12"
    >
      {/* Background Image with gradient overlay for targeted darkening */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0 w-full h-full"
      >
        {/* Custom gradient overlay - darker on left, lighter on right */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

        <Image
          src="/images/image2.png"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover md:block"
          style={{
            objectPosition: "60% center",
            filter: "brightness(0.85)",
          }}
        />
        <Image
          src="/images/image3.png"
          alt="Mobile Background"
          fill
          priority
          sizes="100vw"
          className="block object-cover md:hidden"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-xl ml-6 md:ml-12 space-grotesk">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold tracking-wide text-left md:text-6xl"
        >
          Master Blockchain
          <br />
          Ecosystems Through
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#d946ef]"
          >
            Fun Challenges.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-lg text-left text-gray-300"
        >
          Gamify Your Learning Journey and Collect Unique NFTs
        </motion.p>

        {/* Buttons container - centered on mobile */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-8 md:justify-start md:flex-row md:space-x-4"
        >
          {/* Primary button with glow effect */}
          <Link href="/challenges">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow-button px-12 py-4 text-white text-base font-bold bg-[#e3489f] border-[0.25em] border-[#e3489f] rounded-2xl outline-none shadow-[0_0_1em_0.25em_#e3489f,0_0_4em_1em_rgba(227,72,159,0.781),inset_0_0_0.75em_0.25em_#e3489f] text-shadow-[0_0_0.5em_#e3489f] relative transition-all duration-300 hover:text-[#e3489f] hover:bg-white hover:shadow-[0_0_1em_0.25em_#e3489f,0_0_4em_2em_rgba(227,72,159,0.781),inset_0_0_0.75em_0.25em_#e3489f] active:shadow-[0_0_0.6em_0.25em_#e3489f,0_0_2.5em_2em_rgba(227,72,159,0.781),inset_0_0_0.5em_0.25em_#e3489f]"
            >
              Join a challenge
              <div className="pointer-events-none absolute top-[120%] left-0 h-full w-full bg-[rgba(227,72,159,0.781)] blur-2xl opacity-70 transform perspective-[1.5em] rotateX-[35deg] scale-[1,0.6]"></div>
            </motion.button>
          </Link>

          {/* Secondary button with animation */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="animated-button bg-[#40234E] relative flex items-center gap-4 px-9 py-4 border-4 border-transparent text-base font-semibold text-white rounded-full cursor-pointer overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:rounded-xl group"
            >
              <svg
                viewBox="0 0 24 24"
                className="absolute w-6 fill-white -left-[25%] z-[9] transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
              <span className="relative z-[1] transform -translate-x-3 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3">
                How it works
              </span>
              <svg
                viewBox="0 0 24 24"
                className="absolute w-6 fill-white right-4 z-[9] transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
              <span className="circle absolute top-1/2 left-1/2 w-5 h-5 bg-[#e3489f] rounded-full opacity-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
