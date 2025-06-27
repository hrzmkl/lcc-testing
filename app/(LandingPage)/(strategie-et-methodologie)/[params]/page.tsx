"use client";
import Link from "next/link";
import StrategieFilterOne from "@/components/StrategieGouvernance/StrategieFilterOne";
import { useState, useEffect, useRef, useMemo } from "react";
import { strategieEtGouvernance, methodologieSurLeTerrain } from "@/constants";
import { notFound, useParams } from "next/navigation";
import { handleScrollBg } from "@/lib/utils";
import ImageKit from "@/components/ui/ImageKit";
import { useAppStore } from "@/store/appStore";

const pagesData = {
  'strategie-et-gouvernance': {
    title: 'Stratégie et Gouvernance',
    content: strategieEtGouvernance
  },
  'methodologie-sur-le-terrain': {
    title: 'Méthodologie sur le terrain',
    content: methodologieSurLeTerrain
  }
};

export type CategoryFilter = {
  text: string;
  color: string;
  bgColor: string;
  active: boolean;
}

const StrategieEtGouvernance = () => {
  const params = useParams();
  const param = params && params['params'];
  const { bgColor, setBgColor } = useAppStore((state) => state);
  const [uniqueCategories, setUniqueCategories] = useState<CategoryFilter[]>([]);
  const [filters, setFilters] = useState<number[]>([]);
  const refContainer = useRef<HTMLDivElement>(null);

  const handleIndexClick = (index: number) => {
    setUniqueCategories((prevCategories) => 
      prevCategories.map((category, i) => 
        i === index ? { ...category, active: !category.active } : category
      )
    );

    setFilters((prevFilters) => 
      prevFilters.includes(index) 
        ? prevFilters.filter((i) => i !== index) 
        : [...prevFilters, index]
    );
  };

  const clearFilters = () => {
    setUniqueCategories((prevCategories) =>
      prevCategories.map(category => ({ ...category, active: false }))
    );
    setFilters([]);
  };

  const pageData = useMemo(() => pagesData[param as keyof typeof pagesData], [param]);

  useEffect(() => {
    const categoriesMap = new Map<
      string,
      { bgColor: string; color: string }
    >();

    pageData.content.forEach((category) => {
      if (!categoriesMap.has(category.text)) {
        categoriesMap.set(category.text, {
          bgColor: category.bgColor,
          color: category.color,
        });
      }
    });

    setUniqueCategories(
      Array.from(categoriesMap, ([text, { bgColor, color }]) => ({
        text,
        bgColor,
        color,
        active: false
      }))
    );

  }, [pageData]);

  useEffect(() => {
    setBgColor('#ff6c02');
    const scrollHandler = () => handleScrollBg(refContainer, () => setBgColor('#ff6c02'), () => {
      setBgColor('#ff6c02');
    }, setBgColor);
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, [setBgColor]);

  if (!pageData) return notFound();

  const filteredContent = filters.length > 0 
    ? pageData.content.filter((_, index) => filters.includes(index))
    : pageData.content;

  return (
    <div
      ref={refContainer}
      className="h-full w-full flex flex-col"
    >
      <div className="!w-full sm:max-w-[90%] xl:max-w-[1536px] mx-auto py-6 px-4 md:px-0 m-auto flex flex-col items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center pb-8">
          <div className="w-full sm:w-[75%]">
            <p className="text-[#780016] font-extrabold text-[40px] md:text-[80px] lg:text-[76px] leading-[1.1] 2xl:text-8xl text-left mb-6">
              {pageData.title}
            </p>
            <StrategieFilterOne
              bgColor={bgColor}
              isFiltered={filters.length > 0}
              categories={uniqueCategories}
              onClearFilter={clearFilters}
              onTagClick={handleIndexClick}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-full sm:w-[75%] py-4 md:py-8">
            <div className="flex flex-col space-y-4">
              {filteredContent.map((item, index) => (
                <Link href={'/' + param + item.link} key={index}>
                  <div
                    id={`item-${index}`}
                    className="flex flex-row items-center rounded-[80px] sm:rounded-[80px] overflow-hidden shadow-md"
                  >
                    <ImageKit
                      src={item.src || '/Images/card-program/Pepiniere-1.jpg'}
                      alt="Illustration"
                      width={356}
                      height={140}
                      className="w-1/3 h-[110px] 7xl:h-[140px] object-cover"
                    />
                    <div className="w-2/3 p-4 px-4 sm:px-10 relative z-10 h-[110px] 7xl:h-[140px] flex items-center overflow-hidden bg-white">
                      <p className="cursor-pointer text-[#780016] font-bold text-sm sm:text-lg 7xl:text-xl hover:underline hover:decoration-[#780016] relative z-20">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategieEtGouvernance;
