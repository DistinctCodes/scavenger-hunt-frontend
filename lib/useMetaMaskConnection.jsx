import { useState, useEffect } from "react";
import { BrowserProvider } from "ethers";

export const useMetaMaskConnection = () => {
  const [address, setAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Check initial connection state
  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts && accounts.length > 0) {
            setAddress(accounts[0]);
            setIsConnected(true);
            setProvider(new BrowserProvider(window.ethereum));
          }
        } catch (error) {
          console.error("Error checking MetaMask connection:", error);
        }
      }
    };

    checkConnection();
  }, []);

  // Listen for account changes
  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          setIsConnected(true);
        } else {
          setAddress(null);
          setIsConnected(false);
          setProvider(null);
        }
      };

      const handleChainChanged = () => {
        window.location.reload();
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      };
    }
  }, []);

  const connectMetaMask = async () => {
    try {
      setIsLoading(true);
      setError(null);

      console.log("Attempting MetaMask connection...");

      if (!window.ethereum) {
        throw new Error("MetaMask not detected. Please install the extension.");
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (!accounts || accounts.length === 0) {
        throw new Error("No accounts found. Please connect your MetaMask wallet.");
      }

      const userAddress = accounts[0];
      const browserProvider = new BrowserProvider(window.ethereum);
      const signer = await browserProvider.getSigner();

      setAddress(userAddress);
      setProvider(browserProvider);
      setIsConnected(true);

      console.log("MetaMask successfully connected", {
        address: userAddress,
      });

      return userAddress;
    } catch (connectionError) {
      console.error("MetaMask Connection Error:", connectionError);

      let friendlyErrorMessage = "Failed to connect to MetaMask";

      if (connectionError.code === 4001) {
        friendlyErrorMessage = "Connection request was cancelled";
      } else if (connectionError.message.includes("user rejected")) {
        friendlyErrorMessage = "You declined the wallet connection";
      } else if (connectionError.message.includes("No provider")) {
        friendlyErrorMessage = "MetaMask not detected. Please install the extension";
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
      if (window.ethereum) {
        try {
          // Clear permissions and disconnect
          await window.ethereum.request({
            method: "wallet_revokePermissions",
            params: [{ eth_accounts: {} }]
          });
        } catch (revokeError) {
          console.warn("Error revoking permissions:", revokeError);
        }
      }

      console.log("MetaMask disconnected");
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
    connectMetaMask,
    disconnectWallet,
  };
}; 