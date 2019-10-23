import React from "react";
import "../styles/productitem.css";

export default function ProductItem({ product }) {
  console.log(product);
  return (
    <div className="product-item">
      <img className="product-img" src={product.img}></img>
      <p>{product.title}</p>
      <p>{product.company}</p>
      <p>${product.price}</p>
    </div>
  );
}
