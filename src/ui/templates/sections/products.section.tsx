import ProductsList from "../../../components/lists/productsList.component";
import ProductInfo, { ProductStatus } from "../../../interfaces/product.interface";
import Button from "../../atoms/button.atom";
import Body from "../../atoms/typographies/body.atom";
import Heading from "../../atoms/typographies/heading.atom";
import TagsList from "../../organisms/tagsList.organism";

const ProductsSection = () => {
  const productsInfo: ProductInfo[] = [
    {
      img: "/products/steel_beams.webp",
      href: "#",
      text: "Steel Beams",
      price: "$500 - $2,500",
      merk: "StructuralPro",
      status: ProductStatus.PreOrder,
    },
    {
      img: "/products/concrete_blocks.webp",
      href: "#",
      text: "Concrete Blocks",
      price: "$500 - $2,500",
      merk: "SteelCraft",
      status: ProductStatus.Ready,
    },
    {
      img: "/products/concrete_remeshs.webp",
      href: "#",
      text: "Concrete Remeshs",
      price: "$500 - $2,500",
      merk: "SteelCraft",
      status: ProductStatus.PreOrder,
    },
    {
      img: "/products/timber_beams.webp",
      href: "#",
      text: "Timber Beams",
      price: "$500 - $2,500",
      merk: "TimberTech",
      status: ProductStatus.Ready,
    },
  ];

  const tagsInfo = [
    { text: "Structural Materials" },
    { text: "Finishing Materials" },
    { text: "Machinery and Equipment" },
    { text: "Safety Gear and Apparel" },
  ];

  return (
    <div className="bg-isabelline py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <div className="mb-8 px-8 md:px-16 lg:px-20 xl:px-36">
          <div className="mb-4 md:mb-8 lg:mb-12">
            <Heading className="mb-4">Elevate Your Projects with Our Products</Heading>
            <Body>
              Enhance your construction endeavors with our extensive range of high-quality construction materials and equipment, carefully curated to
              empower your projects' success.
            </Body>
          </div>
          <TagsList tags={tagsInfo} />
        </div>
        <ProductsList products={productsInfo} />
        <Button intent="primary" className="mt-8 mx-auto block">
          View all product
        </Button>
      </div>
    </div>
  );
};

export default ProductsSection;
