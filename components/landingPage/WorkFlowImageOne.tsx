import Image from "next/image";

const WorkFlowImageOne = () => {
  return (
    <Image
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-delay="500"
      width={844}
      height={285}
      src="/Images/line-1-min.webp"
      alt="Line img"
      className="w-[34%] h-[30vh] mid-xl:w-[33%] mid-xl:h-[19vh] 2xl:w-[33%] 2xl:h-[30vh] 8xl:w-[38%] 8xl:h-[19vh] z-20 object-contain relative right-[1%] bottom-2 mid-xl:left-[0.2%] mid-xl:top-[12%] 2xl:left-[-1%] 2xl:top-[5%] 8xl:top-[2rem] 8xl:left-[1.5%] 10xl:left-[0.5%] 10xl:top-[3rem] 11xl:top-[2.5rem] 11xl:left-[-0.6%] 13xl:left-[1.8%] 13xl:top-[4rem]"
    />
  );
};

export default WorkFlowImageOne;
