import React from "react";

import Header from "./Header";
import ProductItem from "./ProductItem";

import * as CommerceActions from "../store/actions/index";
import { connect } from "react-redux";

function Cart({ productsInCart }) {
  return (
    <div>
      <Header title="Cart" />
      {productsInCart.map(product => (
        <ProductItem product={product} />
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
