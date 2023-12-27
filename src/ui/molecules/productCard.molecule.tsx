import { FC, HTMLAttributes } from "react";
import SubHeading from "../atoms/typographies/subHeading.atom";
import ProductInfo, { ProductStatus } from "../../interfaces/product.interface";
import Phrase from "../atoms/typographies/phrase.atom";
import Button from "../atoms/buttons/default.atom";
import ShoppingCartIcon from "../atoms/shoppingCartIcon.atom";

interface ProductCardProps extends HTMLAttributes<HTMLDivElement>, ProductInfo {}

const ProductCard: FC<ProductCardProps> = ({ text, bgImage, price, href, merk, status, className = "" }: ProductCardProps) => {
  const statusColor = `text-${status === ProductStatus.PreOrder ? "orange" : "green"}`;

  return (
    <div className="bg-white block rounded-2xl">
      <img src={bgImage} alt={`image : ${bgImage.toString()}`} className="rounded-2xl object-cover h-52 w-full" />
      <div className={`${className} p-4 grid gap-4`}>
        <div>
          <SubHeading textWeight="bold" className="mb-4">
            {text}
          </SubHeading>
          <Phrase children={price} />
        </div>
        <div className="grid grid-cols-2 grid-flow-row-2 gap-2">
          <Phrase children="Merk" />
          <Phrase children={merk} className="text-end" />
          <Phrase children="Status" />
          <Phrase children={status} className={`text-end ${statusColor}`} />
        </div>

        <div className="flex gap-4">
          <a href={href} className="w-full">
            <Button intent="primary" className="w-full">
              Buy Now
            </Button>
          </a>
          <Button intent="primary">
            <ShoppingCartIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
