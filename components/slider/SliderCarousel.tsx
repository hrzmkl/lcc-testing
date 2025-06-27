import { useMemo } from 'react';
import {
  Carousel,
  CarouselContent,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import AutoScroll from 'embla-carousel-auto-scroll';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { ItemsCarousel, SliderProps } from './ItemsCarousel';

export const SliderCsc = ({
  className = '',
  items = [],
  speed = 1,
}: SliderProps) => {
  const carouselOptions = useMemo(() => ({
    startIndex: 0,
    loop: true,
    dragFree: true,
  }), []);

  const carouselPlugins = useMemo(() => {
    return [
      Autoplay({
        delay: 1,
        stopOnMouseEnter: true,
      }),
      AutoScroll({
        speed: speed,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
      WheelGesturesPlugin({
        normalizeWheel: false,
        power: 3,
        passive: false
      })
    ];
  }, [speed]);
  return (
    <Carousel
      opts={carouselOptions}
      plugins={carouselPlugins}
      className={'w-full'}
    >
      <CarouselContent className={'gap-[16px] mx-[16px] !px-[16px]'}>
        <ItemsCarousel className={`${className} w-full`} items={items} />
      </CarouselContent>
    </Carousel>
  );
};