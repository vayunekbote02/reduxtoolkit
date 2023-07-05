import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.products);
  // const [data, setData] = useState([]);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  /* const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products?limit=30");
    const data = await res.data;
    return data; //Array of 20 elements
  };

  const { isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData, //fetchData is passing the function, fetchData() passes the result of the function
    onSuccess: (data) => setData(data),
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error fetching the data! Try reloading the page.</h1>; */

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (status === "error") {
    return (
      <Alert variant="danger">
        Error fetching the data! Try reloading the page.
      </Alert>
    );
  }

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center h-100"
    >
      <Row xs={1} md={2} lg={4} className="gx-4 gy-4">
        {data.map((el) => (
          <Col key={el.id}>
            <ProductCard
              el={el}
              text={"Add to Cart"}
              variant={"primary"}
              cartFunction={() => addToCart(el)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
