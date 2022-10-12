import React from "react";
import Product from "../components/Product";

const Products = ({ data = [] }) => {
  return (
    <article
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        maxWidth: 1200,
        minHeight: "80vh",
      }}
    >
      <h2>Products</h2>
      {data.length === 0 && <p>No product fuond</p>}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          overflow: "scroll",
          width: "100%",
        }}
      >
        {data.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </article>
  );
};

export default Products;
