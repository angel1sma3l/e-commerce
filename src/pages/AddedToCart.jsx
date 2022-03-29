import { CheckCircle } from "@mui/icons-material";
import Close from "@mui/icons-material/Close";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useIsMobile from "../hooks/useIsMobile";

const AddedToCart = ({ onClose, item, visible }) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const styles = {
    background: {
      display: "flex",
      width: "100vw",
      height: "100vh",
      backgroundColor: "#00000088",
      position: "fixed",
      top: 0,
      left: 0,
    },
    container: {
      backgroundColor: "var(--background",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      height: "80vh",
      top: 80,
      right: 10,
      width: isMobile ? "95%" : 500,
      position: "fixed",
    },
    close: {
      width: 50,
      height: 50,
      position: "absolute",
      top: 10,
      right: -10,
      cursor: "pointer",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
    imageContainer: {
      hight: "100%",
      width: "100%",
      objectFit: "contain",
      flex: 1,
      backgroundColor: "var(--background)",
      color: "var(--text-primary)",
    },
    info: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      paddingLeft: 50,
    },
  };

  if (visible)
    return (
      <main style={styles.background}>
        <div style={styles.container}>
          <div style={styles.close} onClick={onClose}>
            <Close />
          </div>
          <header style={styles.header}>
            <CheckCircle
              style={{ marginRight: 10 }}
              fontSize="large"
              color="primary"
            />
            <h2>Added to Cart</h2>
          </header>

          <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
              <img
                src={item.images[0].image}
                alt={item.title}
                style={{ width: "100%" }}
              />
            </div>
            <div style={styles.info}>
              <h2>{item.title}</h2>
              <div>{item.desc}</div>
              <div>price: {item.price}</div>
              <div>qty: {item.qty}</div>
            </div>
          </div>

          <Button
            title="GO TO CART"
            onClick={() => navigate("/cart")}
            fontColor="white"
            width="90%"
          />
          <Button
            bgColor="transparent"
            fontColor="var(--text-primary)"
            title="CONTINUE SHOPPING"
            onClick={() => navigate("/products")}
            width="90%"
          />
        </div>
      </main>
    );
  return null;
};

export default AddedToCart;
