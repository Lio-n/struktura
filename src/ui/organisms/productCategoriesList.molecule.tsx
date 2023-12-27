import { FC, HTMLAttributes } from "react";

interface ProductCategoriesListProps extends HTMLAttributes<HTMLUListElement> {}

const ProductCategoriesList: FC<ProductCategoriesListProps> = ({ ...props }) => {
  const categoriesInfo = [
    { text: "Structural Materials" },
    { text: "Finishing Materials" },
    { text: "Machinery and Equipment" },
    { text: "Safety Gear and Apparel" },
  ];

  return (
    <ul className={`flex flex-wrap gap-3`} {...props}>
      {categoriesInfo.map((info, index) => (
        <li key={index}>
          <div
            children={info.text}
            className="w-fit px-4 py-3 border border-black select-none rounded-3xl transition-colors ease-in leading-none whitespace-nowrap hover:text-white hover:bg-black"
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductCategoriesList;
