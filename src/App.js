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
import About from "./pages/About";

import Nav from "./components/Nav.js";

// Primary App
function App() {
  return (
    <div className="app">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      {/* Potential Footer */}
    </div>
  );
}

export default App;
