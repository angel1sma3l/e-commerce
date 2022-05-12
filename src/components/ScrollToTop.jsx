import { ArrowUpward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
      window.scrollY > 800 ? setVisible(true) : setVisible(false);
    });

    return () => {
      window.removeEventListener("scroll", () => setVisible(false));
    };
  }, []);

  const handleScroll = () => {
    let pixels = scrollY;
    let interv;

    // scroll -30 pixels each 10 milsec
    interv = setInterval(() => {
      pixels <= 0 ? (pixels = 0) : (pixels -= 50);
      window.scroll(0, pixels);

      if (pixels <= 0) clearInterval(interv);
    }, 10);
  };

  const styled = {
    backgroundColor: "var(--text-primary)",
    color: "var(--background)",
    width: 100,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    position: "fixed",
    bottom: 50,
    cursor: "pointer",
    zIndex: 2,
    transform: visible ? " scale(1)" : "scale(0)",
    transition: "all 0.5s ease",
  };
  return (
    <div style={styled} onClick={handleScroll}>
      <ArrowUpward />
    </div>
  );
};

export default ScrollToTop;
