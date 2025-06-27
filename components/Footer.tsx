import FooterCopyrightSection from "./FooterComponents/FooterCopyrightSection";
import FooterLinkSection from "./FooterComponents/FooterLinkSection";
import FooterSubscribeSection from "./FooterComponents/FooterSubscribeSection";

const Footer = () => {
  return (
    <div className="w-full overflow-hidden">
        <div className="max-w-[1605px] m-auto flex flex-col py-6 mid-xl:py-[3rem] md:px-[16px] gap-7 justify-center items-end">
          <FooterSubscribeSection />
          <FooterLinkSection />
          <FooterCopyrightSection />
        </div>
    </div>
  );
};

export default Footer;
