const WorkFlowItemThreeDescription = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="2000"
      data-aos-delay="1000"
      className="w-full h-full 8xl:h-[85%] flex-center relative bg-[#4b2d04] rounded-3xl"
    >
      <div className="w-[10%] h-full flex justify-start items-center rounded-xl">
        <div className="size-10 bg-[#4b2d04] rotate-[45deg] relative right-1 bottom-4 8xl:right-4"></div>
      </div>
      <div className="w-[90%] h-full flex-center">
        <div className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-3">
          <p className="text-[#dee6a1] text-base 2xl:text-xl 8xl:text-2xl 10xl:text-3xl 11xl:text-4xl 13xl:text-5xl font-extralight text-left relative right-[10%] 10xl:leading-[2.8rem] 11xl:leading-[3rem] 13xl:leading-[3.8rem]">
            Notre méthodologie de mesure d'impact est transparente et repose sur
            des indicateurs précis.
          </p>
          <p className="text-[#dee6a1] text-base 2xl:text-xl 8xl:text-2xl 10xl:text-3xl 11xl:text-4xl 13xl:text-5xl font-extralight text-left relative right-[10%] 10xl:leading-[2.8rem] 11xl:leading-[3rem] 13xl:leading-[3.8rem]">
            Nous vous fournissons chaque année votre rapport d'impact, notamment
            votre équivalent CO2 capturé !
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkFlowItemThreeDescription;
