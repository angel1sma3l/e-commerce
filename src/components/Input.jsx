import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";

const Input = ({
  error,
  showHidePasswordButton,
  onShowHideClick,
  dark,
  label,
  fontColor = "gray",
  bgColor = "var(--background)",
  name,
  onChange,
  placeHolder,
  type = "text",
  width = "95%",
  value,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const styles = {
    container: {
      backgroundColor: bgColor,
      color: fontColor,
      width: width,
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minHeight: 60,
      marginTop: 30,
      paddingTop: 20,
      paddingBottom: 5,
      borderRadius: 15,
    },
    error: {
      display: "flex",
      width: "95%",
      color: "red",
      // paddingLeft: 20,
      paddingBottom: 10,
      marginTop: 15,
      fontSize: 23,
    },
    label: {
      fontSize: 23,
      fontWeight: "bold",
      backgroundColor: bgColor,
      color: fontColor,
      paddingRight: 10,
      paddingLeft: 10,
      position: "absolute",
      top: 5,
      left: 30,
      zIndex: 2,
      opacity: value ? 1 : focused ? 1 : 0,
      transition: "all 0.5s ease",
    },
    input: {
      display: "flex",
      backgroundColor: dark ? "black" : "inherit",
      color: fontColor,
      width: "100%",
      paddingLeft: 5,
      paddingRight: 50,
      paddingTop: focused ? 30 : 15,
      paddingBottom: focused ? 10 : 5,
      fontSize: 25,
      borderTop: focused ? "2px solid gray" : 0,
      borderRight: focused ? "2px solid gray" : 0,
      borderLeft: focused ? "2px solid gray" : 0,
      borderBottom: "2px solid gray",
    },
    inputContainer: {
      backgroundColor: bgColor,
      display: "flex",
      alignItems: "center",
      width: "95%",
    },
    visible: {
      position: "absolute",
      right: 20,
      paddingTop: focused ? 30 : 15,
    },
  };

  const PlaceholderAsterisk = () => {
    return <div style={{ color: "red" }}>{placeHolder}</div>;
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputContainer}>
        <label style={styles.label}>
          {label}
          {props.required ? " *" : null}
        </label>
        <input
          style={styles.input}
          {...props}
          type={
            type === "password" ? (showPassword ? "password" : "text") : type
          }
          name={name}
          id={name}
          placeholder={`${placeHolder} ${props.required ? "*" : ""}`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          value={value}
        />
        {type === "password" && (
          <div
            onClick={() => setShowPassword(!showPassword)}
            style={styles.visible}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </div>
        )}
      </div>
      {error && <div style={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
