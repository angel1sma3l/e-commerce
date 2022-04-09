import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, prodReducer } from "./Reducer";

const Cart = createContext();

const CartContext = ({ children }) => {
  // this data will come from the server
  faker.seed(88);
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    desc: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    images: [
      { image: faker.image.image() },
      { image: faker.image.image() },
      { image: faker.image.image() },
    ],
    inStock: faker.random.arrayElement([0, 3, 5, 7]),
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    size: faker.random.arrayElement([
      "small",
      "mediun",
      "large",
      "x-large",
      "x-small",
    ]),
    color: faker.commerce.color(),
    isFavorite: false,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
    favorites: [],
  });

  const [prodState, prodDispatch] = useReducer(prodReducer, {
    byPrice: false,
    inStock: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, prodState, prodDispatch, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default CartContext;

export const CartState = () => {
  return useContext(Cart);
};
