import { useRef, useEffect } from "react";
import SubTitle from '../ui/SubTitle';
import ImageKit from "../ui/ImageKit";
import useMediaQuery from '@/lib/useMediaQuery';

// @ts-ignore
import gsap from "gsap";
// @ts-ignore
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const subtitleText = (
  <>
    Nous ne sommes pas la dernière génération à devoir agir pour le climat, <br />
    mais la première à nous lancer avec enthousiasme<br />
    dans cette épopée climatique pour changer notre destinée.
  </>
);

const SectionsPionniers2 = () => {
  const isLg = useMediaQuery('(min-width: 1024px)');
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);

  // Props factorisation pour ImageKit
  const imageProps = isLg
    ? {
        src: "/Images/CommunityLarge1920.webp",
        alt: "LCC_people",
        className: "aspect-[1920/1090] h-full w-auto object-cover transition-all duration-300",
        width: 1920,
        height: 1090,
      }
    : {
        src: "/Images/communitySection.webp",
        alt: "LCC_people",
        className: "w-full h-full object-cover object-bottom flex",
        width: 330,
        height: 303,
        quality: 50,
      };

  useEffect(() => {
    if (!isLg) return;

    const section = sectionRef.current;
    const text = textRef.current;
    const imgWrapper = imgWrapperRef.current;

    if (!section || !text || !imgWrapper) return;

    // Reset styles
    gsap.set(text, { clearProps: "all" });
    // gsap.set(imgWrapper, { clearProps: "all" });
    gsap.set(imgWrapper, { minWidth: '100%', minHeight: '60%' });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1000",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Texte : shrink & hide
      tl.to(text, {
        opacity: 0,
        height: 0,
        duration: 1,
        ease: "power1.inOut"
      }, 0);

      // Image : expand to full viewport
      tl.to(imgWrapper, {
        width: "100vw",
        height: "100vh",
        maxWidth: "100vw",
        maxHeight: "100vh",
        // left: 0,
        bottom: 0,
        // x: 0,
        // y: 0,
        position: "absolute",
        zIndex: 10,
        duration: 1,
        ease: "power1.inOut"
      }, 0);

      tl.to({}, {
        duration: 0.5 // ajuste la durée selon le temps de "pause" voulu
      });

      // On reset, restore position
      ScrollTrigger.create({
        trigger: section,
        start: "bottom top",
        onLeave: () => {
          gsap.set(imgWrapper, { clearProps: "all" });
        },
        onEnterBack: () => {
          gsap.set(imgWrapper, { clearProps: "all" });
        }
      });
    }, section);

    return () => ctx.revert();
  }, [isLg]);

  return (
    <section id="Pionnier2" ref={sectionRef} className="relative overflow-visible">
      <div className="lg:h-screen relative w-full flex flex-col items-center justify-between lg:justify-start gap-[3rem] lg:gap-[1rem] overflow-hidden" id="generations">
        <div className="max-w-[1605px] px-[16px] overflow-visible pt-4" ref={textRef}>
          <div
            className="h-full flex-col gap-[0px] flex-center pt-[8px] xl:pb-[2rem] z-[88]"
          >
            <p className="w-full font-din text-h3 lg:text-h2 5xl:text-h1 font-black text-[#244f19] leading-[48px] lg:leading-[76px] 5xl:leading-[102px] text-center -tracking-[3px]">
              Écrivons notre légende.
            </p>
            <SubTitle className="text-center">
              {subtitleText}
            </SubTitle>
          </div>
        </div>
        <div className="w-full flex-center h-[60%]">
          <div
            ref={imgWrapperRef}
            className="h-full xl:px-0 flex-center p-0 flex-1 relative transition-all duration-300"
            style={{ overflow: "hidden" }}
          >
            <ImageKit {...imageProps} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionsPionniers2;
