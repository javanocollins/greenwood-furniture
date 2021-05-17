import React, { useState, useEffect } from "react";
import "./header.styles.scss";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import DropDownMenu from "../DropDownMenu/drop-down-menu.component";

import {withRouter} from 'react-router-dom'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const showDropDown = () => {
        if (!showMenu) {
            setShowMenu((prevState) => {
                return (prevState = true);
            });
        } else {
            setShowMenu((prevState) => {
                return (prevState = false);
            });
        }
    };

    return (
        <header className="header">
            <nav className="navbar">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                <div className="nav-links">
                    <Link
                        onClick={showDropDown}
                        // onMouseLeave={hideDropDown}
                        className="nav-link"
                        // to="/collection"
                    >
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
            <div className={`${showMenu ? "showMenu" : "notShowMenu"} container`}>
                <DropDownMenu />
            </div>
        </header>
    );
};

export default withRouter(Header);
