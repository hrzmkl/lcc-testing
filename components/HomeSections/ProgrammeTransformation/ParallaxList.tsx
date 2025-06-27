import ParallaxCard from '@/components/Cards/ParallaxCard'

const ParallaxList = () => {
  return (
    <div className="hidden md:flex max-w-[312px] sm:max-w-[980px] lg:max-w-[900px] mid-xl:max-w-[980px] flex-1 w-full flex-col sm:flex-row gap-[20px] relative">
      <ParallaxCard
        buttonHref="/strategie-et-gouvernance"
        backgroundImage="/Images/card-program/img_0825-new.webp"
        buttonText="Stratégie et gouvernance"
      />
      <ParallaxCard
        buttonHref="/methodologie-sur-le-terrain"
        backgroundImage="/Images/card-program/card-new.webp"
        buttonText="Sur le terrain"
      />
      <ParallaxCard
        buttonHref="/timeline"
        backgroundImage="/Images/card-program/pepiniere-new.webp"
        buttonText="Timeline"
      />
    </div>
  );
}

export default ParallaxList