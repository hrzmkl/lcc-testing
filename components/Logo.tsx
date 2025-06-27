import Link from "next/link";
import ImageKit from "./ui/ImageKit";
import { Url } from "next/dist/shared/lib/router/router";

export const Logo = () => {
  return (
    <Link href={process.env.NEXT_PUBLIC_REDIRECT as Url} className="flex items-center justify-center">
      <span className="relative h-auto w-[70px] md:w-[120px]">
        <ImageKit
          src="/Images/logo.webp"
          alt="Let's Catch Carbon Certificat"
          width={300}
          height={150}
          loading="eager"
          fetchPriority="high"
          priority
        />
      </span>
    </Link>
  );
};
