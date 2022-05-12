import React, { useState } from "react";

const LargeButton = ({ icon, title, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        display: "flex",
        padding: 13,
        boxShadow: "0px 0px 10px gray",
        cursor: "pointer",
        margin: 20,
        // background:
        //   "linear-gradient(35deg, var(--background), var(--text-primary))",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 350,
          minHeight: 350,
          boxShadow: hover ? "4px 4px 10px gray" : "0px 0px 0px",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <div
          style={{
            fontSize: hover ? 90 : 100,
            marginBottom: 10,
            color: "teal",
          }}
        >
          {icon}
        </div>
        <div>{title}</div>
      </div>
    </div>
  );
};

export default LargeButton;
