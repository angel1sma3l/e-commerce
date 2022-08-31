import React, { useEffect, useState } from "react";
import { CartState } from "../context/CartContext";
import ListItem from "../components/ListItem";
import Summary from "../components/Summary";
import useIsMobile from "../hooks/useIsMobile";
import Container from "../hoc/Container";
import Row from "../hoc/Row";
import Col from "../hoc/Col";
import MyText from "../components/MyText";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);
  const {
    state: { cart },
  } = CartState();
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    const calc = () => {
      // calculate total
      const total = cart.reduce((acc, curr) => {
        return (acc += Number(curr.price) * curr.qty);
      }, 0);

      setSubTotal(total);
    };

    calc();
  }, [cart]);

  return (
    <Container>
      <Row justifyContent="center" mt={40} mb={100}>
        <MyText size={80}>Your Cart</MyText>
      </Row>

      <Row flexWrap="wrap">
        <Col flex={!isMobile ? 2 : null}>
          {cart.length === 0 ? (
            <MyText color="orange" size={50}>
              Cart is Empty
            </MyText>
          ) : (
            <div
              style={{
                overflow: "scroll",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxHeight: "90vh",
                width: "100%",
              }}
            >
              {cart.map((prod) => (
                <ListItem key={prod.id} item={prod} />
              ))}
            </div>
          )}
        </Col>

        <Col flex={!isMobile ? 1 : null}>
          <Summary
            total={subTotal}
            subtotal={subTotal}
            onClick={() => navigate("/pre-checkout")}
          />
        </Col>
      </Row>

      <Row mt={50} justifyContent="center">
        <MyText size={40}>Recomended</MyText>
      </Row>
    </Container>
  );
};

export default Cart;
