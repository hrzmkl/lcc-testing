"use client";

import { useState, useEffect, useRef,useMemo } from "react";

const ProjectsPageItemOne = ({
  onTagClick,
  resetFilters,
}: {
  onTagClick: (category: string | null) => void;
  resetFilters: () => void;
}) => {
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
  
  const handleReset = () => {
    setActiveIndexes([]);
    setAllActive(false);
    resetFilters(); 
  };

  const buttons = useMemo(() => [
    {
      name: "Empowerment des Femmes",
      activeBgColor: "bg-[#FF00FF]",
      inactiveBgColor: "bg-white",
      activeTextColor: "text-[#FF1493]",
      inactiveTextColor: "text-[#000000]",
    },
    {
      name: "Entrepreneuriat",
      activeBgColor: "bg-[#B22222]",
      inactiveBgColor: "bg-white",
      activeTextColor: "text-[#FFD700]",
      inactiveTextColor: "text-[#000000]",
    },
    {
      name: "Formation",
      activeBgColor: "bg-[#EEE8AA]",
      inactiveBgColor: "bg-white",
      activeTextColor: "text-[#8A2BE2]",
      inactiveTextColor: "text-[#000000]",
    },
    {
      name: "Low Tech",
      activeBgColor: "bg-[#A52A2A]",
      inactiveBgColor: "bg-white",
      activeTextColor: "text-[#FF6347]",
      inactiveTextColor: "text-[#000000]",
    },
    {
      name: "Éducation",
      activeBgColor: "bg-[#FF7F50]",
      inactiveBgColor: "bg-white",
      activeTextColor: "text-[#FFFFFF]",
      inactiveTextColor: "text-[#000000]",
    },
    {
      name: "Réduction de la pénibilité",
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

export default ProjectsPageItemOne;