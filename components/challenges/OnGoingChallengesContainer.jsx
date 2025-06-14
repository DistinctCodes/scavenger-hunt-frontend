import Image from "next/image";
import Link from "next/link";

const OnGoingChallenges = ({
  title,
  description,
  status,
  players,
  timeLeft,
  image,
  nftType,
  ecosystem,
  level,
}) => {
  // Fixed: Add null checks before calling toLowerCase()
  const getStatusBorderColor = (status) => {
    if (!status) return "border-gray-400"; // Handle null/undefined
    if (status.toLowerCase() === "upcoming") return "border-[#FFB82E]";
    if (status.toLowerCase() === "active") return "border-[#439F6E]";
    return "border-gray-400";
  };

  const getStatusBackgroundColor = (status) => {
    if (!status) return "bg-gray-400"; // Handle null/undefined
    if (status.toLowerCase() === "upcoming") return "bg-[#FFB82E]";
    if (status.toLowerCase() === "active") return "bg-[#439F6E]";
    return "bg-gray-400";
  };

  const getLevelBorderColor = (level) => {
    if (!level) return "border-gray-400"; // Handle null/undefined
    if (level.toLowerCase() === "easy") return "border-[#439F6E]";
    if (level.toLowerCase() === "medium") return "border-[#FFB82E]";
    if (level.toLowerCase() === "hard") return "border-[#F93232]";
    return "border-gray-400";
  };

  const getLevelBackgroundColor = (level) => {
    if (!level) return "bg-gray-400"; // Handle null/undefined
    if (level.toLowerCase() === "easy") return "bg-[#C0ECD4]";
    if (level.toLowerCase() === "medium") return "bg-[#FFEAC1]";
    if (level.toLowerCase() === "hard") return "bg-[#FFD8D8]";
    return "bg-gray-400";
  };

  const getLevelTextColor = (level) => {
    if (!level) return "text-gray-400"; // Handle null/undefined
    if (level.toLowerCase() === "easy") return "text-[#439F6E]";
    if (level.toLowerCase() === "medium") return "text-[#FFB82E]";
    if (level.toLowerCase() === "hard") return "text-[#F93232]";
    return "text-gray-400"; // Fixed: was "bg-gray-400"
  };

  return (
    <article className="w-full md:w-[236px] md:h-[248px] h-[323px] rounded-[10px] overflow-hidden relative bg-pink-600 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer">
      <div className="relative w-full h-full rounded">
        <Image
          src={image}
          alt="card-image"
          fill
          className="inset-0 object-cover w-full h-full"
        />
        <div className="inset-0 w-full h-full bg-gradient-to-b from-[#00000047] to-[#090101c4] absolute" />

        <div className="w-full h-full inset-0 absolute px-[12px] py-[13px]">
          <header className="flex justify-between w-full">
            <div
              className={`w-[70px] h-[27px] rounded-[8px]  flex items-center justify-center gap-1 px-1 bg-[#C0ECD4] bg-opacity-50 ${getStatusBorderColor(
                status
              )} border`}
            >
              <div
                className={` w-[7px] h-[7px] rounded-full ${getStatusBackgroundColor(
                  status
                )} `}
              />
              <p className="text-[10px] font-bold text-white capitalize ">
                {status || "Unknown"}
              </p>
            </div>
            <div
              className={`border w-[70px] h-[27px] rounded-[8px] gap-[13px] ${getLevelBorderColor(
                level
              )} ${getLevelBackgroundColor(
                level
              )} flex items-center justify-center  bg-opacity-50`}
            >
              <p
                className={`text-white font-bold text-[10px] capitalize ${getLevelTextColor(
                  level
                )}`}
              >
                {level || "Unknown"}
              </p>
            </div>
          </header>
          <section className="absolute bottom-0 left-0 flex flex-col items-center justify-between w-full ">
            <div className="w-full px-[12px]">
              <h2 className="text-white font-bold text-[14px] Orbitron ">
                {title}
              </h2>
              <p className="text-[#BFBFBF] font-normal space-grotesk text-[10px]  my-2  ">
                {description}
              </p>
              <button className="w-[90px] h-[22px] rounded-[4px] font-medium text-[10px] bg-white bg-opacity-20 flex justify-center items-center">
                {ecosystem}
              </button>
            </div>
            <section className="w-full px-8   mt-[14px]  relative">
              <main className="flex justify-between ">
                <div className="flex flex-col items-center justify-center w-auto gap-3 ">
                  <div className="w-[25px] h-[25px] flex items-center justify-center rounded-sm bg-[#3B82F6] bg-opacity-50">
                    <Image
                      src="/images/time-icon.svg"
                      alt="card-time"
                      width={10}
                      height={10}
                      className="w-[18px] h-[18px]"
                    />
                  </div>
                  <p className="text-[8px] font-bold text-white   ">
                    {timeLeft}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-auto gap-3 ">
                  <div className="w-[25px] h-[25px] flex items-center justify-center rounded-sm bg-[#3B82F6] bg-opacity-50">
                    <Image
                      src="/images/user-icon.svg"
                      alt="card-players"
                      width={10}
                      height={10}
                      className="w-[18px] h-[18px]"
                    />
                  </div>
                  <p className="text-[8px] font-bold text-white   ">
                    {players}+ players
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-auto gap-3 ">
                  <div className="w-[25px] h-[25px] flex items-center justify-center rounded-sm bg-[#3B82F6] bg-opacity-50">
                    <Image
                      src="/images/trophy-icon.svg"
                      alt="card-trophy"
                      width={10}
                      height={10}
                      className="w-[18px] h-[18px]"
                    />
                  </div>
                  <p className="text-[8px] font-bold text-white   ">
                    {nftType}
                  </p>
                </div>
              </main>
            </section>

            <footer className="w-full mt-1 ">
              <div className="flex items-center justify-end w-full">
                <button className="bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] w-[38px] py-[10px.21px] px-[15px] h-[24px] rounded-br-[10px]">
                  <Link href={`/challenges/${title}`}>
                    <Image
                      src="/images/arrow-right-icon.svg"
                      alt="card-arrow"
                      width={20}
                      height={20}
                      className="m-auto"
                    />
                  </Link>
                </button>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </article>
  );
};

export default OnGoingChallenges;