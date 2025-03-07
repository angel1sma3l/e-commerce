import React from "react";
import Slider from "../components/Slider";
import images from "../data/images";
import Newsletter from "../components/Newsletter";
import Container from "../hoc/Container";
import Products from "../components/Products";
import { CartState } from "../context/CartContext";
import Row from "../hoc/Row";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <Container>
      <Slider data={images} auto />
      <Row maxHeight="100vh">
        <Products data={products} />
      </Row>
      <Newsletter />
    </Container>
  );
};

export default Home;
