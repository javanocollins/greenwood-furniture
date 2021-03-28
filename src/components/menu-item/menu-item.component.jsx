import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl }) => {
    return (
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className="menu-item">
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOW NOW</span>
            </div>
        </div>
    );
}

export default MenuItem
