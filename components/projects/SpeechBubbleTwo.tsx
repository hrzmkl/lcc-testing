import Image from "next/image";
import styles from "@/styles/speech-bubble.module.css";

const SpeechBubbleTwo = () => {
  return (
    <div className="w-full h-[30%] flex flex-col justify-center items-center mb-2">
      <div className="w-full h-[40%] flex-center">
        <div className="w-[15%] h-full flex-center relative right-[2%] 8xl:right-[4%] 11xl:bottom-[5%] 12xl:bottom-[8%] 13xl:bottom-[12%]">
          <Image
            src="/Images/margaux.webp"
            alt="image"
            height={64}
            width={64}
            className="size-9 10xl:size-11 11xl:size-12 12xl:size-14 13xl:size-16 rounded-full object-cover"
          />
        </div>
        <div className="w-[55%] h-full flex flex-col justify-center items-start">
          <p className="text-xs 8xl:text-sm 10xl:text-[0.95rem] 11xl:text-[1rem] 12xl:text-[1.3rem] 13xl:text-[1.6rem] font-semibold text-gray-900 11xl:mb-1 12xl:mb-[0.5rem] 13xl:mb-[0.7rem] relative 8xl:right-[6%]">
            Margaux Roux
          </p>
          <p className="text-sm 8xl:text-[0.95rem] 10xl:text-base 11xl:text-[1.2rem] 12xl:text-[1.4rem] 13xl:text-[1.6rem] font-extralight 11xl:mb-1 12xl:mb-[0.5rem] 13xl:mb-[0.7rem] text-gray-900 relative 8xl:right-[6%]">
            a fait un{" "}
            <span className="font-semibold text-blue-400">don de 400€</span>
          </p>
        </div>
        <div className="w-[30%] h-full flex justify-end items-start">
          <p className="text-[0.7rem] 8xl:text-[0.78rem] 10xl:text-[0.95rem] 11xl:text-[1rem] 12xl:text-[1.3rem] 13xl:text-[1.6rem] font-normal text-zinc-300 relative top-[15%]">
            IL Y A 6 JOURS
          </p>
        </div>
      </div>
      <div className="w-full h-[60%] flex justify-end items-center">
        <div className="w-[95%] h-full flex justify-center items-center">
          <div className={`size-6 ${styles['speech-buble-triangle']} relative left-[3%] bottom-[45%] 10xl:left-[3%] 10xl:bottom-[40%] 11xl:left-[1.9%] 13xl:left-[2.5%]`}></div>
          <div className="w-full h-full bg-[#fdf9e9] rounded-3xl flex-center">
            <p className="w-[85%] text-slate-900 font-thin text-[0.7rem] 9xl:text-[0.85rem] 10xl:text-[0.95rem] 11xl:text-[1.1rem] 12xl:text-[1.2rem] 13xl:text-[1.5rem]">
              Chaque contribution nous rapproche des 5000€ nécessaires pour
              équiper les producteurs en matériel et formation, les aidant à
              accéder à un marché rémunérateur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechBubbleTwo;
