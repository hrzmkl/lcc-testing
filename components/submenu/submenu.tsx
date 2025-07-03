import { FC, useCallback } from "react";
import {SubMenuItems} from "@/components/submenu/menuItems";
import { useAppStore } from "@/store/appStore";


interface SubMenu1Props {
    onClickCapture: () => void;
    className?: string;
}

const SubMenu1: FC<SubMenu1Props> = ({onClickCapture, className}) => {
    const setOpenModalVideo = useAppStore((state) => state.setOpenModalVideo);
    const handleClick = useCallback(() => {
        setOpenModalVideo(true);
        onClickCapture();
    }, [onClickCapture, setOpenModalVideo])
    return (
        <div
            className={`submenu1 md:w-screen md:mx-auto xl:max-w-[1194px] gap-8 md:gap-6 bg-white px-8 md:px-[3rem] lg:px-[96px] py-4 mt-2 md:mt-0 lg:py-[48px] flex flex-col lg:flex-row flex-start xl:flex-center ${className}`}>
            <section className="w-full h-full flex-start xl:flex-center">
                <div className="w-full md:w-[70%] h-[65%] flex flex-col justify-center items-center gap-8 md:gap-6">
                    <SubMenuItems href={''} onClick={handleClick}
                                  title={'Tout comprendre en 3 minutes'}
                                  timeline={'Voir le film, vous allez adorer.'}
                                  icon={'😊'}
                    />
                    <SubMenuItems href={'/strategie-et-gouvernance'} onClick={() => onClickCapture()}
                                  title={'Stratégie et gouvernance'}
                                  timeline={'Un peu de lecture !'}/>
                </div>
            </section>
            <section className="w-full h-full flex-start xl:flex-center">
                <div className="w-full md:w-[70%] h-[65%] flex flex-col justify-center items-center gap-8 md:gap-6">

                    <SubMenuItems href={'/methodologie-sur-le-terrain'} onClick={() => onClickCapture()}
                                  title={'Méthodologie sur le terrain'}
                                  timeline={'Un peu de lecture !'}/>
                    <SubMenuItems href={'/timeline'} onClick={() => onClickCapture()}
                                  title={'Timeline du programme'}
                                  timeline={'Comment on s\'y prend là-bas!'}
                                  icon={'😊'}
                    />
                </div>
            </section>
        </div>
    );
};

export default SubMenu1;
