import "./App.css";
import Header from "./component/Header";
import Home from "./containers/Home";
import Checkout from "./containers/Checkout";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
