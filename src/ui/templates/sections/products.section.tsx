import ProductsList from "../../../components/lists/productsList.component";
import Button from "../../atoms/button.atom";
import SectionIntro from "../../molecules/sectionIntro.molecule";
import TagsList from "../../organisms/tagsList.organism";
import ProductsData from "../../../data/products.data.json";
import ProductInfo from "../../../interfaces/product.interface";

const ProductsSection = () => {
  return (
    <div className="bg-isabelline py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <SectionIntro {...ProductsData.intro} children={<TagsList tags={ProductsData.tags} />} />

        <ProductsList products={ProductsData.products as ProductInfo[]} />
        <Button intent="primary" className="mt-8 mx-auto block">
          View all product
        </Button>
      </div>
    </div>
  );
};

export default ProductsSection;
