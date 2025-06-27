import { CategoryFilter } from '@/app/(LandingPage)/(strategie-et-methodologie)/[params]/page';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

export type StrategieFilterProps = {
  onTagClick: (tag: number) => void;
  categories: CategoryFilter[];
  isFiltered?: boolean;
  onClearFilter: () => void;
  bgColor?: string;
};

const StrategieFilterOne = ({ onClearFilter, onTagClick, categories, isFiltered, bgColor = `#ff6c02` }: StrategieFilterProps) => {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  }, [WheelGesturesPlugin()]);

  return (
    <div className="w-full h-full flex justify-start items-center gap-3 pb-3 whitespace-nowrap pt-4">
      {isFiltered && (
        <button
          className="px-4 py-2 mt-4 2xl:py-3 12xl:px-6 12xl:py-3 13xl:px-7 13xl:py-4 text-xs 2xl:text-base 10xl:text-lg 11xl:text-xl 12xl:text-2xl 13xl:text-3xl text-white bg-gray-800 rounded-full font-semibold hover:bg-gray-900 transition ease-in-out duration-200 shadow-md mr-3"
          onClick={onClearFilter}
          style={{ flexShrink: 0 }}
        >
          Effacer les filtres
        </button>
      )}
      <div className="overflow-hidden flex-1 relative" ref={emblaRef}>
        <div className="flex gap-2 pt-4">
          {categories.map((button, index) => (
            <a
              key={index}
              href="#"
              className={`flex-shrink-0 inline-block px-4 py-2 2xl:py-3 12xl:px-6 12xl:py-3 13xl:px-7 13xl:py-4 text-xs 2xl:text-base 10xl:text-lg 11xl:text-xl 12xl:text-2xl 13xl:text-3xl font-normal rounded-full transition hover:scale-[101%] hover:-translate-y-[5px] hover:shadow-menu ease-in duration-200 ${
                button.active ? '' : 'text-black bg-white'
              }`}
              onClick={() => onTagClick(index)}
              style={button.active ? {
                color: button.color,
                backgroundColor: button.bgColor
              } : undefined}
            >
              {button.text}
            </a>
          ))}
        </div>
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
  );
};

export default StrategieFilterOne;
