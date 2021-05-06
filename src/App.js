import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// Page imports
import HomePage from "./pages/HomePage/hompage.component";
import ShopPage from "./pages/ShopPage/shoppage.component";

// Component imports
import Header from "./components/header/header.components";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/sign-in-sign-up.component";
import Footer from "./components/footer/footer.component"


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/collection" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
