export const initialState = {
  products: [],
  cart: [],
  saveLater: [],
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: payload };
    case "ADD_TO_CART":
      return { ...state, cart: state.cart.concat({ ...payload, quantity: 1 }) };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    case "CHANGE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.item.id && payload.quantity > 0
            ? { ...item, quantity: payload.quantity }
            : item
        ),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT_QUANTITY":
      let cartItem = state.cart.find((item) => item.id === payload.id);
      return cartItem.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === payload.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== payload.id),
          };
    case "SAVE_LATER":
      let product = state.cart.find((item) => item.id === payload.id);
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
        saveLater: state.saveLater.concat(product),
      };
    case "REMOVE_FROM_SAVED":
      return {
        ...state,
        saveLater: state.saveLater.filter((item) => item.id !== payload.id),
      };
    case "MOVE_TO_CART":
      let itemToCart = state.saveLater.find((item) => item.id === payload.id);
      return {
        ...state,
        saveLater: state.saveLater.filter((item) => item.id !== payload.id),
        cart: state.cart.concat(itemToCart),
      };
    default:
      return state;
  }
};
