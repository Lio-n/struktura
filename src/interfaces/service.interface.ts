import ProductInfo from "./product.interface";

interface ServiceInfo extends Pick<ProductInfo, "img" | "text" | "href"> {
  content: string;
}

export default ServiceInfo;
