import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import useIsMobile from "../hooks/useIsMobile";

const Slider = ({ data, showArrow = true }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const isMobile = useIsMobile();

  const styles = {
    leftArrow: {
      backgroundColor: "#00000044",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      left: 30,
      width: 50,
      height: 50,
      color: "white",
      border: "1px solid white",
      borderRadius: 25,
      cursor: "pointer",
      zIndex: 2,
    },
    rightArrow: {
      backgroundColor: "#00000044",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      cursor: "pointer",
      right: 30,
      width: 50,
      height: 50,
      color: "white",
      border: "1px solid white",
      borderRadius: 25,
      zIndex: 2,
    },
    slide: {
      display: "flex",
      flexWrap: isMobile ? "wrap" : "nowrap",
      width: "100vw",
      height: "100%",
    },
    infoContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "auto",
      marginLeft: 30,
      justifyContent: "center",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#00000011",
      // height: "100vh",
      width: "100vw",
      overflow: "hidden",
      position: "relative",
    },
    desc: { fontSize: 38 },
    image: { height: "100%", width: "100%", objectFit: "contain" },
    imageContainer: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      width: "100%",
      justifyContent: "center",
    },
    title: {
      fontSize: 100,
      display: "flex",
      width: "100%",
    },
    wrapper: {
      backgroundColor: "white",
      color: "black",
      display: "flex",
      transition: "all 1.5s ease",
      transform: `translateX(${slideIndex * -100}vw)`, // moving screen -100vw
    },
  };

  const handleClick = (direction) => {
    const totalOfSlides = data.length - 1;
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : totalOfSlides);
    } else setSlideIndex(slideIndex < totalOfSlides ? slideIndex + 1 : 0);
  };

  return (
    <div style={styles.container}>
      {showArrow && (
        <div onClick={() => handleClick("left")} style={styles.leftArrow}>
          <ArrowBack fontSize="large" />
        </div>
      )}

      <div style={styles.wrapper}>
        {data.map((item, index) => (
          <div key={index} style={styles.slide}>
            <div style={styles.imageContainer}>
              <img src={item.image} alt={item.title} style={styles.image} />
            </div>

            <div style={styles.infoContainer}>
              <div style={styles.title}>{item.title}</div>
              <div style={styles.desc}>{item.desc}</div>
              <Button title="Shop Now" width={300} border />
            </div>
          </div>
        ))}
      </div>

      {showArrow && (
        <div onClick={() => handleClick("right")} style={styles.rightArrow}>
          <ArrowForward fontSize="large" />
        </div>
      )}
    </div>
  );
};

export default Slider;
