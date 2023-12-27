import Button from "../../atoms/buttons/default.atom";
import Body from "../../atoms/typographies/body.atom";
import Heading from "../../atoms/typographies/heading.atom";
import ProductCategoriesList from "../../organisms/productCategoriesList.molecule";
import ProductsList from "../../organisms/productsList.molecule";

const ProductsSection = () => {
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
          <ProductCategoriesList />
        </div>
        <ProductsList />
        <Button intent="primary" className="mt-8 mx-auto block">
          View all product
        </Button>
      </div>
    </div>
  );
};

export default ProductsSection;
