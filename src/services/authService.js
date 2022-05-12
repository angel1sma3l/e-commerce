const login = (email) => {
  // store token in cookie
  // decode token and return decoded token, user info
  return { email: email, isAdmin: false };
};

const logout = () => {
  // remove cookie
  return null;
};

const authService = { login, logout };
export default authService;
