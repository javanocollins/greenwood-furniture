import React from "react";
import Payments from "./accepted-payments/payments.component";

// Style imports
import "./footer.style.scss";

// React icons
import {
    FaFacebookSquare,
    FaLinkedin,
    FaInstagram,
    FaYoutubeSquare,
    FaEnvelopeSquare,
} from "react-icons/fa";

function Footer() {
    return (
        <div className="Footer">
            <Payments />
            <div className="Footer-container container">
            <div className=" row row-1">
                <h2 className="Footer-name">Greenwood Furniture</h2>
                <div className="Footer-icons">
                    <FaFacebookSquare className="Footer-icon" />
                    <FaInstagram className="Footer-icon" />
                    <FaLinkedin className="Footer-icon" />
                    <FaYoutubeSquare className="Footer-icon" />
                </div>
            </div>
            <div className="row row-2">
                <p className="Footer-category">Support</p>
                <div>
                    <ul>
                        <li>Contact</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
            <div className="row row-3">
                <p className="Footer-category">Site links</p>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Collection</li>
                        <li>Cart</li>
                        <li>Sign In</li>
                    </ul>
                </div>
            </div>
            <div className="row row-4">
                <p className="Footer-category">
                    <FaEnvelopeSquare className="Footer-icon" /> Stay up to date
                    with us
                </p>
                <p className="row-4-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, ut? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Itaque, ut? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Itaque, ut?
                </p>
                <div>
                    <input type="text" placeholder="Email" />
                    <button>Subscribe</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;
