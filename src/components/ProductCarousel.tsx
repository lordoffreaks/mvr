import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import { Product } from "../models";
import { ProductSummaryHeader, ProductSummaryText } from "./ProductSummary";

interface Props {
  products: Product[];
}

export const ProductCarousel: React.FunctionComponent<Props> = ({
  products,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === products.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? products.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = products.map((product) => {
    return (
      <CarouselItem
        style={{ backgroundColor: "red" }}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={product.id}
      >
        <Link to={`/product/${product.id}`}>
          <img
            className="d-block w-100"
            src={product.image1}
            alt={product.description}
          />
          <CarouselCaption
            className="d-block"
            captionHeader={<ProductSummaryHeader {...product} />}
            captionText={<ProductSummaryText {...product} />}
          />
        </Link>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={products}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};
