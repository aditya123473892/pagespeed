import React from 'react';

// Placeholder image for demonstration purposes
const exampleImage = "https://via.placeholder.com/500x300";

function Content() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center rounded-xl">
      {/* Header Section */}
      <header className="w-full bg-orange-500 text-white py-3 px-6 flex justify-between items-center">
        <p className="text-lg font-semibold">Share your website grade. Got a great grade? Take to social media to share your results with colleagues and friends.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-200" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-200" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-gray-200" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row w-full max-w-6xl bg-gray-700 text-white rounded-lg shadow-lg overflow-hidden mt-8">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img src={exampleImage} alt="Website Builder" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">INCREASE YOUR WEBSITE GRADE</h2>
          <p className="text-gray-300 mb-6">
            Improve your score by creating a brand new website with HubSpot CMS Free. Drive more traffic and convert more leads with secure and speedy pages.
          </p>
          <button className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
            Create a high-speed website
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-gray-300 text-sm py-6 mt-8">
        <a href="#" className="hover:underline">Privacy Policy</a> | 
        <a href="#" className="hover:underline ml-2">Legal Stuff</a>
        <p className="mt-2">Powered by Google Lighthouse</p>
      </footer>
    </div>
  );
}

export default Content;
