import useMediaQuery from '@/lib/useMediaQuery';
import { CSSProperties, HTMLAttributes } from 'react';
import { CarouselItem } from '../ui/carousel';
import ImageKit from '../ui/ImageKit';
import { truncateText } from '@/lib/utils';

export type SliderProps = {
  items: {
    sliderImage: string;
    sliderImage2: string;
    sliderTitle: string;
    sliderText: string;
    reverse?: boolean;
    color?: string;
    background?: string;
    className?: string;
    style?: CSSProperties;
  }[]; // Changed to lowercase
  className?: string; // Changed to lowercase
  speed?: number; // Changed to lowercase
  // Changed to lowercase
} & HTMLAttributes<HTMLDivElement>;

const BORDER_RADIUS_VALUES = [
  0.5, 3.5, 3.5, 0.5, 0.5, 1.75, 0.5, 3.5, 3.5, 1.75,
];

export const ItemsCarousel = ({ items = [] }: SliderProps) => {
  const midXl = useMediaQuery('(min-width: 1440px)');

  return items.map((item, index) => {
    const titleLength = item.sliderTitle.length;
    const rounded = BORDER_RADIUS_VALUES[index % BORDER_RADIUS_VALUES.length];
    return (
      <CarouselItem
        className={
          'max-w-[175px] max-h-[175px] mid-xl:max-w-[225px] mid-xl:max-h-[225px] ps-0'
        }
        key={index}
      >
        <div className="flip-container !m-0 min-w-[175px] min-h-[175px] mid-xl:min-w-[225px] mid-xl:min-h-[225px]">
          <div
            className={`flipper min-w-[175px] min-h-[175px] mid-xl:min-w-[225px] mid-xl:min-h-[225px] p-1`}
            style={{ borderRadius: `${rounded}rem` }}
          >
            <div
              style={{
                borderRadius: `${rounded}rem`,
                background: item.sliderImage ? item.background || '#fff' : '',
              }}
              className={`front flex w-[175px] h-[175px] mid-xl:w-[225px] mid-xl:h-[225px] overflow-hidden aspect-[225px/255px] justify-center items-center`}
            >
              <ImageKit
                src={item.sliderImage}
                alt={item.sliderText}
                width={midXl ? 240 : 200}
                height={midXl ? 240 : 200}
                style={{
                  borderRadius: `${rounded}rem`,
                  background: item.background || '#fff',
                  ...item.style,
                }}
                className={`
                    ${
                      item.background &&
                      item.sliderImage.split('.').pop() === 'png'
                        ? 'object-contain scale-[85%]'
                        : 'object-cover'
                    }
                    border-0 bg-white min-w-full !h-full w-full`}
              />
            </div>
            <div
              style={{
                borderRadius: `${rounded}rem`,
                background: item.sliderImage2 ? item.background || '#fff' : '',
              }}
              className={`back flex w-[175px] h-[175px] mid-xl:w-[225px] mid-xl:h-[225px] overflow-hidden aspect-[225px/255px] justify-center items-center`}
            >
              {item?.sliderImage2 ? (
                <ImageKit
                  src={item.sliderImage2}
                  alt={item.sliderText}
                  width={midXl ? 240 : 200}
                  height={midXl ? 240 : 200}
                  style={{
                    borderRadius: `${rounded}rem`,
                    background: item.background || '#fff',
                  }}
                  className="object-cover w-full !h-full bg-white min-w-full  "
                />
              ) : (
                <div
                  className={
                    'whitespace-pre-line flex-1 flex justify-center items-center flex-col text-[#d8fc31] font-normal text-slider !text-[14px] mid-xl:!text-[18px] !text-center p-2 !h-full !w-full min-h-full'
                  }
                  style={{
                    background: item.background || '#fff',
                    color: item.color || '#1d232f',
                  }}
                >
                  {item.sliderTitle && (
                    <span
                      className={`${
                        titleLength <= 10
                          ? 'text-sliderttl1'
                          : 'text-sliderttl2'
                      } font-bold block`}
                    >
                      {item.sliderTitle}
                    </span>
                  )}

                  {truncateText(item.sliderText, 120)}
                </div>
              )}
            </div>
          </div>
        </div>
      </CarouselItem>
    );
  });
};
