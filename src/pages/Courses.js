import React from "react";

// none - Import module without exported functions or classes.
import "../styles/pages/Courses.css";
import Sidebar from "../components/Sidebar";

// Subpages
import GetStartedPage from "./pages_courses/get_started"; // skipcq: JS-0249

function Courses() {
  return (
    <div className="courses-page">
      <Sidebar />
      <GetStartedPage />
    </div>
  );
}

export default Courses;
