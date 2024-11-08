import React from 'react';

const MobileFeature = ({ title, description, status }) => (
  <div className="bg-white p-4 rounded-lg shadow-md w-full sm:w-1/4 m-2">
    <div className={`text-3xl ${status === 'fail' ? 'text-red-500' : 'text-green-500'}`}>
      {status === 'fail' ? '✖️' : '✔️'}
    </div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

export default MobileFeature;
