import React from "react";

//Components
import Header from "./components/Header";
import Products from "./components/Products";

//Redux
import { Provider } from "react-redux";
import store from "./store";

//Products
import { storeProducts } from "./data";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <Header />
          <Products products={storeProducts} />
        </Provider>
      </div>
    );
  }
}

export default App;
