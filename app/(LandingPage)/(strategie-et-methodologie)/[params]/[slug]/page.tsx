'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import { methodologieSurLeTerrain, strategieEtGouvernance } from '@/constants';
import {
  Paragraphe,
  SubtitleParagraphe,
  MediumParagraphe,
  BorderedParagraphe,
  OlParagraphe,
  UlParagraphe,
} from '@/components/StrategieGouvernance/Paragraphes';


import Link from 'next/link';
import { handleScrollBg } from '@/lib/utils';
import ImageKit from '@/components/ui/ImageKit';
import { useAppStore } from '@/store/appStore';

const pagesData = {
  'strategie-et-gouvernance': {
    title: 'Stratégie et Gouvernance',
    content: strategieEtGouvernance,
  },
  'methodologie-sur-le-terrain': {
    title: 'Méthodologie sur le terrain',
    content: methodologieSurLeTerrain,
  },
};

const StructureSocial = () => {
  const params = useParams();
  const slug = params && params['slug'];
  const param = params && params['params'];
  const setBgColor = useAppStore((state) => state.setBgColor);
  const [color, setColor] = useState('#e3ff00');
  const sectionRef = useRef<HTMLDivElement>(null); // Référence à la section

  useEffect(() => {
    setBgColor('#1d232f'); // Couleur lorsque 66% est atteint

    const onThresholdReached = () => {
      setBgColor('#e3ff00'); // Couleur initiale
      setColor('#000');
    };

    const onThresholdLeft = () => {
      setBgColor('#1d232f'); // Couleur lorsque 66% est atteint
      setColor('#e3ff00');
    };

    const onThresholdEnd = () => {
      setBgColor('#ff37fc');
    };

    const scrollHandler = () => {
      handleScrollBg(
        sectionRef,
        onThresholdReached,
        onThresholdLeft,
        onThresholdEnd
      );
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [setBgColor]);

  const pageData = pagesData[param as keyof typeof pagesData];

  const {
    text: title,
    content,
    src,
  } = pageData?.content.find((content) => content.link == '/' + slug) || {
    content: [{ type: 'default', value: '' }],
    text: 'Content not found',
  };
  const renderContent = useMemo(() => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'default':
          return <Paragraphe key={index}>{item.value as string}</Paragraphe>;
        case 'medium':
          return <MediumParagraphe key={index}>{item.value as string}</MediumParagraphe>;
        case 'subtitle':
          return (
            <SubtitleParagraphe key={index}>{item.value as string}</SubtitleParagraphe>
          );
        case 'bordered':
          return (
            <BorderedParagraphe key={index}>{item.value as string}</BorderedParagraphe>
          );
        case 'ol':
          return (
            <OlParagraphe
              key={index}
              title={item.title}
              paragraphes={item.value as string[]}
            />
          );
        case 'link':
          return (
            <Link
              key={index}
              href={item.href || item.value as string}
              className="text-blue-700 block"
            >
              {item.value as string}
            </Link>
          );
        case 'image':
          return (
            <ImageKit
              key={index}
              src={item.value as string}
              alt={item.value as string || ''}
              width={1681}
              height={350}
              style={item.style}
              className={`w-full h-auto object-center object-cover mx-auto max-h-[440px] rounded-[25px] ${item.className}`}
            />
          );
        default:
          return (
            <UlParagraphe
              key={index}
              title={item.title}
              paragraphes={item.value as string[]}
            />
          );
      }
    });
  }, [content]);

  if (!pageData) return notFound();

  return (
    <div className="m-0">
      <ImageKit
        src={src || '/Images/fiche-bg.webp'}
        alt={title || ''}
        width={1681}
        height={350}
        className="flex w-full object-center object-cover sm:h-[30vh] md:h-[33vh] lg:h-[52vh] xl:h-[60vh] 2xl:h-[70vh]"
        priority
      />
      <div ref={sectionRef} className="h-full w-full flex flex-col">
        <div className="flex flex-col justify-center items-start">
          <div className="w-full px-8 pt-8">
            <div className="w-full md:w-4/5 lg:w-4/5 xl:w-[60%] mx-auto mb-10">
              <div
                style={{ color }}
                className="flex items-center text-sm md:text-base mb-4"
              >
                <span className="mr-2 font-bold ">←</span>
                <Link href="/strategie-et-gouvernance" className="underline">
                  Revenir à {pageData.title}
                </Link>
                <span className="mx-1 md:mx-2">›</span>
                <span>{title}</span>
              </div>
              <p
                className="font-extrabold text-[40px] md:text-[80px] lg:text-[76px] 2xl:text-8xl text-left leading-[1] mb-[4rem] md:mb-[6rem]"
                style={{ color }}
              >
                {title}
              </p>
              <div
                style={{ color }}
                className="text-[18px] md:text-[24px] leading-relaxed space-y-4 mt-10"
              >
                {renderContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructureSocial;
