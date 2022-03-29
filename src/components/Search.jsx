import { Search } from "@mui/icons-material";
import { useState } from "react";

const MySearch = ({
  data,
  width = "90%",
  onSearch,
  onChange,
  value,
  searchBy,
}) => {
  const [focused, setFocused] = useState(false);

  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  const styles = {
    container: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      margin: "20px 0px",
      width: width,
      overflow: "hidden",
      padding: 0,
      position: "relative",
    },
    input: {
      width: "100%",
      backgroundColor: "var(--background)",
      fontSize: 23,
      color: "var(--text-primary)",
      paddingLeft: 50,
      paddingTop: 10,
      paddingBottom: 10,
      border: focused ? "1px solid var(--text-primary)" : "0.5px solid gray",
      borderRadius: 23,
    },
  };

  return (
    <div style={styles.container}>
      <div style={{ position: "absolute", left: 3, top: 3 }}>
        <Search fontSize="large" />
      </div>
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
