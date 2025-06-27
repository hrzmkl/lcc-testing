"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const LestCatchCarbonSectionImageCenter = () => {
  const [showText, setShowText] = useState(false);
  const [coordinates, setCoordinates] = useState({
    scale: 1,
    y_position: 0,
    zIndex: 0,
  });

  const zoomImage = () => {
    setCoordinates({
      scale: 1,
      y_position: -0,
      zIndex: 10,
    });
    setShowText(true);
  };

  const resetImage = () => {
    setCoordinates({
      scale: 1,
      y_position: 0,
      zIndex: 0,
    });
    setShowText(false);
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
      className="w-full h-full rounded-2xl flex justify-center items-end bg-center bg-cover bg-no-repeat bg-[url('/Images/card-program/card4.webp')] cursor-pointer"
    >
      <motion.div
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col justify-end items-center"
      >
        <motion.p
          animate={{ y: showText ? -4 : 0 }}
          whileHover={{
            scale: 1,
            backgroundColor: "#a3e635",
          }}
          transition={{ duration: 0.5 }}
          className=""
        >
          Sur le terrain
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LestCatchCarbonSectionImageCenter;
