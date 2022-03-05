import React, { useEffect } from "react";

// none - Import module without exported functions or classes.
import "../styles/pages/About.css";

export default function About() {
  useEffect(() => {
    document.title = "About | Sciencium";
  });
  return (
    <div className="about-page">
      <h1 className="about-text ff-primary">
        Hi there! We are the developers of Sciencium, trying to make people love
        science more than ever. It&apos;s good to see you use this website, and
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
