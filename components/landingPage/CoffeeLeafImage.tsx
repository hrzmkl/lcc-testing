import ImageKit from "../ui/ImageKit";

const CoffeeLeafImage = () => {
  return (
    <ImageKit
      src="/Images/coffee_leaf.webp"
      fill
      sizes="120px"
      alt="coffee_leaf_img"
      className="object-contain"
      priority
      loading="eager"
    />
  );
};

export default CoffeeLeafImage;
