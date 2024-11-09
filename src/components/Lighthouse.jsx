import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import "../assets/lighthouce.css";
import ScoreCard from "./ScoreCard"; // Import with correct case if needed
import SiteGrade from "./SiteGrade"; // Ensure this component is implemented as per your needs

function Lighthouse() {
  const location = useLocation(); // Access the location object from React Router
  const analysisData = location.state?.analysisData; // Access the state passed during navigation

  // Handle the case when no data is available
  if (!analysisData) {
    return <p>No data available. Please run the analysis first.</p>;
  }

  return (
    <div className="container">
      <div className="left-panel">
        <ScoreCard url={analysisData.url} scores={analysisData.scores} />
      </div>
      <div className="right-panel">
        {/* SiteGrade can be used for additional data display or information */}
        <SiteGrade data={analysisData} />
      </div>
    </div>
  );
}

export default Lighthouse;
