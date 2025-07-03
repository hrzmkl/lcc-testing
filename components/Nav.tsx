import React, { useEffect, useRef } from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import SubMenu1 from "./submenu/submenu";
import { MenuItems } from "./submenu/menuItems";
import useMediaQuery from "@/lib/useMediaQuery";
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

interface NavProps {
  openSub: boolean;
  setOpenSub: (value: boolean) => void;
  handleMouseOver: () => void;
  handleMouseLeave: () => void;
  handleCloseAll: () => void;
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
    <div className="relative w-full gap-[8px] lg:h-full flex flex-col lg:flex-row justify-start lg:justify-end start-center lg:items-center mt-8 lg:mt-0">
      <div className="flex flex-1 gap-0 justify-start lg:justify-end flex-col lg:flex-row">
        {/* Mobile Sheet Menu */}
        <Sheet
          open={openSub && !isDesktop}
          onOpenChange={(value) => !isDesktop && setOpenSub(value)}
        >
          <SheetTrigger asChild className="lg:hidden">
            <MenuItems role="button" className="transition-all">
              Découvrir
            </MenuItems>
          </SheetTrigger>
          <SheetContent side="top" className="w-[100vw] h-full bg-white lg:hidden z-[999] overflow-y-auto">
            <SheetTitle>
              <span className="sr-only">Découvrir</span>
            </SheetTitle>
            <SubMenu1 className='mt-8 sm:me-8' onClickCapture={handleCloseAll} />
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <MenuItems
          role="button"
          onMouseOver={() => {
              isDesktop && handleMouseOver();
          }}
          className="transition-all hidden lg:flex"
          style={{backgroundColor: openSub ? '#ebecec' : ''}}
        >
          Découvrir
        </MenuItems>
        {isDesktop && (
          <div
            ref={navToggle}
            data-name="nav-toggle"
            onMouseLeave={handleMouseLeave}
            className="lg:absolute top-[calc(100%+0.5rem)] w-screen -right-[0.7rem] z-[8000] bg-white overflow-hidden xl:shadow-menu"
          >
            <SubMenu1 onClickCapture={handleCloseAll} className='bg-transparent' />
          </div>
        )}

        {/* Other menu items */}
        <MenuItems href={'/projects'} onMouseOver={handleCloseAll} onClick={handleCloseAll}>
          Projets
        </MenuItems>
        <MenuItems href={'/community'} onMouseOver={handleCloseAll} onClick={handleCloseAll}>
          Contributeurs
        </MenuItems>
      </div>
      <div className={'gap-[12px] flex flex-col lg:flex-row justify-start lg:justify-end start-center lg:items-center '}>
        <MenuItems target="_blank" href={process.env.NEXT_PUBLIC_REDIRECT} onMouseOver={handleCloseAll} className={'rounded-full bg-buy-coffee'} onMouseUp={handleCloseAll}>Acheter du café</MenuItems>
      </div>
    </div>
  );
};