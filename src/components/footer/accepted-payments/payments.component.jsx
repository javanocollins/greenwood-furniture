import React from "react";

// Style imports
import "./payments.style.scss";

// React icons
import {
    FaPaypal,
    FaCcMastercard,
    FaCcVisa,
    FaApplePay,
    FaGoogleWallet,
    FaUps,
    FaDhl,
} from "react-icons/fa";

function Payments() {
    return (
        <div className="Payments">
            <div className="Payments-container">
                <div className="col-1">
                    <h2 className="Payments-head">Accepted Payments</h2>
                    <div className="Payments-options">
                        <div>
                            <FaCcVisa className="Payments-option" />
                        </div>
                        <div>
                            <FaCcMastercard className="Payments-option" />
                        </div>
                        <div>
                            <FaPaypal className="Payments-option" />
                        </div>
                        <div>
                            <FaApplePay className="Payments-option" />
                        </div>
                        <div>
                            <FaGoogleWallet className="Payments-option" />
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <h2 className="Payments-head">Trusted Delivery Partners</h2>
                    <div className="Payments-couriers">
                        <div>
                            <FaUps className="Payments-courier" />
                        </div>
                        <div>
                            <FaDhl className="Payments-courier" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payments;
