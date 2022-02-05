// Imports
import React, { useState, useEffect } from "react";
import "../styles/pages/Home.css";
import heroImg1 from "../assets/HeroImg1.jpg";
import heroImg2 from "../assets/HeroImg2.jpg";

// Import components from component folder, add to Home function
function Home() {
  const heroRightImages = [heroImg1, heroImg2];
  const [heroImageIndex, setHeroImageIndex] = useState(1);

  // Dynamic background
  useEffect(() => {
    setInterval(() => {
      console.log(heroImageIndex);
      setHeroImageIndex(
        (heroImageIndex) => (heroImageIndex + 1) % heroRightImages.length
      );
    }, 10000);
  }, []);

  return (
    <div className="home-page">
      <div className="hero-wrapper">
        <div className="hero-left">
          <h1 className="welcome ff-primary">
            Welcome to Sciencium, the best learning webpage!
          </h1>
          <p className="info ff-secondary">
            Start reading our website material to learn more about science!
          </p>
        </div>
        <div className="hero-right">
          {heroRightImages.map((img, i) => (
            <img
              src={img}
              className={
                heroImageIndex === i ? "hero-image current" : "hero-image"
              }
              alt='changing bg'
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
