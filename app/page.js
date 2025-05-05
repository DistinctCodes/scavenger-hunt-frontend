"use client";
import { motion, useScroll } from "framer-motion";
import HeroSection from "@/components/homepage/HeroSection";
import FeatureChallenges from "../components/homepage/FeaturedChallenges";
import FeatureSection from "@/components/homepage/FeatureSection";
import Ecosystems from "@/components/homepage/Ecosystems";
import FAQ from "@/components/homepage/FAQ";
import Testimonial from "@/components/homepage/Testimonial";
import HowItWorks from "@/components/homepage/HowItWorks";
import Navbar from "@/components/homepage/Navbar";
import Footer from "@/components/homepage/Footer";

// Enhanced animation variants
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    scale: 0.98,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for silky smooth motion
      type: "spring",
      damping: 30,
      stiffness: 80,
      mass: 1.2,
    },
  },
  exit: {
    y: -30,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{
            once: false,
            amount: 0.2,
            margin: "-100px",
          }}
          variants={fadeInUp}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{
            once: false,
            amount: 0.2,
            margin: "-100px",
          }}
          variants={fadeInUp}
        >
          <FeatureSection />
        </motion.div>

        <motion.div
          className="w-full min-h-full bg-black pb-[40px]"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            FeatureChallenges,
            HowItWorks,
            Ecosystems,
            Testimonial,
            FAQ,
            Footer,
          ].map((Component, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{
                once: false,
                amount: 0.2,
                margin: "-100px",
              }}
              variants={fadeInUp}
            >
              <Component />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
