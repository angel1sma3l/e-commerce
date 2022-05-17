import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import ProductsDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import GuestCheckout from "./pages/GuestCheckout";
import NotFound from "./pages/NotFound";
// import Announcement from "./components/Announcement";
import CartContext from "./context/CartContext";
import Favorite from "./pages/Favorite";
import AuthContext from "./context/AuthContext";
import Container from "./hoc/Container";
import Dashboard from "./pages/admin/Dashboard";
import RequireAuth from "./components/RequireAuth";
import Logout from "./components/Logout";
import Account from "./pages/Account";
import RequireAdminAuth from "./components/RequireAdminAuth";
import PreCheckout from "./pages/PreCheckout";

// checking if user has set a prefer theme in the browser
const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const App = () => {
  const [theme, setTheme] = useState(defaultDark ? "dark" : "light");

  const styles = {
    app: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      backgroundColor: "var(--background)",
      color: "var(--text-primary)",
    },
  };

  return (
    <AuthContext>
      <CartContext>
        <ToastContainer />
        <div style={styles.app} data-theme={theme}>
          <Navbar theme={theme} onThemeChange={(t) => setTheme(t)} />
          {/* <Announcement /> */}
          <Container>
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <RequireAdminAuth>
                    <Dashboard />
                  </RequireAdminAuth>
                }
              />
              <Route
                path="/account"
                element={
                  <RequireAuth>
                    <Account />
                  </RequireAuth>
                }
              />
              <Route
                path="/favorites"
                element={
                  <RequireAuth>
                    <Favorite />
                  </RequireAuth>
                }
              />
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pre-checkout" element={<PreCheckout />} />
              <Route path="/guest-checkout" element={<GuestCheckout />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/productDetails" element={<ProductsDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </div>
      </CartContext>
    </AuthContext>
  );
};

export default App;
