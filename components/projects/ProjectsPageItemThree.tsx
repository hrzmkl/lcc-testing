"use client";

import { useState,useMemo,useRef,useEffect } from "react";

const ProjectsPageItemThree = ({ onTagClick }: { onTagClick: (category: string | null) => void }) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [allActive, setAllActive] = useState(false);

  const prevActiveIndexesRef = useRef<number[]>([]);
  const prevAllActiveRef = useRef<boolean>(false);

  const handleClick = (index: number) => {
    setActiveIndexes((prev) => {
      const updatedIndexes = prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index];

      const isAllActive = updatedIndexes.length === buttons.length;
      setAllActive(isAllActive);
     
      return updatedIndexes;
    });
  };

  
  const buttons = useMemo(() => [
    {
      name: "R&D",
      activeBgColor: "bg-[#C0C0C0]", 
      inactiveBgColor: "bg-white",
      activeTextColor: "text-[#2F4F4F]", 
      inactiveTextColor: "text-[#000000]", 
    },
    {
      name: "Santé / Hygiène",
      activeBgColor: "bg-[#98FB98]",
      inactiveBgColor: "bg-white",
      activeTextColor: "text-[#006400]", 
      inactiveTextColor: "text-[#000000]", 
    },


  ], []);

  useEffect(() => {
    if (
      JSON.stringify(activeIndexes) !== JSON.stringify(prevActiveIndexesRef.current) ||
      allActive !== prevAllActiveRef.current
    ) {
      if (allActive) {
        onTagClick(null);
      } else {
        onTagClick(activeIndexes.map((i) => buttons[i].name).join(","));
      }

      prevActiveIndexesRef.current = activeIndexes;
      prevAllActiveRef.current = allActive;
    }
  }, [activeIndexes, allActive, onTagClick, buttons]);
  
  return (
    <div 
                      data-aos="fade-down"
                  data-aos-duration="1000"
     className="w-full h-full flex justify-start items-center gap-3 mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
      {buttons.map((button, index) => (
        <a
          key={index}
          href="#"
          className={`inline-block px-4 py-2 2xl:py-3 12xl:px-6 12xl:py-3 13xl:px-7 13xl:py-4 text-xs 2xl:text-base 10xl:text-lg 11xl:text-xl 12xl:text-2xl 13xl:text-3xl font-normal rounded-full hover:shadow-lg transition hover:scale-[101%] hover:-translate-y-[5px]  hover:shadow-menu ease-in duration-200 ${
            activeIndexes.includes(index)
              ? `${button.activeBgColor} ${button.activeTextColor}`
              : `${button.inactiveBgColor} ${button.inactiveTextColor}`
          }`}
          onClick={() => handleClick(index)}
        >
          {button.name}
        </a>
      ))}
    </div>
  );
};

export default ProjectsPageItemThree;
