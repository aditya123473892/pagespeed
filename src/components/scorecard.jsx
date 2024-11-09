// Filename: ScoreCard.jsx
import React from "react";
import "./ScoreCard.css"; // Ensure you have the corresponding CSS file

const ScoreCard = ({ url, scores }) => {
  return (
    <div className="score-card">
      <div className="score-header">
        <div className="score-circle">
          {/* Aggregate score or display any score metric */}
          <span className="score-value">{scores.aggregate || 0}</span>
        </div>
        <p className="score-url">{url}</p>
      </div>
      <div className="score-details">
        {scores.details.map((scoreDetail, index) => (
          <ScoreDetail
            key={index}
            label={scoreDetail.label}
            score={scoreDetail.score}
            maxScore={scoreDetail.maxScore}
            color={scoreDetail.color}
          />
        ))}
      </div>
      <div className="score-footer">
        <p>Is your website slowing you down?</p>
        <button className="score-button">Get the Free CMS</button>
        <p className="no-credit">No credit card needed</p>
      </div>
    </div>
  );
};

const ScoreDetail = ({ label, score, maxScore, color }) => {
  const barWidth = (score / maxScore) * 100 + "%";
  return (
    <div className="score-detail">
      <div className="score-label">
        {label}{" "}
        <span className="score-text">
          {score}/{maxScore}
        </span>
      </div>
      <div className="score-bar">
        <div
          className="score-fill"
          style={{ width: barWidth, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default ScoreCard;
