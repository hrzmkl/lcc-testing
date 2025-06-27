import React, { ReactNode, ElementType } from "react";
import Link from "next/link";
import Image from "next/image";

export type ButtonsProps<T extends ElementType = "a"> = {
  className?: string;
  wrapclassName?: string;
  href?: string;
  onClick?: () => void;
  image?: string;
  type?: "default" | "square";
  bgcolor?: "primary" | "secondary";
  variant?: "default" | "orange";
  children?: ReactNode | string;
  nowrap?: boolean;
  noAnimation?: boolean;
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export const Buttons = <T extends ElementType = "a">({
  children = "",
  wrapclassName = "",
  className = "",
  href,
  onClick,
  image,
  type = "default",
  variant = "default",
  nowrap = true,
  noAnimation = false,
  as,
  ...props
}: ButtonsProps<T>) => {
  const Component = as || (href ? Link : "button");

  return (
    <div
      {...(noAnimation
        ? {
            "data-aos": "fade-right",
            "data-aos-duration": "1500",
            "data-aos-once": "true",
            "data-aos-offset": "-100",
          }
        : {})}
      className={`${wrapclassName}`}
    >
      <Component
        {...(href ? { href } : { onClick })}
        className={`w-full h-full flex flex-row no-wrap justify-center gap-2 items-center cursor-pointer text-btn3 font-bold py-[20px] px-[24px]
          ${nowrap ? "whitespace-nowrap" : ""} 
          ${type === "square" ? "rounded-md" : "rounded-full"}
          ${
            variant === "orange"
              ? "bg-[#ff6000] hover:bg-red-800 text-[#244f19] hover:text-[#e3ff00]"
              : " bg-[#244f19] hover:bg-green-800 text-[#e3ff00] hover:text-[#ffffff] "
          }
              hover:scale-[101%] hover:-translate-y-[5px] hover:shadow-menu ease-in duration-200 ${className} leading-none`}
        {...props}
      >
        {children}
        {image && (
          <Image
            src={image}
            alt="smiley image"
            width={20}
            height={20}
            className="w-[30px] h-[auto]"
          />
        )}
      </Component>
    </div>
  );
};
