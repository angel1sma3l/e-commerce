import useIsMobile from "../hooks/useIsMobile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import FavButtom from "../components/FavButton";
import { CartState } from "../context/CartContext";
import ImageSlider from "./ImageSlider";

const Product = ({ item }) => {
  const isMobile = useIsMobile();
  const [hover, setHover] = useState(false);
  const { dispatch } = CartState();
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: isMobile ? "40vw" : 300,
      boxShadow: "-2px 2px 15px gray",
      minHeight: "50vh",
      position: "relative",
      margin: 15,
      transform: hover ? "scale(1.05)" : null,
      transition: "all 0.2s ease",
    },
    subContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      cursor: "pointer",
    },
    image: {
      height: "auto",
      width: "100%",
      objectFit: "contain",
    },
    infoContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      marginBottom: 10,
    },
    title: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      fontSize: 28,
    },
    desc: {
      justifyContent: "space-around",
      display: "flex",
      width: "95%",
      fontSize: 20,
    },
    outOfStock: {
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 25,
      color: "red",
      display: "flex",
      height: 50,
      justifyContent: "center",
      position: "absolute",
      width: 200,
      opacity: hover ? 1 : 0,
    },
    bottomRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 10,
    },
  };

  return (
    <div
      style={styles.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 5,
          zIndex: 3,
          display: isMobile ? "flex" : hover ? "flex" : "none",
        }}
      >
        <FavButtom
          isFavorite={item.isFavorite}
          onClick={() => dispatch({ type: "ADD_TO_FAVORITE", payload: item })}
        />
      </div>
      <div
        style={styles.subContainer}
        onClick={() => navigate("/productDetails", { state: item })}
      >
        {/* <img src={item.images[0].image} alt={item.title} style={styles.image} /> */}
        <ImageSlider
          data={item.images}
          height={300}
          width="100%"
          hover={hover}
        />
        {!item.inStock && <div style={styles.outOfStock}>Out of Stock</div>}

        <div style={styles.infoContainer}>
          <div style={styles.title}>{item.title}</div>
          <div style={styles.desc}>${item.price}</div>
          <div style={styles.desc}>Color: {item.color}</div>
          <div style={styles.bottomRow}>
            <Rating readOnly rate={item.rating} size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
