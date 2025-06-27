import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { useAppStore } from '@/store/appStore';

export const useHeader = () => {
  const pathname = usePathname();
  const [openSub, setOpenSub] = useState(false);
  const [openSide, setOpenSide] = useState(false);
  const { openModalVideo: isModalVideoOpen, setOpenModalVideo: setIsModalVideoOpen, height: divHeight, setHeight: setDivHeight } = useAppStore((state) => state);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Optimiser le handleScroll avec requestAnimationFrame
  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 136) {
        setIsVisible(true);
      }
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setOpenSub(false);
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    });
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return {
    openSub,
    setOpenSub,
    openSide,
    setOpenSide,
    isModalVideoOpen,
    setIsModalVideoOpen,
    isVisible,
    pathname,
    divHeight,
    setDivHeight
  };
};
