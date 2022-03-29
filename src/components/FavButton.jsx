import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import React from "react";

const FavButton = ({ isFavorite, onClick }) => {
  return (
    <div
      style={{
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {isFavorite ? <Favorite /> : <FavoriteBorderOutlined />}
    </div>
  );
};

export default FavButton;
