import React from "react";
import { Product } from "../models";

export const ProductSummaryText: React.FunctionComponent<Product> = ({
  description,
  textColor,
  backgroundColor,
}) => <span style={{ color: textColor, backgroundColor }}>{description}</span>;

export const ProductSummaryHeader: React.FunctionComponent<Product> = ({
  title,
  isFree,
  price,
  accentColor,
  textColor,
}) => (
  <>
    <span style={{ color: textColor }}>{title}</span> -{" "}
    <strong style={{ color: accentColor }}>
      {isFree ? `FREE!` : `£${price}`}
    </strong>
  </>
);
