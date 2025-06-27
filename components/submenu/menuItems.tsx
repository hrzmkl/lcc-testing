'use client'
import {AnchorHTMLAttributes, ReactNode} from 'react';
import Link from "next/link";
import ImageKit from "../ui/ImageKit";

export type SubMenuItemsProps = {
    className?: string;
    href?: string;
    title?: string;
    timeline?: string;
    image?: string;
    icon?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const SubMenuItems = ({
        children,
        className = '',
        href,
        title = '',
        timeline = '',
        image = '',
        icon = '',
        ...props
    }: SubMenuItemsProps) => (

        <Link
            href={href ? href : '#'}
            prefetch={false}
            className={`w-full h-full flex flex-col justify-center items-start gap-0 cursor-pointer text-nowrap ${className}`}
            {...props}>
            <p className="text-nowrap text-[1rem] md:font-semibold text-black hover:underline decoration-1 m-0 p-0">
                {title}
            </p>
            {timeline && <p className="!hidden md:!flex text-[0.9375rem] italic text-black flex-center m-0 p-0">
                {timeline}  {icon != '' && (<span className="!not-italic text-mm">{icon}</span>)}
                {image != '' && (
                    <ImageKit
                        src={image}
                        alt="smiley image"
                        width={41}
                        height={40}
                        className="size-7 8xl:size-8 object-contain relative left-[1%]"
                    />)}
            </p>}
        </Link>

);


export type MenuItemsProps = {
    className?: string;
    children: ReactNode | string;
    href?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
export const MenuItems = ({
        children,
        className = '',
        href,
        style,
        ...props
    }: MenuItemsProps) => (
    <Link
        href={href ? href : '#'}
        style={{transition: 'background .2s ease-in', ...style }}
        className={`md:px-6 py-3 md:rounded-full md:hover:bg-[#ebecec] text-[20px] md:text-[1rem] text-black font-semibold font-submenu cursor-pointer leading-none ${className}`}
        {...props}>
        {children}
    </Link>
);
export type MenuFootsProps = {
    className?: string;
    children: ReactNode | string;
    href?: string;
    type?: 'menu' | 'plus' | 'heading';
} & AnchorHTMLAttributes<HTMLAnchorElement>;
export const MenuItemsFooter = ({
        children,
        className = '',
        href,
        type = 'menu',
        ...props
    }: MenuFootsProps) => (

    <>
        {href != '' ?

        (<Link
            href={href ? href : '#'}
            className={`text-black  ${type === 'menu' ? 'text-submenuTimeline  hover:underline'  : type === 'plus' ? 'text-submenuTimeline font-bold  hover:underline' : 'text-submenu font-bold'} cursor-pointer ${className}`}
            {...props}>
            {children}
        </Link>)
        :
        (<span
            className={`text-black  ${type === 'menu' ? 'text-submenuTimeline  hover:underline'  : type === 'plus' ? 'text-submenuTimeline font-bold  hover:underline' : 'text-submenu font-bold'} cursor-pointer ${className}`}
        {...props}>
        {children}
        </span>)
        }
    </>
);