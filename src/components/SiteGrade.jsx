import React from 'react';
import './ScoreCard.css';
import { useState } from 'react';
import PerformanceCard from './PerformanceCard';
import FeatureList from './FeatureList';
import SEOWrapper from './SEOWrapper';
import MobileWrapper from './MobileWrapper';
import SecurityWrapper from './SecurityWrapper';
import Content from './lastcontent';

const SiteGrade = () => {

// Mobile wrapper
const mobileData = {
    score: 0,
    features: [
      {
        title: 'Legible Font Size',
        description: 'Visitors may have difficulty reading small text, especially on mobile devices. We recommend at least 12px.',
        status: 'fail',
      },
      {
        title: 'Tap Targets',
        description: 'Mobile-friendly pages perform better in search results. Make sure interactive elements like buttons and links are not too small or too close together.',
        status: 'fail',
      },
      {
        title: 'Responsive',
        description: 'Responsive design gives you a bump in search rankings for searches on mobile devices.',
        status: 'fail',
      },
    ],
  };

// language options
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  return (
    <>
    <div className="site-grade">
      <header className="header">
        <div className="header-logo">
          <span><img src="https://i.ibb.co/ww9TGKX/f7f777c2e968.png" alt=""  style={{height:"13vh",width:"13vh"}}/></span>
          <span className="header-tools">TOOLS</span>
        </div>
        {/* <span className="header-title">WEBSITE GRADER</span> */}
        {/* <button className="language-btn">English</button> */}
        <div className="relative inline-block">
  <button
    className="flex items-center space-x-2   rounded-3xl"
    style={{ border: "2px solid grey", padding: "8px 12px", position: "relative", backgroundColor:"#192027", color:"white", fontWeight:"600", }}
    onClick={() => setShowLanguageOptions(!showLanguageOptions)}
  >
    English <span className="icon icon-angle-down"></span>
  </button>
  {showLanguageOptions && (
    <ul
      className="absolute bg-white border rounded-md mt-2 w-40 shadow-lg"
      style={{
        left: "0", // Ensure the dropdown aligns to the left of the button
        zIndex: 10, // Bring the dropdown to the front
      }}
    >
      <li className="p-2 hover:bg-gray-100">
        <a href="https://website.grader.com/de/" className="text-black">Deutsch</a>
      </li>
      <li className="p-2 hover:bg-gray-100">
        <a href="https://website.grader.com/" className="text-black flex items-center">
          <span className="icon icon-check mr-2"></span> English
        </a>
      </li>
      <li className="p-2 hover:bg-gray-100">
        <a href="https://website.grader.com/es/" className="text-black">Español</a>
      </li>
      <li className="p-2 hover:bg-gray-100">
        <a href="https://website.grader.com/fr/" className="text-black">Français</a>
      </li>
      <li className="p-2 hover:bg-gray-100">
        <a href="https://website.grader.com/ja/" className="text-black">日本語</a>
      </li>
      <li className="p-2 hover:bg-gray-100">
        <a href="https://website.grader.com/pt/" className="text-black">Português</a>
      </li>
    </ul>
  )}
</div>

      </header>

      <main className="main-content">
        <h1 className="status-title">This site is OK</h1>
        <p className="status-description">
          Not too shabby. Let’s see how we can bump up that score a bit. See your scorecard below
          and take action now by creating a high-speed website with HubSpot CMS Free.
        </p>
        <div><button className="cta-button">Create a high-speed website</button></div>
        {/* <button className="cta-button">Create a high-speed website</button> */}

        <div className="website-preview">
          <div className="browser-header">
            <div className="browser-dot red"></div>
            <div className="browser-dot yellow"></div>
            <div className="browser-dot green"></div>
          </div>
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.vilK3CSw7dyAH24xP8ry4wHaE8&pid=Api&P=0&h=180" // Use your actual image or a placeholder
            alt="Sarkari Result Website Preview"
            className="website-image"
          />
        </div>
      </main>
    </div>
    
    <div style={{}}><PerformanceCard/></div>
    <FeatureList/>
    <SEOWrapper/>
    <div className="min-h-screen bg-gray-200 flex items-center justify-center mt-5 rounded-xl">
      <MobileWrapper score={mobileData.score} features={mobileData.features} />
    </div>
     <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-4 rounded-xl">
      <SecurityWrapper />
    </div>
   <div style={{marginTop:"2vw"}}> <Content/></div>
    
    </>
  );
};

export default SiteGrade;
