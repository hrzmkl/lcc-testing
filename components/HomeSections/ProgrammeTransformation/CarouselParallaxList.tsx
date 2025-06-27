import ParallaxCard from '@/components/Cards/ParallaxCard'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const CarouselParallaxList = () => {
  return (
    <Carousel
          opts={{
            dragFree: true,
            containScroll: 'trimSnaps',
            align: 'start',
            startIndex: 0
          }}
          className={'w-full mx-auto block md:hidden'}
        >
          <CarouselContent className={'gap-[16px] mx-[16px] !px-[16px]'}>
            <CarouselItem className='py-3'>
              <ParallaxCard buttonHref='/strategie-et-gouvernance' backgroundImage='/Images/card-program/img_0825-new.webp' buttonText='Stratégie et gouvernance' />
            </CarouselItem>
            <CarouselItem className='py-3'>
              <ParallaxCard buttonHref='/methodologie-sur-le-terrain' backgroundImage='/Images/card-program/card-new.webp' buttonText='Sur le terrain' />
            </CarouselItem>
            <CarouselItem className='py-3'>
              <ParallaxCard buttonHref='/timeline' backgroundImage='/Images/card-program/pepiniere-new.webp' buttonText='Timeline' />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
  )
}

export default CarouselParallaxList