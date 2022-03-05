import React, { useEffect } from "react";

// none - Import module without exported functions or classes.
import "../styles/pages/Courses.css";
import Sidebar from "../components/Sidebar";

// Subpages
import GetStartedPage from "./pages_courses/get_started"; // skipcq: JS-0249

export default function Courses() {
  useEffect(() => {
    document.title = "Courses | Sciencium";
  });
  return (
    <div className="courses-page">
      <Sidebar />
      <GetStartedPage />
    </div>
  );
}
