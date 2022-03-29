import { ArrowDownward, ArrowDropDown } from "@mui/icons-material";
import React, { useState } from "react";

const QuantitySelector = ({ inStock, selected = 1, onSelected }) => {
  const [show, setShow] = useState(false);

  const Menu = () => {
    // creating an array with number of items in stock.
    const arr = [...Array(inStock).keys()];

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: 50,
          backgroundColor: "var(--background)",
        }}
      >
        {show
          ? arr.map((item) => (
              <div
                onClick={() => {
                  onSelected(item + 1);
                  setShow(false);
                }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 5,
                  marginBottom: 5,
                  cursor: "pointer",
                  width: "100%",
                }}
                key={item + 1}
              >
                {item + 1}
              </div>
            ))
          : `${selected}`}
      </div>
    );
  };

  return (
    <div
      onClick={() => setShow(!show)}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 150,
        height: 50,
        position: "relative",
      }}
    >
      {"Qty: "}
      <Menu />
      <ArrowDropDown fontSize="large" />
    </div>
  );
};

export default QuantitySelector;
