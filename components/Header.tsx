"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { useHeader } from "@/hooks/useHeader";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Logo } from "./Logo";
import { usePathname } from 'next/navigation';
import { Nav } from './Nav';
import dynamic from "next/dynamic";
import useMediaQuery from "@/lib/useMediaQuery";

const ModalCsc = dynamic(() => import('./ui/modals').then((mod) => mod.ModalCsc), { ssr: false })

const Header = () => {
  const {
    openSub,
    setOpenSub,
    openSide,
    setOpenSide,
    isModalVideoOpen,
    setIsModalVideoOpen,
    isVisible,
    divHeight,
    setDivHeight,
  } = useHeader();
  const pathname = usePathname();
  const divRef = useRef<HTMLDivElement | null>(null);
  const isMd = useMediaQuery('(min-width: 768px)');
  useEffect(() => {
    const updateDivHeight = () => {
      if (pathname) {
        if (
            pathname.startsWith('/projects/')
            || pathname.startsWith('/methodologie-sur-le-terrain/')
            || pathname.startsWith('/strategie-et-gouvernance/')
        )
            setDivHeight(0);
        else
        divRef.current && setDivHeight(divRef.current.offsetHeight + 32);
      }
    };
    updateDivHeight();
    window.addEventListener('resize', updateDivHeight);
    return () => {
      window.removeEventListener('resize', updateDivHeight);
    };
  }, [pathname, setDivHeight]);

  const handleMouseOver = () => setOpenSub(true);
  const handleMouseLeave = () => setOpenSub(false);
  const handleCloseAll = () => {
    setOpenSide(false);
    setOpenSub(false);
  };

  return (
    <div style={{height: divHeight ?? (!isMd ? 129 : 136) + 'px', willChange: 'height'}} className={`w-full relative z-[99]`}>
      <header className={`transition-transform duration-300 ease-in-out fixed flex-center top-0 left-0 right-0 z-100 !will-change-transform ${isVisible ? 'translate-y-0' : '-translate-y-[500px]'}`}>
        <div ref={divRef} className={`!w-full mx-['auto'] p-0 xl:px-[0] top-0 bg-white`}>
          <div className="w-full px-[12px] py-[12px] flex-center z-[101] shadow-menu">
            {/* Logo Section - Priorité maximale */}
            <div className="h-full flex gap-[32px] px-[12px] flex-center justify-start items-center relative z-[102]">
              <Logo />
              <div className="w-[20%] relative lg:left-[0%] flex-center">
                <Image
                  src="/Images/b-corporation-logo.webp"
                  alt="let's catch carbon certificat"
                  width={65}
                  height={112}
                  className="w-auto h-[48px] object-contain"
                  loading="lazy"
                  fetchPriority="low"
                />
              </div>
            </div>

            {/* Navigation - Chargement différé */}
            <div className="w-full flex-1 lg:w-[75%] h-full hidden lg:flex justify-center items-center">
              <Nav 
                openSub={openSub}
                setOpenSub={setOpenSub}
                handleMouseOver={handleMouseOver}
                handleMouseLeave={handleMouseLeave}
                handleCloseAll={handleCloseAll}
              />
            </div>

            {/* Menu mobile - Chargement différé */}
            <div className="flex-1 h-full flex lg:hidden justify-end items-center px-[16px]">
              <Sheet open={openSide} onOpenChange={setOpenSide}>
                <SheetTrigger asChild>
                  <Image
                    src="/icons/hamburger.svg"
                    alt="hamburger"
                    width={40}
                    height={40}
                    className="relative cursor-pointer h-[40px] w-[40px]"
                    loading="lazy"
                  />
                </SheetTrigger>
                <SheetContent className="w-[100vw] h-full bg-white lg:hidden z-[999] overflow-y-auto">
                  <SheetTitle>
                    <span className="sr-only">Menu Mobile</span>
                  </SheetTitle>
                  <Nav 
                    openSub={openSub} 
                    setOpenSub={setOpenSub}
                    handleMouseOver={handleMouseOver}
                    handleMouseLeave={handleMouseLeave}
                    handleCloseAll={handleCloseAll}
                  />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Modal vidéo - Chargement différé */}
      {isModalVideoOpen && (
        <ModalCsc 
          show={isModalVideoOpen}
          onClose={() => setIsModalVideoOpen(false)}
          className={'p-0 aspect-video w-[100%] rounded-none'}
        >
          <iframe width="100%"
                  height="100%"
                  className="aspect-video"
                  src="https://www.youtube.com/embed/FsGYYOLUGig?si=W3oY70_JLq0rca-s"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
        </ModalCsc>
      )}
    </div>
  );
};

export default Header;
