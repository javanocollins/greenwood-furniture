import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mobile-header.scss";

function MobileMenu({ toggleDropDown }) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const toggleMobileMenu = () => {
        setShowMobileMenu((prevState) => {
            return !prevState
        })
    }
    return (
        <nav className="Mobile-navbar">
            <div className="menu-btn" onClick={toggleMobileMenu}>
                <li className="menu-line"></li>
                <li className="menu-line"></li>
                <li className="menu-line"></li>
            </div>
            {showMobileMenu ? <div className="Mobile-nav-links">
                <Link className="Mobile-nav-link" to="/">
                    Home
                </Link>
                <a
                    onClick={toggleDropDown}
                    // onMouseLeave={hideDropDown}
                    className="Mobile-nav-link"
                >
                    Collection
                </a>
                <Link className="Mobile-nav-link" to="/cart">
                    Cart
                </Link>
                <Link className="Mobile-nav-link" to="/signin">
                    Sign In
                </Link>
            </div> : ""}
        </nav>
    );
}

export default MobileMenu;
