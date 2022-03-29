import React, { useState } from "react";
import Input from "../components/Input";
import Container from "../hoc/Container";
import useIsMobile from "../hooks/useIsMobile";
import Button from "../components/Button";

const Login = () => {
  const isMobile = useIsMobile();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

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
      <div style={styles.title}>Login</div>
      <form onSubmit={() => alert("submit....")} style={styles.wrapper}>
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
    </Container>
  );
};

export default Login;
