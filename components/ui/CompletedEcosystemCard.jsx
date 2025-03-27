import Image from "next/image";

const CompletedEcosystemCard = ({
  title,
  body,
  image,
}) => {
  return (
    <div className="w-full flex flex-row items-center justify-between space-x-4 bg-black/25 border border-[#121212] rounded-[10px] p-4 sm:p-6 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
        <div className="w-16 h-16 relative flex flex-none">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col w-full space-y-2 items-start justify-start">
            <h3 className="text-md font-bold text-white">{title}</h3>
            <p className="text-xs font-normal text-gray-100">{body}</p>
        </div>
    </div>
  );
};

export default CompletedEcosystemCard;