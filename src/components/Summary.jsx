import React from "react";
import Button from "../components/Button";
import formatter from "../utility/formatter";

const Summary = ({ subtotal = 0, taxes = "--", total = 0, shipping = 0 }) => {
  const styles = {
    container: {
      flexDirection: "column",
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 20,
      paddingBottom: 10,
    },
    wrapper: {
      display: "flex",
      width: "90%",
      height: "90%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 40,
    },
    total: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      fontWeight: "bold",
      width: "100%",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    text: {
      lineHeight: 0.5,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.title}>Summary</div>
        <div style={styles.row}>
          <p style={styles.text}>SubTotal: </p> {formatter.currency(subtotal)}
        </div>
        <div style={styles.row}>
          <p style={styles.text}>Estimated Shipping:</p> {shipping}
        </div>
        <div style={styles.row}>
          <p style={styles.text}>Estimated Tax:</p> {taxes}
        </div>
        <div style={styles.row}>
          <div style={styles.total}>Total:</div>
          <div styles={styles.total}>{formatter.currency(total)}</div>
        </div>
        <Button
          title="Checkout"
          bgColor="var(--text-primary)"
          fontColor="var(--background)"
          width="90%"
        />
      </div>
    </div>
  );
};

export default Summary;
