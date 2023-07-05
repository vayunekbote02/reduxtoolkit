import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({ el, cartFunction, text, variant }) => {
  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <Card className="d-flex flex-column h-100">
        <Card.Img
          variant="top"
          src={el.image}
          className="img-fluid"
          style={{ objectFit: "contain", height: "170px" }}
        />
        <div className="d-flex flex-column flex-grow-1 p-3">
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>{el.description.substring(0, 150)}</Card.Text>
          </Card.Body>
          <div className="mt-4">
            <Button
              variant={variant}
              className="position-absolute bottom-0 end-0 mb-3 me-3"
              onClick={cartFunction}
            >
              {text}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
