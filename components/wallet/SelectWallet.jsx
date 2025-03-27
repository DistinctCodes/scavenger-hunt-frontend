"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { EnterWalletPassword } from "./EnterWalletPassword";

export const SelectWallet = ({ onClose }) => {
  const [selectedWallet, setSelectedWallet] = useState(null);

  const wallets = [
    {
      id: "metamask",
      name: "Metamask",
      icon: "/images/metamask-icon.svg",
    },
    {
      id: "trust",
      name: "Trust Wallet",
      icon: "/images/trust-wallet-icon.svg",
    },
    {
      id: "coinbase",
      name: "Coinbase Wallet",
      icon: "/images/coinbase-icon.svg",
    },
  ];

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet);
  };

  const handleBack = () => {
    setSelectedWallet(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end font-orbitron">
      <div
        className="absolute inset-0 md:bg-[#1C338200]/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 flex flex-col md:flex-row  w-full max-w-[590px] md:h-[400px] overflow-hidden rounded-xl bg-[#121727] m-6 md:mt-10 md:mr-10">
        <div className="hidden md:flex absolute inset-0 bg-[url('/images/scavenger-wallet-bg.png')] bg-cover bg-center bg-no-repeat brightness-50 before:absolute before:inset-0 before:bg-[url('/images/scavenger-wallet-bg.png')] before:bg-cover before:bg-center before:bg-no-repeat before:rotate-90 before:scale-125 before:opacity-90" />
        {/* Left section with rotated and dimmed background image */}
        <div className="relative flex w-full md:w-[45%] flex-col justify-between max-w-sm p-8">
          {/* Content */}
          <div className="relative z-10 space-y-2">
            <h2 className="text-lg font-medium text-white">
              {selectedWallet ? "Enter your password" : "Select your wallet."}
            </h2>
            <p className=" text-gray-400 font-normal text-xs">
              {selectedWallet
                ? "To unlock and connect to your wallet, you need to enter your password"
                : "Click your wallet from the list for wallet connection"}
            </p>
          </div>

          {!selectedWallet && (
            <div className="relative hidden md:inline-block z-10 text-gray-400 text-[10px] font-spaceGrotesk">
              By connecting your wallet, you agree to our{" "}
              <Link href="#" className="text-white hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-white hover:underline">
                Privacy Policy
              </Link>
              .
            </div>
          )}
        </div>

        {/* Right section */}
        <div className="z-10  md:w-[55%] mx-5 md:mr-5 md:my-5 rounded-xl">
          {selectedWallet ? (
            <EnterWalletPassword
              wallet={selectedWallet}
              onBack={handleBack}
              onClose={onClose}
            />
          ) : (
            <div className="flex h-full flex-col space-y-5 rounded-xl bg-[#060B1C] border border-[#FFFFFF33] py-6 px-4">
              {wallets.map((wallet) => (
                <button
                  key={wallet.id}
                  className="flex py-3.5 w-full items-center justify-start px-4 rounded-xl bg-[#121727] text-white transition-colors hover:bg-[#232338]"
                  onClick={() => handleWalletSelect(wallet)}
                >
                  {wallet.icon ? (
                    <div className="mr-3 flex items-center">
                      <Image
                        src={wallet.icon || "/placeholder.svg"}
                        alt={wallet.name}
                        width={32}
                        height={32}
                      />
                      <span className="ml-3 text-sm">{wallet.name}</span>
                    </div>
                  ) : (
                    <span className="text-xl">{wallet.name}</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {!selectedWallet && (
          <div className="relative md:hidden  text-gray-400 p-8 text-[10px] max-w-80 mx-auto text-center font-spaceGrotesk">
            By connecting your wallet, you agree to our{" "}
            <Link href="#" className="text-white hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-white hover:underline">
              Privacy Policy
            </Link>
            .
          </div>
        )}
      </div>
    </div>
  );
};
