/* eslint-disable @next/next/no-img-element */
// @ts-ignore
import Link from "next/link";

const LeLabCardItems = ({
  projectType,
  projectTypeBgColor,
  title,
  subTitle,
  goal,
  location,
  tag_1,
  tag_2,
  tag_3,
  link,
}: LeLabCardProps) => {
  return (
    <Link
      href={`/${link}`}
      className="w-full h-full flex flex-col justify-center items-center group"
    >
      <section className="w-full flex justify-center items-start rounded-t-2xl bg-center bg-cover bg-no-repeat bg-[url('/Images/lab-people.webp')]">
        <div className="w-full   flex justify-end items-center gap-3">
          <div
            className="size-9 2xl:size-12 13xl:size-14 rounded-full flex-center"
            style={{ backgroundColor: projectTypeBgColor }}
          >
            <img
              src="/Images/clock.webp"
              alt="clock-img"
              className="w-auto h-5 2xl:h-7 11xl:h-8 13xl:h-9 object-cover"
            />
          </div>
          <p
            className="text-gray-900 font-normal text-xs 2xl:text-lg 10xl:text-xl 11xl:text-2xl 13xl:text-4xl py-2.5 px-5 rounded-full mr-3"
            style={{ backgroundColor: projectTypeBgColor }}
          >
            {projectType}
          </p>
        </div>
      </section>
      <section className="w-full h-[55%] flex-center rounded-b-2xl bg-white group-hover:bg-[#fcfecd] group-hover:shadow-lg">
        <div className="h-[85%] flex flex-col justify-between items-start">
          <p className="text-gray-900 text-base 2xl:text-xl 10xl:text-2xl 12xl:text-3xl 13xl:text-4xl font-bold">
            Formation à la fabrication de <br /> biopesticides et germoires
          </p>
          <p className="text-gray-900 text-xs 2xl:text-base 10xl:text-lg 12xl:text-2xl 13xl:text-3xl font-normal">
            Accompagner les producteurs vers des <br /> process de qualité et
            sans intrants de <br /> synthèse sans surcoût financier.
          </p>
          <div className="w-full flex flex-col justify-center items-center gap-1 8xl:gap-2">
            <div className="w-full flex justify-start items-center gap-2">
              <img
                src="/Images/hat.webp"
                alt="hat_img"
                className="w-auto h-4 10xl:h-6 12xl:h-7 13xl:h-8 object-contain"
              />
              <p className="text-gray-900 text-xs 2xl:text-base 10xl:text-lg 12xl:text-xl 13xl:text-3xl font-semibold">
                200 fermiers bénéficiaires
              </p>
            </div>
            <div className="w-full flex justify-start items-center gap-2">
              <img
                src="/Images/location.webp"
                alt="location_img"
                className="w-auto h-6 10xl:h-7 12xl:h-9 13xl:h-10 object-contain ml-1 10xl:ml-3"
              />
              <p className="text-gray-900 text-xs 2xl:text-base 10xl:text-lg 12xl:text-xl 13xl:text-3xl font-semibold 8xl:ml-2 13xl:ml-3">
                Kouoptamo
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-2 8xl:gap-3">
            <div className="w-full flex justify-start items-center gap-2">
              <p className="text-gray-900 font-normal text-xs 2xl:text-base 10xl:text-lg 12xl:text-2xl 13xl:text-3xl py-1.5 px-3 rounded-full border border-gray-900">
                LOW TECH
              </p>
              <p className="text-gray-900 font-normal text-xs 2xl:text-base 10xl:text-lg 12xl:text-2xl 13xl:text-3xl py-1.5 px-3 rounded-full border border-gray-900">
                AGRICULTURE
              </p>
            </div>
            <div className="w-full flex justify-start items-center">
              <p className="text-gray-900 font-normal text-xs 2xl:text-base 10xl:text-lg 12xl:text-2xl 13xl:text-3xl py-1.5 px-3 rounded-full border border-gray-900">
                IMPACT SOCIAL
              </p>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default LeLabCardItems;
