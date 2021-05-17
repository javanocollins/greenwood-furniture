import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// Page imports
import HomePage from "./pages/HomePage/hompage.component";
import ShopPage from "./pages/ShopPage/shoppage.component";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/sign-in-sign-up.component";
import SofasPage from './pages/SofasPage/sofas.page';
import TablesPage from './pages/TablesPage/tables.page';
import ChairsPage from './pages/ChairsPage/chairs.page';
import DesksPage from "./pages/DesksPage/desks.page";
import TvStandsPage from "./pages/TvStandsPage/tv-stands.page";
import PendantsPage from "./pages/PendantsPage/pendants.page";

// Component imports
import Header from "./components/header/header.components";
import Footer from "./components/footer/footer.component"

// Utility Imports
import ScrollToTop from './utility/ScrollToTop'


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/collection" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
          <Route path="/sofas" component={SofasPage} />
          <Route path="/chairs" component={ChairsPage} />
          <Route path="/tables" component={TablesPage} />
          <Route path="/pendants" component={PendantsPage} />
          <Route path="/desks" component={DesksPage} />
          <Route path="/tv-stands" component={TvStandsPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
