import useMediaQuery from '@/lib/useMediaQuery';
import SubTitle from '../ui/SubTitle';

import dynamic from 'next/dynamic';

const ParallaxList = dynamic(() => import('./ProgrammeTransformation/ParallaxList'));
const CarouselParallaxList = dynamic(() => import('./ProgrammeTransformation/CarouselParallaxList'));
// bg-[#f9d9f3]
const ProgrammeTerrain = () => {
  const isMd = useMediaQuery('(min-width: 768px)');
  return (
    <section className="relative z-[09] pb-[64px]" id={'SurTerrain'}>
      <div className="w-full max-w-[1605px] pb-[30px] sm:pb-[80px] m-auto flex flex-col items-center justify-center">
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-offset="-100"
          className="h-full flex-col flex-center pt-[1rem] pb-[4rem] lg:pb-[2rem] mid-xl:pb-[3rem] xl:pb-[4rem] z-[88]"
        >
          <p className="w-full  text-h3 lg:text-h2 5xl:text-h1 font-black text-[#780016] leading-[48px] lg:leading-[76px] 5xl:leading-[102px] text-center -tracking-[3px]">
            Let's Catch Carbon,
          </p>
          <SubTitle className="text-center" color={'#780016'}>
            Notre programmme de transformation agricole en milieu tropical.
          </SubTitle>
        </div>
        { isMd ? <ParallaxList /> :<CarouselParallaxList /> }
      </div>
    </section>
  );
};
export default ProgrammeTerrain;
