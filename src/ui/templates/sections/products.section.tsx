import ProductsList from "../../../components/lists/productsList.component";
import Button from "../../atoms/button.atom";
import SectionIntro from "../../molecules/sectionIntro.molecule";
import TagsList from "../../organisms/tagsList.organism";
import ProductsData from "../../../data/products.data.json";
import ProductInfo from "../../../interfaces/product.interface";
import ScrollReveal from "../../../lib/scrollReveal.lib";
import { useEffect } from "react";

const ProductsSection = () => {
  useEffect(() => {
    ScrollReveal.reveal("#productsSection_intro");
    ScrollReveal.reveal("#productsSection_services");
    ScrollReveal.reveal("#productsSection_viewAll");
  }, []);

  return (
    <div id="productsSection" className="bg-isabelline py-12 md:py-20 lg:py-16 xl:py-20 w-screen">
      <div className="2xl:max-w-[90rem] 2xl:mx-auto">
        <SectionIntro {...ProductsData.intro} children={<TagsList tags={ProductsData.tags} />} id="productsSection_intro" />

        <ProductsList products={ProductsData.products as ProductInfo[]} id="productsSection_services" />
        <Button intent="primary" className="mt-8 mx-auto block" id="productsSection_viewAll">
          View all product
        </Button>
      </div>
    </div>
  );
};

export default ProductsSection;
