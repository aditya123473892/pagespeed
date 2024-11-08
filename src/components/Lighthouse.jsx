import React from 'react';
import '../assets/lighthouce.css' 
import ScoreCard from './scorecard';
import SiteGrade from './SiteGrade';
import './ScoreCard.css';





function Lighthouse() {
    return (
        <div className="container">
            <div className="left-panel">
                 <ScoreCard/> 
                
            </div>
            <div className="right-panel">
                
                    <SiteGrade/>
                
            </div>
        </div>
    );
}

export default Lighthouse;