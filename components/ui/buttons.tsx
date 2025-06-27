import React from "react";
import {ReactNode} from 'react';
// @ts-ignore
import Link from "next/link";
// @ts-ignore
import Image from "next/image";

export type ButtonsProps = {
        className?: string;
        wrapclassName?: string;
        href?: string | undefined;
        image?: string;
        timeline?: string;
        type?: 'default' | 'square';
        bgcolor?: 'primary' | 'secondary';
        children?: ReactNode | string;
        nowrap?:boolean;
        noAnimation?:boolean;
    }
    &
    React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Buttons = ({
                            children = '',
                            wrapclassName = '',
                            className = '',
                            href,
                            image,
                            type = 'default',
                            nowrap = true,
                            noAnimation = false,
                            ...props
                        }: ButtonsProps) => (
    <div

        {...(noAnimation ? {
            'data-aos':"fade-right",
            'data-aos-duration':"1500",
            'data-aos-once':"true",
            'data-aos-offset':"-100"
        } : {})}

         className={`${wrapclassName}`}>
            <Link
                href={href ? href : '#'}
                    className={`w-full h-full flex flex-row no-wrap justify-center gap-2 items-center cursor-pointer text-[18px] xl:px-[40.5px] xl:py-[26.15px] 4xl:text-btn3 5xl:text-btn2 font-bold px-[40.32px] py-[26px] 4xl:px-[39.1px] 4xl:py-[27.087px] 5xl:px-[48px] 5xl:py-[31px]
                    ${nowrap?'whitespace-nowrap':''} 
                    ${type === 'square' ? 'rounded-md bg-[#ff6000] hover:bg-red-800 text-[#244f19] hover:text-[#e3ff00] '
                        :  'rounded-full bg-[#244f19] hover:bg-green-800 text-[#e3ff00] hover:text-[#ffffff] '}
                        hover:scale-[101%] hover:-translate-y-[5px] hover:shadow-menu ease-in duration-200 ${className}` }
                    {...props}>
                    {children}
                    {image && (
                        <Image
                            src={image}
                            alt="smiley image"
                            width={20}
                            height={20}
                            className="  w-[30px] h-[auto]"
                        />)}

            </Link>
    </div>
);