"use client"; // This makes this component a Client Component
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

import AOS from "aos";


// @ts-ignore
import ParallaxTilt from 'react-parallax-tilt';
// @ts-ignore
import Image from 'next/image';

import { Buttons } from "@/components/ui/buttons";
// @ts-ignore
import { messages } from "@/constants";
import { ModalCsc } from "@/components/ui/modals";
import SeeMovieButton from "@/components/ui/SeeMovieButton";
// bg-[#d8fc31]
const SectionsPionniers2 = () => {
  return (
    <section
      id={'Pionnier2'}>
      <div className="w-full  flex-col flex-center " style={{ 'height': "calc(100vh)" }} id='generations'>
        <div className="w-full max-w-[1605px] px-[16px] overflow-visible">
          <div
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-easing="ease-in-sine"
            className="h-full flex-col gap-[0px] flex-center pt-[8px] xl:pb-[16px] z-[88] ">
            <p className="w-full  text-h3 lg:text-h2 md:text-h1 font-black text-[#244f19] leading-[40px] md:leading-[72px] text-center -tracking-[3px]">
              Écrivons notre légende.
            </p>
            <p className="text-[#244f19]    font-normal text-md md:text-lg leading-[32px] mid-xl:leading-[40px]  text-center -tracking-[2px] ">
              Nous ne sommes pas la dernière génération à devoir agir pour le climat, <br />
              mais la première à nous lancer avec enthousiasme<br /> dans cette épopée climatique pour changer notre destinée.
            </p>
          </div>
        </div>
        <div className="w-full max-h-[1024px] overflow-hidden flex-center">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="h-full max-w-[1605px] px-[5%] m-[auto] md:p-[10px] md:pb-0 flex-center">
            <Image
              src="/Images/people.svg"
              alt="LCC_people"
              className="w-auto h-[100%] object-contain -mb-[5px]"
              width={1068}
              height={1018}
            />
          </div>
        </div>
      </div>
    </section >
  );
};
export default SectionsPionniers2;
