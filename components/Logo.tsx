import Link from "next/link";
import ImageKit from "./ui/ImageKit";

export const Logo = () => {
  return (
    <Link href={`https://www.chacunsoncafe.fr`} className="flex items-center justify-center">
      <span className="relative h-[49px] w-[100px]">
        <ImageKit
          src="/Images/logo.webp"
          alt="Let's Catch Carbon Certificat"
          width={100}
          height={49}
          loading="eager"
          fetchPriority="high"
          priority
        />
        {/* <ImageKit
          src="/Images/beta.webp"
          alt="beta image"
          width={50}
          height={25}
          loading="eager"
          fetchPriority="high"
          priority
          className="z-[2000] h-[15px] w-[30px] absolute -bottom-1 right-8"
        /> */}
      </span>
    </Link>
  );
};
