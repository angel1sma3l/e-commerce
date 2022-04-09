import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import React from "react";

const FavButton = ({ isFavorite, onClick, size = "large" }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        color: "gray",
      }}
      onClick={onClick}
    >
      {isFavorite ? (
        <Favorite fontSize={size} />
      ) : (
        <FavoriteBorderOutlined fontSize={size} />
      )}
    </div>
  );
};

export default FavButton;
