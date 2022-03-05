import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar.jsx";
import "../../styles/pages/pages_courses/science.css";

export default function IntroductorySciencePage() {
  useEffect(() => {
    document.title = "Science | Courses";
  });
  return (
    <div className="science-page-wrapper">
      <Sidebar />
      test text
    </div>
  );
}
