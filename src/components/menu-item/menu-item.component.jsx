import React from "react";
import "./menu-item.styles.scss";

import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
    const pushUrl = () => {
        history.push(`${match.url}${linkUrl}`);
    }
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="menu-item"
      onClick={pushUrl}
    >
          <div className="content" onClick={pushUrl}>
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOW NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
