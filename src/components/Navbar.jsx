import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartCheckoutOutlined from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import Close from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import dmicanoLogo from "../logo.png";
import DarkSwitch from "./DarkSwitch";
import { CartState } from "../context/CartContext";
import useIsMobile from "../hooks/useIsMobile";
import { CloseRounded, FavoriteBorderOutlined } from "@mui/icons-material";

// const mediaQueryList = window.matchMedia("(max-width: 800px)");
const data = [
  { id: 0, to: "/", title: "Home" },
  { id: 1, to: "/products", title: "Products" },
  { id: 2, to: "/about", title: "About" },
];

const Navbar = ({ theme, onThemeChange }) => {
  const [toggle, setToggle] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const isMobile = useIsMobile();

  const {
    state: { cart },
  } = CartState();

  const closeMenu = () => {
    setToggle(false);
    setShowLoginMenu(false);
  };

  const DropdownMenu = () => {
    return (
      <div style={styles.dropDownContainer}>
        {data.map((item) => (
          <div key={item.id}>
            <NavLink
              style={({ isActive }) =>
                isActive ? styles.activeLink : styles.dropDownlink
              }
              onClick={closeMenu}
              to={item.to}
            >
              {item.title}
            </NavLink>
          </div>
        ))}
      </div>
    );
  };

  const DropdownLogin = () => {
    const user = null;
    return (
      <div style={styles.dropDownLoginContainer}>
        {!user && (
          <>
            <NavLink
              style={({ isActive }) =>
                isActive ? styles.activeLink : styles.dropDownlink
              }
              onClick={closeMenu}
              to="/login"
            >
              Log in
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? styles.activeLink : styles.dropDownlink
              }
              onClick={closeMenu}
              to="/register"
            >
              Sign up
            </NavLink>
          </>
        )}
        {user && (
          <NavLink
            style={({ isActive }) =>
              isActive ? styles.activeLink : styles.dropDownlink
            }
            onClick={closeMenu}
            to="/logout"
          >
            Sign out
          </NavLink>
        )}
        <div style={styles.theme}>
          <DarkSwitch theme={theme} onThemeChange={onThemeChange} />
        </div>
      </div>
    );
  };

  const Nav = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {data.map((item, index) => (
          <NavLink
            key={index}
            style={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
            onClick={closeMenu}
            to={item.to}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    );
  };

  const styles = {
    activeLink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "2px 5px 20px gray",
      textDecoration: "none",
      width: isMobile ? 200 : 100,
      height: isMobile ? 50 : 40,
      borderRadius: isMobile ? 25 : 20,
      color: "white",
      marginLeft: isMobile ? 0 : 20,
    },
    container: {
      backgroundColor: "black",
      width: "100vw",
      display: "flex",
      flexDirection: "row",
      minHeight: 80,
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      zIndex: 3,
    },
    dropDownContainer: {
      display: toggle ? "flex" : "none",
      flexDirection: "column",
      width: "50%",
      alignItems: "center",
      position: "absolute",
      marginTop: 0,
      backgroundColor: "black",
      left: 0,
      top: 80,
      paddingBottom: 20,
      // transform: !toggle ? `translateX(-130%)` : `translateX(0px)`,
      // boxShadow: "1px 0px 30px gray",
    },
    dropDownLoginContainer: {
      display: showLoginMenu ? "flex" : "none",
      flexDirection: "column",
      width: 200,
      alignItems: "center",
      position: "absolute",
      marginTop: 0,
      backgroundColor: "black",
      right: 0,
      top: 80,
      paddingBottom: 20,
      // transform: !toggle ? `translateX(-130%)` : `translateX(0px)`,
      // boxShadow: "1px 0px 30px gray",
    },
    dropDownlink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      width: "100%",
      height: 50,
      borderRadius: 25,
      color: "white",
      marginBottom: 10,
    },
    leftContainer: {
      display: "flex",
      flex: 2,
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    brand: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      color: "gray",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    brandName: {
      fontSize: 30,
      color: "white",
      textDecoration: "none",
    },
    logo: {
      width: "auto",
      height: 70,
    },
    rightContainer: {
      alignItems: "center",
      flex: 2,
      color: "white",
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "flex-end",
    },
    navLink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      minWidth: 100,
      height: 40,
      borderRadius: 10,
      color: "white",
      marginLeft: 20,
    },
    theme: {
      width: "80%",
      color: "white",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 15,
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.leftContainer}>
          {isMobile ? (
            <div
              style={{ marginLeft: 10, color: "white" }}
              onClick={() => setToggle(!toggle)}
            >
              {!toggle ? (
                <Menu fontSize="large" color="inherit" />
              ) : (
                <Close fontSize="large" color="inherit" />
              )}
            </div>
          ) : (
            <Nav />
          )}
        </div>

        <Link to="/">
          <div style={styles.brand}>
            <img src={dmicanoLogo} style={styles.logo} alt="dmicano" />
            <div style={styles.brandName}>Web Shop</div>
          </div>
        </Link>

        <div style={styles.rightContainer}>
          <NavLink to="/favorites" style={{ color: "white", marginRight: 20 }}>
            <FavoriteBorderOutlined color="inherit" />
          </NavLink>
          <Link to="/cart" style={{ marginRight: 20, color: "white" }}>
            <Badge badgeContent={cart.length} color="default">
              <ShoppingCartCheckoutOutlined fontSize="medium" color="inherit" />
            </Badge>
          </Link>
          <div style={{ marginRight: 20, cursor: "pointer" }}>
            {!showLoginMenu ? (
              <AccountCircleOutlined
                fontSize="medium"
                color="inherit"
                onClick={() => setShowLoginMenu(!showLoginMenu)}
              />
            ) : (
              <CloseRounded onClick={() => setShowLoginMenu(false)} />
            )}
          </div>
        </div>
      </div>
      <DropdownMenu />
      <DropdownLogin />
    </>
  );
};

export default Navbar;
