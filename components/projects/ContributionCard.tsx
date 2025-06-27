'use client';
import { getFullName } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { CommunityProfilDetails } from '@/types/community';
import ImageKit from '../ui/ImageKit';

interface Community extends CommunityProfilDetails {
  rowid?: string;
}

const ContributionCard = ({ data }: { data: Community[] }) => {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
        dragFree: true,
      }}
      plugins={[
        AutoScroll({
          speed: 0.75,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
        WheelGesturesPlugin({
          normalizeWheel: false,
          power: 3,
          passive: false
        })
      ]}
      className={'w-full'}
    >
      <CarouselContent className='gap-4 ml-0'>
        {data.map((item, index) => (
          <CarouselItem
            className={`pb-6 flex ${index === data.length - 1 ? 'mr-4' : ''}`}
            key={index}
          >
            <div
              className="bg-white hover:bg-[#feffce] shadow-lg rounded-[1.2rem] flex flex-col items-start relative w-[330px] max-w-[330px] flex-shrink-0 min-h-[500px] h-full"
              style={{ scrollSnapAlign: 'center' }}
            >
              <Link href={`/community/${item.rowid as string}`} className='flex-center w-full pt-4' >
                <ImageKit
                  src={item.photo_url || (item.customer_type === 1 ? '/Images/default_avatar.png' : '/Images/company.png')}
                  alt={getFullName(
                    item.firstname,
                    item.lastname,
                    item.display_name,
                    item.customer_type,
                    item.company_name
                  )}
                  width={240}
                  height={240}
                  quality={50}
                  placeholder='blur'
                  blurDataURL={item.photo_mini_url || (item.customer_type === 1 ? '/Images/default_avatar.png' : '/Images/company.png')}
                  className="w-60 h-60 object-cover rounded-full bg-[#6f84b8]"
                />
              </Link>
              <div className="p-4 flex flex-col flex-grow w-full">
                <Link href={`/community/${item.rowid as string}`} >
                  <h2 className="text-[12px] md:text-[15px] lg:text-[18px] font-medium text-left capitalize">
                    {getFullName(
                      item.firstname,
                      item.lastname,
                      item.display_name,
                      item.customer_type,
                      item.company_name
                    )}
                  </h2>
                  <h3 className="text-[12px] md:text-[15px] lg:text-[18px] font-bold text-left">
                    {' '}
                    Carbon Killer depuis {item.date_carbone_killer}
                  </h3>
                  <div className="text-[12px] md:text-[15px] lg:text-[18px] text-gray-600 text-left">
                    <div>
                      {(() => {
                        let values = [
                          item.town?.trim() !== '' ? item.town : item.lieu,
                          item.profession,
                          item.motCles,
                        ].filter(Boolean);

                        while (values.length <= 3) {
                          values.push('');
                        }

                        return values.map((val, index, array) => (
                          <span key={index}>
                            {val}
                            {index !== array.length - 1 && <br />}
                          </span>
                        ));
                      })()}
                    </div>
                  </div>
                </Link>
                <div className="flex flex-col h-full">
                  <div className="mt-auto">
                    {!(item.bio && item.bio !== '-') && (
                      <>
                        <p className="text-[19px] text-gray-800 text-left font-light leading-tight">
                          <span style={{ textDecoration: 'underline' }}>
                            {item.url}
                          </span>
                        </p>
                      </>
                    )}
                    <h1 className="text-[12px] md:text-[15px] lg:text-[18px] font-semibold mb-4 text-left uppercase">
                      Projets soutenus
                    </h1>
                    <div className="w-full flex items-center gap-4 mb-4">
                      {item.projetsSoutenus &&
                        item.projetsSoutenus.length > 0 && (
                          <div className="flex -space-x-4">
                            {item.projetsSoutenus.slice(0, 5).map((projet, index) => (
                              <Link href={'/projects/' + projet.id} key={index} className="relative" role="button">
                                <div className="group">
                                  <ImageKit
                                    className={`w-10 h-10 rounded-full border-2 border-white`}
                                    alt={projet.photo_url || 'Image'}
                                    width={40}
                                    height={40}
                                    src={projet.photo_url || '/Image/default_avatar.png'}
                                  />
                                  <div className="absolute max-w-[300px] w-[300px] left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-white text-black text-xs py-1 px-4 rounded-[2rem] transition duration-300">
                                    <p>
                                      {projet.title}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                            {item.projetsSoutenus.length > 5 && (
                              <div
                                key={item.projetsSoutenus[5].id}
                                className="flex items-center justify-center w-10 h-10 text-sm font-bold text-gray-800 bg-gray-200 cursor-pointer rounded-full z-50"
                              >
                                +{item.projetsSoutenus.length - 5}
                              </div>
                            )}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ContributionCard;
