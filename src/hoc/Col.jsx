import React from "react";

const Col = ({
  children,
  flex,
  align = "center",
  justify = "center",
  height,
  width = "100%",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: flex,
        alignItems: align,
        justifyContent: justify,
        height: height,
        width: width,
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};

export default Col;
