import React, { Component } from "react";
import "../styles/products.css";

import ProductItem from "./ProductItem";

import { connect } from "react-redux";
import * as CommerceActions from "../store/actions/index";

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products
    };
  }
  componentDidMount() {
    this.props.setProducts(this.state.products);
  }

  sendProductsToStore() {}
  render() {
    return (
      <div className="products">
        <div className="products-wrapper">
          <div className="products-title">
            <p>Products</p>
          </div>
          <div className="products-items">
            {this.props.products.map(product => (
              <ProductItem product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listOfProducts: state.commerce.products
});

const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(CommerceActions.setProducts(products))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
