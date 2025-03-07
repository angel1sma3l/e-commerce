import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const ImageSlider = ({ data, showArrow = false, height, width }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const totalImages = data.length - 1;

  useEffect(() => {
    let interv = null;
    let index = 1; // start in 1 to fix delay when sliding the first time

    if (hover) {
      setSlideIndex(totalImages > 0 ? 1 : 0); // moving slide inmediately

      interv = setInterval(() => {
        index < totalImages ? index++ : (index = 0);
        setSlideIndex(index);
      }, 2000);
    }

    return () => {
      clearInterval(interv);
      setSlideIndex(0);
    };
  }, [hover, totalImages]);

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
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#00000011",
      height: height,
      width: width || "100%",
      overflow: "hidden",
      position: "relative",
    },
    image: { height: "100%", width: "100%", objectFit: "contain" },
    wrapper: {
      backgroundColor: "white",
      color: "black",
      display: "flex",
      width: `${totalImages * 100}%`,
      transition: "all 1s ease",
      transform: `translateX(${slideIndex * -100}%)`, // moving screen -100%
    },
  };

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : totalImages);
    } else setSlideIndex(slideIndex < totalImages ? slideIndex + 1 : 0);
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={styles.container}
    >
      {showArrow && (
        <div onClick={() => handleClick("left")} style={styles.leftArrow}>
          <ArrowBack fontSize="large" />
        </div>
      )}

      <div style={styles.wrapper}>
        {data.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={item.title || "product"}
            style={styles.image}
          />
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

export default ImageSlider;
