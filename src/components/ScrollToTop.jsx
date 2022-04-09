import { ArrowUpward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setVisible(true) : setVisible(false);
    });

    return () => {
      window.removeEventListener("scroll", () => setVisible(false));
    };
  }, []);

  const styled = {
    backgroundColor: "white",
    color: "black",
    width: 100,
    height: 50,
    display: visible ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    position: "fixed",
    bottom: 50,
    cursor: "pointer",
    zIndex: 2,
    transition: "all 2s ease",
  };
  return (
    <div style={styled} onClick={() => window.scroll(0, 0)}>
      <ArrowUpward />
    </div>
  );
};

export default ScrollToTop;
