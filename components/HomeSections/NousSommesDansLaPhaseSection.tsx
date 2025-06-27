/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import Image from "next/image";


// import NousSommesDansLaPhaseTitle from "./NousSommesDansLaPhaseTitle";
// bg-[#dce5a0]
const NousSommesDansLaPhaseSection = () => {
    //
    return (
        <section className="w-full flex flex-col relative overflow-hidden pb-[3rem]" id={'DansLaPhaseSectionBlock'}>
            {/* <div className={'block lg:hidden bg-[#000] p-5'}>
                <NousSommesDansLaPhaseTitle/>
            </div>
            <div
                className="aspect-[1920/1269] w-full bg-center bg-cover bg-no-repeat bg-[url('/Images/NousSommes.webp')] flex justify-start items-start">
                <div className="w-[70%] h-[50%]">
                    <div className="hidden lg:block w-[60%] h-[60%] relative left-[8%]">
                        <NousSommesDansLaPhaseTitle/>
                    </div>
                </div>
            </div> */}
           <div className="w-full flex-center lg:justify-end py-[24px] md:mb-[3rem] max-w-[1080px] pb-[2rem] xl:pb-[5rem] self-center">
                <div className="h-full flex flex-col justify-center items-center xs:items-end gap-5 mid-xl:translate-x-[3rem]">
                    <p className="text-[#4b2d04]  text-h3 md:text-h2 5xl:text-h1 font-black leading-[48px] lg:leading-[76px] 5xl:leading-[102px] -tracking-[3px] text-right">
                        Que se passe-t-il <br/> concrètement ?
                    </p>
                    <p className="w-[50%] text-[#4b2d04] text-base md:text-md xl:text-lg font-normal leading-[32px] text-right ">
                        Vous influencez notre destinée climatique et devenez un pionnier.
                    </p>
                </div>
            </div>
            <div className="w-full max-w-[1080px] px-[32px] md:px-0 self-center items-start flex flex-col">
              <div className="flex flex-col xs:flex-row items-start justify-start gap-[48px]">
                  <div className="flex-[2_2_40%] h-full flex justify-end items-start lg:-translate-y-[3rem]">
                      <div
                          data-aos="fade-right"
                          data-aos-duration="1000"
                          data-aos-offset="-100"
                          className="  flex flex-col justify-start items-start gap-[32px] lg:gap-[1rem] xl:gap-[2rem] relative top-[2%] mid-xl:top-[0%] 2xl:top-[-7%] 8xl:top-[-2%] 9xl:top-[1.5%] 10xl:top-[-1%] 11xl:top-[-3.5%] 12xl:top-[1%] 13xl:top-[5%]"
                        >
                          <p className="text-[#4b2d04] font-black text-[3.5rem] mid-xl:text-h2 text-left leading-[3.5rem] md:leading-[4rem] -tracking-[3px] ">
                            ☕ Choisissez votre café.
                          </p>
                          <p className="text-[#4b2d04] text-base md:text-submenu leading-[20px] md:leading-[30px] w-[84%]">
                            Ajoutez à votre panier vos cafés préférés : assemblages, pure origines, italiens, micro-lots…
                          </p>
                      </div>
                  </div>
                  <div className="flex-[2_2_45%] h-full flex justify-start items-center">
                      <div className="flex justify-start items-end">
                          <div
                              data-aos="fade-left"
                              data-aos-duration="1000"
                              data-aos-offset="-100"
                              className="w-full h-[80%] mid-xl:h-[86%] 2xl:h-[85%] flex-center relative bottom-[10%] mid-xl:bottom-[7%] 2xl:bottom-[8%] bg-[#4b2d04] rounded-3xl"
                          >
                              <div className="w-[10%] h-full flex justify-start items-center rounded-xl">
                                  <div className="size-10 bg-[#4b2d04] rotate-[45deg] relative right-3 8xl:right-5"></div>
                              </div>
                              <div className=" h-full flex-center p-[48px] lg:p-[2rem] xl:p-[3rem] pl-[24px]">
                                  <div className="text-[#dee6a1] flex flex-col justify-center items-center gap-4 text-base md:text-submenu font-normal">
                                      <p>
                                        Nous avons un large choix adapté à tous les usages : machines automatiques à grains, dosettes ESE, café moulu pour cafetière filtre et bientôt des capsules bio-compostables.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>


              {/*sep */}
                <div className="w-full flex-center h-[230px] lg:h-[180px] xl:h-[230px] -mt-[60px] hidden md:flex">
                    <Image
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="500"
                        data-aos-offset="-500"
                        src="/Images/line-1-min.webp"
                        alt="Line img"
                        width={1920}
                        height={1080}
                        className="w-[55%] h-[30vh] lg:h-[15vh] xl:h-[30vh] z-20 object-contain relative"
                    />
                </div>
                {/*sep */}

                <div className="w-full flex flex-col xs:flex-row items-center justify-center gap-[48px] lg:gap-0 -my-[48px] xs:my-0">
                  <div className="flex-[2_2_50%] h-full flex justify-start items-center order-2 xs:order-1">
                      <div className="w-full flex justify-start items-end">
                          <div
                              data-aos="fade-right"
                              data-aos-duration="1000"
                              data-aos-offset="-100"
                              className="w-full h-[80%] mid-xl:h-[86%] 2xl:h-[85%] flex-center relative bottom-[10%] mid-xl:bottom-[7%] 2xl:bottom-[8%] bg-[#4b2d04] rounded-3xl"
                          >
                              <div className="h-full flex-center p-[48px] pe-0 lg:pe-0 xl:pe-0 lg:p-[2rem] xl:p-[48px] pl-[24px]">
                                  <div className="text-[#dee6a1] flex flex-col justify-center items-center gap-4 text-base md:text-submenu font-normal">
                                      <p>
                                        À chaque tasse, 1 centime (soit 1€ par kg) finance nos projets pour le climat, la biodiversité et soutient des communautés locales.
                                      </p>
                                  </div>
                              </div>
                              <div className="w-[10%] h-full flex justify-start items-center rounded-xl">
                                  <div className="size-10 2xl:size-11 8xl:size-16 10xl:size-20 11xl:size-24 13xl:size-28 bg-[#4b2d04] rotate-[45deg] relative left-3 8xl:left-5 9xl:left-4 10xl:left-[5%] 13xl:left-[13%]"></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-full flex-[2_2_50%] h-full flex justify-end items-start order-1 xs:order-2 mid-xl:translate-x-[3rem] lg:translate-y-6">
                      <div
                          data-aos="fade-left"
                          data-aos-duration="1000"
                          data-aos-offset="-100"
                          className="flex flex-col justify-end items-start lg:text-end gap-[32px] lg:gap-[1rem] xl:gap-[2rem] relative top-[2%] mid-xl:top-[0%] 2xl:top-[-7%] 8xl:top-[-2%] 9xl:top-[1.5%] 10xl:top-[-1%] 11xl:top-[-3.5%] 12xl:top-[1%] 13xl:top-[5%]"
                      >
                          <p className="text-[#4b2d04] font-black ms-auto text-[3.5rem] mid-xl:text-h2 lg:text-end leading-[3.5rem] md:leading-[4rem] -tracking-[3px] ">
                            🌍 Dirigez votre impact.
                          </p>
                          <p className="text-[#4b2d04] text-base md:text-submenu lg:max-w-[75%] ms-auto leading-[20px] md:leading-[30px]">
                            C&apos;est là que ça devient puissant ! Sélectionnez le projet que vous souhaitez soutenir.
                          </p>
                      </div>
                  </div>

                </div>

              {/*sep */}
              <div className="w-full flex-center h-[230px] lg:h-[180px] xl:h-[230px] -mb-[60px] -translate-y-[20%] xl:-translate-y-[17%] hidden md:flex">
                  <Image
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      data-aos-delay="500"
                      data-aos-offset="-100"
                      src="/Images/line-2-min.webp"
                      alt="Line img"
                      width={1920}
                      height={1080}
                      className="w-[55%] h-[30vh] lg:h-[18vh] xl:h-[20vh] z-20 object-contain relative "
                  />
              </div>
              {/*sep */}


              <div className="w-full flex flex-col xs:flex-row items-center justify-center gap-[48px]">
                  <div className="w-full flex-[2_2_40%] h-full flex justify-end items-start">
                      <div
                          data-aos="fade-right"
                          data-aos-duration="1000"
                          data-aos-offset="-100"
                          className="flex flex-col justify-start items-start gap-[32px] lg:gap-[1rem] xl:gap-[32px] relative top-[2%] mid-xl:top-[0%] 2xl:top-[-7%] 8xl:top-[-2%] 9xl:top-[1.5%] 10xl:top-[-1%] 11xl:top-[-3.5%] 12xl:top-[1%] 13xl:top-[5%]"
                      >
                          <p className="text-[#4b2d04] font-black text-[3.5rem] mid-xl:text-h2 text-left leading-[3.5rem] md:leading-[4rem] -tracking-[3px] ">
                            💬 Rejoignez les carbon killers.
                          </p>
                          <p className="text-[#4b2d04] text-base md:text-submenu lg:w-[80%] leading-[20px] md:leading-[30px]">
                            Dans votre espace personnel, vous suivez votre impact et échangez avec la communauté des Carbon Killers.
                          </p>
                      </div>
                  </div>
                  <div className="w-full flex-[2_2_45%] h-full flex justify-start items-center">
                      <div className="flex justify-start items-end">
                          <div
                              data-aos="fade-left"
                              data-aos-duration="1000"
                              data-aos-offset="-100"
                              className="w-full h-[80%] mid-xl:h-[86%] 2xl:h-[85%] flex-center relative bottom-[10%] mid-xl:bottom-[7%] 2xl:bottom-[8%] bg-[#4b2d04] rounded-3xl"
                          >
                              <div className="w-[10%] h-full flex justify-start items-center rounded-xl">
                                  <div className="size-10 bg-[#4b2d04] rotate-[45deg] relative right-3 bottom-[2rem] 8xl:right-5"></div>
                              </div>
                              <div className=" h-full flex-center p-[48px] lg:p-[2rem] xl:p-[48px] pl-[24px]">
                                  <div className="text-[#dee6a1] flex flex-col justify-center items-center gap-4 text-base md:text-submenu font-normal">
                                      <p>
                                        Vous agissez concrètement et surtout, vous n’êtes plus seul dans cette lutte pour le climat.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

                 {/*sep */}
                 <div className="w-full flex-center h-[230px] lg:h-[180px] xl:h-[230px] -mt-[60px] scale-90 hidden md:flex">
                    <Image
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="500"
                        data-aos-offset="-500"
                        src="/Images/line-1-min.webp"
                        alt="Line img"
                        width={1920}
                        height={1080}
                        className="w-[55%] h-[30vh] lg:h-[20vh] xl:h-[30vh] z-20 object-contain relative"
                    />
                </div>
                {/*sep */}

                <div className="w-full flex flex-col xs:flex-row items-center justify-center gap-[48px] lg:gap-0 -my-[48px] xs:my-0">
                  <div className="flex-[2_2_50%] h-full flex justify-start items-center order-2 xs:order-1">
                      <div className="w-full flex justify-start items-end">
                          <div
                              data-aos="fade-right"
                              data-aos-duration="1000"
                              data-aos-offset="-100"
                              className="w-full h-[80%] mid-xl:h-[86%] 2xl:h-[85%] flex-center relative bottom-[10%] mid-xl:bottom-[7%] 2xl:bottom-[8%] bg-[#4b2d04] rounded-3xl"
                          >
                              <div className="h-full flex-center p-[48px] pe-0 lg:pe-0 xl:pe-0 lg:p-[2rem] xl:p-[48px] pl-[24px]">
                                  <div className="text-[#dee6a1] flex flex-col justify-center items-center gap-4 text-base md:text-submenu font-normal">
                                      <p>
                                        Pensez-y : à chaque tasse, sans effort ni coût supplémentaire, vous passez de simple consommateur à citoyen du monde.
                                        Bienvenue chez les Carbon Killers.
                                      </p>
                                  </div>
                              </div>
                              <div className="w-[10%] h-full flex justify-start items-center rounded-xl">
                                  <div className="size-10 2xl:size-11 8xl:size-16 10xl:size-20 11xl:size-24 13xl:size-28 bg-[#4b2d04] rotate-[45deg] relative left-3 8xl:left-5 9xl:left-4 10xl:left-[5%] 13xl:left-[13%]"></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-full flex-[2_2_50%] h-full flex justify-end items-start order-1 xs:order-2 mid-xl:translate-x-[3rem] lg:translate-y-6">
                      <div
                          data-aos="fade-left"
                          data-aos-duration="1000"
                          data-aos-offset="-100"
                          className="flex flex-col justify-end items-start lg:text-end gap-[32px] lg:gap-[1rem] xl:gap-[2rem] relative top-[2%] mid-xl:top-[0%] 2xl:top-[-7%] 8xl:top-[-2%] 9xl:top-[1.5%] 10xl:top-[-1%] 11xl:top-[-3.5%] 12xl:top-[1%] 13xl:top-[5%]"
                      >
                          <p className="text-[#4b2d04] font-black ms-auto text-[3.5rem] mid-xl:text-h2 lg:text-end leading-[3.5rem] md:leading-[4rem] -tracking-[3px] ">
                          📣 Développez votre influence climatique.
                          </p>
                          <p className="text-[#4b2d04] text-base md:text-submenu lg:max-w-[75%] ms-auto leading-[20px] md:leading-[30px]">
                            Faites découvrir Let&apos;s Catch Carbon à vos proches, votre entreprise, et inspirez le changement en devenant un influenceur pour le climat.
                          </p>
                      </div>
                  </div>
                </div>
            </div>
        </section>
    );
};

export default NousSommesDansLaPhaseSection;
