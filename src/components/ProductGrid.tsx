import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Product } from "../models";
import { ProductSummaryHeader, ProductSummaryText } from "./ProductSummary";

interface Props {
  products: Product[];
}

export const ProductGrid: React.FunctionComponent<Props> = ({ products }) => {
  return (
    <>
    <Row>
      {products.map((product) => {
        return (
          <Col
            key={product.id}
            xs={12}
            sm={4}
            className="text-center position-relative"
            style={{
              backgroundImage: `url(${product.image1})`,
              backgroundSize: "cover",
              minHeight: `19.5em`,
            }}
          >
            <Link
              to={`/product/${product.id}`}
              className="d-block h-100"
              style={{ color: product.textColor }}
            >
              <div className="position-absolute" style={{ bottom: 0 }}>
                <h2>
                  <ProductSummaryHeader {...product} />
                </h2>
                <p>
                  <ProductSummaryText {...product} />
                </p>
              </div>
            </Link>
          </Col>
        );
      })}
    </Row>
    </>
  );
};
