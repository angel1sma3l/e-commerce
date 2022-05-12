import React, { useState } from "react";
import Input from "../components/Input";
import Container from "../hoc/Container";
import Col from "../hoc/Col";
import useIsMobile from "../hooks/useIsMobile";
import Button from "../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import authService from "../services/authService";

const Login = () => {
  const { setUser } = useAuth();
  const isMobile = useIsMobile();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const styles = {
    title: {
      fontSize: 70,
    },
    wrapper: {
      width: isMobile ? "90vw" : "50%",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      marginTop: 50,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let from = location.state?.from?.pathname || "/account";

    // login to server
    const user = authService.login(data.email);
    setUser(user);

    if (user?.isAdmin) from = "/admin";

    navigate(from, { replace: true });
  };

  const handleChange = async ({ target: input }) => {
    const name = input.name;
    const value = input.value;

    const newData = { ...data };

    // validate input

    newData[name] = value;
    setData(newData);
  };

  return (
    <Container>
      <Col align="center">
        <div style={styles.title}>Login</div>
        <form onSubmit={handleSubmit} style={styles.wrapper}>
          <Input
            required
            onChange={handleChange}
            label="Email"
            placeHolder="Email"
            name="email"
            type="email"
            value={data.email}
            error="error to login"
          />
          <Input
            required
            minLength={5}
            onChange={handleChange}
            label="Password"
            placeHolder="Password"
            name="password"
            type="password"
            value={data.password}
          />

          <Button type="submit" title="Login" width={300} />
        </form>
      </Col>
    </Container>
  );
};

export default Login;
