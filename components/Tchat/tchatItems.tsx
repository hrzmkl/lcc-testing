import React, {useState, useEffect, useCallback, useRef} from "react";
import {ReactNode} from 'react';
import Image from "next/image";
export type MessageProps = {
    className?: string;
    children?:  ReactNode | string;
    title?: string;
    time?: string;
    name?: string;
    orientation: 'left' | 'right',
    placement: 'left' | 'right',
    color: 'light' | 'colored',
} & React.HTMLAttributes<HTMLDivElement>;
export const Messages = ({
                             children,
                             className = '',
                             title = '',
                             time = '',
                             name = '',
                             placement = 'left',
                             orientation = 'left',
                             color = 'light',
                             ...props
                         }: MessageProps) => {

    return (
        <div
            className={`${color === 'light' ? 'bg-white' : 'bg-[#ff6d00]'} ${
                placement === 'left' ? 'self-start' : 'self-end'
            } rounded-[16px] p-[12px] md:p-[24px] lg:py-2 lg:px-3 mid-xl:py-[0.6rem] mid-xl:px-[0.9rem] xl:py-[0.7rem] xl:px-[18px] text-[#780016] text-xs inline-flex flex-col m-[10px] lg:my-[4px] sm:m-[9px] mid-xl:my-[9.5px] xl:my-[10px] 5xl:my-[11.5px] 6xl:my-[12px] relative ${className}`}
            {...props}
        >
            {typeof children === 'string'
                ? children.replace(/([^\s])([,.!?;])/g, '$1 $2')
                : children}
            <i
                className={`absolute w-[20px] h-[20px] bottom-[9px] ${
                orientation === 'left' ? 'left-[-11px]' : 'right-[-11px]'
                }`}
            >
                <Image
                src={`${
                    color === 'colored' ? '/Images/tchatarrow1.svg' : '/Images/tchatarrow2.svg'
                }`}
                alt="smiley image"
                width={41}
                height={40}
                className={`
                    size-7 8xl:size-8 object-contain relative left-[1%] 
                    ${orientation === 'right' ? 'scale-x-[-1]' : ''}
                `}
                />
            </i>
        </div>


    )
};

