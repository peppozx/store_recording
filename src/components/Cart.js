import React from "react";

import Header from "./Header";
import ProductCart from "./ProductCart";

import * as CommerceActions from "../store/actions/index";
import { connect } from "react-redux";

function Cart({ productsInCart }) {
  const getTotal = () => {
    let amount = 0;
    productsInCart.forEach(product => {
      amount += product.price * product.count;
    });
    return amount;
  };
  const style = {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "600"
  };
  const myDivStyle = {};
  return (
    <div style={myDivStyle}>
      <Header title="Cart" />
      <p style={style}>Total: ${getTotal()}</p>
      {productsInCart.map(product => (
        <ProductCart key={product.id} product={product} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  listOfProducts: state.commerce.products,
  productsInCart: state.commerce.cart
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
