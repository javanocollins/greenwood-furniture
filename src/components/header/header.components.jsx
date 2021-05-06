import React from "react";
import "./header.styles.scss";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
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
                    <Link className="nav-link" to="/signin">
                        Sign In
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
