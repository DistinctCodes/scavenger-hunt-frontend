/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 28/03/2025 - 12:14:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/03/2025
    * - Author          : 
    * - Modification    : 
**/
"use client"
import WorldcoinLogo from "@/public/ecosystems/Worldcoin_Symbol.png";
import StellarLogo from "@/public/ecosystems/Stellar_Symbol.png";
import EcosystemCard from "./EcosystemCard";

const ecosystems = [
  {
    title: "Worldcoin",
    description:
      "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
    image: WorldcoinLogo,
  },
  {
    title: "Stellar",
    description:
      "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
    image: StellarLogo,
  },
];

const EcosystemSection = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 pt-12 pb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white font-orbitron">
          My Ecosystems
        </h2>
        <button className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-orbitron">
          View all
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ecosystems.map((ecosystem, index) => (
          <EcosystemCard key={index} {...ecosystem} />
        ))}
      </div>
    </div>
  );
};

export default EcosystemSection;
