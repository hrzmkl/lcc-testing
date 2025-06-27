"use client";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { useHeader } from "@/hooks/useHeader";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Logo } from "./Logo";
import { usePathname } from 'next/navigation';
import { Nav } from './Nav';
import dynamic from "next/dynamic";
import useMediaQuery from "@/lib/useMediaQuery";
import Link from "next/link";
import ImageKit from "./ui/ImageKit";

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
  const [toggle, setToggle] = useState(true);
  const [ads, setAds] = useState('Livraison gratuite dès 49 €');
  const [fade, setFade] = useState({
    opacity: 'opacity-1',
    me: 'me-[83px]'
  })
  const isMd = useMediaQuery('(min-width: 768px)');
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(prev => ({...prev, opacity: 'opacity-0'}));
      
      setTimeout(() => {
          if (toggle) {
          setFade(prev => ({...prev, me: 'md:me-[83px]'}));
          setAds('Livraison gratuite dès 49 €');
        }
        else {
          setFade(prev => ({...prev, me: 'md:me-[153px]'}));
          setAds('-10% en vous inscrivant à la newsletter');
        }
        setToggle(prev => !prev);
        setFade(prev => ({...prev, opacity: 'opacity-1'}));
      }, 300)
    }, 15 * 1000); // 15 secondes

    return () => clearInterval(intervalId); // nettoyage à la destruction
  }, [toggle]);
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
      <header className={`transition-transform duration-300 ease-in-out fixed flex-center flex-col top-0 left-0 right-0 z-100 !will-change-transform ${isVisible ? 'translate-y-0' : '-translate-y-[500px]'}`}>
        <div className="bg-black flex flex-center text-center w-full py-[5px] gap-[5px]">
          <div className={`flex flex-center text-center w-full py-[5px] gap-[5px] ${fade.me}`}>
            <Link href={`${process.env.NEXT_PUBLIC_REDIRECT}${toggle ? '/content/21-tarifs-et-livraison' : '#csc-newsletter'}`} className={`${fade.opacity} transition-opacity duration-300 text-[13px] text-white text-center hover:decoration-1 hover:underline`}>{ads}</Link>
            <span className="text-white text-[13px]">|</span>
            <Link href={`${process.env.NEXT_PUBLIC_REDIRECT}`} className="text-[13px] text-white text-center hover:decoration-1 hover:underline md:">Acheter du café</Link>
          </div>
        </div>
        <div ref={divRef} className={`!w-full mx-['auto'] p-0 xl:px-[0] top-0 bg-white`}>
          <div className="w-full px-4 md:px-7 py-2 flex-center z-[101] shadow-menu">
            {/* Logo Section - Priorité maximale */}
            <div className="h-full flex flex-1 gap-5 justify-start items-center relative z-[102]">
              <Logo />
              <div className="w-[25px] md:w-[30px] relative lg:left-[0%] flex-center">
                <ImageKit
                  src="/Images/b-corporation-logo.webp"
                  alt="let's catch carbon certificat"
                  width={130}
                  height={224}
                  className="w-[25px] md:w-[30px] h-auto object-contain"
                  loading="lazy"
                  fetchPriority="low"
                />
              </div>
            </div>

            {/* Navigation - Chargement différé */}
            <div className=" flex-1 lg:w-[75%] h-full hidden lg:flex justify-center items-center">
              <Nav 
                openSub={openSub}
                setOpenSub={setOpenSub}
                handleMouseOver={handleMouseOver}
                handleMouseLeave={handleMouseLeave}
                handleCloseAll={handleCloseAll}
              />
            </div>

            {/*button store*/}
            <div className={'gap-[12px] hidden lg:flex flex-1 flex-col lg:flex-row justify-start lg:justify-end start-center lg:items-center'}>
              {/* <MenuItems target="_blank" href={process.env.NEXT_PUBLIC_REDIRECT} onMouseOver={handleCloseAll} className={'rounded-full bg-buy-coffee'} onMouseUp={handleCloseAll}>Acheter du café</MenuItems> */}
            </div>

            {/* Menu mobile - Chargement différé */}
            <div className="flex-1 h-full flex lg:hidden justify-end items-center">
              <Sheet open={openSide} onOpenChange={setOpenSide}>
                <SheetTrigger asChild>
                  <Image
                    src="/icons/hamburger.svg"
                    alt="hamburger"
                    width={32}
                    height={32}
                    className="relative cursor-pointer h-[32px] w-[32px]"
                    loading="lazy"
                  />
                </SheetTrigger>
                <SheetContent className="w-[100vw] h-full bg-white lg:hidden z-[999] overflow-y-auto pt-16">
                  <SheetHeader>
                    <Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/mon-compte`} className="flex items-center justify-start gap-2 absolute top-5 left-6 font-roboto">
                      <ImageKit src="/icons/Account.svg" alt="account icon" width={32} height={32} />
                      <span className="font-semibold text-[#24B9D7] text-[1rem] leading-none font-roboto tracking-[0.5px]">Connexion</span>
                    </Link>
                    <div className="border-b border-black flex absolute top-[72px] left-0 h-[1px] w-full !mt-0"></div>
                  </SheetHeader>
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
