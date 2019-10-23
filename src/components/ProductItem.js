import React from "react";
import "../styles/productitem.css";

import * as CommerceActions from "../store/actions/index";
import { connect } from "react-redux";

function ProductItem({ product, addToCart, productsInCart, removeFromCart }) {
  console.log(productsInCart);
  const addProduct = () => {
    addToCart(product);
  };
  const removeProduct = () => {
    removeFromCart(product);
  };
  const isInCart = () => {
    const inCart = productsInCart.filter(p => p.id === product.id);
    if (inCart.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  const addButton = () => {
    return <button onClick={addProduct}>Add</button>;
  };
  const removeButton = () => {
    return <button onClick={removeProduct}>Remove</button>;
  };
  return (
    <div className="product-item">
      <img className="product-img" src={product.img}></img>
      <span>{product.title}</span>
      <span>{product.company}</span>
      <span>${product.price}</span>
      {isInCart() ? removeButton() : addButton()}
    </div>
  );
}

const mapStateToProps = state => ({
  listOfProducts: state.commerce.products,
  productsInCart: state.commerce.cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(CommerceActions.addToCart(product)),
  removeFromCart: product =>
    dispatch(CommerceActions.removeFromCartAll(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);
