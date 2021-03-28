import React from "react";
import "./header.styles.scss";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/signin">Collection</Link>
          <Link to="/">Sign In</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
