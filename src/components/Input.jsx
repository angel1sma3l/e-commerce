import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";

const Input = ({
  error,
  showHidePasswordButton,
  onShowHideClick,
  dark,
  label,
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
      backgroundColor: dark ? "black" : "var(--background)",
      color: "var(--text-primary)",
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
      color: "orange",
      paddingLeft: 20,
      paddingBottom: 10,
    },
    label: {
      fontSize: 23,
      fontWeight: "bold",
      backgroundColor: "inherit",
      color: dark ? "lightgray" : "gray",
      paddingRight: 10,
      paddingLeft: 10,
      position: "absolute",
      top: 5,
      left: 30,
      zIndex: 2,
      opacity: focused ? 1 : 0,
      transition: "all 0.5s ease",
    },
    input: {
      display: "flex",
      backgroundColor: dark ? "black" : "inherit",
      color: "var(--text-primary)",
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
      backgroundColor: dark ? "black" : "inherit",
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

  return (
    <div style={styles.container}>
      <div style={styles.inputContainer}>
        <label style={styles.label}>{label}</label>
        <input
          style={styles.input}
          {...props}
          type={
            type === "password" ? (showPassword ? "password" : "text") : type
          }
          name={name}
          id={name}
          placeholder={placeHolder}
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
