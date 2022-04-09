import { createContext, useContext, useState } from "react";

const Auth = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email) => {
    setUser({ email: email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <Auth.Provider value={{ user, setUser, login, logout }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;

export const useAuth = () => {
  return useContext(Auth);
};
