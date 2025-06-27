'use client';

import Link from 'next/link';
import { MouseEventHandler, memo, useMemo } from 'react';
import { ProjetsSoutenu } from '@/types/community';
import { formatNumberWithSpaces, getFullName } from '@/lib/utils';
import ImageKit from '../ui/ImageKit';

const ProjectCardItems = memo(({
  title,
  id,
  description,
  photo_url,
  opp_status_label,
  array_options,
  profiles,
  profiles_count_remains,
  onClick,
}: ProjetsSoutenu & {
  priority?: boolean;
  onClick: MouseEventHandler<HTMLImageElement>;
}) => {
  const decodeHTML = (html: string) => {
    if (typeof window === 'undefined') return html;
    const doc = new DOMParser();
    return doc?.parseFromString(html, 'text/html').body.textContent || '';
  };

  const shortDescription = useMemo(() => {
    const words = decodeHTML(description)?.split(' ') || [];
    return words.slice(0, 15).join(' ') + (words.length > 15 ? '...' : '');
  }, [description]);

  const recolte = Number(array_options.options_proj_recolte?.split(':')[0] || 0);
  const objectif = Number(array_options.options_proj_objectif?.split(':')[0] || 1);
  const financementPercentage = Math.floor((recolte / objectif) * 100) || 0;

  return (
    <div
      style={{ maxWidth: 'calc(100vw - 32px)'}}
      className="w-full mx-auto !max-w-[calc(100vw - 32px)] md:!max-w-[330px] min-h-40 xl:min-w-[330px] flex flex-col rounded-b-2xl transition-colors duration-300 pb-3"
    >
      <Link href={`/projects/${id}`} passHref>
        <span
          className="relative w-full flex justify-center items-start rounded-t-2xl h-[200px] md:h-[237px]"
        >
          <ImageKit
            src={photo_url || '/Images/background-min.avif'}
            alt="image cover"
            fill
            sizes='330px'
            className={
              'object-cover rounded-t-2xl z-20'
            }
            quality={25}
            placeholder='blur'
            blurDataURL='/Images/background-min.avif'
          />
          <div className="w-full p-4 flex justify-end items-center gap-3 z-30">
            <p
              className="text-gray-900 text-[12px] md:text-[13px] lg:text-[15px] py-1.5 px-3 rounded-full mr-2 font-medium"
              style={{ background: '#00bf00' }}
            >
              {opp_status_label}
            </p>
          </div>
        </span>
      </Link>
      <div style={{ willChange: 'background' }} className="w-full flex flex-col bg-white hover:bg-[#feffce] group-hover:bg-[#fcfecd] transition-colors duration-300 shadow-sm hover:shadow-lg rounded-b-2xl h-full flex-grow">
        <Link
          href={`/projects/${id}`}
          className="w-[100%] p-5 pt-6 pb-0 flex flex-col items-start flex-grow"
        >
          <p className="text-gray-900 text-base lg:text-[18px] font-medium mb-2 leading-tight w-full line-clamp-2 break-words">
            {title}
          </p>
          <p className="text-gray-900 text-sm lg:text-base font-normal mb-2 line-clamp-3 leading-tight">
            {shortDescription}
          </p>

          <div className="w-full flex justify-start items-center gap-2 mb-1">
            <ImageKit
              src="/Images/hat.webp"
              width={26}
              height={16}
              alt="hat_img"
              className="object-contain"
            />
            <p className="text-gray-900 text-[13px] lg:text-[15px] font-medium overflow-hidden text-ellipsis whitespace-nowrap w-full">
              {array_options.options_proj_beneficiaires}
            </p>
          </div>
          <div className="w-full flex justify-start items-center gap-2 mb-3">
            <ImageKit
              src="/Images/location.webp"
              alt="location_img"
              width={24}
              height={24}
              className="h-6 object-contain"
            />
            <p className="text-gray-900 text-[13px] lg:text-[15px] font-medium ml-1">
              {array_options?.options_proj_localisation?.label}
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-wrap justify-start items-center gap-2 min-h-[32px]">
              {array_options.options_proj_theme_pple
                .slice(0, 2)
                .map((thematique, index) => (
                  <p
                    key={index}
                    className="text-black font-normal text-[10px] lg:text-[11px] py-1.5 px-2 rounded-full whitespace-nowrap"
                    style={{ background: `#${thematique.color}` }}
                  >
                    {thematique.label.toUpperCase()}
                  </p>
                ))}
            </div>
          </div>
        </Link>
        <div className="w-full p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {profiles.map((profile, index) => (
                <div key={index} className="relative group">
                    <ImageKit
                      className={`object-cover w-[60px] h-[60px] rounded-full border-2 border-white cursor-pointer ${profile.photo_url && 'bg-[#6f84b6]'}`}
                      src={profile.photo_url || '/default-avatar.png'}
                      alt={getFullName(profile.firstname, profile.lastname, profile.display_name, profile.customer_type, profile.company_name)}
                      width={60}
                      height={60}
                      onClick={onClick}
                    />
                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-white text-black text-xs py-1 px-2 rounded-[20px] transition duration-300 w-[150px] text-center capitalize">
                    {getFullName(profile.firstname, profile.lastname, profile.display_name, profile.customer_type, profile.company_name)}
                  </div>
                </div>
              ))}
               {profiles_count_remains > 0 && (
                  <div className='flex items-center gap-1 relative'>
                    <div
                      className="flex items-center justify-center w-[60px] h-[60px] border-2 border-white text-gray-900 text-sm lg:text-base font-normal leading-tight bg-gray-200 cursor-pointer rounded-full"
                      onClick={onClick}
                    >
                      +{profiles_count_remains}
                    </div>
                    <span className='text-gray-900 text-[12px] font-normal leading-tight'>
                      {profiles_count_remains > 1 ? 'Contributeurs' : 'Contributeur'}
                    </span>
                  </div>
                )}
            </div>
          </div>

          <div className="w-full h-[90%] flex items-center justify-center flex-col">
            <span className='text-gray-900 text-[12px] md:text-[13px] lg:text-[15px] rounded-full ms-0 me-auto font-medium'>
            </span>
            <div className="w-full h-[25px] flex items-center relative my-2">
              <div className="h-full w-full absolute z-10 text-center">
                <p className="text-[12px] relative text-center my-auto pt-1 pb-[3px]">
                  {financementPercentage}% - {formatNumberWithSpaces(recolte)} € collectés
                </p>
              </div>
              <div className="w-full h-full absolute rounded-full bg-[#e7e8c5]"></div>
              <div className={`h-full absolute rounded-full bg-loading`} style={{ width: `${financementPercentage}%` }} ></div>
            </div>
            <span className='text-gray-900 w-full text-[12px] md:text-[13px] lg:text-[15px] rounded-full font-medium flex justify-between'>
              <span className='mx-auto'>Objectif {formatNumberWithSpaces(objectif)} €</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCardItems.displayName = 'ProjectCardItems';

export default ProjectCardItems;
