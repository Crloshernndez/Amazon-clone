import React, { useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./containers/Home";
import Checkout from "./containers/Checkout";
import Login from "./containers/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { setUser } from "./action";

import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        props.setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapDispatchToProps = {
  setUser,
};

export default connect(null, mapDispatchToProps)(App);
