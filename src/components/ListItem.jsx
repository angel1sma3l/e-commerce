import { DeleteRounded } from "@mui/icons-material";
import { CartState } from "../context/CartContext";
import FavButton from "./FavButton";
import QuantitySelector from "./QuantitySelector";

const ListItem = ({ item }) => {
  const { dispatch } = CartState();

  const handleFavoriteClick = () => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: item });
  };

  const handleQtyChange = (selectedQty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: { id: item.id, qty: selectedQty },
    });
  };

  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      width: "100%",
      minHeight: 150,
      boxShadow: "1px 1px 20px gray",
    },
    imageContainer: {
      display: "flex",
      hight: "100%",
      width: "100%",
      flex: 1,
      backgroundColor: "var(--background)",
      color: "var(--text-primary)",
      alignItems: "center",
      justifyContent: "center",
    },
    infoContainer: {
      display: "flex",
      flex: 2,
      height: "100%",
      padding: 10,
    },
    info: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "90%",
      height: "90%",
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      width: 80,
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src={item.images[0].image}
          alt={item.title}
          style={{ width: "95%", height: 150, objectFit: "contain" }}
        />
      </div>

      <div style={styles.infoContainer}>
        <div style={styles.info}>
          <div style={{ fontSize: 25 }}>{item.title}</div>
          <div>price: US${item.price}</div>
          <div>Size: {item.size}</div>
          <div>Color: {item.color.toUpperCase()}</div>
          <div>
            <QuantitySelector
              inStock={item.inStock}
              selected={item.qty}
              onSelected={(s) => handleQtyChange(s)}
            />
          </div>

          <div style={styles.buttons}>
            <FavButton
              isFavorite={item.isFavorite}
              onClick={handleFavoriteClick}
              size="medium"
            />

            <DeleteRounded
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item })
              }
              color="error"
              fontSize="medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
