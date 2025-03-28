"use client";
import { useTrustWalletConnection } from "@/lib/useTrustWalletConnection";
import { useMetaMaskConnection } from "@/lib/useMetaMaskConnection";
import { useCoinbaseWalletConnection } from "@/lib/useCoinbaseWalletConnection";
import { CircleArrowLeft, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";

export const EnterWalletPassword = ({ wallet, onBack, onClose }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { 
    connectTrustWallet, 
    isConnected: isTrustConnected, 
    error: trustError, 
    isLoading: isTrustLoading 
  } = useTrustWalletConnection();

  const {
    connectMetaMask,
    isConnected: isMetaMaskConnected,
    error: metaMaskError,
    isLoading: isMetaMaskLoading
  } = useMetaMaskConnection();

  const {
    connectCoinbaseWallet,
    isConnected: isCoinbaseConnected,
    error: coinbaseError,
    isLoading: isCoinbaseLoading
  } = useCoinbaseWalletConnection();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUnlock = async () => {
    console.log(`Attempting to unlock ${wallet.name}`);
    
    try {
      let connectedAddress;
      
      switch(wallet.name) {
        case "Metamask":
          console.log('Connecting to MetaMask...');
          connectedAddress = await connectMetaMask();
          break;
        case "Trust Wallet":
          console.log('Connecting to Trust Wallet...');
          connectedAddress = await connectTrustWallet();
          break;
        case "Coinbase Wallet":
          console.log('Connecting to Coinbase Wallet...');
          connectedAddress = await connectCoinbaseWallet();
          break;
        default:
          console.error('Unknown wallet type');
          return;
      }

      if (connectedAddress) {
        console.log('Wallet successfully connected:', connectedAddress);
        onClose(); // Close the modal after successful connection
      } else {
        console.error('No address returned from connection');
      }
    } catch (error) {
      console.error('Connection failed:', error);
    }
  };

  // Close modal when connection is successful
  useEffect(() => {
    if (isTrustConnected || isMetaMaskConnected || isCoinbaseConnected) {
      onClose();
    }
  }, [isTrustConnected, isMetaMaskConnected, isCoinbaseConnected, onClose]);

  const isLoading = isTrustLoading || isMetaMaskLoading || isCoinbaseLoading;
  const error = trustError || metaMaskError || coinbaseError;

  return (
    <div className="flex h-full flex-col rounded-xl bg-[#060B1C] border border-[#FFFFFF33] pb-6 mb-6">
      <div className="relative mb-16">
        <button onClick={onBack} className="absolute left-4 top-4 flex ">
          <CircleArrowLeft className="h-10 w-10 text-gray-100 hover:text-gray-300" />
        </button>
      </div>
      <div className="flex flex-1 flex-col items-center justify-start px-8">
        {wallet.icon && (
          <img
            src={wallet.icon || "/placeholder.svg"}
            alt=""
            className="h-12 w-12 mb-4"
          />
        )}
        <h3 className="mb-2 text-sm font-medium text-white">{wallet.name}</h3>
        <p className="mb-6 text-gray-400 font-normal text-xs">
          Click 'Connect {wallet.name}' to connect
        </p>
        
        <button
          onClick={handleUnlock}
          disabled={isLoading}
          className={`mx-auto w-fit py-2 px-8 rounded-xl ${
            isLoading 
              ? "bg-gray-500 cursor-not-allowed" 
              : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          } text-sm font-medium text-white`}
        >
          {isLoading ? "Connecting..." : `Connect ${wallet.name}`}
        </button>

        {error && (
          <p className="text-red-500 text-xs mt-4 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};
