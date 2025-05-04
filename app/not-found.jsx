"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Link from "next/link";

export default function NotFound() {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      const animation = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animation/notfound.json",
      });

      return () => animation.destroy();
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#060B1C] flex flex-col items-center justify-center px-4">
      <div ref={container} className="w-full max-w-[400px] h-[400px]" />

      <h1 className="text-3xl md:text-4xl text-white font-orbitron font-bold mt-8">
        Page Not Found
      </h1>

      <p className="text-[#858894] text-center mt-4 max-w-[500px] font-spaceGrotesk">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 px-8 py-3 bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] text-white rounded-lg font-orbitron hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </div>
  );
}
