/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 28/03/2025 - 12:29:12
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/03/2025
    * - Author          : 
    * - Modification    : 
**/

import Image from "next/image";

export default function EcosystemCard({ title, description, image }) {
  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-xl bg-[#D9D9D933]/5 p-8  backdrop-blur-xl shadow-lg">
      <div className="flex items-center space-x-3 mb-8">
        <div className="bg-[#D9D9D933] rounded-full flex items-center h-12 overflow-hidden w-40">
          <Image
            src={image}
            alt={title}
            height={40}
            width={40}
            className="h-full w-auto object-cover rounded-full"
          />
          <span className="px-5 text-sm text-[#BFBFBF] font-orbitron">{title}</span>
        </div>
      </div>
      <div className="text-white">
        <h3 className="text-2xl mb-2 font-orbitron">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
