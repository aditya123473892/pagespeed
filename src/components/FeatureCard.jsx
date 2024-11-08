import React from 'react';

const FeatureCard = ({ title, status, description, message }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      {/* Status badge */}
      {status && (
        <div className="text-xs font-semibold text-green-700 bg-green-200 px-2 py-1 rounded-full inline-block mb-4">
          {status}
        </div>
      )}
      
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      
      {/* Icon */}
      <div className="my-4">
        <span className="text-green-500 text-4xl">✔️</span>
      </div>

      {/* Message */}
      <p className="text-gray-700 font-medium">{message}</p>
      
      {/* Description */}
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
