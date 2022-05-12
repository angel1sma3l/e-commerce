import React from "react";

const Text = ({ children, size, width, fontWeight, color, lineHeight }) => {
  return (
    <div
      style={{
        fontSize: size,
        width: width,
        fontWeight: fontWeight,
        color: color,
        lineHeight: lineHeight,
      }}
    >
      {children}
    </div>
  );
};

export default Text;
