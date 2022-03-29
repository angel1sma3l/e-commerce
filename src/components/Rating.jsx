import { StarBorderOutlined, Star } from "@mui/icons-material";
import Rating from "@mui/material/Rating";

const RatingStar = ({ rate = 5, size, onChange, ...props }) => {
  const stars = [0, 1, 2, 3, 4];

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
