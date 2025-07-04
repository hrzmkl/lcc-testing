import Link from "next/link";
import ImageKit from "./ui/ImageKit";
import { Url } from "next/dist/shared/lib/router/router";

export const Logo = () => {
  return (
    <Link href={process.env.NEXT_PUBLIC_REDIRECT as Url} className="flex items-center justify-center">
      <span className="relative h-auto w-[70px] md:h-[50px] md:w-auto">
        <ImageKit
          src="/Images/logo.webp"
          alt="Let's Catch Carbon Certificat"
          width={300}
          height={150}
          className="h-auto w-[70px] md:h-[50px] md:w-auto"
          loading="eager"
          fetchPriority="high"
          priority
        />
      </span>
    </Link>
  );
};
