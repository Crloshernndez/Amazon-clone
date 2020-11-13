import React, { useEffect } from "react";
import "./App.css";
import { auth } from "./firebase";
import { setUser } from "./action";
import Home from "./containers/Home";
import { connect } from "react-redux";
import Login from "./containers/Login";
import Header from "./component/Header";
import Orders from "./containers/Orders";
import Payment from "./containers/Payment";
import Checkout from "./containers/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const promise = loadStripe(
  "pk_test_51HmqerLuoz5shZBVyu6D0rG7WBaSAd5zJu6Sn52LBGlrjYsq3j6YCpavfdrYYgfohOT9twomw8HDi4EQw93SUc6s00WLUHMNg1"
);

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
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/orders">
            <Orders />
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
