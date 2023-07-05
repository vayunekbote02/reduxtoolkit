import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const removeFromCart = (id) => {
    dispatch(remove(id));
  };
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center h-100"
    >
      <Row xs={1} md={2} lg={4} className="gx-4 gy-4">
        {cartProducts.map((el) => (
          <Col key={el.id}>
            <ProductCard
              el={el}
              text={"Remove from cart"}
              variant={"danger"}
              cartFunction={() => removeFromCart(el.id)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cart;
