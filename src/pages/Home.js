// Imports
import React, { useState, useEffect } from "react";
import "../styles/pages/Home.css";
import heroImg1 from "../assets/HeroImg1.jpg";
import heroImg2 from "../assets/HeroImg2.jpg";
import img1 from "../assets/bg.png";

console.log(img1);

// Import components from component folder, add to HomePage function
function Home() {
  const heroRightImages = [heroImg1, heroImg2];
  const [heroImageIndex, setHeroImageIndex] = useState(1);

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
      <div
        className="hero-wrapper"
        style={{ backgroundImage: `url('${img1}')` }}
      >
        <div className="hero-left">
          {/* <h1 className="welcome ff-primary">
            Welcome to Sciencium, the best learning webpage!
          </h1>
          <p className="info ff-secondary">
            Start reading our website material to learn more about science!
          </p> */}
          <h1 className="welcome ff-primary">
            Learn from <span>Sciencium</span> and improve your{" "}
            <span>STEM skills</span> now!
          </h1>
          <p className="info ff-secondary">
            Start reading our website material to learn more about science!
          </p>
        </div>
        {/* <div className="hero-right">
          {heroRightImages.map((img, i) => (
            <img
              src={img}
              className={
                heroImageIndex === i ? "hero-image current" : "hero-image"
              }
              key={i}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Home;
