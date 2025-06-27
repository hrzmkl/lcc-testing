'use client'; 

import { useEffect, useMemo, useState, useRef } from 'react';
import styles from '@/styles/home.module.css';
import ParallaxTilt from 'react-parallax-tilt';
import ImageKit from '@/components/ui/ImageKit';
import { Buttons } from '@/components/ui/buttons';
import SeeMovieButton from '@/components/ui/SeeMovieButton';
import gsap from 'gsap';
import { PionnierSectionData } from '@/constants';
import { useAppStore } from '@/store/appStore';

// bg-[#d8fc31]
const SectionsPionniers = () => {
  const setIsModalVideoOpen = useAppStore((state) => state.setOpenModalVideo);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModalVideo = () => {
    setIsModalVideoOpen(true);
  };

  const lotImages = useMemo(() => PionnierSectionData, []);

  const tl = useRef<GSAPTimeline | null>(null);

  const nextImages = () => {
    if (tl.current) {
      tl.current.progress(1);
    }
  };
  
  useEffect(() => {
    if (!tl.current) {
      tl.current = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
        onRepeat: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % lotImages.length);
        },
      });

      tl.current
        .fromTo(
          ".inner-element",
          { rotateY: 90, opacity: 0 },
          { rotateY: 0, opacity: 1, duration: 0.75, ease: "power3.out" }
        )
        .from(".image-scaling", { scale: 0, opacity: 0 }, "-=0.75")
        .to(".image-scaling1", { scale: 1, opacity: 1, duration: 0.5, ease: "power1.inOut" }, "-=0.8")
        .to(".image-scaling2", { scale: 1, opacity: 1, duration: 0.6, ease: "power1.inOut" }, "-=0.8")
        .to(".image-scaling3", { scale: 1, opacity: 1, duration: 0.4, ease: "power1.inOut" }, "-=0.7")
        .to(".inner-element", { rotateY: 90, opacity: 0, duration: 1, ease: "power3.in" }, "+=2")
        .to(".image-scaling", { scale: 0, opacity: 0, duration: 0.8, ease: "power2.in" }, "-=0.8");
    } else {
      tl.current.restart(); // Redémarrer l'animation sans recréer la timeline
    }
  
    return () => {
      if (tl.current) tl.current.kill();
    };
  }, [lotImages.length]); // Plus de dépendance sur currentIndex
  

  return (
    <section id={'Pionnier'}>
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        data-aos-offset="-100"
        data-aos-delay="50"
        data-aos-anchor="#Pionnier"
        data-aos-anchor-placement="top-center"
        className=" relative max-w-[100vw] z-[13] flex flex-col md:flex-row flex-center overflow-visible gap-6 4xl:gap-8 xl:px-[2rem] !w-full xl:max-w-[1605px] 5xl:max-w-[1640px] mx-auto py-[2rem] lg:pt-0 md:pb-[3rem] xl:pb-[5rem] -translate-y-[25%]"
        style={{ willChange: 'transform, opacity'}}
      >
        <div className="w-full md:w-[50%] max-w-[1605px] px-[1rem] lg:ps-[3rem] xl:ps-[3rem] 5xl:ps-0 overflow-visible z-[99] mid-xl:-translate-y-[5%] 3xl:-translate-y-[13%]">
          <div className="h-full flex-col gap-[20px] mid-xl:gap-[30px] xl:gap-[40px] 5xl:gap-[48px] flex-center xl:pt-[32px] pb-[0] z-[88] ">
            <p className="w-full  text-h3 lg:text-h1 mid-xl:text-[108px] 4xl:text-[113px] 5xl:text-[128px] font-black text-[#244f19] leading-[38px] lg:leading-[80px] mid-xl:leading-[97.2px] 4xl:leading-[101px] 5xl:leading-[115px] text-center md:text-start -tracking-[0.05em]">
              Soyons des pionniers.
            </p>
            <p className="text-[#244f19] w-full  font-normal text-md mid-xl:text-[28.8px] 4xl:text-[30.34px] 5xl:text-xl leading-[34px] 4xl:leading-[36px] 5xl:leading-[40px] text-center md:text-start -tracking-[0.025em] 5xl:-tracking-[0.05em]">
              Faites de chaque tasse de café un geste pour le climat : financez la transition agricole à la maison et au bureau.
            </p>
            <div className="w-full flex flex-row flex-wrap min-[1280px]:flex-nowrap gap-2 mid-xl:gap-[13.5px] 4xl:gap-[14.21px] 5xl:gap-[1rem] justify-center md:justify-start max-w-[1680px] mt-5 xl:mt-[5px] 5xl:mt-[7px] mb-[32px]">
              <Buttons href={process.env.NEXT_PUBLIC_REDIRECT}>Acheter du café pour la maison</Buttons>
              <Buttons href={`${process.env.NEXT_PUBLIC_REDIRECT}/content/231-entreprise`} type={'square'} className='!rounded-full'>
                Découvrir nos solutions café pro
              </Buttons>
            </div>
          </div>
        </div>

        <div className="max-w-[100vw] w-full md:w-[50%] overflow-visible flex-center items-center flex-col relative z-[98] h-[275px] sm:h-[400px] md:h-[auto] max-h-[600px] mid-xl:max-h-[680px] -translate-y-[30%] 2xs:-translate-y-[20%] mid-xl:-translate-y-[5%] 3xl:-translate-y-[13%]">
          <div
            className="
              inner-element 
              h-[90vh]
              5xl:h-screen
              relative
              flex flex-row items-center justify-center 
              scale-[40%] sm:scale-[50%] md:scale-[55%] mid-xl:scale-[75%] xl:scale-[77%] 5xl:scale-[82%]
              xl:left-0 xl:translate-y-[4rem] 4xl:translate-y-[3rem] 5xl:left-[60px] 5xl:translate-y-[4rem]
            "
            role="button"
            onClick={nextImages}
            style={{ willChange: 'transform, opacity' }}
          >
            <div
              className={`${styles.Image1Anim} imagesAnim image-scaling image-scaling1`}
              style={{ willChange: 'transform, opacity' }}
            >
              <ParallaxTilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                className="background-stripes parallax-effect"
                perspective={500}
                trackOnWindow={true}
                tiltReverse={true}
              >
                {lotImages.map((image, index) => (
                  <ImageKit
                    key={index}
                    src={image.image1}
                    alt="Image principale de la section pionnier"
                    width={489}
                    height={645}
                    priority={index === 0}
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 489px, 644px"
                    style={{
                      display: index === currentIndex ? 'block' : 'none',
                      willChange: 'display',
                      width: '100%',
                      height: 'auto'
                    }}
                    className={'object-cover'}
                  />
                ))}
              </ParallaxTilt>
            </div>

            <div
              className={`${styles.Image3Anim} imagesAnim animate-in fade-in zoom-in main-image`}
              style={{ willChange: 'transform, opacity' }}
            >
              <ParallaxTilt
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                className="background-stripes parallax-effect"
                perspective={500}
                trackOnWindow={true}
                tiltReverse={true}
              >
                 {lotImages.map((image, index) => (
                    <ImageKit
                      key={index}
                      src={image.image2}
                      alt="Image secondaire de la section pionnier"
                      width={686}
                      height={628}
                      quality={25}
                      priority
                      style={{
                        display: index === currentIndex ? 'block' : 'none',
                        willChange: 'display',
                        width: '100%',
                        height: 'auto'
                      }}
                      className={'object-cover'}
                    />
                  ))}
              </ParallaxTilt>
            </div>
            <div
              className={`${styles.Image2Anim} imagesAnim image-scaling image-scaling2`}
              style={{ willChange: 'transform, opacity' }}
            >
              <ParallaxTilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                className="background-stripes parallax-effect"
                perspective={500}
                trackOnWindow={true}
                tiltReverse={true}
              >
                 {lotImages.map((image, index) => (
                    <ImageKit
                      src={image.image3}
                      alt={image.image3}
                      width={391}
                      height={441}
                      style={{display: index === currentIndex ? '' : 'none', willChange: 'display'}}
                      className={'!w-full h-[auto] object-cover'}
                      quality={25}
                      key={index}
                      priority={index === 0}
                    />
                  ))}
              </ParallaxTilt>
            </div>
            <div
              className={`${styles.Image4Anim} imagesAnim image-scaling image-scaling3`}
              style={{ willChange: 'transform, opacity' }}
            >
              <ParallaxTilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="background-stripes parallax-effect"
                perspective={500}
                trackOnWindow={true}
                tiltReverse={true}
              >
                  <ImageKit
                    src={'/Images/arabica-coffee-coff-coffee-beans.webp'}
                    alt={'/Images/arabica-coffee-coff-coffee-beans.webp'}
                    width={435}
                    height={393}
                    quality={25}
                    className={'!w-full h-[250px] object-contain'}
                    loading='eager'
                    priority
                  />
              </ParallaxTilt>
            </div>
          </div>
          <div
            className="
              relative lg:absolute
              flex justify-around items-center
              mx-auto z-[99]
              top-[40%] sm:top-[5%] lg:right-[35%] lg:top-[73%] xl:right-[33%] xl:top-[83%] 4xl:top-[81%] 4xl:right-[36%] 5xl:top-[85%] 5xl:right-[27%]
            "
            onClick={() => openModalVideo()}
          >
            <SeeMovieButton>
              <p className="text-[#034f0c] font-medium p-0 m-0 w-100 text-nowrap leading-[22px]">
                Let's Catch Carbon
              </p>
              <p className="text-[#034f0c] font-black p-0 m-0 leading-[22px]">
                Voir le film <span className="font-light">[3min]</span>
              </p>
            </SeeMovieButton>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionsPionniers;
