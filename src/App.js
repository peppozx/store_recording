import React from "react";

import Home from "./components/Home";
import Cart from "./components/Cart";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact={true}>
                <Home />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
