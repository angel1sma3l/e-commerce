import React from "react";

const Announcement = () => {
  return (
    <div
      style={{
        backgroundColor: "teal",
        color: "white",
        minHeight: 100,
        fontSize: 30,
        paddingLeft: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100vw",
      }}
    >
      Free Shipping on purchase over $100
    </div>
  );
};

export default Announcement;
