import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { CartState } from "../context/CartContext";
import useIsMobile from "../hooks/useIsMobile";
import useScrollToTop from "../hooks/useScrollToTop";
import AddedToCartModal from "./AddedToCart";

const ProductDetails = () => {
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  const { state: product } = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { dispatch } = CartState();

  useScrollToTop();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      minHeight: "100vh",
      overflow: "hidden",
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
    },
    left: {
      display: "flex",
      flex: isMobile ? null : 1,
      alignItems: "center",
      justifyContent: "center",
      minHeight: "50vh",
    },
    right: {
      display: "flex",
      flex: isMobile ? null : 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    infoContainer: {
      display: "flex",
      flexDirection: "column",
      width: "80%",
    },
    title: {
      fontSize: 50,
      marginTop: 20,
    },
    price: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      width: 100,
      padding: 5,
      backgroundColor: "var(--text-primary)",
      color: "var(--background)",
      marginTop: 20,
    },
    color: {
      marginTop: 20,
      textTransform: "uppercase",
    },
    size: {
      marginTop: 20,
    },
    desc: {
      width: "95%",
      display: "flex",
      marginTop: 20,
    },
  };

  return (
    <div style={styles.container}>
      <h1>{product.title}</h1>
      <BackButton onClick={() => navigate(-1)} />

      <div style={styles.wrapper}>
        <div style={styles.left}>
          <img
            src={product.images[0].image}
            alt={product.title}
            style={{
              height: "100%",
              width: isMobile ? "100vw" : "45vw",
              objectFit: "contain",
            }}
          />
        </div>

        <div style={styles.right}>
          <div style={styles.infoContainer}>
            <div style={styles.title}>{product.title}</div>
            <div style={styles.price}> ＄{product.price}</div>
            <div style={styles.color}>COLOR: {product.color}</div>
            <div style={styles.desc}>{product.desc}</div>
            <div style={styles.desc}>In Stock: {product.inStock}</div>
          </div>
        </div>
      </div>
      <Button
        title={product.inStock === 0 ? "Out of Stock" : "Add to Cart"}
        disabled={product.inStock === 0}
        onClick={() => {
          dispatch({
            type: "ADD_TO_CART",
            payload: product,
          });
          setShowAddedToCart(true);
        }}
        width={300}
      />
      <AddedToCartModal
        item={product}
        visible={showAddedToCart}
        onClose={() => setShowAddedToCart(false)}
      />
    </div>
  );
};

export default ProductDetails;
