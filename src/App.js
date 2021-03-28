import "./App.css";
import { Switch, Route } from "react-router-dom";

// Page imports
import HomePage from "./pages/HomePage/hompage.component";

// Component imports
import Header from "./components/header/header.components";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>

    </div>
  );
}

export default App;
