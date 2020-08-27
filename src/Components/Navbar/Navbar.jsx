import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand bg-dark">
      <ul className="navbar-nav m-auto">
        <li className="nav-item ">
          <a className="nav-link " href="#webDesign">Web Design</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#development">Web Development</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#graphic">Graphic Design</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#marketing">Digital Marketing</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;