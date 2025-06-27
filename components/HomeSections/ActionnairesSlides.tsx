import { useEffect, useRef } from "react";

import { Buttons } from "@/components/ui/ButtonsV2/Buttons";
import { SliderOneItems, SliderTwoItems } from "@/constants";
import { SliderCsc } from '@/components/slider/SliderCarousel';
import { gsap } from "gsap";
import { useAppStore } from "@/store/appStore";

// bg-[#1d232f]
const ActionnairesSlides = () => {
  const bgColor = useAppStore((state) => state.bgColor);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderTitleRef = useRef<HTMLDivElement>(null);
  const sliderTitle2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current || !sliderTitleRef.current || !sliderTitle2Ref.current) return;
    const timeline = gsap.timeline();
    timeline
      .from(sliderRef.current, { opacity: 1 })
      .fromTo(
        sliderRef.current.querySelector("p"),
        { opacity: 0, translateY: 30 },
        { opacity: 1, translateY: 0, duration: 0.7, ease: "power3.inOut" }
      )
      .fromTo(
        [sliderTitleRef.current, sliderTitle2Ref.current],
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: "power3.in" }
      )
      .to(sliderRef.current, {
        duration: 1.5,
        ease: "power3.in",
        opacity: 0,
        display: "none",
        delay: 1.5,
      })
      .to(
        sliderRef.current.querySelector("p"),
        { opacity: 0, duration: 1, ease: "power3.inOut" },
        "-=1.5"
      );
    return () => {
      timeline.kill();
    };
  }, []);

  return (
      <section
          className="relative z-[11] flex-col flex-center w-full py-[6rem] overflow-hidden"
          id={'Actionnaires'}>
        <div className="w-full max-w-[1605px] px-[16px] overflow-visible">
          <div
              ref={sliderTitleRef}
              id="csc-slider-title"
              data-aos='fade-left'
              data-aos-duration="1200"
              data-aos-offset="-100"
              style={{ willChange: 'opacity, transform' }}
              className="h-full flex-col gap-[20px] flex-center z-[88]">
            <p className="w-full text-h3 md:text-h2 5xl:text-h1 font-black text-[#e3ff00] leading-[48px] lg:leading-[76px] 5xl:leading-[102px] text-center -tracking-[3px] pb-[2rem]">
              Déjà plus de 30 000 citoyens et entreprises <br /> à avoir décidé d&apos;agir.
            </p>
          </div>
        </div>
        <div className="relative w-full flex flex-col gap-4 py-[1rem] xl:py-[3rem]">
          <div ref={sliderRef} id="csc-slider" style={{backgroundColor: bgColor, transition: "background 1000ms", willChange: 'opacity, transform'}} className="flex-center w-full h-full absolute top-0 left-0 z-50">
            <p className="text-center opacity-0 text-h4 font-semibold text-white">
              Avec l'initiative Let's Catch Carbon, vous contribuez à hauteur de 1 centime par tasse bue.
            </p>
          </div>
          <SliderCsc items={SliderOneItems} speed={1.6}></SliderCsc>
          <SliderCsc items={SliderTwoItems} speed={1}></SliderCsc>
        </div>
        <div
            ref={sliderTitle2Ref}
            id="csc-slider-title2"
            style={{ willChange: 'opacity, transform' }}
            className="w-full max-w-[1605px] gap-[16px] lg:gap-[96px] px-[20px] lg:px-[48px] flex flex-col lg:flex-row justify-evenly items-start">
          <div
              className="flex-1 flex-col justify-end gap-[20px] flex-center lg:pt-[32px] pb-[20px] z-[88]"
          >
            <div className=" flex flex-1 flex-col justify-around items-start"
                 data-aos="fade-right"
                 data-aos-duration="1200"
                 data-aos-offset="-150">
              <p className="text-[#e3ff00] text-center md:text-start font-bold text-lg md:text-h3 xl:text-h2 md:leading-[70px] xl:leading-[76px] relative ld:left-[10%]">
                Vous aimeriez avoir un impact
                face au défi climatique ?
              </p>
            </div>
          </div>
          <div
              className=" flex-1 flex-col justify-end gap-[20px] flex-center lg:pt-[32px] z-[88]"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-offset="-100vh"
          >
            <div className=" flex flex-col justify-start items-start">
              <p className="text-[#d8fc31] text-center md:text-start text-md xl:text-lg md:py-[1rem] xl:pt-[1.4rem] xl:py-0">
                Entrez dans l&apos;action en transformant 100 000 hectares de café en agroforesterie  pour capter 1,5 million de tonnes de carbone en 5 ans !
              </p>
              <div
                  className="w-full flex flex-row flex-wrap justify-center lg:justify-start mid-xl:justify-center max-w-[1680px] mt-5 lg:mt-[64px] xl:mt-[1.5rem]">
                <Buttons href={'/agir'} className={'!bg-[#e3ff00] hover:!bg-[#00ff00] !text-[#1e2330]'}>
                  Découvrir les moyens d'action
                </Buttons>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default ActionnairesSlides;
