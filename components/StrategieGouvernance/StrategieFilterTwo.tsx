import { CategoryFilter } from '@/app/(LandingPage)/(strategie-et-methodologie)/[params]/page';

export type StrategieFilterProps = {
  onTagClick: (tag: number) => void;
  categories: CategoryFilter[];
  startIndex?: number;
};

const StrategieFilterTwo = ({
  onTagClick,
  categories,
  startIndex = 0
}: StrategieFilterProps) => {
  return (
    <div className="w-full h-full flex justify-start items-center gap-3 p-3 whitespace-nowrap pt-4 overflow-auto scrollbar-hide">
      {categories.map((button, index) => (
        <a
          key={index}
          href="#"
          className={`${
            index < startIndex ? 'hidden' : ''
          }  flex-1 inline-block max-w-fit px-9 py-4 2xl:px-8 2xl:py-4 12xl:px-10 12xl:py-7 13xl:px-14 13xl:py-9 text-xs xl:text-[15px]  5xl:text-base 10xl:text-lg 11xl:text-xl 12xl:text-2xl 13xl:text-3xl font-semibold rounded-full hover:scale-[101%] hover:-translate-y-[5px] hover:shadow-menu ease-in duration-200 ${
            button.active
              ? `text-[${button.color}] bg-[${button.bgColor}]`
              : `text-black bg-white`
          }`}
          onClick={() => onTagClick(index)}
        >
          {button.text}
        </a>
      ))}
    </div>
  );
};

export default StrategieFilterTwo;
