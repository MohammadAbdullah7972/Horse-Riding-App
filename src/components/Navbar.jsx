
// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <header className="bg-transparent z-20">
            <nav className="mx-auto py-4 px-28 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Ride Mate Logo" className="h-10 mr-4" />
                </div>
                <ul className="flex space-x-8 text-white">
                    <li><NavLink  to="/" className="hover:text-blue-500">Home</NavLink></li>
                    <li><NavLink to="/about" className="hover:text-blue-500">About Us</NavLink></li>
                    <li><NavLink to="/booking" className="hover:text-blue-500">Book Horse</NavLink></li>
                    <li><NavLink to="/contact" className="hover:text-blue-500">Contact</NavLink></li>
                </ul>
                <button className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200">Get Started</button>
            </nav>
        </header>
    );
};

export default Navbar;
