import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import useIsMobile from "../hooks/useIsMobile";

const Slider = ({ data, showArrow = true, auto, time = 5000 }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const isMobile = useIsMobile();
  const totalSlide = data.length - 1;

  useEffect(() => {
    let interv = null;
    let index = slideIndex;

    if (auto) {
      interv = setInterval(() => {
        index < totalSlide ? index++ : (index = 0);
        setSlideIndex(index);
      }, time);
    }

    return () => {
      clearInterval(interv);
    };
  }, [auto, slideIndex, time, totalSlide]);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#00000011",
      width: "100vw",
      margin: 0,
      overflow: "hidden",
      position: "relative",
      scrollSnapAlign: "end",
    },
    leftArrow: {
      backgroundColor: "#00000044",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      left: 10,
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
      right: 10,
      width: 50,
      height: 50,
      color: "white",
      border: "1px solid white",
      borderRadius: 25,
      zIndex: 2,
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      transition: "all 2s ease",
      // width: `${totalSlide * 100}vw`,
      transform: `translateX(${slideIndex * -100}vw)`, // moving screen -100vw
    },
    slide: {
      flexWrap: "wrap",
      display: "flex",
      height: "90vh",
      flexDirection: "row",
      justifyContent: "center",
      width: "100vw",
    },
    leftCol: {
      // minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: isMobile ? "100%" : "50%",
    },
    rightCol: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "black",
      backgroundColor: "white",
      width: isMobile ? "100%" : "50%",
    },
    desc: {
      // display: "flex",
      fontSize: 38,
      width: "95%",
    },
    image: { height: "90vh", width: "100%", objectFit: "contain" },
    title: {
      // display: "flex",
      fontSize: isMobile ? 60 : 100,
      width: "95%",
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
            <div style={styles.leftCol}>
              <img src={item.image} alt={item.title} style={styles.image} />
            </div>

            <div style={styles.rightCol}>
              <div style={styles.title}>{item.title}</div>
              <div style={styles.desc}>{item.desc}</div>
              <Button title="Learn more" width={300} border />
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
