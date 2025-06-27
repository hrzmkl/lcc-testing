import AOS from "aos";

// @ts-ignore
import ParallaxTilt from 'react-parallax-tilt';
import {Buttons} from "@/components/ui/buttons";


const LestCatchCarbonSection = () => {
    return (
        <section className="bg-[#f9d9f3]">
            <div className="w-full max-w-[1605px] m-auto flex flex-col items-center justify-center">
                <div
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-offset="-100"
                    className="h-full flex-col gap-[20px] flex-center pt-[32px] pb-[64px] z-[88] ">
                    <p className="w-full  text-h3 md:text-h1 font-black text-[#780016] leading-[40px] md:leading-[72px] text-center -tracking-[3px]">
                        Let's Catch Carbon, <br/>
                        Notre programmme de transformation <br/>
                        agricole en milieu tropical.
                    </p>
                </div>

                <div className="flex max-w-[980px]  flex-1 w-full  flex-row gap-[20px] relative">
                    <ParallaxTilt
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        className="background-stripes parallax-effect" perspective={500}
                        trackOnWindow={true}
                        tiltReverse={true}>
                    <div
                         className={`aspect-[312/512] flex-1 flex flex-col items-center justify-end w-full bg-center bg-cover bg-no-repeat rounded-2xl cursor-pointer p-[24px]  bg-[url('/Images/card-program/IMG_0825.webp')]
                         hover:scale-[120%] transition-all duration-200 group gap-[26px] overflow-hidden 
                         `}>
                        <Buttons href={'#'} className={'bg-[#e3ff00] !py-[16px] !px-[20px] !text-base text-[#1e2330] font-bold'}>Stratégie et gouvernance</Buttons>
                        <div className=" opacity-0 hidden relative -bottom-[300px]  group-hover:opacity-100 group-hover:bottom-[0] group-hover:flex flex-col items-center gap-[16px] transition-all  ">
                            <p className="text-white text-base text-center">
                                Coordination de l’action, <br/>
                                méthodo sur le terrain… <br/>
                                On vous explique.</p>
                            <Buttons href={'#'} className={'bg-[#ffffff]  !py-[16px] !px-[20px] text-base text-[#1e2330] font-bold'}>Choisir</Buttons>
                        </div>
                    </div>
                    </ParallaxTilt>


                    <div
                         className={`aspect-[312/512] flex-1 flex flex-col items-center justify-end w-full bg-center bg-cover bg-no-repeat rounded-2xl cursor-pointer p-[24px] bg-[url('/Images/card-program/card4.webp')] 
                         hover:scale-[120%] transition-all duration-200 group gap-[26px] overflow-hidden `}>
                        <Buttons href={'#'} className={'bg-[#e3ff00] !py-[16px] !px-[20px] !text-base text-[#1e2330] font-bold transition-all duration-500'}>Sur le terrain</Buttons>
                        <div className=" opacity-0 hidden relative -bottom-[300px]  group-hover:opacity-100 group-hover:bottom-[0] group-hover:flex flex-col items-center gap-[16px] transition-all  ">
                            <p className="text-white text-base text-center">
                                Coordination de l’action, <br/>
                                méthodo sur le terrain… <br/>
                                On vous explique.</p>
                            <Buttons href={'#'} className={'bg-[#ffffff]  !py-[16px] !px-[20px] text-base text-[#1e2330] font-bold'}>Choisir</Buttons>
                        </div>

                    </div>
                    <div
                         className={`aspect-[312/512] flex-1 flex flex-col items-center justify-end w-full bg-center bg-cover bg-no-repeat rounded-2xl cursor-pointer p-[24px]   bg-[url('/Images/card-program/Pépinière-1.webp')] 
                         hover:scale-[120%] transition-all duration-200 group gap-[26px] overflow-hidden
                         `}>
                        <Buttons href={'#'} className={'bg-[#e3ff00] !py-[16px] !px-[20px] !text-base text-[#1e2330] font-bold'}>Timeline</Buttons>
                        <div className=" opacity-0 hidden relative -bottom-[300px]  group-hover:opacity-100 group-hover:bottom-[0] group-hover:flex flex-col items-center gap-[16px] transition-all  ">
                            <p className="text-white text-base text-center">
                                Coordination de l’action, <br/>
                                méthodo sur le terrain… <br/>
                                On vous explique.</p>
                            <Buttons href={'#'} className={'bg-[#ffffff]  !py-[16px] !px-[20px] text-base text-[#1e2330] font-bold'}>Choisir</Buttons>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full
 h-[35vh]"></div>
        </section>
    );
};

export default LestCatchCarbonSection;
