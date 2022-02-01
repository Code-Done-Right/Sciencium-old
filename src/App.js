import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./styles/App.css";

// components and pages
import Home from "./pages/Home.js";
import Nav from "./components/Nav.js";

function App() {
  return (
    <div className="app">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      {/* Potential Footer */}
    </div>
  );
}

export default App;
