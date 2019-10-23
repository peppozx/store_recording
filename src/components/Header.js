import React, { Component } from "react";
import "../styles/header.css";

import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="go-home button">
          <Link to="/">Home</Link>
        </div>
        <div className="title">
          <span>{this.props.title}</span>
        </div>
        <div className="go-cart button">
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    );
  }
}

export default Header;
