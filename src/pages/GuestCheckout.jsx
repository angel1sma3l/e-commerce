import React from "react";
import MyText from "../components/MyText";
import Col from "../hoc/Col";
import Row from "../hoc/Row";
import Container from "../hoc/Container";
import { CartState } from "../context/CartContext";
import ListItem from "../components/ListItem";
import Summary from "../components/Summary";
import useIsMobile from "../hooks/useIsMobile";
import ShippingAddress from "../components/ShippingAddress";

const GuestCheckout = () => {
  const isMobile = useIsMobile();
  const {
    state: { cart },
  } = CartState();

  return (
    <Container>
      <MyText size={80}>Shipping</MyText>
      <Row mt={50}>
        <Col width={isMobile ? "100%" : "60%"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxHeight: "70vh",
              overflow: "scroll",
              width: "100%",
            }}
          >
            {cart.map((p) => (
              <ListItem key={p.id} item={p} />
            ))}
          </div>
        </Col>
        <Col width={isMobile ? "100%" : "30%"}>
          <Summary noButton />
        </Col>
      </Row>

      <Col>
        <ShippingAddress onClick={(data) => console.log(data)} />
      </Col>
    </Container>
  );
};

export default GuestCheckout;
