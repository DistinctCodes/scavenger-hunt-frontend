"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "../ui/Button";
import { useMetaMaskConnection } from "@/lib/useMetaMaskConnection";
import { useTrustWalletConnection } from "@/lib/useTrustWalletConnection";
import { useCoinbaseWalletConnection } from "@/lib/useCoinbaseWalletConnection";
import { Wallet } from "lucide-react";
import { SelectWallet } from "../wallet/SelectWallet";
import { WalletAddressPopup } from "../wallet/WalletAddressPopup";
import { WalletIcon } from "../wallet/WalletIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showAddressPopup, setShowAddressPopup] = useState(false);

  const { 
    address: metaMaskAddress, 
    isConnected: isMetaMaskConnected,
    disconnectWallet: disconnectMetaMask 
  } = useMetaMaskConnection();

  const {
    address: trustAddress,
    isConnected: isTrustConnected,
    disconnectWallet: disconnectTrust
  } = useTrustWalletConnection();

  const {
    address: coinbaseAddress,
    isConnected: isCoinbaseConnected,
    disconnectWallet: disconnectCoinbase
  } = useCoinbaseWalletConnection();

  const connectedAddress = metaMaskAddress || trustAddress || coinbaseAddress;
  const isConnected = isMetaMaskConnected || isTrustConnected || isCoinbaseConnected;

  // Determine which wallet is connected
  const getConnectedWalletName = () => {
    if (isMetaMaskConnected) return "Metamask";
    if (isTrustConnected) return "Trust Wallet";
    if (isCoinbaseConnected) return "Coinbase Wallet";
    return null;
  };

  // Effect to close wallet modal when connected
  useEffect(() => {
    if (isConnected) {
      setShowWalletModal(false);
    }
  }, [isConnected]);

  const handleConnectWallet = () => {
    setShowWalletModal(true);
  };

  const handleCloseModal = () => {
    setShowWalletModal(false);
  };

  const handleDisconnect = async () => {
    if (isMetaMaskConnected) {
      await disconnectMetaMask();
    }
    if (isTrustConnected) {
      await disconnectTrust();
    }
    if (isCoinbaseConnected) {
      await disconnectCoinbase();
    }
    setShowAddressPopup(false);
  };

  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const WalletButton = () => {
    if (!isConnected) {
      return (
        <Button
          variant="gradient"
          className="px-6 py-2 text-lg font-bold h-fit text-texts-important"
          onClick={handleConnectWallet}
        >
          Connect Wallet
        </Button>
      );
    }

    const connectedWalletName = getConnectedWalletName();

    return (
      <div className="flex items-center gap-3">
        {/* Main wallet button with address */}
        <Button
          variant="gradient"
          className="flex items-center gap-2 px-6 py-2 text-lg font-bold h-fit text-texts-important"
          onClick={() => setShowAddressPopup(true)}
        >
          {formatAddress(connectedAddress)}
          <WalletIcon walletName={connectedWalletName} className="w-5 h-5" />
        </Button>
      </div>
    );
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
            className="bg-[#FD7DFF1A] flex justify-center font-orbitron font-bold py-2 rounded-lg mr-4 hover:text-pink-500 px-9"
          >
            Sign In
          </Link>
          <WalletButton />
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
          <WalletButton />
        </div>
      )}

      {/* Wallet Modal */}
      {showWalletModal && <SelectWallet onClose={handleCloseModal} />}

      {/* Wallet Address Popup */}
      {showAddressPopup && connectedAddress && (
        <WalletAddressPopup
          address={connectedAddress}
          onDisconnect={handleDisconnect}
          onClose={() => setShowAddressPopup(false)}
          walletName={getConnectedWalletName()}
        />
      )}
    </nav>
  );
}

export default Navbar;
