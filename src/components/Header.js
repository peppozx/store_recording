import React, { Component } from "react";
import "../styles/header.css";

export class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="go-home button">Home</div>
        <div className="go-cart button">Cart</div>
      </div>
    );
  }
}

export default Header;
