import { forwardRef } from "react";
import ImageKit from "@/components/ui/ImageKit";
import CestIciQueToutCommenceSectionTitleTwo from "../CestIciQueToutCommenceSectionTitleTwo";

const TogoModal = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-8 py-12 absolute top-[5.1%] animate-slide-in-top min-w-[250px] max-w-[80%] md:min-w-[350px] md:max-w-[80%] lg:min-w-[420px] lg:max-w-[70%] 4xl:min-w-[640px]"
    >
      <div className="relative overflow-visible w-12 z-10">
        <ImageKit
          src="/Images/line-3.webp"
          alt="Line img"
          width={1997}
          height={669}
          className="absolute -top-16 left-16 w-auto h-auto max-w-[32rem] lg:w-[34vw] xl:w-[32vw] origin-top-left rotate-[13deg] xl:rotate-[5deg]"
        />
      </div>
      <div className="w-full overflow-visible flex flex-col justify-center items-start rounded-2xl shadow-lg bg-white p-8">
        <div className="w-8 h-8 bg-white -mt-12 rotate-45  self-center"></div>
        <CestIciQueToutCommenceSectionTitleTwo />
        <p className="text-base text-[#8d120e] font-thin leading-6">
          <strong>Bénéficiaires directs :</strong> 10 000 producteurs et
          productrices sur les 6 préfectures sélectionnées
          <br />
          <strong>Bénéficiaires indirects : </strong> Les familles des ménages
          soit environ 50 000 personnes
          <br />
          <strong>Nombre de villages ciblés : </strong> 260
          <br />
          <strong>Nombre de formateurs locaux accompagnés : </strong> 250
          <br />
          <a href="#" className="font-semibold underline">
            Voir le détail
          </a>
        </p>
      </div>
    </div>
  );
});

TogoModal.displayName = "TogoModal";

export default TogoModal;