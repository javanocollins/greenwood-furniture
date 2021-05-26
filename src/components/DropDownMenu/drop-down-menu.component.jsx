import { Link } from "react-router-dom";

// Style Imports
import './drop-down-menu.style.scss'

function DropDownMenu() {
    return (
        <nav className="DropDownMenu">
            <div className="DropDownMenu-links">
                <Link className="DropDownMenu-link" to="/collection">
                    Collection
                </Link>
                <Link className="DropDownMenu-link" to="/sofas">
                    Sofas
                </Link>
                <Link className="DropDownMenu-link" to="/chairs">
                    Chairs
                </Link>
                <Link className="DropDownMenu-link" to="/tables">
                    Tables
                </Link>
                <Link className="DropDownMenu-link" to="/pendants">
                    Pendants
                </Link>
                <Link className="DropDownMenu-link" to="/desks">
                    Desks
                </Link>
                <Link className="DropDownMenu-link" to="/tv-stands">
                    TV Stands
                </Link>
            </div>
        </nav>
    );
}

export default DropDownMenu;
