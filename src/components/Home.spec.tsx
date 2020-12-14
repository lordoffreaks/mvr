import React from "react";
import { act, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Product } from "../models";
import fetchMock from "fetch-mock";
import { Home } from "./Home";

describe("ProductSummaryHeader", () => {
  const producs: any[] = [
    {
      id: 121,
      title: "Ramz",
      description:
        "Get front and centre at Wireless Connect with Ramz, the Brit Award-nominated London singer-songwriter and rapper behind the hit single 'Barking'.",
      artist: "Ramz",
      isFree: true,
      image1:
        "https://d17jafawxl91z1.cloudfront.net/MVR_RAM_P0295_App_Hero__01-1595262686134.jpg",
      image2:
        "https://d17jafawxl91z1.cloudfront.net/MVR_RAM_P0295_App_Square-1595263538889.jpg",
      accentColor: "#a3ad70",
      backgroundColor: "#0d0a10",
      textColor: "#ffffff",
      feature_order: "1",
    },
    {
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
      feature_order: "4",
      price: "12.99",
    },
  ];
  beforeEach(() => {
    fetchMock.get(
      "https://demo4690370.mockable.io/products",
      Promise.resolve(producs)
    );
  });

  afterEach(() => fetchMock.restore());

  it("Render the products", async () => {
    const component: any = await renderComponent();
    expect(component.container).toHaveTextContent("Ramz - FREE!");
    expect(component.container).toHaveTextContent("John Legend Live - £12.99");
    expect(component.container.querySelectorAll(".col-sm-4")).toHaveLength(2);
    expect(component.container.querySelectorAll(".carousel-item")).toHaveLength(
      2
    );
  });
});

const renderComponent = async () => {
  let component;
  await act(async () => {
    component = render(
      <Router>
        <Home />
      </Router>
    );
  });
  return component;
};
