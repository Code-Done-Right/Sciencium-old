// Imports
import React from "react";

// skipcq: JS-0249
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";

// none - Import module without exported functions or classes.
import "./styles/App.css";

// Pages and components
// skipcq: JS-0249
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Courses from "./pages/Courses.js";
import About from "./pages/About.js";

import IntroductorySciencePage from "./pages/pages_courses/science";
import MathPage from "./pages/pages_courses/math";

import Nav from "./components/Nav.jsx";

// Primary App
// [2, { "max": 5 }]
export default function App() {
  return (
    <div className="app">
      <Nav />

      {/* Routes */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />

          {/* Courses subpages */}
          <Route
            path="/introductory-science"
            element={<IntroductorySciencePage />}
          />
          <Route path="/intro-math" element={<MathPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      {/* Potential Footer */}
    </div>
  );
}
