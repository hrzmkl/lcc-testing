import Link from 'next/link'
import ImageKit from "../ui/ImageKit";

const FooterCopyrightSection = () => {
  return (

      <div className="w-full flex flex-col justify-between gap-[3rem] items-center font-normal px-4">
        <div className="flex justify-center flex-wrap gap-[16px] items-center mb-[32px] text-black text-base">
          <p className="-tracking-[0.5px]">
            <Link href="https://www.chacunsoncafe.fr/content/2-chacun-son-cafe-mentions-legales" target="_blank">Mentions légales</Link>
          </p>
          <p className="-tracking-[0.5px]">
            &copy;Copyright 2024 CSC
          </p>
          <p className="-tracking-[0.5px]">
            Politique de confidentialité
          </p>
          <p className="-tracking-[0.5px]">
            <Link href="https://www.chacunsoncafe.fr/content/3-chacun-son-cafe-conditions-generales-de-vente-de-chacun-son-cafe" target="_blank">Condition générales de vente</Link>
          </p>
        </div>
        <div className="w-[90%] flex-center gap-4 -mb-4">
          <ImageKit
            src="/Images/cameroun-flag-2.webp"
            alt="Cameroun"
            width={140}
            height={94}
            className="h-[38px] mid-xl:h-[42px] w-auto object-contain"
          />
          <ImageKit
            src="/Images/togo-flag.webp"
            alt="Togo"
            width={150}
            height={93}
            className="h-[38px] mid-xl:h-[42px] w-auto object-contain"
          />
        </div>
        <div>
          <p className="text-[20px] text-black text-center -tracking-[0.5px]">
            Nous exprimons notre gratitude envers les communautés et les
            cultivateurs avec qui nous collaborons, qui s'engagent avec
            <br className="hidden md:block" /> nous pour développer des pratiques de séquestration de carbone et
            de résilience face au dérèglement climatique. <br className="hidden md:block" /> Grâce à ces
            actions collectives, c'est l'ensemble du vivant sur Terre qui en
            bénéficie.
          </p>
        </div>
      </div>
  );
};

export default FooterCopyrightSection;
