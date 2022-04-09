import { AddAPhoto } from "@mui/icons-material";
import Close from "@mui/icons-material/Close";
import { useRef, useState } from "react";

const ImageInput = ({ bgColor, imageUrl, onSelectedImage, size = 50 }) => {
  const [image, setImage] = useState(imageUrl);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    setImage(url);
    onSelectedImage({ file, url });
  };

  const handleRemove = () => {
    setImage(null);
  };

  const handleClick = () => {
    hiddenInputRef.current.click();
  };

  const hiddenInputRef = useRef();

  const styles = {
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: bgColor || "royalblue",
      color: "white",
      overflow: "hidden",
      cursor: "pointer",
    },
    removeBtn: {
      alignSelf: "flex-start",
      position: "absolute",
      cursor: "pointer",
    },
    container: {
      alignItems: "flex-end",
      border: "1px solid white",
      display: "flex",
      justifyContent: "flex-start",
      margin: 20,
      position: "relative",
      minHeight: size + 20,
      minWidth: size + 20,
    },
    image: {
      //   display: imageUrl ? "flex" : "none",
      objectFit: "contain",
      //   objectPosition: "0% 20%",
      width: "auto",
      height: "50vh",
    },
  };

  return (
    <div style={styles.container}>
      {image && <img src={image} alt="file" style={styles.image} />}
      {image && (
        <div style={styles.removeBtn} onClick={handleRemove}>
          <Close />
        </div>
      )}

      {!image && (
        <div style={{ position: "absolute", bottom: 10, left: 10 }}>
          <div onClick={handleClick} style={styles.button}>
            <AddAPhoto />
            <input
              style={{ display: "none" }}
              ref={hiddenInputRef}
              type="file"
              onChange={handleImageChange}
            />
          </div>
        </div>
      )}
      {/* <MyAlert
        visible={show}
        title="Confirm deletion"
        message="Are you sure that you want to remove this image?"
        onOkClick={handleRemove}
        onClose={() => setShow(false)}
      /> */}
    </div>
  );
};

export default ImageInput;
