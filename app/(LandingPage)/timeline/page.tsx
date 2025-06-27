"use client";
import { useEffect, useRef } from 'react';
import { handleScrollBg } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { useAppStore } from '@/store/appStore';

const ItemsListShow = dynamic(() => import("@/components/NotrePlan").then(mod => mod.ItemsListShow), {
  ssr: false,
  loading: () => <p>Chargement...</p>,
});

const TimelinePage = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const setBgColor = useAppStore((state) => state.setBgColor);
  useEffect(() => {
    setBgColor('#061491')

    const scrollHandler = () =>
      handleScrollBg(
        refContainer,
        () => setBgColor('#061491'),
        () => {
          setBgColor('#061491');
        },
        setBgColor
      );
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [setBgColor]);
  return (
    <section ref={refContainer} className="relative z-[09]" id={'PlanProjet'}>
      <div className="!w-full sm:max-w-[90%] xl:max-w-[1536px] mx-auto py-5 pt-6 px-4 md:px-0 m-auto flex flex-col items-center justify-center">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="w-full sm:w-[75%] h-full flex-col gap-[20px] flex-center pb-6 z-[88]"
        >
          <p className="w-full text-h3 md:text-h1 font-black text-[#ffffff] leading-[40px] md:leading-[80px] text-left -tracking-[3px]">
            Notre plan pour le climat <br />
            d&apos;ici 2032.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="-100"
          className="h-full flex-col gap-[20px] flex-center pt-8 pb-12 z-[88] w-full sm:w-[75%]"
        >
          <p className="w-full  text-38 text-[#ffffff] leading-[40px] text-left -tracking-[3px]">
            Collecter <strong>600 millions d'euros.</strong> <br />
            Reforester <strong>100 000 hectares.</strong> <br />
            Capturer <strong>40 millions de tonnes de CO2 sur 30 ans.</strong>
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="-100"
          className="!w-full sm:max-w-[75%] pb-[80px] md:px-0 mx-auto"
        >
          <ItemsListShow
            className="w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default TimelinePage;
