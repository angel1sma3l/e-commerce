import { StarBorderOutlined } from "@mui/icons-material";
import Rating from "@mui/material/Rating";

const RatingStar = ({ rate = 5, size, onChange, ...props }) => {
  return (
    <Rating
      style={{ color: "var(--text-primary)" }}
      size={size}
      {...props}
      onChange={(e, v) => onChange(v)}
      value={rate}
      emptyIcon={<StarBorderOutlined fontSize={size} color="info" />}
    />
  );
};

export default RatingStar;
