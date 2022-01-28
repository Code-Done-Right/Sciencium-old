import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Navbar () {
    return (
        <header>
            <a class="link-to-home-page" href="#"><img class="logo" src="images/sciencium.png"/></a>
            <nav>
                <ul class="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="./mhm">mhm</Link>
                    </li>
                    {/*
                    <li><a href="login.html">Log In</a></li>
                    <li><a href="about.html">About</a></li>
                    */}
                </ul>
            </nav>
            <a class="cta" href="#"><button class='contact'>Contact Us</button></a>
        </header>
    );
}

export default Navbar;