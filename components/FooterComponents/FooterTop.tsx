import Image from 'next/image';
const FooterTop = () => {
  return (
    <div className="w-[100vw] xl:h-[60vh] mid-xl:h-[40vh] 2xl:h-[35vh] 8xl:h-[28vh] bg-[#e6f1ff] flex-center">
      <div className="xl:w-[85%] h-[60%] bg-white flex-center rounded-2xl">
        <section className="w-full  h-full flex-center">
          <div className="w-[70%] h-[65%] flex flex-col justify-center items-center">
            <div className="w-full h-full flex flex-col justify-center items-start">
              <p className="text-base 8xl:text-lg 10xl:text-[1.2rem] font-bold text-black">
                Tout comprendre en 3 minutes
              </p>
              <p className="text-xs 8xl:text-[0.9rem] 10xl:text-base font-thin text-black flex-center">
                Voir le film, vous allez adorer.
                <Image
                  src="/Images/smiley.webp"
                  alt="smiley image"
                  width={40}
                  height={41}
                  className="size-7 8xl:size-8 object-contain relative left-[1%]"
                />
              </p>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-start gap-1">
              <p className="text-base 8xl:text-lg 10xl:text-[1.2rem] font-bold text-black">
                Stratégie et gouvernance
              </p>
              <p className="text-xs 8xl:text-[0.9rem] 10xl:text-base font-thin text-black flex-center">
                Un peu de lecture
              </p>
            </div>
          </div>
        </section>
        <section className="w-full h-full  flex-center">
          <div className="w-[70%] h-[65%] flex flex-col justify-center items-center">
            <div className="w-full h-full flex flex-col justify-center items-start">
              <p className="text-base 8xl:text-lg 10xl:text-[1.2rem] font-bold text-black relative bottom-[0.35rem]">
                Méthodologie sur le terrain
              </p>
              <p className="text-xs 8xl:text-[0.9rem] 10xl:text-base font-thin text-black flex-center">
                Comment on s'y prend là-bas!
              </p>
            </div>
            <div className="w-full h-full"></div>
          </div>
        </section>
        <section className="w-full h-full  flex-center">
          <div className="w-[75%] h-[65%] flex flex-col justify-center items-center">
            <div className="w-full h-full flex flex-col justify-center items-start">
              <p className="text-base 8xl:text-lg 10xl:text-[1.2rem] font-bold text-black underline decoration-2">
                Timeline du programme
              </p>
              <p className="text-xs 8xl:text-[0.9rem] 10xl:text-base font-thin text-black flex-center">
                Ce qui nous reste à faire ensemble, beaucoup!
                <Image
                    src="/Images/smiley.webp"
                    alt="smiley image"
                    width={40}
                    height={41}
                    className="size-7 8xl:size-8 object-contain relative left-[1%]"
                />
              </p>
            </div>
            <div className="w-full h-full"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FooterTop;
