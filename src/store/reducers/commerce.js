const INITIAL_STATE = {
  products: [],
  cart: []
};

const incrementInCart = (product, state) => {
  if (isInCart(product, state)) {
    return state.cart.map(item => {
      if (item.id === product.id) {
        item.count += 1;
      }
      return item;
    });
  } else {
    product.count = 1;
    return [...state.cart, product];
  }
};

const decrementInCart = (product, state) => {
  if (isInCart(product, state)) {
    if (product.count == 1) {
      //Remove from cart
      return state.cart.filter(item => item.id !== product.id);
    } else {
      //Decrement
      return state.cart.map(item => {
        if (item.id === product.id) {
          item.count = item.count - 1;
        }
        return item;
      });
    }
  }
};

const isInCart = (product, state) => {
  let found = false;
  state.cart.forEach(item => {
    if (item.id === product.id) {
      found = true;
    }
  });
  return found;
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
        cart: [...incrementInCart(action.product, state)]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...decrementInCart(action.product, state)]
      };
      break;
  }
  return state;
}

export default commerce;
