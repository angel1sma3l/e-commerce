import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import logService from "../services/logService";
import Joi from "joi-browser";
import useIsMobile from "../hooks/useIsMobile";

const schema = {
  address1: Joi.string().required().label("Address 1"),
  address2: Joi.string().label("Address 2"),
  city: Joi.string().required().label("City"),
  state: Joi.string().required().max(2).label("State"),
  zip: Joi.string().max(5).required().label("Zip Code"),
  email: Joi.string().required().email().label("Email"),
};

const ShippingAddress = ({ onClick }) => {
  const [data, setData] = useState({
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const isMobile = useIsMobile();

  const handleChange = (e) => {
    e.preventDefault();

    const input = e.target;
    const name = input.name;
    const value = input.value;

    const newData = { ...data };
    newData[name] = value;

    // validating input with joi schema
    const newErrors = { ...errors };
    const errMessage = validateInput(input);
    if (errMessage) newErrors[name] = errMessage;
    else delete newErrors[name];

    setErrors(newErrors);
    setData(newData);
  };

  const validateInput = ({ name, value }) => {
    const obj = { [name]: value };
    const objSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, objSchema);

    return error ? error.details[0].message : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logService.error("Testing ....");
    onClick(data);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: isMobile ? "95%" : "50%",
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <div style={{ width: "100%" }}>All field marked with * are required</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          width: "100%",
        }}
      >
        <Input
          required
          onChange={handleChange}
          label="First Name"
          placeHolder="First Name"
          name="firstName"
          value={data.firstName}
          error={errors.firstName}
        />
        <Input
          required
          onChange={handleChange}
          label="Last Name"
          placeHolder="Last Name"
          name="firstName"
          value={data.lastName}
          error={errors.lastName}
        />
      </div>
      <Input
        required
        onChange={handleChange}
        label="Address 1"
        placeHolder="Address 1"
        name="address1"
        value={data.address1}
        error={errors.address1}
      />
      <Input
        // required
        onChange={handleChange}
        label="Address 2"
        placeHolder="Address 2"
        name="address2"
        value={data.address2}
        error={errors.address2}
      />
      <Input
        required
        onChange={handleChange}
        label="City"
        placeHolder="City"
        name="city"
        value={data.city}
        error={errors.city}
      />
      <Input
        required
        onChange={handleChange}
        label="State"
        placeHolder="State"
        name="state"
        value={data.state}
        error={errors.state}
      />
      <Input
        required
        onChange={handleChange}
        label="Zip code"
        placeHolder="Zip code"
        name="zip"
        value={data.zip}
        error={errors.zip}
      />
      <Input
        required
        onChange={handleChange}
        label="Phone"
        placeHolder="Phone"
        name="phone"
        value={data.phone}
        error={errors.phone}
      />
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

      <Button
        type="submit"
        title="Continue"
        width={300}
        alignSelf="center"
        disabled={Object.keys(errors).length > 0}
      />
    </form>
  );
};

export default ShippingAddress;
