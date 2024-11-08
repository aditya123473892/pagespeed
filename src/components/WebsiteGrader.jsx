import React, { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom'
import Lighthouse from "./lighthouse";


// import { useNavigate } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';
const WebsiteGrader = () => {
  const [data,SetData]=useState([]);
  const [showFAQ, setShowFAQ] = useState(false); // State to toggle FAQ section
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [emailError, setEmailError] = useState(""); // State for email error
  const [websiteError, setWebsiteError] = useState(""); // State for website error

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Sorry! This doesn't look like a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleWebsiteChange = (e) => {
    const value = e.target.value;
    setWebsite(value);

    // Validate website URL format
    const websiteRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i;
    if (!websiteRegex.test(value)) {
      setWebsiteError("Sorry! This doesn't look like a valid website address.");
    } else {
      setWebsiteError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for errors before submitting
    if (emailError || websiteError) {
      return; // Prevent form submission if there are errors
    }
    // Add your form submission logic here
  };
 
  useEffect(() => {  
    const fetchData = async () => {  
      try {  
        const response = await fetch('https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://example.com&key=AIzaSyCpaes1s4sriClH_TF7DRKXfG-sDI84-eU');  
        
        // Check if the response is ok (status in the range 200-299)  
        if (!response.ok) {  
          throw new Error(`HTTP error! status: ${response.status}`);  
        }  

        const jsonData = await response.json();  
        console.log(jsonData);  
        SetData(jsonData); 
      } catch (error) {  
        console.error("Error fetching data:", error);  
      }  
    };  
 
    fetchData();  
  }, []);  
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-700">
      {/* Language Switcher and FAQ Button */}
      <div className="absolute top-4 right-4 flex items-end space-x-4">
        <div className="relative">
          <button
            className="flex items-center space-x-2 text-black rounded-3xl" style={{border:"2px solid grey"}}
            onClick={() => setShowLanguageOptions(!showLanguageOptions)}
          >
            English <span className="icon icon-angle-down"></span>
          </button>
          {showLanguageOptions && (
            <ul className="absolute bg-white border rounded-md mt-2 w-40">
              <li className="p-2">
                <a href="https://website.grader.com/de/" className="text-black">Deutsch</a>
              </li>
              <li className="p-2 hover:bg-gray-100">
                <a href="https://website.grader.com/">
                  <span className="icon icon-check"></span> <div className="text-black">English</div>
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
        {/* Toggle FAQ section */}
        <button
          className="text-white rounded-3xl" style={{color:"black",border:"2px solid gray"}}
          onClick={() => setShowFAQ(true)}
        >
          FAQ
        </button>
      </div>

      {/* Conditional Rendering for Website Grader Page or FAQ Page */}
      {!showFAQ ? (
        <div className="relative w-full max-w-2xl p-6 shadow-md rounded-md">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              width="151px"
              alt="HubSpot Tools logo"
              src="https://i.ibb.co/ww9TGKX/f7f777c2e968.png"
            />
          </div>

          {/* Title and Subtitle */}
          <h1 className="text-4xl font-bold text-center mb-2 w-full max-w-md mx-auto " >
            Website Grader <sup>®</sup>
          </h1>
          <h2 className="text-xl text-center text-white mb-6 w-full max-w-md mx-auto">
            Grade your website in seconds. Then learn how to improve it for free.
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="url"
                className="w-full p-2 border-b-2 border-white text-center bg-transparent text-white placeholder-transparent focus:outline-none focus:border-blue-500" 
                value={website}
                onChange={handleWebsiteChange}
                required
                onFocus={(e) => e.target.placeholder = " "}
                onBlur={(e) => e.target.placeholder = "Website"}
              />
              <label
                className={`absolute left-2 text-white transition-all duration-300 transform ${
                  website ? "translate-y-[-20px] text-blue-500" : "translate-y-0"
                }`}
              >
                Website
              </label>
              {websiteError && <p className="text-red-500 mt-1">{websiteError}</p>}
            </div>

            <div className="relative">
              <input
                type="email"
                className="w-full p-2 border-b-2 border-white bg-transparent text-white text-center placeholder-transparent focus:outline-none focus:border-blue-500"
                value={email}
                onChange={handleEmailChange}
                required
                onFocus={(e) => e.target.placeholder = " "}
                onBlur={(e) => e.target.placeholder = "Email"}
                style={{textAlign:"center"}}
              />
              <label
                className={`absolute left-2 text-white transition-all duration-300 transform  ${
                  email ? "translate-y-[-20px] text-blue-500" : "translate-y-0"
                }`}
              >
                Email
              </label>
              {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
              <p className="text-sm text-white mt-2">
                We're committed to your privacy. HubSpot uses the information
                you provide to us to contact you about our relevant content,
                products, and services. You may unsubscribe from these
                communications at any time. For more information, check out our{" "}
                <a
                  href="https://legal.hubspot.com/privacy-policy"
                  className="text-blue-500 underline"
                >
                  Privacy Policy
                </a>.
              </p>
            </div>

            <button
              type="submit"
              className="py-3 px-8 bg-orange-600 text-white rounded-md hover:bg-orange-300 transition"
            >
              
              <NavLink to='/Lighthouse'> Get your score </NavLink>
            
            </button>
          </form>
        </div>
      ) : (
        <div className="relative w-full max-w-2xl p-6 shadow-md rounded-md">
          {/* Back Button */}
          <button
            className="mb-4 text-white bg-transparent border-none"
            onClick={() => setShowFAQ(false)} // Go back to main page
          >
            &larr; Back 
          </button>

          {/* FAQ Section */}
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            <details className="p-4 rounded-md">
              <summary className="cursor-pointer font-semibold">
                What does Website Grader do?
              </summary>
              <p className="mt-2">
                Website Grader analyzes your website to discover what it does
                well and flag areas where improvements can be made to benefit
                more from search traffic.
              </p>
            </details>

            <details className="p-4 rounded-md">
              <summary className="cursor-pointer font-semibold">
                How does Website Grader work?
              </summary>
              <ol className="list-decimal mt-2 pl-6">
                <li>Enter your website URL in the "Website" field.</li>
                <li>Add your email address in the "Email" field.</li>
                <li>Click "Get Your Score".</li>
                <li>Wait a few seconds and review your grade.</li>
              </ol>
            </details>

            <details className="p-4 rounded-md">
              <summary className="cursor-pointer font-semibold">
                Is Website Grader a free SEO Checker?
              </summary>
              <p className="mt-2">
                Yes, Website Grader is free to use.
              </p>
            </details>

            <details className="p-4 rounded-md">
              <summary className="cursor-pointer font-semibold">
                Who is HubSpot?
              </summary>
              <p className="mt-2">
                HubSpot is a leading growth platform that helps businesses
                attract, engage, and delight customers.
              </p>
            </details>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteGrader;
