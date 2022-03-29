import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductsPage from "./pages/ProductsPage";
import ProductsDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Announcement from "./components/Announcement";
import CartContext from "./context/CartContext";
import Favorite from "./pages/Favorite";
import AuthContext from "./context/AuthContext";
import Container from "./hoc/Container";
// checking if user has set a prefer theme in the browser
const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const App = () => {
  const [theme, setTheme] = useState(defaultDark ? "dark" : "light");

  const styles = {
    app: {
      display: "flex",
      flexDirection: "column",
      minWidth: "100vw",
      backgroundColor: "var(--background)",
      color: "var(--text-primary)",
    },
  };

  return (
    <AuthContext>
      <CartContext>
        <div style={styles.app} data-theme={theme}>
          <Navbar theme={theme} onThemeChange={(t) => setTheme(t)} />
          <Announcement />
          <Container>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/favorites" element={<Favorite />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
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
