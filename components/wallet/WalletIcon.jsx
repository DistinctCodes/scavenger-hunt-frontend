import Image from "next/image";

const WALLET_ICONS = {
  "Metamask": "/images/metamask-icon.svg",
  "Trust Wallet": "/images/trust-wallet-icon.svg",
  "Coinbase Wallet": "/images/coinbase-icon.svg",
};

export const WalletIcon = ({ walletName, className = "" }) => {
  const iconPath = WALLET_ICONS[walletName] || "/images/wallet-default.svg";
  
  return (
    <Image
      src={iconPath}
      alt={`${walletName} icon`}
      width={24}
      height={24}
      className={className}
    />
  );
}; 