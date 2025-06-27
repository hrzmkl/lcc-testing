"use client";
import React, {useState, useEffect, useCallback, useRef} from "react";
import {ReactNode} from 'react';
// @ts-ignore
import {usePathname} from "next/navigation";
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";
// @ts-ignore
import {motion} from "framer-motion";

// Define the props interface
export type LestCatchCarbonSectionImageProps = {
    imageUrl: string;
    buttonText?: string;
    description?: string;
    onChooseClick?: () => void;
}  & React.HTMLAttributes<HTMLDivElement>;

export const LestCatchCarbonSectionImageRight = ({
                                                                                      imageUrl,
                                                                                      buttonText = "Calendrier",
                                                                                      description = "Coordination de l'action, méthodo sur le terrain... On vous explique.",
                                                                                      onChooseClick,
                                                                                      } : LestCatchCarbonSectionImageProps) => {
    const [showButton, setShowButton] = useState(false);
    const [coordinates, setCoordinates] = useState({
        scale: 1,
        y_position: 0,
        zIndex: 0,
    });

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
            transition={{stiffness: 50}}
            className={`w-full h-full flex justify-center items-end bg-center bg-cover bg-no-repeat rounded-2xl cursor-pointer`}
            style={{backgroundImage: `url(${imageUrl})`}}
        >
            <motion.div
                transition={{duration: 0.8}}
                className="w-full flex flex-col justify-end items-center"
            >
                <motion.p
                    animate={{y: showButton ? -4 : 0}}
                    whileHover={{
                        scale: 1.2,
                        backgroundColor: "#a3e635",
                    }}
                    transition={{duration: 0.5}}
                    className="px-4 py-3 9xl:px-7 9xl:py-4 10xl:px-7 10xl:py-5 12xl:px-8 12xl:py-6 13xl:px-[3.5rem] 13xl:py-9 text-black bg-[#d8fc31] hover:bg-lime-300 text-xs 2xl:text-sm 8xl:text-lg 10xl:text-2xl 12xl:text-3xl 13xl:text-[2.7rem] font-normal rounded-full cursor-pointer mb-4"
                >
                    {buttonText}
                </motion.p>

                {showButton && (
                    <div className="flex flex-col items-center space-y-4 mb-8">
                        <p className="text-white text-xs 2xl:text-sm 8xl:text-lg 10xl:text-2xl 12xl:text-3xl 13xl:text-[2.8rem] font-normal text-center relative bottom-[7%] 2xl:bottom-[11%] 13xl:leading-[3.4rem]">
                            {description}
                        </p>
                        <p
                            className="px-10 py-3 mid-xl:py-[0.7rem] 2xl:px-9 8xl:px-[3rem] 9xl:px-7 9xl:py-4 10xl:px-10 10xl:py-5 11xl:px-14 12xl:py-6 13xl:px-[4rem] 13xl:py-8 text-black bg-white hover:bg-slate-50 text-sm 2xl:text-sm 8xl:text-lg 10xl:text-2xl 12xl:text-3xl 13xl:text-[2.8rem] font-normal rounded-full cursor-pointer relative bottom-[14%]"
                            onClick={onChooseClick}
                        >
                            Choisir
                        </p>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};
