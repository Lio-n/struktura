import ProductInfo from "./product.interface";

interface ProyectInfo extends Pick<ProductInfo, "img" | "href" | "text"> {
  description: string;
  location: string;
  duration: string;
  total_budget: string;
}

export default ProyectInfo;
