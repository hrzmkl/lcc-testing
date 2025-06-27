"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CestIciQueToutCommenceSectionTitle = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    // Triggered when 20% of the component is in view
    threshold: 0.2,
  });

  return (
    <p
      ref={ref}
     /* data-aos="fade-up"
      data-aos-duration="1800"
      data-aos-once="true"*/
      className="!text-mm text-[#8d120e] font-bold "
    >
      Département du Noun, Région Ouest -{" "}
      {inView && ( <CountUp start={0} end={12000} duration={2.5} separator="." /> )}{" "}  hectares
    </p>
  );
};

export default CestIciQueToutCommenceSectionTitle;
