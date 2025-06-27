import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

const FooterSubscribeSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between gap-5 p-3 md:p-5">
      <div className="flex flex-col md:flex-row w-full md:w-4/5 bg-white p-8 gap-5 rounded-[50px] md:rounded-full">
        <Input
          placeholder="votre@email.com"
          type=""
          className="flex-1 bg-[#f1f1f1] border-none rounded-2xl p-5 text-lg placeholder:text-[22px] placeholder:text-gray-400"
        />
        <button className="bg-black hover:bg-slate-700 text-base px-8 py-5 font-bold text-white rounded-full relative mt-4 md:mt-0">
          Envoyer
        </button>
      </div>

      <div className="flex justify-between items-center bg-white rounded-full flex-center ps-6 pe-10 py-5 gap-5 mt-4 md:mt-0 w-full md:w-1/5">
        <Link className="hover:text-[#334155] hover:scale-[101%] hover:-translate-y-[5%] transition-transform" href="https://www.youtube.com/@chacunsoncafe433" target="_blank">
          <Image src="/icons/youtube.svg" alt="Youtube" width={56} height={50} className="w-auto h-[50px]" loading="lazy" />
        </Link>
        <Link className="hover:text-[#334155] hover:scale-[101%] hover:-translate-y-[5%] transition-transform" href="https://www.linkedin.com/company/chacun-son-caf%C3%A9/" target="_blank">
          <Image src="/icons/linkedin.svg" alt="LinkedIn" width={42} height={42} className="w-[42px] h-[42px]" loading="lazy" />
        </Link>
        <Link className="hover:text-[#334155] hover:scale-[101%] hover:-translate-y-[5%] transition-transform" href="https://www.instagram.com/letscatchcarbon/" target="_blank">
          <Image src="/icons/instagram.svg" alt="LinkedIn" width={42} height={42} className="w-[42px] h-[42px]" loading="lazy" />
        </Link>
      </div>
    </div>

  );
};

export default FooterSubscribeSection;
