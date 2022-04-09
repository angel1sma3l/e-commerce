export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart.find((p) => p.id === action.payload.id)
          ? [...state.cart]
          : [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((prod) =>
          prod.id === action.payload.id
            ? (prod.qty = action.payload.qty)
            : prod.qty
        ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    case "ADD_TO_FAVORITE":
      return {
        ...state,
        products: state.products.map((p) => {
          if (p.id === action.payload.id) p.isFavorite = !p.isFavorite;
          return p;
        }),
      };

    default:
      return state;
  }
};

export const prodReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return {
        ...state,
        byPrice: !state.byPrice,
      };

    case "FILTER_BY_STOCK":
      return {
        ...state,
        inStock: !state.inStock,
      };

    case "FILTER_BY_RATING":
      return {
        ...state,
        byRating: action.payload,
      };

    case "FILTER_BY_SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
      };

    case "CLEAR_FILTERS":
      return {
        byPrice: false,
        inStock: false,
        byRating: 0,
        searchQuery: "",
      };

    default:
      return state;
  }
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
