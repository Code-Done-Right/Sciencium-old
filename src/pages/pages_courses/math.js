// Imports
import React, { useEffect } from "react";
import "../../styles/pages/pages_courses/math.css";

export default function MathPage() {
  useEffect(() => {
    document.title = "Intro Math | Courses";
  });
  return (
    <div className="intro-math-page-wrapper">
      <div className="welcome-text ff-primary">Introduction to Math</div>
      <div className="" />
    </div>
  );
}
