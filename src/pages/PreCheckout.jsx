import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Text from "../components/Text";
import Col from "../hoc/Col";
import Container from "../hoc/Container";
// import Row from "../hoc/Row";
import Login from "../components/Login";

const PreCheckout = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Text size={80}>Checkout</Text>
      <Col height="30vh">
        <Text size={30}>
          You can check out as Guest and create an account later.
        </Text>
        <Button
          title="Continue as Guest"
          width={300}
          bgColor="red"
          onClick={() => navigate("/guest-checkout")}
        />
      </Col>

      <Login />

      <Col height="30vh">
        <Text size={50}>New Customer</Text>
        <Button
          onClick={() => navigate("/register")}
          title="Create Account"
          bgColor="transparent"
          fontColor="var(--text-primary)"
          width={300}
        />
      </Col>
    </Container>
  );
};

export default PreCheckout;
