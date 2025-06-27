"use client";
import { motion } from "framer-motion";

const IncubateurDeProjetItemBottom = () => {
  return (
    <div className="w-full h-full flex justify-end items-center">
      <div className="w-[90%] h-full flex-center overflow-x-hidden relative right-0.5 2xl:right-1 cursor-grab">
        <motion.div
          drag="x"
          dragConstraints={{ left: -800, right: 0 }}
          dragElastic={0.1}
          className="w-full h-full flex justify-start items-center gap-3"
        >
          <div className="w-[25%] h-[60%] mid-xl:h-[40%] bg-[#f6ac81] hover:bg-amber-500 flex-center flex-none rounded-2xl relative top-[15%] mid-xl:top-[-5%] 2xl:top-[4%]">
            <p className="text-gray-900 text-xs 2xl:text-lg 9xl:text-xl 11xl:text-2xl 13xl:text-3xl font-medium">
              Low Tech
            </p>
          </div>
          <div className="w-[25%] h-[60%] mid-xl:h-[40%] bg-[#ffc13b] hover:bg-yellow-400 flex-center flex-none rounded-full relative top-[15%] mid-xl:top-[-5%] 2xl:top-[4%]">
            <p className="text-gray-900 text-xs 2xl:text-lg 9xl:text-xl 11xl:text-2xl 13xl:text-3xl font-medium">
              Santé
            </p>
          </div>
          <div className="w-[40%] h-[60%] mid-xl:h-[40%] bg-[#02a0f5] hover:bg-blue-400 flex-center flex-none rounded-full relative top-[15%] mid-xl:top-[-5%] 2xl:top-[4%]">
            <p className="text-gray-900 text-xs 2xl:text-lg 9xl:text-xl 11xl:text-2xl 13xl:text-3xl font-medium">
              Empowerment des Femmes
            </p>
          </div>
          <div className="w-[25%] h-[60%] mid-xl:h-[40%] bg-[#f936f6] hover:bg-fuchsia-500 flex-center flex-none rounded-2xl relative top-[15%] mid-xl:top-[-5%] 2xl:top-[4%] mr-2">
            <p className="text-gray-900 text-xs 2xl:text-lg 9xl:text-xl 11xl:text-2xl 13xl:text-3xl font-medium">
              Low Tech
            </p>
          </div>
          <div className="w-[25%] h-[60%] mid-xl:h-[40%] bg-[#04f62f] hover:bg-green-400 flex-center flex-none rounded-2xl relative top-[15%] mid-xl:top-[-5%] 2xl:top-[4%]">
            <p className="text-gray-900 text-xs 2xl:text-lg font-medium">
              Accèss à l'eau
            </p>
          </div>
          <div className="w-[25%] h-[60%] mid-xl:h-[40%] bg-[#ff3489] hover:bg-rose-500 flex-center flex-none rounded-2xl relative top-[15%] mid-xl:top-[-5%] 2xl:top-[4%]">
            <p className="text-gray-900 text-xs 2xl:text-lg 9xl:text-xl 11xl:text-2xl 13xl:text-3xl font-medium">
              Formation
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IncubateurDeProjetItemBottom;
