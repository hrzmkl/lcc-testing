"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import ImageKit from "../ui/ImageKit";

const TogoModal = dynamic(() => import("./CestIciQueToutCommence/TogoModal"), { ssr: false });
const CamerounModal = dynamic(() => import("./CestIciQueToutCommence/CamerounModal"), { ssr: false });

// bg-[#f8bfeb]
const CestIciQueToutCommenceSection = () => {
  const [isCamerounShown, setIsCamerounShown] = useState(false);
  const [isTogoShown, setIsTogoShown] = useState(false);

  const camerounRef = useRef<HTMLDivElement>(null);
  const togoRef = useRef<HTMLDivElement>(null);

  const handleMouseEnterOnCameroun = () => {
    setIsCamerounShown(true);
    setIsTogoShown(false);
  };

  const handleMouseEnterOnTogo = () => {
    setIsTogoShown(true);
    setIsCamerounShown(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (camerounRef.current && !camerounRef.current.contains(target)) {
      setIsCamerounShown(false);
    }
    if (togoRef.current && !togoRef.current.contains(target)) {
      setIsTogoShown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  return (
    <section className={`relative z-[10] h-screen max-h-[1080px] flex-center`} id={'ToutCommence'}>
      <div className="bg-[#f8bfeb] w-screen">
        <div className="w-full max-w-[1605px] m-auto flex flex-col lg:flex-row ">
          <div className="flex-1 relative z-[21] flex flex-col items-center ">
            <div className="w-full aspect-[820/605] relative flex flex-1 justify-center items-center">
              <ImageKit
                src="/Images/africa-map-2.svg"
                alt="Africa Map"
                fill
                sizes="770px"
                className="object-contain"
              />

              <div className="!w-[32px] !h-[32px] overflow-visible box-content border-[10px] border-[#ce678e] bg-[#f8bfeb] rounded-full flex-center cursor-pointer absolute top-[36.1%] left-[27.3%] z-[18]"
                onMouseEnter={() => setIsTogoShown(true)}
                onMouseLeave={() => setIsTogoShown(false)}
              >

                {isTogoShown && <TogoModal ref={togoRef} />}

              </div>
              <div className="!w-[32px] !h-[32px] overflow-visible box-content border-[10px] border-[#ce678e] bg-[#f8bfeb] rounded-full flex-center cursor-pointer absolute top-[42.9%] left-[39.7%] z-[20]"
                onMouseEnter={() => setIsCamerounShown(true)}
                onMouseLeave={() => setIsCamerounShown(false)}
              >

                {isCamerounShown && <CamerounModal ref={camerounRef} />}
              </div>


            </div>

          </div>
          <div className="flex-1 z-[20] px-[32px] pb-[32px] pt-[8px] sm:p-[32px] flex flex-col justify-center items-start relative">
            <div
              data-aos='fade-left'
              data-aos-duration="1200"
              data-aos-offset="-200"
              className=" flex-col gap-[20px] flex-center py-[1rem] 5xl:py-[32px] z-[88] ">
              <p className="w-full  text-h3 md:text-h2 5xl:text-h1 font-black text-[#8d120e] leading-[40px] md:leading-[72px] text-left -tracking-[3px]">
                C'est ici, <br />
                que tout commence.
              </p>
            </div>
            <div className="w-full text-[#8d120e] flex flex-col justify-end items-start gap-[16px] 8xl:gap-2 ">
              <p className="text-base lg:text-mm leading-[20px] lg:leading-[25px] font-normal py-2">
                Pour la 1ère phase de 32 000 hectares,<br /> nous avons ciblé 2
                programmes :
              </p>
              <p>
                <span
                  onClick={handleMouseEnterOnCameroun}
                  className={`text-base lg:text-mm hover:bg-[#8d120e] ${isCamerounShown ? 'bg-[#8d120e] text-[#f8bfeb] ' : ' bg-[#8d120e]/[0.25]'} hover:text-[#f8bfeb] font-bold rounded-full py-[8px] px-[16px] -ml-[16px] inline-block cursor-pointer my-[2px]`}
                >
                  12 000 Ha visés au Cameroun
                </span>
                <br />
                <span
                  onClick={handleMouseEnterOnTogo}
                  className={`text-base lg:text-mm hover:bg-[#8d120e] ${isTogoShown ? 'bg-[#8d120e] text-[#f8bfeb]' : 'bg-[#8d120e]/[0.25]'} hover:text-[#f8bfeb] font-bold rounded-full py-[8px] px-[16px] -ml-[16px] inline-block cursor-pointer my-[2px]`}
                >
                  20 000 Ha visés au Togo
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CestIciQueToutCommenceSection;
