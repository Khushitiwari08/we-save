import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className={isOpen ? 'navbar-links active' : 'navbar-links'}>
            <a href="/" onClick={toggleNavbar}>Home</a>
            <a href="/about" onClick={toggleNavbar}>About Us</a>
            <a href="/services" onClick={toggleNavbar}>Services</a>
            <a href="/contact" onClick={toggleNavbar}>Contact Us</a>
          </div>
        </div>
        <div className="navbar-middle">
        <div className="navbar-logo">
            <a href="/"><img src='/logo.svg'alt='Logo'></img></a>
          </div>
        </div>
        <div className="navbar-right">
          <button className="join-btn">Join Us</button>
          <button className="login-btn" >Login</button>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
