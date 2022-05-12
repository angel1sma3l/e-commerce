import { createContext, useContext, useState } from "react";

const Auth = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
};

export default AuthContext;

export const useAuth = () => {
  return useContext(Auth);
};
