import { useState, useEffect } from "react";
import { BrowserProvider } from "ethers";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

export const useCoinbaseWalletConnection = () => {
  const [address, setAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [coinbaseWallet, setCoinbaseWallet] = useState(null);

  useEffect(() => {
    // Initialize Coinbase Wallet
    const coinbaseWalletSDK = new CoinbaseWalletSDK({
      appName: 'Scavenger Hunt',
      appLogoUrl: '/images/logo.png',
      darkMode: true
    });
    
    setCoinbaseWallet(coinbaseWalletSDK);

    // Check for existing connection
    const checkConnection = async () => {
      try {
        const ethereum = coinbaseWalletSDK.makeWeb3Provider();
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts && accounts.length > 0) {
          setAddress(accounts[0]);
          setIsConnected(true);
          setProvider(new BrowserProvider(ethereum));
        }
      } catch (error) {
        console.error("Error checking Coinbase Wallet connection:", error);
      }
    };

    checkConnection();
  }, []);

  const connectCoinbaseWallet = async () => {
    try {
      setIsLoading(true);
      setError(null);

      if (!coinbaseWallet) {
        throw new Error("Coinbase Wallet SDK not initialized");
      }

      const ethereum = coinbaseWallet.makeWeb3Provider();
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      if (!accounts || accounts.length === 0) {
        throw new Error("No accounts found");
      }

      const userAddress = accounts[0];
      const browserProvider = new BrowserProvider(ethereum);

      setAddress(userAddress);
      setProvider(browserProvider);
      setIsConnected(true);

      return userAddress;
    } catch (error) {
      console.error("Coinbase Wallet Connection Error:", error);
      
      let friendlyErrorMessage = "Failed to connect to Coinbase Wallet";
      if (error.code === 4001) {
        friendlyErrorMessage = "Connection request was cancelled";
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
      if (coinbaseWallet) {
        await coinbaseWallet.disconnect();
      }
      setAddress(null);
      setIsConnected(false);
      setProvider(null);
      setError(null);
    } catch (error) {
      console.error("Disconnect error:", error);
    }
  };

  return {
    address,
    isConnected,
    provider,
    error,
    isLoading,
    connectCoinbaseWallet,
    disconnectWallet,
  };
}; 