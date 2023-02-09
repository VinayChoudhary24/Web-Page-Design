import React from "react";
import './Header.css';

function Header() {
    return (
        // Using BEM Naming Convention
        <header className="header">
            <img 
            className="header__logo"
            src="https://wobot.ai/_next/image?url=%2Flogo.png&w=128&q=75" 
            alt="Wobot Logo" />
        </header>
    )
};

export default Header;