import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import SubMenu1 from "./submenu/submenu";
import { MenuItems } from "./submenu/menuItems";
import useMediaQuery from "@/lib/useMediaQuery";
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import ImageKit from '@/components/ui/ImageKit';
import Link from 'next/link';

interface NavProps {
  openSub: boolean;
  setOpenSub: (value: boolean) => void;
  handleMouseOver: () => void;
  handleMouseLeave: () => void;
  handleCloseAll: () => void;
}
type Sub = 'store' | 'decouvrir';
interface SheetMobileProps {
  sub: Sub;
  activeSub: Sub;
  handleCloseAll: () => void;
  setOpenSub: (bool: boolean) => void;
  setActiveSub: (params: Sub) => void;
  openSub: boolean;
  isDesktop: boolean;
  children: ReactNode;
}
const SheetMobile = ({activeSub, handleCloseAll, setOpenSub, isDesktop, setActiveSub, openSub, children, sub}: SheetMobileProps) => {
  return (
    <Sheet
      open={openSub && !isDesktop}
      onOpenChange={(value) => {
        !isDesktop && setOpenSub(value);
        setActiveSub(sub);
      }}
    >
      <SheetTrigger asChild className="lg:hidden">
        <MenuItems role="button" className="transition-all flex gap-2 items-baseline justify-between md:items-center">
          {children}
          <span className="flex w-[0.7rem] h-[0.7rem]">
            <ImageKit src="/icons/chevron-right-solid.svg" alt="chevron right" width="8" height="8" className='block'/>
          </span>
        </MenuItems>
      </SheetTrigger>
      <SheetContent side="top" className="w-[100vw] h-full bg-white lg:hidden z-[999] overflow-y-auto pt-16">
        <SheetHeader>
          <Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/mon-compte`} className="flex items-center justify-start gap-2 absolute top-5 left-6 font-roboto">
            <ImageKit src="/icons/Account.svg" alt="account icon" width={32} height={32} />
            <span className="font-semibold text-[#24B9D7] text-[1rem] leading-none font-roboto tracking-[0.5px]">Connexion</span>
          </Link>
          <div className="border-b border-black flex absolute top-[72px] left-0 h-[1px] w-full !mt-0"></div>
        </SheetHeader>
        <SheetTitle>
          <span className="sr-only">{children}</span>
        </SheetTitle>
        <SubMenu1 subtitle={activeSub} className='mt-8 sm:me-8' onClickCapture={handleCloseAll} setOpenSub={setOpenSub} />
      </SheetContent>
    </Sheet>
  )
}

export const Nav: React.FC<NavProps> = ({
  openSub,
  setOpenSub,
  handleMouseOver,
  handleMouseLeave,
  handleCloseAll,
}) => {
  const navToggle = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [activeSub, setActiveSub] = useState<'store' | 'decouvrir'>('store')
  gsap.registerPlugin(CustomEase);
  
  useEffect(() => {
    CustomEase.create('ease-submenu', '.4,0,.6,1');
    CustomEase.create('ease-fade', '.5,0,0,.75');
    const timeline = gsap.timeline({ defaults: { duration: 0.3, ease: "ease-submenu" } });
    const element = navToggle.current;
    const modalOverlay = document.querySelector('#modalOverlay');
    if (!element || !isDesktop) return;

    // Kill previous timeline
    timeline.clear();

    if (openSub) {
      modalOverlay?.classList.add('active')
      timeline
        .set(element, { height: 0 })
        .to(element, { height: "272px", duration: 0.240, ease: "ease-submenu" })
        .fromTo(
          ".submenu1",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.5, ease: "ease-fade" },
          "-=0.5"
        );
    } else {
      if (modalOverlay?.classList.contains('active')) modalOverlay.classList.remove('active');
      timeline
        .to(element, { height: 0, duration: 0.240, ease: "ease-submenu" })
        .to(".submenu1", { autoAlpha: 0, duration: 0.5, ease: "ease-fade" }, '-=0.240')
    }

    return () => {
      timeline.clear();
    };
  }, [openSub, isDesktop]);

  return (
    <div className=" w-full gap-[8px] lg:h-full flex flex-col lg:flex-row justify-start lg:justify-end start-center lg:items-center mt-8 lg:mt-0 font-roboto">
      {isDesktop && (
          <div
            ref={navToggle}
            data-name="nav-toggle"
            onMouseLeave={handleMouseLeave}
            className="lg:absolute top-full w-screen left-0 z-[8000] bg-white overflow-hidden xl:shadow-menu"
          >
            <SubMenu1 subtitle={activeSub} onClickCapture={handleCloseAll} className='bg-transparent' />
          </div>
        )}
      <div className="md:w-[50%] flex flex-1 gap-[28px] md:gap-[0.75rem] justify-start lg:justify-center flex-col lg:flex-row">
        <MenuItems href={`/`} onMouseOver={handleCloseAll} onClick={handleCloseAll} className='md:hidden'>Page d&apos;accueil</MenuItems>

        {/* Mobile Sheet Menu */}
        <SheetMobile
          sub='store'
          setActiveSub={setActiveSub}
          handleCloseAll={handleCloseAll}
          setOpenSub={setOpenSub}
          isDesktop={isDesktop}
          openSub={openSub}
          activeSub={activeSub}
        >
          Store
        </SheetMobile>

        {/* Desktop Menu */}
        <MenuItems 
          className='hidden lg:flex items-center gap-[5px]'
          onMouseOver={() => {
            setActiveSub('store');
            isDesktop && handleMouseOver();
          }}
          style={{backgroundColor: openSub && (activeSub === 'store') ? '#ebecec' : ''}}
        >
          Store
          <span className="flex w-[1rem] h-[1rem]">
            <ImageKit src="/icons/chevron-down-solid.svg" alt="chevron down" width="16" height="16"/>
          </span>
        </MenuItems>
        <MenuItems href={`${process.env.NEXT_PUBLIC_REDIRECT}/content/231-entreprise`} onMouseOver={handleCloseAll} onClick={handleCloseAll}>Professionnels</MenuItems>
        {/* Other menu items */}
        <MenuItems href={'/projects'} onMouseOver={handleCloseAll} onClick={handleCloseAll}>
          Projets
        </MenuItems>
        <MenuItems href={'/community'} onMouseOver={handleCloseAll} onClick={handleCloseAll}>
          Contributeurs
        </MenuItems>
        <MenuItems
          href="/"
          onMouseOver={() => {
            setActiveSub('decouvrir')
              isDesktop && handleMouseOver();
          }}
          className="transition-all hidden lg:flex items-center gap-[5px]"
          style={{backgroundColor: openSub && (activeSub === 'decouvrir') ? '#ebecec' : ''}}
        >
          Découvrir
          <span className="flex w-[1rem] h-[1rem]">
            <ImageKit src="/icons/chevron-down-solid.svg" alt="chevron down" width="16" height="16" className='block'/>
          </span>
        </MenuItems>
        {/* Mobile Sheet Menu */}
         <SheetMobile
          sub='decouvrir'
          setActiveSub={setActiveSub}
          handleCloseAll={handleCloseAll}
          setOpenSub={setOpenSub}
          isDesktop={isDesktop}
          openSub={openSub}
          activeSub={activeSub}
        >
          Découvrir
        </SheetMobile>
      </div>
    </div>
  );
};