"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const LestCatchCarbonSectionImageLeft = () => {
  const [coordinates, setCoordinates] = useState({
    scale: 1,
    y_position: 0,
    zIndex: 0,
  });
  const [showButton, setShowButton] = useState(false);
  const zoomImage = () => {
    setCoordinates({
      scale: 1.1,
      y_position: -39,
      zIndex: 10,
    });
    setShowButton(true);
  };
  const resetImage = () => {
    setCoordinates({
      scale: 1,
      y_position: 0,
      zIndex: 0,
    });
    setShowButton(false);
  };

  return (
    <motion.div
      animate={{
        y: coordinates.y_position,
        scale: coordinates.scale,
        zIndex: coordinates.zIndex,
      }}
      onMouseEnter={zoomImage}
      onMouseLeave={resetImage}
      transition={{ stiffness: 50 }}
      className="w-full h-full flex justify-center items-end bg-center bg-cover bg-no-repeat rounded-2xl bg-[url('/Images/card-program/IMG_0825.webp')] cursor-pointer"
    >

      <motion.div
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col justify-end items-center"
      >
        <motion.p
          animate={{ y: showButton ? -4 : 0 }}
          whileHover={{
            scale: 1.2,
            backgroundColor: "#a3e635",
          }}
          transition={{ duration: 0.5 }}
          className="px-4 py-3 9xl:px-7 9xl:py-4 10xl:px-7 10xl:py-5 12xl:px-8 12xl:py-6 13xl:px-[3.5rem] 13xl:py-9 text-black bg-[#d8fc31] text-xs 2xl:text-sm 8xl:text-lg 10xl:text-2xl 12xl:text-3xl 13xl:text-[2.7rem] font-normal rounded-full cursor-pointer mb-4"
        >
          Stratégie et gouvernance
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LestCatchCarbonSectionImageLeft;
