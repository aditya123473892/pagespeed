import React from 'react';
import './ScoreCard.css';

const ScoreCard = () => {
  return (
    <div className="score-card">
      <div className="score-header">
        <div className="score-circle">
          <span className="score-value">55</span>
        </div>
        <p className="score-url">www.sarkariresult.com</p>
      </div>
      <div className="score-details">
        <ScoreDetail label="Performance" score={15} maxScore={30} color="red" />
        <ScoreDetail label="SEO" score={30} maxScore={30} color="green" />
        <ScoreDetail label="Mobile" score={0} maxScore={30} color="gray" />
        <ScoreDetail label="Security" score={10} maxScore={10} color="green" />
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
  const barWidth = (score / maxScore) * 100 + '%';
  return (
    <div className="score-detail">
      <div className="score-label">
        {label} <span className="score-text">{score}/{maxScore}</span>
      </div>
      <div className="score-bar">
        <div className="score-fill" style={{ width: barWidth, backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default ScoreCard;
