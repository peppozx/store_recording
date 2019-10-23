import React from "react";

//Products
import { storeProducts } from "../data";

//Components
import Header from "./Header";
import Products from "./Products";

export default function Home(props) {
  return (
    <div>
      <Header title="Home" />
      <Products products={storeProducts} />
    </div>
  );
}
