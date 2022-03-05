import React, { useEffect } from "react";

// none - Import module without exported functions or classes.
import "../../styles/pages/pages_courses/get_started.css";

export default function GetStartedPage() {
  useEffect(() => {
    document.title = "Get Started! | Courses";
  });
  return (
    <div className="get-started-page-wrapper ff-secondary">
      <h1 className="introduction-text ff-primary">
        Getting Started with Sciencium
      </h1>
      Hi there! Welcome to the courses page of Sciencium. This page is here to
      get you started.
    </div>
  );
}
