import React from "react";
import Slider from "../components/Slider";
import images from "../data/images";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { CartState } from "../context/CartContext";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  const styles = {
    container: {
      display: "flex",
      width: "100vw",
      alignItems: "center",
      flexDirection: "column",
      overflow: "hidden",
    },
  };

  return (
    <main style={styles.container}>
      <Slider data={images} />
      <Products data={products} />
      <Newsletter />
    </main>
  );
};

export default Home;
