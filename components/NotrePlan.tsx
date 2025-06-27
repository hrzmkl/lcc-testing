'use client';

import React, {useState, useEffect, useMemo, useRef, forwardRef, LegacyRef, useCallback, HTMLAttributes} from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import ModalLinkedInStyle from "./ui/ModalLinkedInStyle";
import useMediaQuery from "@/lib/useMediaQuery";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

// AccordionItem component
export const AccordionItem = ({
    title,
    date,
    content,
    categories = [],
    className = '',
    isOpen = false,
    onMouseEnter,
    onMouseLeave,
    planState = false,
    countries = [],
    codePays,
    ...props
}: ItemsShowingProps) => {

    return (
        <div
            className={`overflow-hidden accordion-item flex-1 flex items-center bg-white gap-1 md:gap-3 p-4 rounded-[96px] transition-all hover:cursor-pointer max-h-fit ${isOpen ? "active" : ""} ${className}`}
            onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
            {...props}
        >
            <div
                className={`flex-0 mr-2 flex items-center justify-center ${planState ? '' : 'bg-[#061491]'} !min-w-[25px] !min-h-[25px] !w-[21px] !h-[21px] sm:!w-[60px] sm:!h-[60px] rounded-[140px] ${isOpen ? "active" : ""} ${className}`}
            >
                <Image
                    src={'/Images/noun-check-7043390.svg'}
                    width={60}
                    height={60}
                    alt={'title'}
                    className={planState ? '' : 'hidden'}
                />
                <Image
                    src={'/Images/noun-timer-434371.svg'}
                    width={35}
                    height={35}
                    alt={'title'}
                    className={planState ? 'hidden' : ''}
                />
            </div>
            <div className={`flex flex-1 items-center flex-wrap`}>
                <div className={`flex flex-1 flex-col justify-start`}>
                    <p className={`flex-1 text-base text-[#061491] p-0 m-0 leading-[25.2px] font-bold transition-all line-clamp-1`}>{title}</p>
                    <p className={`flex-1 text-base text-[#061491] p-0 m-0 leading-[25.2px] -mt-1`}>{date}</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                    {countries.map((country, index) => (
                        <span key={index}
                            className="bg-[#ededed] flex flex-row text-[12px] flex-nowrap items-center gap-[8px] text-black test-12 uppercase pl-[4px] pr-[16px] py-[4px] rounded-[24px]"
                        >
                            <span className={'w-[20px] h-[20px] flex items-center overflow-hidden rounded-full'}>
                                <Image
                                    src={`/Images/flags/${codePays}.svg`}
                                    width={20} height={20} alt={country}
                                    className={'min-h-full min-w-full object-cover'}
                                />
                            </span>
                            {country}
                        </span>
                    ))}

                    {categories.map((categorie, index) => (
                        <span key={index} className={`test-12 text-[12px] font-medium uppercase px-[16px] py-[4px] rounded-[24px]`}
                            style={{
                                backgroundColor: categorie.bgcolor,
                                color: categorie.color
                            }}
                        >
                            {categorie.name}
                        </span>
                    ))}
                </div>
            </div>
            <div className={`relative ${isOpen ? "w-[36px] opacity-1" : "w-0 opacity-0"} transition-all ease-in-out delay-150 duration-300 hidden sm:block`}>
                <Image src={'/Images/noun-arrow-7254258.svg'} width={36} height={36} alt={'title'}/>
            </div>
        </div>
    );
};

export const AccordionItemContent = forwardRef(({
        title,
        date,
        content,
        categories = [],
        heightLimited = false,
        className = '',
        isOpen = false,
        animate = true, 
        style
    }: ItemsShowingProps & {animate?: boolean, heightLimited?: boolean}, ref: LegacyRef<HTMLDivElement>) => {

    return (
        <div 
            ref={ref}
            style={style}
            className={`${isOpen ? 'p-8 block' : 'p-0 hidden'} max-h-min rounded-[50px] bg-white space-y-[21px] ${className} ${animate &&'animate-slide-in-top'} ${heightLimited && 'overflow-y-auto max-h-[85vh]'}`}
        >
            <div>
                <div className="flex flex-row items-center gap-[16px]">
                    {categories.map((categorie, index) => (
                        <span key={index} className={`test-12 text-[12px] font-medium uppercase px-[16px] py-[4px] rounded-[24px]`}
                            style={{
                                backgroundColor: categorie.bgcolor,
                                color: categorie.color
                            }}
                        >
                            {categorie.name}
                        </span>

                    ))}
                </div>
                <h3 className="text-[#061491] text-[1.5rem] leading-[28.4px] font-bold">{title}</h3>
                <p className="flex-1 text-base text-[#061491] p-0 m-0 ">
                    {date}
                </p>
                <div className="flex flex-col gap-[8px] flex-1 text-base text-[#061491]"
                     dangerouslySetInnerHTML={{__html: content || ''}}/>
            </div>
        </div>

    );
});

AccordionItemContent.displayName = 'AccordionItemContent';
const CategoryFilter = ({onCategorySelect, uniqueCategories, selectedCategories, onClearFilter}: {uniqueCategories: Category[], selectedCategories: Category[], onCategorySelect: (category: Category) => void, onClearFilter: () =>void }) => {
    const [emblaRef] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true
    }, [WheelGesturesPlugin()]);
    const bgColor = useAppStore((state) => state.bgColor);

    const isActif = (category: Category) => {
        return selectedCategories.some((selectedCategory) => selectedCategory.name === category.name);
    };

    const handleCategoryClick = (category: Category): void => {
        onCategorySelect(category);
    };

    return (
        <div className="flex items-center w-full pt-2">
            {selectedCategories.length > 0 && (
              <button
                className="px-4 py-2 mt-4 2xl:py-3 12xl:px-6 12xl:py-3 13xl:px-7 13xl:py-4 text-xs 2xl:text-base 10xl:text-lg 11xl:text-xl 12xl:text-2xl 13xl:text-3xl text-white bg-gray-800 rounded-full font-semibold hover:bg-gray-900 transition ease-in-out duration-200 shadow-md mr-3"
                onClick={onClearFilter}
                style={{ flexShrink: 0 }}
              >
                Effacer les filtres
              </button>
            )}
            <div className="overflow-x-hidden pt-4 flex-1" ref={emblaRef}>
                <div className="flex gap-2 relative">
                    {uniqueCategories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategoryClick(category)}
                            style={{
                                backgroundColor: isActif(category) ? category.bgcolor : '#fff',
                                color: isActif(category) ? category.color : '#000',
                            }}
                            className={`flex-shrink-0 px-4 py-2 2xl:py-3 12xl:px-6 12xl:py-3 13xl:px-7 13xl:py-4 text-xs 2xl:text-base 10xl:text-lg 11xl:text-xl 12xl:text-2xl 13xl:text-3xl font-normal rounded-full transition hover:scale-[101%] hover:-translate-y-[5px] hover:shadow-menu ease-in duration-200`}
                        >
                            {category.name}
                        </button>
                    ))}
                     {/* <div
                        style={{
                            ['--tw-gradient-from' as string]: `${bgColor} var(--tw-gradient-from-position)`,
                            ['--tw-gradient-to' as string]: 'rgb(255 255 255 / 0) var(--tw-gradient-to-position)',
                            ['--tw-gradient-stops' as string]: 'var(--tw-gradient-from), var(--tw-gradient-to)',
                            transition: 'all 650ms ease-in !important'
                        }}
                        className={`absolute right-0 bottom-0 flex h-full w-28 bg-gradient-to-l to-transparent pointer-events-none`}
                    ></div> */}
                </div>
            </div>
        </div>
    );
};

export default CategoryFilter;

import { PlanData as data } from "@/constants";
import { useAppStore } from "@/store/appStore";

export const ItemsListShow = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => {
    const [emblaMainRef] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true
    }, [WheelGesturesPlugin()]);
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [activeFilters, setActiveFilters] = useState<Category[]>([]);
    const [filteredData, setFilteredData] = useState(data);
    const [uniqueCategories, setUniqueCategories] = useState<Category[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [marginTop, setMarginTop] = useState<number | string>(0);
    const [yearFilter, setYearFilter] = useState<'sup' | 'now' | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const bgColor = useAppStore((state) => state.bgColor);

    const handleClick = useCallback((index: number) => {
        setModalOpen(true);
        setActiveIndex(index)
    }, []);
    const activeTimeline = useMemo(() => (filteredData[activeIndex || 0]) , [activeIndex, filteredData])

    const toggleFilter = (category: Category) => {
        setActiveFilters((prevFilters) =>
            prevFilters.some((filter) => filter.name === category.name)
                ? prevFilters.filter((filter) => filter.name !== category.name)
                : [...prevFilters, category]
        );
    };

    const isDesktop = useMediaQuery("(min-width: 768px)");

    const yearNow = useMemo(() => {
        const date = new Date();
        return date.getFullYear();
    }, [])

    useEffect(() => {
        const categoriesMap = new Map<string, { bgcolor: string; color: string }>();

        data.forEach((plan) => {
            plan.categories.forEach((category) => {
                if (!categoriesMap.has(category.name)) {
                    categoriesMap.set(category.name, { bgcolor: category.bgcolor, color: category.color });
                }
            });
        });

        setUniqueCategories(Array.from(categoriesMap, ([name, { bgcolor, color }]) => ({ name, bgcolor, color })));
    }, []);

    useEffect(() => {
        setFilteredData(
            activeFilters.length > 0
                ? data.filter((item) =>
                    activeFilters.some((filter) =>
                        item.categories.some((category: Category) => category.name.toLowerCase() === filter.name.toLowerCase())
                    )
                )
                : data
        );
        if (!yearFilter) {
            return;
        }
        if (yearFilter === 'now') {
            setFilteredData((data) => {
                return data.filter((item) => parseInt(item.date.split(' ').pop() ?? '0') == yearNow);
            })
        }
        if (yearFilter === 'sup')
            setFilteredData((data) => {
                return data.filter((item) => parseInt(item.date.split(' ').pop() || '0') > yearNow)
            })
    }, [activeFilters, yearFilter, yearNow]);

    useEffect(() => {
        const handleMargin = () => {
            if (!contentRef.current || !containerRef.current) return;
            const activeItem = document.querySelector('.accordion-item.active') as HTMLDivElement;
            if (!activeItem) return;
            const activeItemPosition = activeItem.offsetTop;
            const containerPosition = containerRef.current.offsetTop;
            const containerBottom = containerRef.current.offsetHeight + containerPosition;
            const diff = activeItemPosition - containerPosition;
            const contentHeight = contentRef.current.offsetHeight;
            if (diff < 0) {
                setMarginTop(0);
                return;
            }
            if (diff + contentHeight > containerBottom) {
                setMarginTop('auto');
                return;
            }
            setMarginTop(`${diff}px`);
        };
        requestAnimationFrame(handleMargin);
    }, [activeIndex]);

    return (
        <div className={`w-full flex flex-col gap-4 items-center justify-start ${className}`} {...props}>
            <div className="w-full flex flex-col gap-2 px-0 mb-10 ">
                <div className="overflow-hidden pt-4" ref={emblaMainRef}>
                    <div className="flex gap-2">
                        {yearFilter && <button
                            onClick={() => {setActiveFilters([]); setYearFilter(null)}} 
                            className={'flex-shrink-0 text-white border-2 border-white inline-block px-4 py-2 2xl:py-3 12xl:px-6 12xl:py-3 13xl:px-7 13xl:py-4 text-xs 2xl:text-base 10xl:text-lg 11xl:text-xl 12xl:text-2xl 13xl:text-3xl font-normal rounded-full transition hover:scale-[101%] hover:-translate-y-[5px] hover:shadow-menu ease-in duration-200'}
                        >
                            Tout
                        </button>}
                        <button
                            type='button'
                            style={{ color: yearFilter === 'now' ? bgColor : 'white', background: yearFilter === 'now' ? 'white': ''}}
                            className={`flex-shrink-0 border-2 border-white inline-block px-4 py-2 2xl:py-3 12xl:px-6 12xl:py-3 13xl:px-7 13xl:py-4 text-xs 2xl:text-base 10xl:text-lg 11xl:text-xl 12xl:text-2xl 13xl:text-3xl font-normal rounded-full transition hover:scale-[101%] hover:-translate-y-[5px] hover:shadow-menu ease-in duration-200`}
                            onClick={() => yearFilter === 'now' ? setYearFilter(null) : setYearFilter('now')}
                        >
                            Année en cours
                        </button>
                        <button
                            type="button" 
                            style={{ color: yearFilter === 'sup' ? bgColor : 'white', background: yearFilter === 'sup' ? 'white': ''}}
                            className={`flex-shrink-0 border-2 border-white inline-block px-4 py-2 2xl:py-3 12xl:px-6 12xl:py-3 13xl:px-7 13xl:py-4 text-xs 2xl:text-base 10xl:text-lg 11xl:text-xl 12xl:text-2xl 13xl:text-3xl font-normal rounded-full transition hover:scale-[101%] hover:-translate-y-[5px] hover:shadow-menu ease-in duration-200
                                ${yearFilter === 'sup' && `!text-[${bgColor}] !bg-white`}`}
                            onClick={() => yearFilter === 'sup' ? setYearFilter(null) : setYearFilter('sup')}
                        >
                            Prochaines étapes
                        </button>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration={'1500'} data-aos-offset="-100" className="h-full flex flex-row flex-wrap gap-[16px] flex-start z-[88] w-full">
                    <CategoryFilter onClearFilter={() => setActiveFilters([])} selectedCategories={activeFilters} onCategorySelect={toggleFilter} uniqueCategories={uniqueCategories} />
                </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-[16px] md:py-6 px-0 relative transition-all">
                <div className={`flex flex-1 w-full md:max-w-[60%] md:w-[60%] flex-col gap-[24px]`}>
                    {filteredData.length > 0 && filteredData.map((item, index) => (
                        <AccordionItem
                            key={item.id}
                            title={item.title}
                            date={item.date}
                            planState={item.planState}
                            countries={item.countries}
                            codePays={item.codePays}
                            categories={item.categories}
                            isOpen={activeIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
                <div ref={containerRef} className="md:max-w-[40%] md:w-[40%] min-h-full max-h-full flex">
                    {activeTimeline && (!isDesktop ? (
                        <ModalLinkedInStyle title="" show={modalOpen} onClose={() => setModalOpen(false)} >
                            <AccordionItemContent
                                animate={false}
                                heightLimited={true}
                                key={activeIndex}
                                title={activeTimeline.title}
                                date={activeTimeline.date}
                                content={activeTimeline.content !== undefined ? String(activeTimeline.content) : "No content available"}
                                planState={activeTimeline.planState}
                                countries={activeTimeline.countries}
                                codePays={activeTimeline.codePays}
                                categories={activeTimeline.categories}
                                isOpen={true}
                            />
                        </ModalLinkedInStyle>
                    ) : (
                        <AccordionItemContent
                            ref={contentRef}
                            style={{ marginTop: marginTop, transition: 'margin-top 0 ease-in' }}
                            key={activeIndex}
                            title={activeTimeline.title}
                            date={activeTimeline.date}
                            content={activeTimeline.content !== undefined ? String(activeTimeline.content) : "No content available"}
                            planState={activeTimeline.planState}
                            countries={activeTimeline.countries}
                            codePays={activeTimeline.codePays}
                            categories={activeTimeline.categories}
                            isOpen={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

