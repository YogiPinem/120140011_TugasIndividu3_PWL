import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav>
        <div className="navheader">
            <div className="navheadercap">
                <h1>
                    <span>Tugas 3 - Pemrograman Web Lanjut</span>
                </h1>
            </div>
        </div>
        <ul className="menu">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/tentang">About</NavLink>
            </li>
            <li>
                <NavLink to="/kontak">Contact</NavLink>
            </li>
            
                       
        </ul>
        </nav>
    );
};

export default Header;