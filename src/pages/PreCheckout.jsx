import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import MyText from "../components/MyText";
import Col from "../hoc/Col";
import Container from "../hoc/Container";
// import Row from "../hoc/Row";
import Login from "../components/Login";

const PreCheckout = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <MyText size={80}>Checkout</MyText>
      <Col height="30vh">
        <MyText size={30}>
          You can check out as Guest and create an account later.
        </MyText>
        <Button
          title="Continue as Guest"
          width={300}
          bgColor="red"
          onClick={() => navigate("/guest-checkout")}
        />
      </Col>

      <Login />

      <Col height="30vh">
        <MyText size={50}>New Customer</MyText>
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
