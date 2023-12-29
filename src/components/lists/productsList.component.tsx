import { FC, HTMLAttributes } from "react";
import ProductInfo from "../../interfaces/product.interface";
import ProductCard from "../../ui/molecules/productCard.molecule";

interface ProductsListProps extends HTMLAttributes<HTMLUListElement> {
  products: ProductInfo[];
}

const ProductsList: FC<ProductsListProps> = ({ products, ...props }) => {
  return (
    <ul className={`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-4 md:px-8`} {...props}>
      {products.map((info, index) => (
        <li key={index} className={`w-full ${index === products.length - 1 ? "lg:hidden xl:inline-block" : ""}`}>
          <ProductCard {...info} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
