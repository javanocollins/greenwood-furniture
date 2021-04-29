import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Page imports
import HomePage from "./pages/HomePage/hompage.component";
import ShopPage from "./pages/ShopPage/shoppage.component";

// Component imports
import Header from "./components/header/header.components";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/sign-in-sign-up.component";

// Firebase imports
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/collection" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
