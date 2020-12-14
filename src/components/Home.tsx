import React, { useEffect, useState } from "react";
import { Product } from "../models";
import { mapper } from "../util/mapper";
import { ProductCarousel } from "./ProductCarousel";
import { ProductGrid } from "./ProductGrid";

export const Home: React.FunctionComponent = () => {
  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://demo4690370.mockable.io/products");

      const json = await result.json();

      setProducts(mapper(json));
    };

    fetchData();
  }, []);

  return (
    <>
      <ProductGrid products={products} />
      <hr />
      <ProductCarousel products={products} />
    </>
  );
};
