import { Check } from "@mui/icons-material";
import { useState } from "react";
import { CartState } from "../context/CartContext";
import Rating from "./Rating";
import MySearch from "./Search";

const Filters = () => {
  const {
    prodState: { byPrice, byStock, byRating, searchQuery },
    prodDispatch,
  } = CartState();

  const styles = {
    button: {
      cursor: "pointer",
      fontSize: 25,
      marginTop: 20,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
    },
  };

  return (
    <div
      style={{
        minWidth: 200,
        display: "flex",
        flexDirection: "column",
        marginLeft: 20,
      }}
    >
      <h2>Filter</h2>

      <div>
        <MySearch
          value={searchQuery}
          onChange={(text) =>
            prodDispatch({
              type: "FILTER_BY_SEARCH",
              payload: text,
            })
          }
        />
      </div>

      <div
        onClick={() => prodDispatch({ type: "SORT_BY_PRICE" })}
        style={styles.button}
      >
        {"Price"} {byPrice && <Check fontSize="small" />}
      </div>
      <div style={styles.row}>
        <p style={styles.button}>Rating</p>
        <Rating
          rate={byRating}
          onChange={(v) =>
            prodDispatch({ type: "FILTER_BY_RATING", payload: v })
          }
        />
      </div>
      <div
        onClick={() => prodDispatch({ type: "FILTER_BY_STOCK" })}
        style={styles.button}
      >
        {"In Stock"} {byStock && <Check fontSize="small" />}
      </div>
      <div
        onClick={() => prodDispatch({ type: "CLEAR_FILTERS" })}
        style={styles.button}
      >
        Clear Filters
      </div>
    </div>
  );
};

export default Filters;
