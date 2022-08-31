import React from "react";
import useIsMobile from "../hooks/useIsMobile";

const MyText = ({ children, size, width, fontWeight, color, lineHeight }) => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        fontSize: size,
        width: width,
        fontWeight: fontWeight,
        color: color,
        lineHeight: lineHeight,
        transform: isMobile ? "scale(0.8)" : "scale(1)",
      }}
    >
      {children}
    </div>
  );
};

export default MyText;
