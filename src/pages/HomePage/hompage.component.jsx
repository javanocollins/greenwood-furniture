import React from "react";
import Directory from "../../components/directory/directory.component";
import MenuItem from "../../components/menu-item/menu-item.component";
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
          <button className="collection-btn">View Collection</button>
        </div>
        <Directory />
      </div>
      <div className="about-section">
        <div className="about-paragraph">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae praesentium officia laudantium eligendi quas voluptatem sapiente, fugiat at esse cum, iure nobis quam mollitia! Aspernatur reiciendis veritatis atque provident tempore iure fuga, corrupti sequi illum amet numquam sed laboriosam consequuntur?</p>

          <br/>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quas recusandae distinctio perspiciatis! Esse magnam, ab aliquam ut sint a, sit eaque impedit illo ex odio placeat voluptatum quaerat ipsam!</p>
        </div>
        <img className="about-sofa" src={require('../../assets/images/sofa-hd.png').default} alt=""/>
      </div>
    </div>
  );
};

export default HomePage;
