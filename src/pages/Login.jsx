import React, { useState } from "react";
import Input from "../components/Input";
import Container from "../hoc/Container";
import Col from "../hoc/Col";
import useIsMobile from "../hooks/useIsMobile";
import Button from "../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const isMobile = useIsMobile();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const styles = {
    title: {
      fontSize: 70,
    },
    wrapper: {
      width: isMobile ? "90vw" : "50%",
      display: "flex",
      flexDirection: "column",
      marginTop: 50,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let from = location.state?.from?.pathname || "/";

    // login to server
    login(data.email);

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

          <Button type="submit" title="Login" width={300} alignSelf="center" />
        </form>
      </Col>
    </Container>
  );
};

export default Login;
