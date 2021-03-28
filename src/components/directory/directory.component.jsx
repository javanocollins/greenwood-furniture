import React from "react";
import "./directory.style.scss";

import MenuItem from "../menu-item/menu-item.component";

const Directory = () => {
    const menuItems = [
        {
            id: 1,
            title: "SOFAS",
            imageUrl:
                "https://images.unsplash.com/photo-1567016432779-094069958ea5",
        },
        {
            id: 2,
            title: "TABLES",
            imageUrl:
                "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc",
        },
        {
            id: 3,
            title: "CHAIRS",
            imageUrl:
                "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91",
        },
        {
            id: 4,
            title: "DESKS",
            imageUrl:
                "https://images.unsplash.com/photo-1593642532400-2682810df593",
        },
    ];
    return (
        <div className="directory-menu">
            {menuItems.map((menuItem) => (
                <MenuItem key={menuItem.id} title={menuItem.title} imageUrl={ menuItem.imageUrl }/>
            ))}
        </div>
    );
};

export default Directory;
