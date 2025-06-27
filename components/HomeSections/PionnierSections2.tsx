import SubTitle from '../ui/SubTitle';
import ImageKit from "../ui/ImageKit";
import useMediaQuery from '@/lib/useMediaQuery';

const subtitleText = (
  <>
    Nous ne sommes pas la dernière génération à devoir agir pour le climat, <br />
    mais la première à nous lancer avec enthousiasme<br />
    dans cette épopée climatique pour changer notre destinée.
  </>
);

const SectionsPionniers2 = () => {
  const isLg = useMediaQuery('(min-width: 1024px)');

  // Props factorisation pour ImageKit
  const imageProps = isLg
    ? {
        src: "/Images/CommunityLarge1920.webp",
        alt: "LCC_people",
        className: "aspect-[1920/1090] h-auto w-full object-cover -mb-[5px]",
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

  return (
    <section id="Pionnier2">
      <div className="lg:h-auto mid-xl:h-[calc(100vh-40px)] 2xl:h-[calc(100vh)] relative w-full flex flex-col items-center justify-between lg:justify-end gap-[3rem] overflow-hidden" id="generations">
        <div className="mid-xl:absolute mid-xl:top-0 max-w-[1605px] px-[16px] overflow-visible pt-4">
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
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
        <div className="w-full overflow-visible flex-center">
          <div className="h-full px-[5%] lg:w-[70%] mid-xl:w-[77%] 2xl:w-[78%] xl:w-[70%] 5xl:w-[70%] 9xl:w-[77%] xl:px-0 flex-center p-0">
            <ImageKit {...imageProps} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionsPionniers2;
