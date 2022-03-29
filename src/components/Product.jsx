import Button from "./Button";
import useIsMobile from "../hooks/useIsMobile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "../components/Rating";

const Product = ({ item }) => {
  const isMobile = useIsMobile();
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: isMobile ? "85vw" : 380,
      boxShadow: "3px 5px 20px gray",
      minHeight: "50vh",
      position: "relative",
      margin: 10,
      cursor: "pointer",
      transform: hover ? "scale(1.05)" : null,
      transition: "all 0.2s ease",
    },
    image: {
      height: 300,
      width: "100%",
      objectFit: "contain",
    },
    infoContainer: {
      display: "flex",
      alignItems: "center",
      // justifyContent: "space-around",
      flexDirection: "column",
      width: "100%",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      fontSize: 30,
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
    },
  };

  return (
    <div
      style={styles.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate("/product-details", { state: item })}
    >
      <img src={item.images[0].image} alt={item.title} style={styles.image} />
      {!item.inStock && <div style={styles.outOfStock}>Out of Stock</div>}

      <div style={styles.infoContainer}>
        <div style={styles.title}>{item.title}</div>
        <div style={styles.desc}>${item.price}</div>
        <div style={styles.desc}>Color: {item.color}</div>
      </div>

      <div style={styles.bottomRow}>
        <Rating readOnly rate={item.rating} size="small" />
      </div>
    </div>
  );
};

export default Product;
