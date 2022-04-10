import React from "react";
import Slider from "../components/Slider";
import images from "../data/images";
import Newsletter from "../components/Newsletter";
import Container from "../hoc/Container";

const Home = () => {
  return (
    <Container>
      <Slider data={images} auto />
      <Newsletter />
    </Container>
  );
};

export default Home;
