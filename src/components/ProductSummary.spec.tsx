import React from "react";
import { render } from "@testing-library/react";
import { ProductSummaryHeader } from "./ProductSummary";
import { Product } from "../models";

describe("ProductSummaryHeader", () => {
  const basicProduct: Product = {
    id: 111,
    title: "John Legend Live",
    description:
      "Come and join one of the world's most beloved artists as he performs live and just for you from MelodyVR’s studio in LA.",
    artist: "John Legend",
    isFree: false,
    image1:
      "https://d17jafawxl91z1.cloudfront.net/MVR_FDC_L0103_App_Hero-1607341456001.jpg",
    image2:
      "https://d17jafawxl91z1.cloudfront.net/MVR_FDC_L0103_App_Square-1607341456001.jpg",
    accentColor: "#f52459",
    backgroundColor: "#841225",
    textColor: "#ffffff",
    feature_order: 4,
    price: 12.99,
  };

  it("Shows price with pound sing for non free products", () => {
    const { getByText, container } = render(
      <ProductSummaryHeader {...basicProduct} />
    );

    expect(container).toHaveTextContent("John Legend Live - £12.99");

    const title = getByText("John Legend Live");
    expect(title).toHaveStyle({ color: "#ffffff" });

    const price = getByText("£12.99");
    expect(price).toHaveStyle({ color: "#f52459" });
    expect(price).not.toBeNull();
  });

  it("Shows FREE for free product", () => {
    const product: Product = {
      ...basicProduct,
      price: 0,
      isFree: true,
    };
    const { getByText, container } = render(
      <ProductSummaryHeader {...product} />
    );

    expect(container).toHaveTextContent("John Legend Live - FREE!");

    const title = getByText("John Legend Live");
    expect(title).toHaveStyle({ color: "#ffffff" });

    const price = getByText("FREE!");
    expect(price).toHaveStyle({ color: "#f52459" });
    expect(price).not.toBeNull();
  });
});
