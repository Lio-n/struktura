enum ProductStatus {
  PreOrder = "Pre-order",
  Ready = "Ready",
}

interface ProductInfo {
  img: string;
  href: string;
  text: string;
  price: string;
  merk: string;
  status: ProductStatus;
}

export { ProductStatus };
export default ProductInfo;
