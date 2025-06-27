import React, { useState, useEffect, useRef } from "react";
import { ReactNode } from 'react';

export type PopOverProps = {
    className?: string;
    PopOverclassName?: string;
    PopLaucherClassName?: string;
    children: ReactNode | string;
    PopOverContent: ReactNode | string;
    PopOverContentWrapperClassName?: string;
    PopOverTargetIconClassName?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Popover = ({ children, PopOverContent, className = '', PopOverclassName = '', PopLaucherClassName = '' , PopOverContentWrapperClassName = '', PopOverTargetIconClassName = ''}: PopOverProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement | null>(null); // Specify the type here

    const ShowPopover = () => {
        setIsOpen((prev) => !prev);
    };
    const HidePopover = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`relative inline-block ${className}`} ref={popoverRef}>
            <div onMouseOver={ShowPopover} onMouseLeave={HidePopover} className={`${PopLaucherClassName}`}>
                {children}
            </div>
            {isOpen && (
                <div className={`absolute min-w-full w-[] z-10 font-bold md:text-base left-[50%] -translate-x-1/2 bottom-full border border-gray-300 rounded-lg ${PopOverContentWrapperClassName}`}>
                    <div className={`${PopOverclassName} relative z-[21] p-4 bg-[#ffffff] rounded-lg -mb-[16px]`}>
                        {PopOverContent}
                    </div>
                    <div className={`relative -bottom-[16px] left-[40%] z-[20] h-[16px] w-[16px] bg-white -rotate-45 transform origin-top-left border border-gray-300 shadow-lg ${PopOverTargetIconClassName}`} />
                </div>
            )}
        </div>
    );
};
