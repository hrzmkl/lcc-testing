import Image from "next/image";

const CoffeeCupImage = () => {
  return (
    <Image
      width={318}
      height={253}
      src="/Images/coffee_cup.webp"
      alt="coffee-machine_img"
      className="w-auto h-[20%] mid-xl:h-[15%] 2xl:h-[20%] 8xl:h-[15%] object-contain relative top-[16%] left-[13.5%] mid-xl:top-[5%] 2xl:top-[16%] 2xl:left-[13.5%] 8xl:top-[7%] 8xl:left-[14%]"
    />
  );
};

export default CoffeeCupImage;
