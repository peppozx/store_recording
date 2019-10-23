const INITIAL_STATE = {
  products: [],
  cart: []
};

function commerce(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: [...action.products]
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.product]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [
          ...state.cart.filter(product => product.id !== action.product.id)
        ]
      };
      break;
  }
  return state;
}

export default commerce;
