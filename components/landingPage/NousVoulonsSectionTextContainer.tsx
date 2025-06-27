const NousVoulonsSectionTextContainer = () => {
  return (
    <section className="w-[50%] h-full flex justify-end items-center">
      <div className="w-[65%] h-[70%] mid-xl:h-[50%] 2xl:w-[75%] 2xl:h-[58%] 8xl:w-[58%] 8xl:h-[65%] flex flex-col justify-between items-start">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className="text-[#ff630f]  text-4xl 2xl:text-5xl 8xl:text-[4rem] 9xl:text-[4.3rem] 10xl:text-[4.5rem] 11xl:text-[5rem] 12xl:text-[5.5rem] 12xl:leading-[5.8rem] 13xl:text-[7.8rem] 13xl:leading-[7.6rem] text-left"
        >
          Nous voulons faire de la <br /> consommation <br /> mondiale{" "}
          <br /> de café une arme de transformation mondiale
        </p>
        <p className="text-[#ff630f] text-base text-left 8xl:text-[1.5rem] 8xl:leading-[2.2rem] 9xl:text-[1.6rem] 10xl:text-[1.85rem] 10xl:leading-[2.7rem] 11xl:text-[1.9rem] 11xl:leading-[2.9rem] 12xl:text-[2.3rem] 12xl:leading-[3.4rem] 13xl:text-[3.2rem] 13xl:leading-[5rem] relative bottom-[1%]">
          en une arme de transformation agricole à grande échelle <br /> pour
          lutter contre les gaz à effet de serre. Le café, <br /> industrie
          mondiale, occupe 11 millions d'hectares dont la <br /> transformation
          permettrait d'absorber 1.5% de nos <br /> émissions annuelles
          planétaire.
        </p>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="200"
          className="text-[#8d120e] bg-[#d8fc31] text-sm 2xl:text-lg 8xl:text-xl 9xl:text-[1.4rem] 10xl:text-[1.6rem] 12xl:text-[1.9rem] 13xl:text-[2.5rem] font-medium px-7 py-5 8xl:px-10 8xl:py-8 10xl:px-[3rem] 10xl:py-10 12xl:px-[3.5rem] 12xl:py-[3.4rem] 13xl:px-[4rem] 13xl:py-[3.9rem] rounded-full cursor-pointer"
        >
          Comment ça marche !
        </p>
      </div>
    </section>
  );
};

export default NousVoulonsSectionTextContainer;
