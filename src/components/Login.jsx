import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "./Input";
import Container from "../hoc/Container";
import Col from "../hoc/Col";
import useIsMobile from "../hooks/useIsMobile";
import Button from "./Button";
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
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      position: "relative",
      paddingBottom: 100,
    },
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

    // Validting input
    const newErrors = { ...errors };
    const errMessage = validateProperty(input);
    if (errMessage) newErrors[input.name] = errMessage;
    else delete newErrors[input.name];

    setErrors(newErrors);
    newData[name] = value;
    setData(newData);
  };

  const schema = {
    email: Joi.string().required().label("Email").email(),
    password: Joi.string().required().min(5).label("Password"),
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const objSchema = { [name]: schema[name] };

    const { error } = Joi.validate(obj, objSchema);

    return error ? error.details[0].message : null;
  };

  return (
    <div style={styles.container}>
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
          error={errors.email}
        />
        <Input
          required
          // minLength={5}
          onChange={handleChange}
          label="Password"
          placeHolder="Password"
          name="password"
          type="password"
          value={data.password}
          error={errors.password}
        />

        <Button
          type="submit"
          title="Login"
          width={300}
          disabled={Object.keys(errors).length > 0} // checking errors length
        />
      </form>
    </div>
  );
};

export default Login;
