import {ReactNode} from "react";
import ImageKit from "./ImageKit";

export type MenuItemsProps = {
    className?: string;
    children: ReactNode; // Use ReactNode instead of any
}; // Change here
const SeeMovieButton = ({className, children}: MenuItemsProps) => {
    return (
        <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true">
            <button
                type="button"
                className={`w-full p-[4.2px] 4xl:[4.4px] 5xl:p-[5px] bg-white tr flex-center rounded-full z-10 relative hover:scale-[101%] hover:-translate-y-[5px] hover:shadow-menu ease-in duration-200
       ${className}`}>
                <div className=" h-[80%] rounded-full flex justify-start items-center gap-[16px]">
                    <ImageKit src="/icons/play-circle.svg" alt="play" width={85} height={85} className="h-auto w-[71.4px] 4xl:w-[75.5px] 5xl:w-[85px]" priority />
                    <div className="flex-1 h-full flex flex-col justify-center items-start text-btn3 5xl:text-btn2 pe-[26.88px] 4xl:pe-[28.4px] 5xl:pe-[32px] gap-[0]">
                        {children}
                    </div>
                </div>
            </button>
        </div>
    );
};

export default SeeMovieButton;
