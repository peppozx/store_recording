import React from "react";
import "../styles/productcart.css";

import * as CommerceActions from "../store/actions/index";
import { connect } from "react-redux";

function ProductCart({ product, addToCart, removeFromCart }) {
  const add = () => {
    addToCart(product);
  };
  const remove = () => {
    removeFromCart(product);
  };
  return (
    <div className="cart-product">
      <img src={product.img} />
      <p>{product.title}</p>
      <div className="add-remove">
        <button onClick={remove}>-</button>
        <span>{product.count}</span>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  productsInCart: state.commerce.cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(CommerceActions.addToCart(product)),
  removeFromCart: product => dispatch(CommerceActions.removeFromCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCart);
