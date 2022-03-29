import React, { useState } from "react";
import Container from "../hoc/Container";
import Input from "../components/Input";
import useIsMobile from "../hooks/useIsMobile";
import Button from "../components/Button";

const Register = () => {
  const isMobile = useIsMobile();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const styles = {
    title: {
      fontSize: 70,
      marginTop: 50,
    },
    wrapper: {
      width: isMobile ? "90vw" : "50%",
      display: "flex",
      flexDirection: "column",
      marginTop: 50,
    },
  };

  // const validateProperty = ({ name, value }) => {
  //   const obj = { [name]: value };
  //   const objSchema = { [name]: schema[name] };

  //   // const { error } = Joi.validate(obj, objSchema);

  //   return error ? error.details[0].message : null;
  // };

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
      <div style={styles.title}>Register</div>
      <form onSubmit={() => console.log("submit....")} style={styles.wrapper}>
        <Input
          required
          onChange={handleChange}
          label="First Name"
          placeHolder="First Name"
          name="firstName"
          value={data.firstName}
        />
        <Input
          required
          onChange={handleChange}
          label="Last Name"
          placeHolder="Last Name"
          name="lastName"
          value={data.lastName}
        />
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
        <Input
          required
          minLength={5}
          onChange={handleChange}
          label="Confirm password"
          placeHolder="Confirm password"
          name="confirmPassword"
          type="password"
          value={data.confirmPassword}
        />

        <Button type="submit" title="Sign Up" width={300} alignSelf="center" />
      </form>
    </Container>
  );
};

export default Register;
