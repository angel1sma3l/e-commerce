import { Search } from "@mui/icons-material";
import { useState } from "react";

const MySearch = ({
  data,
  width = "90%",
  onChange,
  value,
  searchBy = "search",
}) => {
  const [focused, setFocused] = useState(false);

  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  const styles = {
    container: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      gap: 5,
      height: 35,
      width: width,
      overflow: "hidden",
      padding: 0,
      border: focused ? "1px solid var(--text-primary)" : "0.5px solid gray",
      borderRadius: 17.5,
    },
    input: {
      display: "flex",
      width: "100%",
      backgroundColor: "var(--background)",
      fontSize: 23,
      color: "var(--text-primary)",
      height: "100%",
      border: "none",
      outline: "none",
    },
  };

  return (
    <div style={styles.container}>
      <Search fontSize="large" color="info" />

      <input
        style={styles.input}
        onChange={handleChange}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={searchBy}
      />
    </div>
  );
};

export default MySearch;
