/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const DiorCard = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center rounded-b-2xl hover:shadow-md group cursor-pointer">
      <div className="w-full h-[40%] bg-black flex-center rounded-t-2xl">
        <img
          alt="dior_logo"
          src="/Images/dior-logo.webp"
          className="w-[30%] h-auto object-contain"
        />
      </div>
      <div className="w-full h-[60%] bg-white group-hover:bg-[#fefecd] rounded-b-2xl flex-center">
        <div className="h-[85%] flex flex-col justify-between items-start">
          <p className="text-gray-900 font-light text-sm 9xl:text-base 11xl:text-lg 13xl:text-xl">
            DIOR COUTURE
          </p>
          <div className="flex flex-col relative bottom-[3%]">
            <p className="text-gray-900 font-bold text-xs 9xl:text-base 11xl:text-lg 13xl:text-xl">
              Carbon killer depuis 2022
            </p>
            <p className="text-gray-900 font-thin text-base 9xl:text-lg 11xl:text-xl 13xl:text-2xl">
              Paris
            </p>
          </div>
          <div className="flex flex-col relative bottom-[1.5%]">
            <p className="text-gray-900 font-bold text-xs 9xl:text-sm 11xl:text-base 13xl:text-lg">
              Industrie de luxe
            </p>
            <Link
              href="https://www.dior.com/fr"
              target="_blank"
              rel="noreferrer"
              className="text-gray-900 font-thin text-sm 9xl:text-base 11xl:text-lg 13xl:text-xl"
            >
              https://www.dior.com/fr
            </Link>
          </div>
          <p className="text-gray-900 font-light text-sm 9xl:text-base 11xl:text-lg 13xl:text-xl">
            PROJETS SOUTENUS
          </p>
          <div className="w-full flex justify-start items-center relative bottom-[4%]">
            <img
              src="/Images/contributeur-1.webp"
              alt="image"
              className="z-10 size-10 8xl:size-11 9xl:size-12 10xl:size-14 12xl:size-16 13xl:size-[5.5rem] object-contain"
            />
            <img
              src="/Images/contributeur-2.webp"
              alt="image"
              className="z-0 size-10 8xl:size-11 9xl:size-12 10xl:size-14 12xl:size-16 13xl:size-[5.5rem] relative right-[5%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiorCard;
