const INITIAL_STATE = {
  products: [],
  cart: []
};

function commerce(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      console.log("setting products");
      console.log(action.products);
      break;
      return {
        ...state,
        products: [...action.products]
      };
    case "ADD_TO_CART":
      console.log("adding to cart");
      return {
        ...state,
        cart: state.cart.push(action.product)
      };
  }
  return state;
}

export default commerce;
