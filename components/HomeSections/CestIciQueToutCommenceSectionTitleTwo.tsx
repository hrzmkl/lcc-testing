"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CestIciQueToutCommenceSectionTitleTwo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    // Triggered when 20% of the component is in view
    threshold: 0.2,
  });

  return (
    <p
       ref={ref}
      // data-aos="fade-left"
      // data-aos-duration="800"
      // data-aos-once="true"
        className="!text-mm text-[#8d120e] font-bold "
    > Région des plateaux -{" "}
      {inView && (  <CountUp start={10} end={20000} duration={1.3} separator="." />
      )}{" "}
      hectares
    </p>
  );
};

export default CestIciQueToutCommenceSectionTitleTwo;
