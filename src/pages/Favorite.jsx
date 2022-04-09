import { CartState } from "../context/CartContext";
import FavItem from "../components/FavItem";
import Summary from "../components/Summary";
import useIsMobile from "../hooks/useIsMobile";

const Favorite = () => {
  const {
    state: { products },
  } = CartState();
  const isMobile = useIsMobile();

  const favoritesProd = () => {
    return products.filter((p) => p.isFavorite === true);
  };

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
        {favoritesProd().length === 0 ? (
          <div style={styles.title}>Favorite items will be saved here.</div>
        ) : (
          <div style={{ overflow: "scroll", height: "100vh" }}>
            {favoritesProd().map((prod) => (
              <FavItem key={prod.id} item={prod} />
            ))}
          </div>
        )}
      </div>

      <div style={styles.summary}>
        <Summary />
      </div>
    </div>
  );
};

export default Favorite;
