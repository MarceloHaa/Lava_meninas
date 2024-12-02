import React from 'react';
import './Navbar.css';
import Logo from '../../img/logo_lava.jpg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/" className="logo-button">
                    <img src={Logo} alt="Logo" className="navbar-logo" />
                </a>
            </div>

            <a
                href="https://wa.me/5519974107607"
                className="navbar-contact"
                target="_blank"
                rel="noopener noreferrer"
            >
                Contato
            </a>
        </nav>
    );
};

export default Navbar;
