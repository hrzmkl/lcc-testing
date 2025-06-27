import Image from "next/image";

const CoffeeMachineImage = () => {
  return (
    <Image
      width={499}
      height={645}
      src="/Images/coffee-machine.webp"
      alt="coffee-machine_img"
      className="w-auto xl:h-[40%] mid-xl:h-[28%] 2xl:h-[40%] 8xl:h-[30%] object-contain relative top-[2%] right-[8%] mid-xl:top-[-9%] 2xl:top-[2%] 2xl:right-[5%] 8xl:top-[-6%] 8xl:right-[9%] z-20"
    />
  );
};

export default CoffeeMachineImage;
