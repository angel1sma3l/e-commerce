import { Check } from "@mui/icons-material";
import { CartState } from "../context/CartContext";
import Rating from "./Rating";
import MySearch from "./Search";

const Filters = () => {
  const {
    prodState: { byPrice, inStock, byRating, searchQuery },
    prodDispatch,
  } = CartState();

  const styles = {
    container: {
      maxWidth: 1200,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: 40,
      padding: "20px",
      width: "100%",
    },
    button: {
      display: "flex",
      alignItems: "flex-end",
      gap: 10,
      cursor: "pointer",
      fontSize: 20,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "center",
      fontSize: 20,
      gap: 10,
    },
  };

  return (
    <aside style={styles.container}>
      <h2 style={{ margin: 0 }}>Filter</h2>

      <MySearch
        width="250px"
        value={searchQuery}
        onChange={(text) =>
          prodDispatch({
            type: "FILTER_BY_SEARCH",
            payload: text,
          })
        }
      />

      <div style={styles.row}>
        Rating:
        <Rating
          rate={byRating}
          onChange={(v) =>
            prodDispatch({ type: "FILTER_BY_RATING", payload: v })
          }
        />
      </div>

      <div
        onClick={() => prodDispatch({ type: "SORT_BY_PRICE" })}
        style={styles.button}
      >
        {"Price"} {byPrice && <Check fontSize="small" />}
      </div>

      <div
        onClick={() => prodDispatch({ type: "FILTER_BY_STOCK" })}
        style={styles.button}
      >
        {"Only In Stock"} {inStock && <Check fontSize="small" />}
      </div>

      <div
        onClick={() => prodDispatch({ type: "CLEAR_FILTERS" })}
        style={styles.button}
      >
        Clear Filters
      </div>
    </aside>
  );
};

export default Filters;
