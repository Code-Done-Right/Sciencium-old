// Imports
import React from "react";
import Logo from "./Logo.jsx"; // skipcq: JS-0249

// none - Import module without exported functions or classes.
import "../styles/components/Nav.css";

// Navbar
// [2, { "max": 5 }]
export default function Nav() {
  return (
    <div className="navbar-wrapper">
      <a href="/" className="logo-link">
        <Logo />
      </a>
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
              <a
                href="http://scienciumauth.pythonanywhere.com/login"
                className="ff-secondary"
              >
                Log In
              </a>
            </li>
            <li>
              <a
                href="https://scienciumauth.pythonanywhere.com/register"
                className="ff-secondary"
              >
                Sign Up {/* skipcq: JS-0415 */}
              </a>
            </li>
            <li>
              <a href="/about" className="ff-secondary">
                About {/* skipcq: JS-0415 */}
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
