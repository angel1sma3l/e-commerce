import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightMode from "@mui/icons-material/LightMode";

const DarkSwitch = ({ theme, onThemeChange }) => {
  const container = {
    cursor: "pointer",
  };

  const handleClick = () => {
    onThemeChange(theme === "dark" ? "light" : "dark");
  };
  return (
    <div style={container} onClick={handleClick}>
      {theme !== "dark" ? <DarkModeOutlined /> : <LightMode color="white" />}
    </div>
  );
};

export default DarkSwitch;
