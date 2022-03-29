import React from "react";
import { useNavigate } from "react-router-dom";
import Product from "../components/Product";
import useIsMobile from "../hooks/useIsMobile";

const Products = ({ data }) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <main
      style={{
        textAlign: "center",
        // display: "flex",
        // flexDirection: "column",
        width: "100%",
      }}
    >
      <h2>Products</h2>
      {data.length === 0 && <p>No product fuond</p>}
      <div
        style={{
          display: "flex",
          flexWrap: isMobile ? "nowrap" : "wrap",
          overflow: "scroll",
          width: "inherit",
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate("/ProductDetails", { state: item })}
          >
            <Product item={item} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
