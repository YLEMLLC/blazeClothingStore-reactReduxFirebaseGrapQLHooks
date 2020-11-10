import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import ShopPage from "./pages/shop/shoppage.component";

function App() {
  return (
    <h1>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signIn" component={SignInAndSignUpPage} />
      </Switch>
    </h1>
  );
}

export default App;
