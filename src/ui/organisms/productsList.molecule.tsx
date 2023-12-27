import { FC, HTMLAttributes } from "react";
import ProductCard from "../molecules/productCard.molecule";
import ProductInfo, { ProductStatus } from "../../interfaces/product.interface";

interface ProductsListProps extends HTMLAttributes<HTMLUListElement> {}

const ProductsList: FC<ProductsListProps> = ({ ...props }) => {
  const productsInfo: ProductInfo[] = [
    {
      bgImage: "/products/steel_beams.webp",
      href: "#",
      text: "Steel Beams",
      price: "$500 - $2,500",
      merk: "StructuralPro",
      status: ProductStatus.PreOrder,
    },
    {
      bgImage: "/products/concrete_blocks.webp",
      href: "#",
      text: "Concrete Blocks",
      price: "$500 - $2,500",
      merk: "SteelCraft",
      status: ProductStatus.Ready,
    },
    {
      bgImage: "/products/concrete_remeshs.webp",
      href: "#",
      text: "Concrete Remeshs",
      price: "$500 - $2,500",
      merk: "SteelCraft",
      status: ProductStatus.PreOrder,
    },
    {
      bgImage: "/products/timber_beams.webp",
      href: "#",
      text: "Timber Beams",
      price: "$500 - $2,500",
      merk: "TimberTech",
      status: ProductStatus.Ready,
    },
  ];

  return (
    <ul className={`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-4 md:px-8`} {...props}>
      {productsInfo.map((info, index) => (
        <li key={index} className={`w-full ${index === productsInfo.length - 1 ? "lg:hidden xl:inline-block" : ""}`}>
          <ProductCard {...info} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
