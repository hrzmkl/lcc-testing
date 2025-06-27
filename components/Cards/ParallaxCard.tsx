'use client';
import React from 'react';
import ParallaxTilt from 'react-parallax-tilt';
import { Buttons } from '@/components/ui/ButtonsV2/Buttons'; // Adjust import based on your button component path
import Link from 'next/link';
import ImageKit from '../ui/ImageKit';

const ParallaxCard = ({
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  perspective = 500,
  backgroundImage = '/Images/card-program/img_0825-new.webp',
  buttonHref = '#',
  buttonText = 'Stratégie et gouvernance',
}) => {
  return (
      <ParallaxTilt
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      perspective={perspective}
      className="background-stripes parallax-effect flex-1 group relative z-[1] hover:z-[200] min-w-[258px] overflow-visible"
    >
      <Link 
        href={buttonHref}
        className={`relative overflow-hidden aspect-[312/512] flex-1 flex flex-col items-center justify-end w-full rounded-2xl cursor-pointer px-[12px] mid-xl:px-[24px] py-[2rem]
                    md:hover:scale-[120%] hover:shadow-md lg:hover:shadow-xl transition-all duration-200 group gap-[26px]`}
      >
        <ImageKit
          src={backgroundImage}
          alt=""
          fill
          sizes={'258px'}
          className='object-cover object-center z-20'
        />
        <Buttons
          as="button"
          className={
            'z-30 relative group-hover:bg-[#e3ff00] group-hover:-translate-y-[10px] !py-[16px] !px-[20px] !text-base group-hover:!text-[#1e2330] !text-[#e3ff00] font-bold'
          }
        >
          {buttonText}
        </Buttons>
      </Link>
    </ParallaxTilt>
  );
};

export default ParallaxCard;
