import React from "react";
import banner from "../assets/sciencium_banner.png";
import "../styles/components/Nav.css";
function Nav() {
  return (
    <div className="navbar-wrapper">
      <img className="logo" src={banner} alt='sciencium banner'></img>
      <div className="links">
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/" className="ff-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="ff-secondary">
                Courses
              </a>
            </li>
            <li>
              <a href="/login" className="ff-secondary">
                Log In
              </a>
            </li>
            <li>
              <a href="/about" className="ff-secondary">
                About
              </a>
            </li>
          </ul>
        </nav>
        <a className="contact ff-secondary" href="/contact-us">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Nav;
