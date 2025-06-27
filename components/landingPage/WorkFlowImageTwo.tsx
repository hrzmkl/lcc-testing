import Image from "next/image";

const WorkFlowImageTwo = () => {
  return (
    <Image
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-delay="800"
      width={850}
      height={294}
      quality={25}
      src="/Images/line-2-min.webp"
      alt="Line img"
      className="w-[35%] h-[25vh] mid-xl:w-[33%] 2xl:w-[34%] 2xl:h-[30vh] 8xl:w-[36%] 8xl:h-[25vh] z-20 object-contain relative top-[0.4rem] right-[1%] mid-xl:top-[0.1rem] 2xl:top-[-1rem] 2xl:right-[0%] 11xl:right-[1.8%] 12xl:right-[1%]"
    />
  );
};

export default WorkFlowImageTwo;
