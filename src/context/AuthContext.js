import { createContext, useContext, useReducer } from "react";
import { authReducer } from "./Reducer";

const Auth = createContext();

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    setUser: () => {},
  });

  return <Auth.Provider value={(state, dispatch)}>{children}</Auth.Provider>;
};

export default AuthContext;

export const AuthState = () => {
  return useContext(Auth);
};
