import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMoblie] = useState(
    window.innerWidth < 1022 ? true : false
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMoblie(window.innerWidth < 1022 ? true : false);
    });

    return () => setIsMoblie(window.innerWidth < 1022 ? true : false);
  }, []);

  return isMobile;
};

export default useIsMobile;
