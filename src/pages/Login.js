// Imports
import React, { useEffect } from "react";

// none - Import module without exported functions or classes.
import "../styles/pages/Login.css";

// Login page
export default function Login() {
  useEffect(() => {
    document.title = `Login | Sciencium`;
  });
  return (
    <div className="login-page">
      <div className="hero-wrapper">
        <h1 className="ff-primary">Login</h1>
        <p className="description ff-secondary">mhmadidas</p>
      </div>
    </div>
  );
}
