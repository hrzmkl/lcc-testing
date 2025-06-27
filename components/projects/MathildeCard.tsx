/* eslint-disable @next/next/no-img-element */
const MathildeCard = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center rounded-b-2xl hover:shadow-md group cursor-pointer">
      <div className="w-full h-[40%] flex-center rounded-t-2xl">
        <img
          alt="image"
          src="/Images/mathilde.webp"
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>
      <div className="w-full h-[60%] bg-white group-hover:bg-[#fefecd] rounded-b-2xl flex-center">
        <div className="h-[85%] flex flex-col justify-between items-start">
          <p className="text-gray-900 font-bold text-xs 9xl:text-base 11xl:text-lg 13xl:text-xl">
            Mathilde Métairie
          </p>
          <p className="text-gray-900 font-bold text-xs 9xl:text-base 11xl:text-lg 13xl:text-xl">
            Carbon killer depuis 2022
          </p>
          <div className="flex flex-col relative bottom-[3%]">
            <p className="text-gray-900 font-thin text-base 9xl:text-lg 11xl:text-xl 13xl:text-2xl">
              Hossegor
            </p>
            <p className="text-gray-900 font-thin text-base 9xl:text-lg 11xl:text-xl 13xl:text-2xl">
              Photographe
            </p>
            <p className="text-gray-900 font-thin text-base 9xl:text-lg 11xl:text-xl 13xl:text-2xl">
              Indépendante
            </p>
          </div>
          <p className="text-gray-900 font-light text-sm 9xl:text-base 11xl:text-lg 13xl:text-xl">
            PROJETS SOUTENUS
          </p>
          <div className="w-full flex justify-start items-center relative bottom-[4%]">
            <img
              src="/Images/contributeur-1.webp"
              alt="image"
              className="z-50 size-10 8xl:size-11 9xl:size-12 10xl:size-14 12xl:size-16 13xl:size-[5.5rem] object-contain"
            />
            <img
              src="/Images/contributeur-2.webp"
              alt="image"
              className="z-40 size-10 8xl:size-11 9xl:size-12 10xl:size-14 12xl:size-16 13xl:size-[5.5rem] relative right-[5%] object-contain"
            />
            <img
              src="/Images/contributeur-3.webp"
              alt="image"
              className="z-30 size-10 8xl:size-11 9xl:size-12 10xl:size-14 12xl:size-16 13xl:size-[5.5rem] relative right-[10%] object-contain"
            />
            <img
              src="/Images/contributeur-4.webp"
              alt="image"
              className="z-20 size-10 8xl:size-11 9xl:size-12 10xl:size-14 12xl:size-16 13xl:size-[5.5rem] relative right-[15%] object-contain"
            />
            <div className="size-10 8xl:size-11 9xl:size-12 10xl:size-14 12xl:size-16 13xl:size-[5.5rem] rounded-full bg-[#fcfea2] relative right-[22%] mid-xl:right-[21%] 2xl:right-[20%] 8xl:right-[19%] flex-center">
              <p className="font-medium text-base">+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathildeCard;
