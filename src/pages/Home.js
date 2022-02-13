// Imports
import React from "react";

// none - Import module without exported functions or classes.
import "../styles/pages/Home.css";
import heroBackground from "../assets/heroBackground.png";

// [2, { "max": 5 }]
export default function Home() {
  return (
    <div className="home-page">
      <div
        className="hero-banner"
        style={{ backgroundImage: `url('${heroBackground}')` }}
      >
        <h1 className="welcome ff-primary">
          Learn from <span>Sciencium</span> and improve your{" "}
          <span>STEM skills</span> now!
        </h1>
        <p className="info ff-secondary">
          Start reading our website material to learn more about science!
        </p>
      </div>
    </div>
  );
}
