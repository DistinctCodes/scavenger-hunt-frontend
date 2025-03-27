import { useState, useEffect } from "react";
import { BrowserProvider } from "ethers";

export const useTrustWalletConnection = () => {
  const [address, setAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check for Trust Wallet provider
    const checkConnection = async () => {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          // Check if Trust Wallet is available
          if (window.ethereum.isTrust) {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts && accounts.length > 0) {
              setAddress(accounts[0]);
              setIsConnected(true);
              setProvider(new BrowserProvider(window.ethereum));
            }
          }
        } catch (error) {
          console.error("Error checking Trust Wallet connection:", error);
        }
      }
    };

    checkConnection();
  }, []);

  const connectTrustWallet = async () => {
    try {
      setIsLoading(true);
      setError(null);

      if (!window.ethereum || !window.ethereum.isTrust) {
        throw new Error("Trust Wallet not detected. Please install the app and connect.");
      }

      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (!accounts || accounts.length === 0) {
        throw new Error("No accounts found");
      }

      const userAddress = accounts[0];
      const browserProvider = new BrowserProvider(window.ethereum);

      setAddress(userAddress);
      setProvider(browserProvider);
      setIsConnected(true);

      return userAddress;
    } catch (error) {
      console.error("Trust Wallet Connection Error:", error);
      
      let friendlyErrorMessage = "Failed to connect to Trust Wallet";
      
      if (error.code === 4001) {
        friendlyErrorMessage = "Connection request was cancelled";
      } else if (error.message.includes("not detected")) {
        friendlyErrorMessage = "Trust Wallet not detected. Please install the app and connect.";
      }
      
      setError(friendlyErrorMessage);
      setIsConnected(false);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      // Clear local state
      setAddress(null);
      setIsConnected(false);
      setProvider(null);
      setError(null);

      // If ethereum provider exists, request account disconnection
      if (window.ethereum && window.ethereum.isTrust) {
        try {
          await window.ethereum.request({
            method: "wallet_requestPermissions",
            params: [{ eth_accounts: {} }]
          });
        } catch (revokeError) {
          console.warn("Error revoking permissions:", revokeError);
        }
      }

      console.log("Trust Wallet disconnected");
    } catch (disconnectError) {
      console.error("Disconnect error:", disconnectError);
    }
  };

  return {
    address,
    isConnected,
    provider,
    error,
    isLoading,
    connectTrustWallet,
    disconnectWallet,
  };
};