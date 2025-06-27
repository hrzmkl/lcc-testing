import { ProjetsSoutenu } from '@/types/community';
import ImageKit from '../ui/ImageKit';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import Link from 'next/link';

type Props = {
  projects: ProjetsSoutenu[];
};

const ProjetSoutenusMinCard = ({ projects }: Props) => {
  const [emblaRef] = useEmblaCarousel(
    {
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: true,
    },
    [WheelGesturesPlugin()]
  );

  return (
    <div className="relative overflow-hidden">
      <h1 className="text-[21px] font-medium mb-4 text-left uppercase p-1">
        Projets soutenus
      </h1>
      <div ref={emblaRef} className="mt-2 h-48">
        <div className="flex gap-4">
          {projects.map((projet) => (
            <Link
              href={`/projects/${projet.id}`}
              key={projet.id}
              className="relative min-w-[220px] w-60 h-48 bg-[#f7f7f7] rounded-[20px] overflow-hidden"
            >
              <ImageKit
                src={projet.photo_url || '/Images/background-min.avif'}
                alt={projet.id.toString()}
                fill={true}
                sizes={'220px'}
                quality={25}
                loading='lazy'
                placeholder="blur"
                blurDataURL={
                  projet.photo_small_url || '/Images/background-min.avif'
                }
                className="object-cover w-full rounded-t-lg"
              />
              <div className="absolute bottom-0 p-2 left-0 w-full bg-[#f7f7f7] max-h-[56px] ">
                <p className='text-black text-sm text-left line-clamp-2 leading-tight text-ellipsis'>
                  {projet.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjetSoutenusMinCard;
