import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMoblie] = useState(
    window.innerWidth < 1022 ? true : false
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMoblie(window.innerWidth < 1022 ? true : false);
    });

    return () => {
      window.removeEventListener(
        "resize",
        setIsMoblie(window.innerWidth < 1022 ? true : false)
      );
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
