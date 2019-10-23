export function setProducts(products) {
  return {
    type: "SET_PRODUCTS",
    products
  };
}

export function addToCart(product) {
  return {
    type: "ADD_TO_CART",
    product
  };
}
