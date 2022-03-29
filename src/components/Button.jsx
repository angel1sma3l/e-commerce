import { useRef, useState } from "react";

const Button = ({
  alignSelf,
  border,
  disabled,
  title,
  selected,
  fontSize = 25,
  bgColor = "royalblue",
  hoverColor = "blue",
  bRadius = 30,
  fontColor = "white",
  onClick,
  width = "95%",
  selectedColor = "#9b9c9d",
  height,
  type,
}) => {
  const [hover, setHover] = useState(false);

  const styles = {
    container: {
      alignItems: "center",
      alignSelf: alignSelf,
      backgroundColor:
        hover && !disabled
          ? hoverColor
          : bgColor && selected
          ? selectedColor
          : bgColor && disabled
          ? "transparent"
          : bgColor,
      borderRadius: bRadius,
      border: border ? "1px solid gray" : "0px",
      cursor: disabled ? "not-allowed" : "pointer",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      margin: "20px 0px",
      width: width,
      height: height,
    },
    button: {
      paddingTop: 15,
      paddingBottom: 15,
      fontSize: fontSize,
      color: disabled
        ? "gray"
        : fontColor && hover && !disabled
        ? "var(--accent-secondary)"
        : fontColor,
      fontWeight: 400,
    },
    hiddenButton: {
      display: "none",
    },
  };

  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current.click();
  };

  return (
    <div
      onClick={type ? handleClick : disabled ? null : onClick}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      style={styles.container}
    >
      <button type={type} ref={buttonRef} style={styles.hiddenButton}></button>
      <div style={styles.button}>{title}</div>
    </div>
  );
};

export default Button;
