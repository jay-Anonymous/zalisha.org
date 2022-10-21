import React from "react";
import '../styles/Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='container flex_space'>
                <div className="menu-icon">
                    <i className="fa-regular fa-bars"></i>
                </div>
            </div>
            <div className="nav-menu active">
                <li>
                    <Link to='/'>Welcome</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/donate'>Donate</Link>
                    <Link to='merchandise/'>Merchandise</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/team'>Team</Link>
                </li>
            </div>
        </nav>
    );
};

export default Navbar;