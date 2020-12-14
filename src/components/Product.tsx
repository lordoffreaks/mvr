import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Product } from "../models";
import { mapOne } from "../util/mapper";

const ProductComponent = () => {
  const { id }: any = useParams();
  const [product, setProduct] = useState({} as Product);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://demo4690370.mockable.io/products/${id}`
      );

      const json = await result.json();

      setProduct(mapOne(json));
    };

    fetchData();
  }, [id]);

  return (
    <div
      className="h-100 p-3"
      style={{
        backgroundColor: product.backgroundColor,
      }}
    >
      <p>
        <Link to="/">Back</Link>
      </p>
      <h1 style={{ color: product.accentColor }}>
        {product.title} - {product.isFree ? `FREE!` : `£${product.price}`}
      </h1>
      <Row
        style={{
          color: product.textColor,
        }}
      >
        <Col xs={12} sm={8}>
          <ListGroup>
            <ListGroupItem style={{ backgroundColor: product.backgroundColor }}>
              Artist: {product.artist}
            </ListGroupItem>
            <ListGroupItem style={{ backgroundColor: product.backgroundColor }}>
              Description: {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs={12} sm={4}>
          <img
            className="img-fluid"
            src={product.image1}
            alt={`${product.artist}`}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProductComponent;
