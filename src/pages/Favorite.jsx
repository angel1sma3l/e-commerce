import React, { useEffect, useState } from "react";
import { CartState } from "../context/CartContext";
import ListItem from "../components/ListItem";
import Summary from "../components/Summary";
import useIsMobile from "../hooks/useIsMobile";

const Favorite = () => {
  const [subTotal, setSubTotal] = useState(0);
  const {
    state: { favorites },
  } = CartState();
  const isMobile = useIsMobile();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      overflow: "hidden",
    },
    left: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: isMobile ? "100%" : "50%",
      minHeight: "50vh",
    },
    summary: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: isMobile ? "100%" : "35%",
    },
    title: {
      fontSize: 40,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        {favorites.length === 0 ? (
          <div style={styles.title}>Favorite items will be saved here.</div>
        ) : (
          <div style={{ overflow: "scroll", height: "100vh" }}>
            {favorites.map((prod) => (
              <ListItem key={prod.id} item={prod} />
            ))}
          </div>
        )}
      </div>

      <div style={styles.summary}>
        <Summary total={subTotal} subtotal={subTotal} />
      </div>
    </div>
  );
};

export default Favorite;
