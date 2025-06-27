'use client';

import { handleScrollBg } from '@/lib/utils';
import { useAppStore } from '@/store/appStore';
import { ReactNode, useEffect, useRef } from 'react';

type Props = {
    children: ReactNode;
}

const CommunityListingTemplate = ({ children }: Props) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const setBgColor = useAppStore((state) => state.setBgColor);
  useEffect(() => {
    setBgColor("#e9c0ea");
    const handleScroll = () => {
      handleScrollBg(refContainer, () => setBgColor('#e9c0ea'), () => {
        setBgColor('#e9c0ea');
      }, setBgColor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setBgColor]);
  return (
    <div
      ref={refContainer}
      className="flex flex-col px-[16px] xl:px-[0] justify-start min-h-screen"
    >
      <div className="w-full flex flex-col justify-center items-start pb-2">
        {children}
      </div>
    </div>
  );
};

export default CommunityListingTemplate;
