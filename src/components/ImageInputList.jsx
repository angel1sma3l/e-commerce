import React, { useEffect, useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import ImageInput from "./ImageInput";

export const ImageInputList = ({
  images = [],
  onRemove,
  onAdd,
  imagesLimit = 3,
}) => {
  const [limit, setLimit] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    images.length < imagesLimit ? setLimit(false) : setLimit(true);
  }, [images, imagesLimit]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "95vw",
        justifyItems: "center",
        alignItems: "center",
        overflow: "scroll",
      }}
    >
      {images.map((image, index) => (
        <div style={{ width: 400 }} key={index}>
          <ImageInput imageUrl={image.url} onRemove={() => onRemove(image)} />
        </div>
      ))}
      {!limit && <ImageInput onSelectedImage={(img) => onAdd(img)} />}
    </div>
  );
};
