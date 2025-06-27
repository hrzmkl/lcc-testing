"use client";

import React, { useState, ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

// Gouvernance type
export type TabsScrollProps = {
    data: Array<{
        title?: ReactNode | string;
        intro?: ReactNode | string;
        content?: ReactNode | string;
        contentRounded?: ReactNode | string;
        id: number;
        round: boolean;
    }>;
    className?: string;
    menuClassName?: string;
    isFaq?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const PrincipeGouvernanceCpt = ({
    data,
    isFaq,
    className = '',
    menuClassName = '',
    ...props
}: TabsScrollProps) => {
    const [activeTab, setActiveTab] = useState<number | undefined>(data[0]?.id);
    const [emblaRef] = useEmblaCarousel({
        align: 'center',
        containScroll: 'trimSnaps',
        dragFree: true,
    }, [
        WheelGesturesPlugin()
    ]);

    const activeTabData = data.find(item => item.id === activeTab);
    const shapeClasses = ["rounded-[64px] sm:rounded-full", "rounded-[40px] sm:rounded-[50px]", "rounded-none"];
    const activeTabIndex = data.findIndex(item => item.id === activeTab);
    const roundClass = shapeClasses[activeTabIndex % shapeClasses.length];

    return (
        <div className={`w-full ScrollMenu overflow-hidden flex flex-col justify-center group items-center py-[20px] ${className}`} {...props}>
            <div className="overflow-hidden scrollbar-hide mb-[20px] w-full px-1 sm:w-full h-[80px]" ref={emblaRef}>
                <div className="flex">
                    {data.map((tab, index) => {
                        const shapeClasses = ["rounded-full", "rounded-[20px]", "rounded-none"];
                        const roundClass = shapeClasses[index % shapeClasses.length];

                        return (
                            <div
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-none mx-3 transition-colors duration-500 px-[50px] whitespace-nowrap flex items-center justify-center cursor-pointer py-3
                                    ${activeTab === tab.id ? (isFaq ? "bg-[#6f228f]" : "bg-[#5a1676]") : "bg-[#ffe5fe]"}
                                    ${roundClass}
                                `}
                            >
                                <p className={`text-md font-bold ${activeTab === tab.id ? "text-[#ffe5fe]" : "text-[#5a1676]"}`}>
                                    {tab.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {activeTabData && (
                <div
                    className={`w-full flex justify-center items-center mt-[20px] px-1 xs:px-0`}
                >
                    <div
                        className={`w-[98%] md:w-[85%] p-[24px] sm:p-[64px] ${isFaq ? "bg-[#6f228f]" : "bg-[#5a1676]"} text-md text-[#ffe5fe] text-center cursor-pointer -tracking-[1px] ${roundClass}`}
                    >
                        {activeTabData.content}
                    </div>

                </div>
            )}
        </div>
    );
};

export default PrincipeGouvernanceCpt;