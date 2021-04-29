import React from "react";
import "./header.styles.scss";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

// Firebase imports
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to="/collection">
            Collection
          </Link>
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
          {currentUser ? (
            <div className="nav-link" onClick={() => auth.signOut}>
              Sign Out
            </div>
          ) : (
            <Link className="nav-link" to="/sign-in">
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
