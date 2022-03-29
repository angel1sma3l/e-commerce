import Button from "./Button";
import useIsMobile from "../hooks/useIsMobile";

const CategoryItem = ({ item }) => {
  const isMobile = useIsMobile();
  console.log(item);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#000000",
      width: isMobile ? "100vw" : "30vw",
      boxShadow: "3px 5px 20px gray",
      height: "70vh",
      position: "relative",
      margin: 30,
    },
    image: {
      height: "100%",
      width: "100%",
      objectFit: "contain",
    },
    infoContainer: {
      backgroundColor: "#00000044",
      display: "flex",
      alignItems: "center",
      // justifyContent: "space-around",
      flexDirection: "column",
      width: "100%",
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    title: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      color: "white",
      fontSize: 50,
    },
    desc: {
      justifyContent: "space-around",
      display: "flex",
      width: "95%",
      flexWrap: "wrap",
      color: "white",
      fontSize: 30,
    },
  };

  return (
    <div style={styles.container}>
      <img src={item.images[0].image} alt={item.title} style={styles.image} />

      <div style={styles.infoContainer}>
        <div style={styles.title}>{item.title}</div>
        <div style={styles.desc}>{item.desc}</div>
        <Button
          width={300}
          title="Select"
          border
          bgColor="royalblue"
          fontColor="white"
          hoverColor="blue"
        />
      </div>
    </div>
  );
};

export default CategoryItem;
