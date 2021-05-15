import React from "react";
import { Link } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import Payments from "../../components/footer/accepted-payments/payments.component";

import "./homepage.styles.scss";

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="showcase">
                <div className="greetings-div">
                    <h1 className="greetings">Welcome To</h1>
                    <h2 className="title">
                        Greenwood
                        <br /> Furniture
                    </h2>
                    <Link to="/collection">
                        <button className="collection-btn">
                            View Collection
                        </button>
                    </Link>
                </div>
                <Directory />
            </div>
            <section className="about-section">
                <div className="about-paragraph">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Repudiandpae praesentium officia laudantium
                        eligendi quas voluptatem sapiente, fugiat at esse cum,
                        iure nobis quam mollitia! Aspernatur reiciendis
                        veritatis atque provident tempore iure fuga, corrupti
                        sequi illum amet numquam sed laboriosam consequuntur?
                    </p>

                    <br />

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eligendi quas recusandae distinctio perspiciatis!
                        Esse magnam, ab aliquam ut sint a, sit eaque impedit
                        illo ex odio placeat voluptatum quaerat ipsam!
                    </p>

                    <br />

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eligendi quas recusandae distinctio perspiciatis!
                        Esse magnam, ab aliquam ut sint a, sit eaque impedit
                        illo ex odio placeat voluptatum quaerat ipsam!
                    </p>
                </div>
                <img
                    className="about-sofa"
                    src={require("../../assets/images/sofa-hd.png").default}
                    alt=""
                />
            </section>
            <section className="identify-section container">
                <div className="identify-info">
                    <h2>Identifying Quality Furniture</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptatum beatae dicta blanditiis asperiores
                        assumenda sapiente sunt! Optio voluptatum rerum
                        perferendis fugiat sequi. Laboriosam, repudiandae
                    </p>
                    <br />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptatum beatae dicta blanditiis asperiores
                        assumenda sapiente sunt! Optio voluptatum rerum
                        perferendis fugiat sequi. Laboriosam, repudiandae
                        accusamus.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptatum beatae dicta blanditiis asperiores
                        assumenda sapiente sunt! Optio voluptatum rerum
                        perferendis fugiat sequi. Laboriosam, repudiandae
                        accusamus.
                    </p>
                </div>
                <iframe
                    width="660"
                    height="415"
                    src="https://www.youtube.com/embed/VEiJ4Bsnaeo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </section>
            <Payments />
        </div>
    );
};

export default HomePage;
