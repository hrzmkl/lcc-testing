import ImageKit from "@/components/ui/ImageKit";
import CestIciQueToutCommenceSectionTitle from "../CestIciQueToutCommenceSectionTitle";
import { forwardRef } from "react";

const CamerounModal = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      className={
        'flex flex-col  items-center gap-[32px] py-[48px] absolute top-[5.1%] animate-slide-in-top min-w-[300px] md:min-w-[420px] 4xl:min-w-[640px]'
      }
    >
      <div className="relative overflow-visible !w-[48px] z-10">
        <ImageKit
          src="/Images/line-3.webp"
          alt="Line img"
          width={1997}
          height={669}
          className="absolute -top-[12px] xl:-top-[64px] left-[64px] w-auto h-auto max-w-[25rem] lg:w-[24vw] xl:w-[30vw] hidden lg:block origin-top-lef rotate-[9deg] xl:-rotate-[5deg]"
        />
      </div>
      <div className="w-full overlow-visible flex text-mm  flex-col justify-center items-start  rounded-2xl shadow-lg bg-white p-[32px]">
        <div
          className={
            '!w-[32px] !h-[32px]  bg-white -mt-[48px] rotate-45 border-red border-1 self-center'
          }
        ></div>
        <CestIciQueToutCommenceSectionTitle />
        <p className="text-mm  text-[#8d120e] font-thin">
          <strong>Bénéficiaires directs :</strong> 6000 producteurs et
          productrices du département du Noun <br />
          <strong>Bénéficiaires indirects :</strong> Les familles des ménages
          soit environ 30 000 personnes
          <br />
          <strong>Nombre de villages ciblés :</strong> 100 <br />
          <strong>Nombre de paysans relais formés : </strong> 250 <br />.{' '}
          <a href={'#'} className="font-semibold underline ">
            Voir le détail
          </a>
        </p>
      </div>
    </div>
  );
});

CamerounModal.displayName = 'CamerounModal';

export default CamerounModal;