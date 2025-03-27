"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SelectWallet } from "../wallet/SelectWallet";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const handleConnectWallet = () => {
    setShowWalletModal(true);
  };

  const handleCloseModal = () => {
    setShowWalletModal(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-5 bg-transparent md:px-12 space-grotesk">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/image.png"
          alt="Scavenger Hunt"
          width={170}
          height={48}
        />
      </Link>

      {/* Desktop Menu */}
      <div className="items-center hidden space-x-12 text-lg text-texts-important font-spaceGrotesk md:flex">
        <Link href="/" className="font-medium hover:text-pink-500">
          Home
        </Link>
        <Link href="/about-us" className="font-medium hover:text-pink-500">
          About Us
        </Link>
        <Link href="/contact-us" className="font-medium hover:text-pink-500">
          Contact Us
        </Link>
        <div className="flex items-center space-x-5">
          <Link
            href="#"
            className="bg-[#FD7DFF1A] flex justify-center font-orbitron font-bold py-2 rounded-lg mr-4 hover:text-pink-500 px-9 "
          >
            Sign In
          </Link>
          <Button
            variant="gradient"
            className="px-6 py-2 text-lg font-bold h-fit text-texts-important"
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </Button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#d946ef] text-2xl bg-[#1a1a1a] p-2 rounded"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 flex flex-col z-50 items-center w-full p-6 space-y-4 bg-black top-16 bg-opacity-95 md:hidden">
          <Link href="#" className="text-lg text-white hover:text-pink-500">
            Home
          </Link>
          <Link href="#" className="text-lg text-white hover:text-pink-500">
            About Us
          </Link>
          <Link href="#" className="text-lg text-white hover:text-pink-500">
            Contact Us
          </Link>
          <Link
            href="/sign-in"
            className="text-lg text-white hover:text-pink-500"
          >
            Sign In
          </Link>
          <Button
            variant="gradient"
            className="px-5 py-2 text-lg font-medium h-fit font-orbitron text-texts-important"
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </Button>
        </div>
      )}

      {/* Wallet Modal */}
      {showWalletModal && <SelectWallet onClose={handleCloseModal} />}
    </nav>
  );
};

export default Navbar;
