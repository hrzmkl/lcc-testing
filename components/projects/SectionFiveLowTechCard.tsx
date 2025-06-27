"use client";

import Image from "next/image";
import { useState } from "react";

const SectionFiveLowTechCard = () => {
  const [isImageShown, setIsImageShown] = useState(false);
  const handleMouseEnter = () => {
    setIsImageShown(true);
  };
  const handleMouseLeave = () => {
    setIsImageShown(false);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center group cursor-pointer">
      <section className="w-full h-[40%] flex justify-center items-start rounded-t-2xl bg-center bg-cover bg-no-repeat bg-[url('/Images/lab-people.webp')]">
        <div className="w-full h-[30%] flex justify-end items-center gap-3">
          <div className="size-9 8xl:size-11 9xl:size-12 11xl:size-14 13xl:size-16 bg-[#f6ac81] rounded-full flex-center">
            <Image
              src="/Images/clock.webp"
              alt="clock-img"
              height={36}
              width={36}
              className="w-auto h-5 11xl:h-8 13xl:h-9 object-cover"
            />
          </div>
          <p className="text-gray-900 bg-[#f6ac81] font-normal text-xs 2xl:text-lg 10xl:text-xl 11xl:text-2xl 13xl:text-4xl py-2.5 px-5 rounded-full mr-3">
            Low Tech
          </p>
        </div>
      </section>
      <section className="w-full h-[60%] flex-center rounded-b-2xl bg-white group-hover:bg-[#fcfecd] group-hover:shadow-lg">
        <div className="w-[90%] h-[90%] flex flex-col justify-between items-start">
          <p className="text-gray-900 text-base 2xl:text-xl 10xl:text-2xl 12xl:text-3xl 13xl:text-4xl font-semibold">
            Formation à la fabrication de <br /> biopesticides et germoires
          </p>
          <p className="text-gray-900 text-xs 2xl:text-base 10xl:text-lg 12xl:text-2xl 13xl:text-3xl font-normal">
            Accompagner les producteurs vers des <br /> process de qualité et
            sans intrants de <br /> synthèse sans surcoût financier.
          </p>
          <div className="w-full flex flex-col justify-center items-center gap-1">
            <div className="w-full flex justify-start items-center gap-2">
              <Image
                src="/Images/hat.webp"
                alt="hat_img"
                height={32}
                width={32}
                className="w-auto h-4 10xl:h-6 12xl:h-7 13xl:h-8 object-contain"
              />
              <p className="text-gray-900 text-xs 2xl:text-base 10xl:text-lg 12xl:text-xl 13xl:text-3xl font-semibold">
                200 fermiers bénéficiaires
              </p>
            </div>
            <div className="w-full flex justify-start items-center gap-2">
              <Image
                src="/Images/location.webp"
                alt="hat_img"
                height={40}
                width={40}
                className="w-auto h-6 10xl:h-7 12xl:h-9 13xl:h-10 10xl:ml-3 object-contain ml-1"
              />
              <p className="text-gray-900 text-xs 2xl:text-base 10xl:text-lg 12xl:text-xl 13xl:text-3xl 8xl:ml-2 13xl:ml-3 font-semibold ml-1">
                Kouoptamo
              </p>
            </div>
          </div>
          <div className="w-full flex justify-start items-center gap-x-2 relative top-[2%] 2xl:top-[0.5%] 9xl:top-[2%] 12xl:top-[3%] 13xl:top-[4%]">
            <p className="text-gray-900 font-normal text-[0.65rem] 10xl:text-lg 12xl:text-xl 13xl:text-2xl py-1.5 px-4 rounded-full border border-gray-900">
              LOW TECH
            </p>
            <p className="text-gray-900 font-normal text-[0.65rem] 10xl:text-lg 12xl:text-xl 13xl:text-2xl py-1.5 px-4 rounded-full border border-gray-900">
              AGRICULTURE
            </p>
          </div>
          <div className="w-full flex justify-start items-center flex-wrap gap-2">
            <p className="text-gray-900 font-normal text-[0.65rem] 10xl:text-lg 12xl:text-xl 13xl:text-2xl py-1.5 px-4 rounded-full border border-gray-900">
              IMPACT SOCIAL
            </p>
            {isImageShown && (
              <div className="w-[35%] h-[2rem] 10xl:h-[3rem] 12xl:h-[3.5rem] 13xl:h-[4rem] bg-white rounded-full flex flex-col justify-center items-center shadow-lg relative right-[18%] mid-xl:right-[20%] 2xl:right-[19%] 2xl:bottom-[7%] 8xl:right-[25%] 9xl:right-[23%] 9xl:bottom-[-35%] 10xl:right-[29.5%] 10xl:bottom-[-25%] 11xl:bottom-[-30%] 12xl:right-[28.5%] 12xl:bottom-[-40%] 13xl:right-[23.5%]">
                <p className="text-gray-900 font-normal text-[0.65rem] 10xl:text-base 12xl:text-lg 13xl:text-xl relative top-[25%]">
                  Géraldine P.
                </p>
                <span className="size-3 bg-white rotate-[45deg] relative top-[20%]"></span>
              </div>
            )}
          </div>
          <div className="w-full flex justify-start items-center">
            <Image
              src="/Images/contributeur-1.webp"
              alt="image"
              height={88}
              width={88}
              className="z-50 size-11 2xl:size-12 8xl:size-11 9xl:size-12 10xl:size-14 12xl:size-16 13xl:size-[5.5rem] object-contain"
            />
            <Image
              src="/Images/contributeur-2.webp"
              alt="image"
              height={88}
              width={88}
              className="z-40 size-11 2xl:size-12 8xl:size-11 9xl:size-12 10xl:size-14 12xl:size-16 13xl:size-[5.5rem] relative right-[5%] object-contain"
            />
            <Image
              src="/Images/contributeur-3.webp"
              alt="image"
              height={88}
              width={88}
              className="z-30 size-11 2xl:size-12 8xl:size-11 9xl:size-12 10xl:size-14 12xl:size-16 13xl:size-[5.5rem] relative right-[10%] object-contain"
            />
            <Image
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              height={88}
              width={88}
              src="/Images/contributeur-4.webp"
              alt="image"
              className="z-20 size-11 2xl:size-12 8xl:size-11 9xl:size-12 10xl:size-14 12xl:size-16 13xl:size-[5.5rem] relative right-[15%] object-contain"
            />
            <div className="size-11 2xl:size-12 8xl:size-11 9xl:size-12 10xl:size-14 12xl:size-16 13xl:size-[5.5rem] rounded-full relative right-[17%] flex-center">
              <p className="font-normal text-base">+4</p>
            </div>
          </div>
          <div className="w-full h-[7%] rounded-full flex-center">
            <section className="w-[60%] h-full bg-loading rounded-l-full flex justify-end items-center">
              <p className="text-xs 8xl:text-sm 10xl:text-base 12xl:text-lg 13xl:text-2xl font-light relative right-[5%]">
                3700 €
              </p>
            </section>
            <section className="w-[40%] h-full bg-[#fdf9e9] rounded-r-full"></section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionFiveLowTechCard;
