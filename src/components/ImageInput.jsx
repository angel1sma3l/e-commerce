import { AddAPhoto } from "@mui/icons-material";
import Close from "@mui/icons-material/Close";
import { useRef } from "react";

const ImageInput = ({
  bgColor,
  imageUrl,
  onSelectedImage,
  onRemove,
  size = 100,
}) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    onSelectedImage({ file, url });
  };

  const handleClick = () => {
    hiddenInputRef.current.click();
  };

  const hiddenInputRef = useRef();

  const styles = {
    button: {
      display: "flex",
      fontSize: size - 50,
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
      left: 5,
      top: 5,
    },
    container: {
      alignItems: "center",
      boxShadow: "0px 0px 10px gray",
      display: "flex",
      justifyContent: "center",
      margin: 20,
      position: "relative",
      minHeight: 200,
      minWidth: 200,
    },
    image: {
      // display: imageUrl ? "flex" : "none",
      objectFit: "contain",
      //   objectPosition: "0% 20%",
      width: "100%",
      height: 400,
    },
  };

  return (
    <div style={styles.container}>
      {imageUrl && <img src={imageUrl} alt="file" style={styles.image} />}
      {imageUrl && (
        <div style={styles.removeBtn} onClick={onRemove}>
          <Close />
        </div>
      )}

      {!imageUrl && (
        <div>
          <div onClick={handleClick} style={styles.button}>
            <AddAPhoto fontSize="inherit" />
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
