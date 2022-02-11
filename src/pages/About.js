import React from "react";
import "../styles/pages/About.css";

function About() {
  return (
    <div className="about-page">
      <h1 className="about-text ff-primary">
        Hi there! We are the developers of Sciencium, trying to make people love
        science more than ever. It's good to see you use this website, and
        thanks!
      </h1>
      <div className="contributors ff-secondary">
        {/*
                    This section is meant to show the contributor's PFP, info and more.
                    Please add your info here if you're a collaborator <3
                */}
      </div>
    </div>
  );
}

export default About;
