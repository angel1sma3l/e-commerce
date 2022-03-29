import React from "react";

const BackButton = ({ onClick }) => {
  return (
    <div
      style={{
        textAlign: "initial",
        width: "100%",
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 10,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      ← Back
    </div>
  );
};

export default BackButton;
