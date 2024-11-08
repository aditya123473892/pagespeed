import React from 'react';

const SecurityDetails = ({ title, status, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <div className={`text-4xl ${status ? 'text-green-500' : 'text-red-500'}`}>
        {status ? '✅' : '❌'}
      </div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{status ? 'Secured.' : 'Not Secured.'}</p>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default SecurityDetails;
