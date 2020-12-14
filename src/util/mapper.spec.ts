import { Product } from "../models";
import { mapper } from "./mapper";

describe("mapper", () => {
  it("populate price 0 for free products without price", () => {
    const products = [
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
    ];

    const expected = [
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
        feature_order: 1,
        price: 0,
      },
    ];

    expect(mapper(products)).toEqual(expected);
  });
  it("filter out products without price and not free", () => {
    const products = [
      {
        id: 121,
        title: "Ramz",
        description:
          "Get front and centre at Wireless Connect with Ramz, the Brit Award-nominated London singer-songwriter and rapper behind the hit single 'Barking'.",
        artist: "Ramz",
        isFree: false,
        image1:
          "https://d17jafawxl91z1.cloudfront.net/MVR_RAM_P0295_App_Hero__01-1595262686134.jpg",
        image2:
          "https://d17jafawxl91z1.cloudfront.net/MVR_RAM_P0295_App_Square-1595263538889.jpg",
        accentColor: "#a3ad70",
        backgroundColor: "#0d0a10",
        textColor: "#ffffff",
        feature_order: "1",
      },
    ];

    const expected = [] as Product[];

    expect(mapper(products)).toEqual(expected);
  });
  it("sort the products by feature_order", () => {
    const products = [
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
      {
        id: 115,
        title: "Burna Boy UK Tour",
        description:
          "Burna Boy live in the Apollo Theatre for the first time in the UK.",
        artist: "Burna Boy",
        isFree: false,
        image1:
          "https://d17jafawxl91z1.cloudfront.net/MVR_BNB_L0102_App_Hero-1606999927551.jpg",
        image2:
          "https://d17jafawxl91z1.cloudfront.net/MVR_BNB_L0102_App_Square-1606999927551.jpg",
        accentColor: "#00b6b8",
        backgroundColor: "#F2F2F2",
        textColor: "#08070b",
        feature_order: "7",
        price: "9.99",
      },
      {
        id: 114,
        title: "Fontaines D.C. in London",
        description: "Live show from Brixton Academy.",
        artist: "Fontaines D.C.",
        isFree: false,
        image1:
          "https://d17jafawxl91z1.cloudfront.net/MVR_JOL_L0022_App_Hero-1589529179871.jpg",
        image2:
          "https://d17jafawxl91z1.cloudfront.net/MVR_JOL_L0022_App_Square-1589535273302.jpg",
        accentColor: "#8a8989",
        backgroundColor: "#424242",
        textColor: "#FFCCCC",
        feature_order: "3",
        price: "12.99",
      },
    ];

    const expected = [
      {
        id: 114,
        title: "Fontaines D.C. in London",
        description: "Live show from Brixton Academy.",
        artist: "Fontaines D.C.",
        isFree: false,
        image1:
          "https://d17jafawxl91z1.cloudfront.net/MVR_JOL_L0022_App_Hero-1589529179871.jpg",
        image2:
          "https://d17jafawxl91z1.cloudfront.net/MVR_JOL_L0022_App_Square-1589535273302.jpg",
        accentColor: "#8a8989",
        backgroundColor: "#424242",
        textColor: "#FFCCCC",
        feature_order: 3,
        price: 12.99,
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
        feature_order: 4,
        price: 12.99,
      },
      {
        id: 115,
        title: "Burna Boy UK Tour",
        description:
          "Burna Boy live in the Apollo Theatre for the first time in the UK.",
        artist: "Burna Boy",
        isFree: false,
        image1:
          "https://d17jafawxl91z1.cloudfront.net/MVR_BNB_L0102_App_Hero-1606999927551.jpg",
        image2:
          "https://d17jafawxl91z1.cloudfront.net/MVR_BNB_L0102_App_Square-1606999927551.jpg",
        accentColor: "#00b6b8",
        backgroundColor: "#F2F2F2",
        textColor: "#08070b",
        feature_order: 7,
        price: 9.99,
      },
    ];

    expect(mapper(products)).toEqual(expected);
  });
});
