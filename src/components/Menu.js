import React from 'react';
import MenuItem from './MenuItem';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.css";

const Menu = () => {
    return (
        <div className="container">
            <div className="row">
                <h2>Our Menu</h2>
                <MenuItem imgSrc="./assets/menu1.jpg" title="Margherita Pizza" price="$40.00" salePrice="$24.00" />
                <MenuItem imgSrc="./assets/menu2.jpg" title="Mushroom Pizza" price="$25.00" />
                <MenuItem imgSrc="./assets/menu3.jpg" title="Hawaiian Pizza" price="$30.00" />
                <MenuItem imgSrc="./assets/menu4.jpg" title="Pesto Pizza" price="$50.00" salePrice="$30.00" />
            </div>
        </div>
    );
};

export default Menu;
