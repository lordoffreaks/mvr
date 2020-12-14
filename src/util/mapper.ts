import { Product } from "../models";

export const mapper = (products: any): Product[] => {
  return products
    .filter((product: any) => {
      return product.isFree || (!product.isFree && product.price);
    })
    .map(mapOne)
    .sort((a: Product, b: Product) => a.feature_order - b.feature_order);
};

export const mapOne = (product: any) => {
  return {
    ...product,
    feature_order: Number(product.feature_order),
    price: Number(product.price || 0),
  };
};
