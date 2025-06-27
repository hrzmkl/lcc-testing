import ImageKit from "../ui/ImageKit";

const CoffeeBeanImage = () => {
  return (
    <ImageKit
      src="/Images/coffee_bean_1.webp"
      fill
      sizes="120px"
      alt="coffee_leaf_img"
      className="object-contain rotate-coffee-bean"
      priority
      loading="eager"
    />
  );
};

export default CoffeeBeanImage;
