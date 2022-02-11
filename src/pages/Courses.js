import React from "react";
import "../styles/pages/Courses.css";
import Sidebar from "../components/Sidebar";

// Subpages
import GetStartedPage from "./pages_courses/get_started";

function Courses() {
  return (
    <div className="courses-page">
      <Sidebar />
      <GetStartedPage />
    </div>
  );
}

export default Courses;
