import Image from "next/image";

const SectionFiveFormationCard = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center group cursor-pointer">
      <section className="w-full h-[40%] flex justify-center items-start rounded-t-2xl bg-center bg-cover bg-no-repeat bg-[url('/Images/lab-people.webp')]">
        <div className="w-full h-[30%] flex justify-end items-center gap-3">
          <div className="size-9 8xl:size-11 9xl:size-12 11xl:size-14 13xl:size-16 bg-[#f936f6] rounded-full flex-center">
            <Image
              src="/Images/clock.webp"
              alt="clock-img"
              height={20}
              width={20}
              className="w-auto h-5 11xl:h-8 13xl:h-9 object-cover"
            />
          </div>
          <p className="text-gray-900 bg-[#f936f6] font-normal text-xs 2xl:text-lg 10xl:text-xl 11xl:text-2xl 13xl:text-4xl py-2.5 px-5 rounded-full mr-3">
            Formation
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
          </div>
          <div className="w-full flex justify-start items-center">
            <Image
              src="/Images/contributeur-2.webp"
              alt="image"
              height={88}
                width={88}
              className="z-40 size-11 2xl:size-12 8xl:size-11 9xl:size-12 10xl:size-14 12xl:size-16 13xl:size-[5.5rem] object-contain"
            />
          </div>
          <div className="w-full h-[7%] rounded-full flex-center">
            <section className="w-full h-full bg-[#fdf9e9] rounded-full"></section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionFiveFormationCard;
