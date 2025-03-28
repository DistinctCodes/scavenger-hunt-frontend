/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 28/03/2025 - 11:46:49
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/03/2025
    * - Author          : 
    * - Modification    : 
**/
import Image from "next/image";
import clockIcon from "@/public/images/time-icon.svg";
import trophyIcon from "@/public/images/trophy-icon.svg";
import userIcon from "@/public/images/user-icon.svg";
import arrowIcon from "@/public/images/arrow-right-icon.svg";
import Button from "../ui/Button";
import Link from "next/link";

const ChallengeCard = ({
  title,
  description,
  status,
  players,
  timeLeft,
  image,
  nftType,
  bigCard,
}) => {
  return (
    <article className="w-full rounded-[10px] relative mx-h-[268.43px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer">
      <div className="relative w-full rounded">
        <Image
          src={image}
          width={250}
          height={222}
          className="inset-0 w-full h-full"
          alt="card-image"
        />
        <div className="inset-0 w-full h-full bg-gradient-to-b from-[#00000047] to-[#090101c4] absolute" />

        <div className="w-full h-full inset-0 absolute px-[12px] py-[13px]">
          <header className="w-full">
            <div
              className={`border-[#C0ECD4] border w-[50px] rounded-[4px] gap-1 py-[1px] flex items-center justify-center bg-[#858894] ${
                bigCard &&
                "lg:w-[90px] lg:justify-center lg:gap-[12px] lg:rounded-[8px]"
              }`}
            >
              <div
                className={`bg-[#439F6E] w-[4px] h-[4px] rounded-full ${
                  bigCard ? "lg:w-[7px] lg:h-[7px]" : "lg:w-[4px] lg:h-[4px]"
                }`}
              />
              <p
                className={`text-white font-bold text-[6px] uppercase font-orbitron ${
                  bigCard ? "lg:text-[12px]" : "lg:text-[6px]"
                }`}
              >
                {status}
              </p>
            </div>
          </header>
          <section className="w-full bottom-0 pb-[20px] left-0 absolute flex items-center justify-between">
            <div className="w-[70%]">
              <div className="w-full px-[12px]">
                <h2
                  className={`text-white font-semiBold text-[16px] font-orbitron ${
                    bigCard && "lg:text-[20px]"
                  }`}
                >
                  {title}
                </h2>
                <p
                  className={`text-[#FFFFFFCC] font-[100] text-[10px] font-orbitron mt-[10.47px] w-[235.29px] pr-[22px] ${
                    bigCard && "lg:text-[14px] w-auto"
                  }`}
                >
                 {description ? `${description.slice(0, 70)}${description.length > 70 ? "..." : ""}` : "No description available"}

                </p>
              </div>
              <section className="w-full flex items-center justify-between mt-[14px] -bottom-3 relative">
                <div
                  className={`w-[100%] flex items-center justify-start ${
                    bigCard && "gap-[50px]"
                  }`}
                >
                  <div className="min-w-[53px] w-auto flex items-center justify-center flex-col gap-[3.41px]">
                    <div
                      className={`w-[17.75px] h-[17.75px] flex items-center justify-center rounded-sm bg-blue ${
                        bigCard && "lg:w-[30px] lg:h-[33px]"
                      }`}
                    >
                      <Image
                        className={`w-[10px] h-[10px] ${
                          bigCard && "h-[18px] w-[18px]"
                        }`}
                        alt="card-time"
                        src={clockIcon}
                      />
                    </div>
                    <p
                      className={`text-[8px] text-white font-orbitron font-bold truncate text-ellipsis max-w-[60px] ${
                        bigCard && "lg:text-[13px] lg:max-w-[90px]"
                      }`}
                    >
                      {timeLeft}
                    </p>
                  </div>
                  <div className="min-w-[64px] w-auto flex items-center justify-center flex-col gap-[3.41px]">
                    <div
                      className={`w-[17.75px] h-[17.75px] flex items-center justify-center rounded-sm bg-blue ${
                        bigCard && "lg:w-[30px] lg:h-[33px]"
                      }`}
                    >
                      <Image
                        className={`w-[10px] h-[10px] ${
                          bigCard && "h-[18px] w-[18px]"
                        }`}
                        alt="card-players"
                        src={userIcon}
                      />
                    </div>
                    <p
                      className={`text-[8px] text-white font-orbitron font-bold truncate text-ellipsis max-w-[60px] ${
                        bigCard && "lg:text-[13px] lg:max-w-[90px]"
                      }`}
                    >
                      {players}+ players
                    </p>
                  </div>
                  <div className="min-w-[64px] w-auto flex items-center justify-center flex-col gap-[3.41px]">
                    <div
                      className={`w-[17.75px] h-[17.75px] flex items-center justify-center rounded-sm bg-blue ${
                        bigCard && "lg:w-[30px] lg:h-[33px]"
                      }`}
                    >
                      <Image
                        className={`w-[10px] h-[10px] ${
                          bigCard && "h-[18px] w-[18px]"
                        }`}
                        alt="card-trophy"
                        src={trophyIcon}
                      />
                    </div>
                    <p
                      className={`text-[8px] text-white font-orbitron font-bold truncate text-ellipsis max-w-[60px] ${
                        bigCard && "lg:text-[13px] lg:max-w-[90px]"
                      }`}
                    >
                      {nftType}
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <footer className="w-[30%]">
              <div className="w-[30%] absolute right-0 bottom-0 flex items-center justify-end">
                {/* <button className="bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] w-[48.51px] py-[10px.21px] px-[15px] h-[34.64px] rounded-br-[10px]">
                  <Image className="m-auto" src={arrowIcon} alt="card-arrow" />
                </button> */}
                <Link href={`/challenges/${title}`}>
                  <Button
                    variant="gradient"
                    className="w-[48.51px] py-[10px.21px] px-[15px] h-[34.64px] rounded-none rounded-br-[10px]"
                  >
                    <Image
                      className="m-auto"
                      src={arrowIcon}
                      alt="card-arrow"
                    />
                  </Button>
                </Link>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </article>
  );
};

export default ChallengeCard;
