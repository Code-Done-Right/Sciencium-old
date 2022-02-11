// Imports
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./styles/App.css";

// Pages and components
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Courses from "./pages/Courses.js";
import About from "./pages/About.js";

import Nav from "./components/Nav.jsx";

// Primary App
function App() {
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      {/* Potential Footer */}
    </div>
  );
}

export default App;
