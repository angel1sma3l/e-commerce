import { AddShoppingCartOutlined } from "@mui/icons-material";
import { CartState } from "../context/CartContext";
import formatter from "../utility/formatter";
import FavButton from "./FavButton";
import { toast } from "react-toastify";

const FavItem = ({ item }) => {
  const { dispatch } = CartState();

  const handleFavoriteClick = () => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: item });
  };

  const handleAddtoCart = () => {
    toast.success("Item Added to Cart.", {
      style: { fontSize: 28, fontWeight: "bold" },
      position: "top-center",
    });

    dispatch({ type: "ADD_TO_CART", payload: item });
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
      padding: 10,
      width: 180,
    },
    favButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      //   marginLeft: 10,
    },
    delButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      //   marginLeft: 10,
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
          <div>price: {formatter.currency(item.price)}</div>
          <div>Size: {item.size}</div>
          <div>In Stock: {item.inStock}</div>
          {item.color && <div>Color: {item.color.toUpperCase()}</div>}

          <div style={styles.buttons}>
            <div style={styles.favButton}>
              <FavButton
                isFavorite={item.isFavorite}
                onClick={handleFavoriteClick}
                size="medium"
              />
            </div>

            <div style={styles.delButton} onClick={handleAddtoCart}>
              <AddShoppingCartOutlined color="inherit" fontSize="medium" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavItem;
