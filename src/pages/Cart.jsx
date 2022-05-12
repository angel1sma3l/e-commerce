import React, { useEffect, useState } from "react";
import { CartState } from "../context/CartContext";
import ListItem from "../components/ListItem";
import Summary from "../components/Summary";
import useIsMobile from "../hooks/useIsMobile";
import Container from "../hoc/Container";
import Row from "../hoc/Row";
import Col from "../hoc/Col";
import Text from "../components/Text";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);
  const {
    state: { cart },
  } = CartState();
  const isMobile = useIsMobile();

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
        <Text size={80}>Your Cart</Text>
      </Row>

      <Row flexWrap="wrap">
        <Col flex={!isMobile ? 2 : null}>
          {cart.length === 0 ? (
            <Text color="orange" size={50}>
              Cart is Empty
            </Text>
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
          <Summary total={subTotal} subtotal={subTotal} />
        </Col>
      </Row>

      <Row mt={50} justifyContent="center">
        <Text size={40}>Recomended</Text>
      </Row>
    </Container>
  );
};

export default Cart;
