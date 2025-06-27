"use client";

import { useInView } from "react-intersection-observer";
import { useState } from "react";
import NousVoulonsSectionImageContainer from "./NousVoulonsSectionImageContainer";
import NousVoulonsSectionTextContainer from "./NousVoulonsSectionTextContainer";

const NousVoulonsSection = () => {
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const handleMouseEnter = () => {
    setIsMouseMoving(true);
  };
  const handleMouseLeave = () => {
    setIsMouseMoving(false);
  };
  const { ref, inView } = useInView({
    threshold: 0.2, // 20% visible
  });

  return (
    <div
      ref={ref}
      className={`transition duration-700 ease-in-out ${
        inView ? "bg-[#8d120e]" : "bg-[#d8fc31]"
      }`}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full h-[100vh] 2xl:h-[90vh] 8xl:h-[70vh] flex-center"
      >
        <NousVoulonsSectionTextContainer />
        <NousVoulonsSectionImageContainer />
      </div>
    </div>
  );
};

export default NousVoulonsSection;
