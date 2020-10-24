import React from "react";
import "./App.css";
import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/hompage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.compenent";
import { Route, Switch } from "react-router-dom";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components.jsx";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
