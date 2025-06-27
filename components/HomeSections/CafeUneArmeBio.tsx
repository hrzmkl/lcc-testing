"use client";
import styles from '@/styles/cafeArmeBio.module.css';
import { messages } from "@/constants";
import { Messages } from "@/components/Tchat/tchatItems";
import SubTitle from "../ui/SubTitle";
import useMediaQuery from "@/lib/useMediaQuery";
import ImageKit from "../ui/ImageKit";
import { useAppStore } from '@/store/appStore';
// bg-[#780016]
const SectionsCafeDiscuss = () => {
  const setOpenModalVideo = useAppStore((state) => state.setOpenModalVideo);

  const openModalVideo = () => {
    setOpenModalVideo(true);
  };

  const md = useMediaQuery('(min-width: 992px)');

  return (
    <section
      className={`lg:min-h-screen py-[5rem] relative w-full z-[12] flex-col flex-center overflow-hidden  ${styles.tchatContainer}`}
      id={'tchat'}>
        <ImageKit
          src="/Images/Dossier_8.svg"
          quality={100}
          alt=""
          className="object-cover"
          fill
        />
      <div className="w-full max-w-[1605px] px-4 overflow-visible ">
        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          className={`flex-col flex-center pb-[1rem] lg:pb-[4rem] mid-xl:pb-[2rem] z-[88] ${styles.tchatText}`}
        >
          <p className="w-full text-h3 md:text-h2 5xl:text-h1 font-black text-[#ff6d00] leading-[48px] lg:leading-[76px] 5xl:leading-[102px] text-center -tracking-[3px]">
            Votre café, une arme.
          </p>
          <SubTitle color="#ff6d00">
            Déclenchons notre riposte climat et biodiversité.
            <br />
            Notre café, levier de transformation des pratiques agricoles tropicales.
          </SubTitle>
        </div>

        <div className={`tchat grid grid-flow-dense grid-cols-1 md:grid-cols-5 container col-start-2 row-start-1 p-0 pt-[64px] ${styles.tchatContentContainer}`}>
          <div className={'order-2 md:order-1 sm:mt-[4rem] md:col-span-2 lg:me-[3rem] 5xl:me-[5rem]'}>
            {!md && messages.map((message, index) => (
              index % 2 === 0 && (
                <div key={index}
                  data-aos={message.author === 'Margaux' ? `zoom-in-right` : `zoom-in-left` }
                  data-aos-duration={900}
                  data-aos-offset="100"
                  className={`flex sm:justify-end `}>
                  <Messages className={`md:min-w-[300px] max-w-[85%] xs:max-w-[400px] w-full md:w-auto
                    ${message.content.length >= 95 || (index % 3 === 1 && index !== 1) 
                      ? ' lg:max-w-[300px] mid-xl:max-w-[275px] xl:max-w-[350px] 5xl:max-w-[400px]' 
                      : 'lg:min-w-[275px] lg:max-w-[275px] mid-xl:max-w-[250px] xl:max-w-[305px] 5xl:max-w-[350px]'} ${message.author !== 'Margaux' ? 'ml-auto lg:ml-0' : '!mr-auto md:!mr-[10%]'}`}
                    placement={`${index % 2 === 0 ? 'left' : 'right'}`}
                    color={`${message.author === 'Margaux' ? 'colored' : 'light'}`}
                    orientation={`${message.author === 'Margaux' ? 'left' : 'right'}`}>
                    <span className="author text-[9.6px] xl:text-[10.8px] 4xl:text-[11.37px] 5xl:text-[12.8px] font-bold">{message.author} </span>
                    {message.content.includes("id='videoTchat'") ? (
                      <span
                        id="videoTchat"
                        onClick={() => openModalVideo()}
                        className="content text-sm xl:text-[18px] 5xl:text-mm font-normal leading-[19px] xl:leading-[20px] 5xl:leading-[25px]"
                        dangerouslySetInnerHTML={{ __html: message.content }}
                      />
                    ) : (
                      <span
                        className="content text-sm xl:text-[18px] 5xl:text-mm font-normal leading-[19px] xl:leading-[20px] 5xl:leading-[25px]"
                        dangerouslySetInnerHTML={{ __html: message.content }}
                      />
                    )}
                    <span className="time self-end text-[9.6px] xl:text-[10.8px] 4xl:text-[11.37px] 5xl:text-[12.8px] mt-1">{message.time}</span>
                  </Messages>
                </div>
              )
            ))}
            {messages.map((message, index) => (
              index % 2 !== 0 && (
                <div key={index}
                  data-aos={message.author === 'Margaux' ? `zoom-in-right` : `zoom-in-left` }
                  data-aos-duration={900}
                  data-aos-offset="100"
                  className={`flex sm:justify-end`}>
                  <Messages className={`md:min-w-[300px] max-w-[85%] xs:max-w-[400px] w-full md:w-auto
                    ${message.content.length >= 95 || (index % 3 === 1 && index !== 1) 
                      ? ' lg:max-w-[300px] mid-xl:max-w-[275px] xl:max-w-[350px] 5xl:max-w-[400px]' 
                      : 'lg:min-w-[275px] lg:max-w-[275px] mid-xl:max-w-[250px] xl:max-w-[305px] 5xl:max-w-[350px]'} ${message.author !== 'Margaux' ? 'ml-auto lg:ml-0' : '!mr-auto md:!mr-[10%]'}`}
                    placement={`${index % 2 === 0 ? 'left' : 'right'}`}
                    color={`${message.author === 'Margaux' ? 'colored' : 'light'}`}
                    orientation={`${message.author === 'Margaux' ? 'left' : 'right'}`}>
                    <span className="author text-[9.6px] xl:text-[10.8px] 4xl:text-[11.37px] 5xl:text-[12.8px] font-bold">{message.author} </span>
                    {message.content.includes("id='videoTchat'") ? (
                      <span
                        id="videoTchat"
                        onClick={() => openModalVideo()}
                        className="content text-sm xl:text-[18px] 5xl:text-mm font-normal leading-[19px] xl:leading-[20px] 5xl:leading-[25px]"
                        dangerouslySetInnerHTML={{ __html: message.content }}
                      />
                    ) : (
                      <span
                        className="content text-sm xl:text-[18px] 5xl:text-mm font-normal leading-[19px] xl:leading-[20px] 5xl:leading-[25px]"
                        dangerouslySetInnerHTML={{ __html: message.content }}
                      />
                    )}
                    <span className="time self-end text-[9.6px] xl:text-[10.8px] 4xl:text-[11.37px] 5xl:text-[12.8px] mt-1">{message.time}</span>
                  </Messages>
                </div>
              )
            ))}
          </div>
          <div className={`md:order-2 hidden md:block`}></div>
          <div className={'order-1 md:order-3 md:col-span-2 lg:ms-[3rem] 5xl:ms-[5rem] hidden md:block'}>
            {messages.map((message, index) => (
              index % 2 === 0 && (
                <div key={index}
                  data-aos={`zoom-in-${message.author === 'Margaux' ? 'left' : 'right'}` }
                  data-aos-duration={900}
                  data-aos-offset="100"
                  className={`flex sm:justify-start`}>
                  <Messages className={`min-w-[300px] ${message.content.length >= 95 || index % 3 === 1 
                    ? 'lg:min-w-[260px] lg:max-w-[300px] mid-xl:min-w-[260px] mid-xl:max-w-[300px] xl:min-w-[300px] xl:max-w-[350px] 5xl:min-w-[350px] 5xl:max-w-[400px]' 
                    : 'lg:min-w-[260px] lg:max-w-[260px] mid-xl:min-w-[260px] mid-xl:max-w-[260px] xl:max-w-[300px] 5xl:max-w-[350px]'} ${message.author !== 'Margaux' ? 'mr-[10%] lg:mr-0' : '!ml-[10%]'}`}
                    placement={`${index % 2 === 0 ? 'left' : 'right'}`}
                    color={`${message.author === 'Margaux' ? 'colored' : 'light'}`}
                    orientation={`${message.author === 'Margaux' ? 'right' : 'left'}`}>
                    <span className="author text-[9.6px] xl:text-[10.8px] 4xl:text-[11.37px] 5xl:text-[12.8px] font-bold">{message.author}</span>
                    {message.content.includes("id='videoTchat'") ? (
                      <div
                        id="videoTchat"
                        onClick={() => openModalVideo()}
                        className="content text-sm xl:text-[18px] 5xl:text-mm font-normal leading-[19px] xl:leading-[20px] 5xl:leading-[25px]" dangerouslySetInnerHTML={{ __html: message.content }}
                      />
                    ) :
                      (<span className="content text-sm xl:text-[18px] 5xl:text-mm font-normal leading-[19px] xl:leading-[20px] 5xl:leading-[25px]" dangerouslySetInnerHTML={{ __html: message.content }} />)}
                    <span className="time self-end text-[9.6px] xl:text-[10.8px] 4xl:text-[11.37px] 5xl:text-[12.8px] mt-1">{message.time}</span>
                  </Messages>
                </div>
              )
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
export default SectionsCafeDiscuss;
