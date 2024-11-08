import React from 'react';

const PerformanceCard = ({ imageUrl, pageSize, pageRequests, pageSpeed, performanceScore }) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-xl mx-auto" id='performance'>
      {/* Image Section */}
      {imageUrl && (
        <img src={imageUrl} alt="Performance illustration" className="w-24 h-24 mb-4" />
      )}

      {/* Main Performance Section */}
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-red-500">
          {performanceScore}<span className="text-gray-500">/30</span>
        </div>
        <h2 className="text-xl font-semibold mb-2">Performance</h2>
        <p className="text-gray-600 text-sm mb-3">
          Optimizing your website's performance is crucial to increasing traffic, improving conversion rates, generating more leads, and increasing revenue.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-blue-600">
          Improve your website performance with a free 15-minute lesson
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {/* Page Size */}
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-gray-700 font-semibold">Page Size</h3>
          <div className="text-2xl font-bold text-green-500 mt-2">{pageSize} MB</div>
          <p className="text-xs text-gray-500">So fast! So light!</p>
          <p className="text-gray-600 text-sm mt-1">
            The heavier the site page, the slower the load. For optimal performance, try to keep page size below 3MB.
          </p>
        </div>

        {/* Page Requests */}
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-gray-700 font-semibold">Page Requests</h3>
          <div className="text-2xl font-bold text-red-500 mt-2">{pageRequests}</div>
          <p className="text-xs text-gray-500">Now that's a lot of requests.</p>
          <p className="text-gray-600 text-sm mt-1">
            The more HTTP requests your website makes, the slower it becomes. Try reducing the number of files your site loads.
          </p>
        </div>

        {/* Page Speed */}
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-gray-700 font-semibold">Page Speed</h3>
          <div className="text-2xl font-bold text-red-500 mt-2">{pageSpeed} SEC</div>
          <p className="text-xs text-gray-500">We need to talk.</p>
          <p className="text-gray-600 text-sm mt-1">
            Best-in-class webpages should become interactive within 5.3 seconds. Any slower and visitors will abandon your site, reducing conversions and sales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
