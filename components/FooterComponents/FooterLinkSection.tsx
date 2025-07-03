"use client";

import {useEffect, useState, Fragment} from 'react';

import {MenuItemsFooter} from "@/components/submenu/menuItems";
import useWindowDimensions from '@/components/WindowsSize';
import {Popover} from '@/components/ui/popOver';
import {menuSection} from "@/constants";
import ImageKit from '../ui/ImageKit';

const FooterLinkSection = () => {
    const {width} = useWindowDimensions();
    const [_, setWindowWidth] = useState<number | undefined>(width);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth); // Use window.innerWidth to get the current width
        };

        setWindowWidth(width);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    const Value = width && width <= 768 ? 1 : width && width > 768 && width && width <= 992 ? 3 : width && width > 992 && width && width <= 1440 ? 4 : 5;

    return (
        <div
            className=" bg-white flex flex-col justify-center rounded-[80px] gap-[32px] p-[16px] md:px-[60px] md:py-[48px] relative shadow-menu mx-3 md:mx-5">

            <div className={'w-full flex flex-wrap  items-start gap-0 '}>
                {menuSection.map((section, index) => (
                    <Fragment key={index}>
                        <div key={index} className="col-span-1 flex-1 flex flex-col items-start gap-[12px]  py-[48px] p-[20px]
                  ">
                            <MenuItemsFooter type={'heading'} aria-label={section.title}>{section.title}</MenuItemsFooter>
                            {section.links.map((link, linkIndex) => (
                                <MenuItemsFooter target="_blank" key={linkIndex} href={`${link.interne ? '' : process.env.NEXT_PUBLIC_REDIRECT}${link.url}`} aria-label={section.title}>{link.title}</MenuItemsFooter>
                            ))}
                            {section.linksPlus?.map((readmore, linkIndex) => (
                                <MenuItemsFooter target='_blank' key={linkIndex} href={process.env.NEXT_PUBLIC_REDIRECT + readmore.url}
                                                 type={'plus'} aria-label={section.title}>{readmore.title}</MenuItemsFooter>
                            ))}
                        </div>
                        {(index + 1) % Value === 0 && index + 1 !== menuSection.length && (
                            <div
                                className={`border-b-[#b5b5b5] border-b relative min-w-[calc(100%+60px)] lg:min-w-[calc(100%+120px)] -left-[30px] lg:-left-[60px]`}/>
                        )}
                    </Fragment>

                ))}
            </div>
            {/*<FooterLinkSectionTop />*/}
            {/*<FooterLinkSectionMiddle />*/}
            <div className={'border-b-[#b5b5b5] border-b relative min-w-[calc(100%+60px)] lg:min-w-[calc(100%+120px)] -left-[30px] lg:-left-[60px]'}/>

            <section className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex-1 flex justify-start items-center gap-[16px] md:gap-[24px] lg:gap-[64px]">
                    <button type="button">
                        <Popover 
                            PopOverContentWrapperClassName='!left-[208%] sm:!left-[75%] md:!left-[50%]'
                            PopOverContent={"Chacun son café : Premier torréfacteur certifié B Corp en France, Chacun Son Café fournit des solutions cafés éthiques à la maison et au bureau, qui agissent pour le climat et la biodiversité"} 
                            PopOverclassName={'w-[320px] h-[180px]'}
                            PopOverTargetIconClassName='!left-[13%] sm:!left-[40%] md:!left-[45%]'>
                            <ImageKit
                                src="/Images/icon.webp"
                                alt="Chacun son café : Premier torréfacteur certifié B Corp en France, Chacun Son Café fournit des solutions cafés éthiques à la maison et au bureau, qui agissent pour le climat et la biodiversité"
                                width={125}
                                height={60}
                                className="h-[70px] w-auto object-contain"
                                loading={'lazy'}
                            />
                        </Popover>
                    </button>
                    <button type="button">
                        <Popover PopOverContent={"Let's catch Carbon"} PopOverclassName={'w-[180px]'}>
                            <ImageKit
                                src="/Images/logo-lcc.webp"
                                alt="LCC-logo"
                                width={600}
                                height={200}
                                className="h-[98px] w-auto object-contain"
                                loading={'lazy'}
                            />
                        </Popover>
                    </button>
                    
                    <button type="button">
                        <Popover
                            PopOverContent={"Good economie: Grand Prix de la Good Economie avec son programme de reforestation de 12 000 hectares de forêt tropicale"}
                            PopOverclassName={'w-[250px] h-[150px]'}
                            PopOverTargetIconClassName='left-[45%]'>
                            <ImageKit
                                src="/Images/good-economie.webp"
                                alt="Good economie: Grand Prix de la Good Economie avec son programme de reforestation de 12 000 hectares de forêt tropicale"
                                width={243}
                                height={195}
                                className="h-[78px] w-auto object-contain"
                                loading={'lazy'}
                            />
                        </Popover>
                    </button>
                    <button type="button">
                        <Popover 
                            PopOverContent={"Récompensés pour améliorer l'environnement de travail des salariés dans le cadre de l’Agenda 2030"}
                            PopOverclassName={'w-[250px] h-[130px]'}
                            PopOverTargetIconClassName='left-[45%]'>
                            <ImageKit
                                src="/Images/worknight-log.webp"
                                alt="Récompensés pour améliorer l'environnement de travail des salariés dans le cadre de l’Agenda 2030"
                                width={274}
                                height={219}
                                className="h-[78px] w-auto object-contain"
                                loading={'lazy'}
                            />
                        </Popover>
                    </button>
                    <button type="button">
                        <Popover
                            PopOverContent={"Ekop Award 2022 : Chacun son café récompensé dans la catégorie Préservation des ressources naturelles"}
                            PopOverclassName={'w-[250px] h-[130px]'}
                            PopOverContentWrapperClassName={'!-left-[70%] sm:!left-[50%]'}
                            PopOverTargetIconClassName='!left-[75%] sm:!left-[50%] md:!left-[47%]'>
                            <ImageKit
                                src="/Images/ekopo-logo.webp"
                                alt="Ekopo awards: Ekopo Awards 2022 : Chacun son café récompensé dans la catégorie Préservation des ressources naturelles"
                                width={360}
                                height={208}
                                className="h-[78px] w-auto object-contain"
                                loading={'lazy'}
                            />
                        </Popover>
                    </button>
                </div>
                <div className="  flex justify-end items-center">
                    <button type="button">
                        <Popover
                            PopOverContent={"Première entreprise de café certifiée B Corp en 2021"}
                            PopOverclassName={'w-[200px] h-[100px]'}
                            PopOverTargetIconClassName='!left-[45%]'>
                            <ImageKit
                            src="/Images/certificat.webp"
                            alt="Première entreprise de café certifiée B Corp en 2021"
                            width={65}
                            height={112}
                            className=" h-[78px] w-auto object-contain"
                            loading={'lazy'}
                        />
                        </Popover>
                    </button>

                </div>
            </section>
        </div>
    );
};

export default FooterLinkSection;

