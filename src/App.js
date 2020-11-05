import "./App.css";
import Header from "./component/Header";
import Home from "./containers/Home";
import Checkout from "./containers/Checkout";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./reducer";
import initialState from "./initialState";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
