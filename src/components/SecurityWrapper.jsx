import React from 'react';
import SecurityDetails from './SecurityDetails';

const SecurityWrapper = () => {
  const securityData = {
    https: {
      title: 'HTTPS',
      status: true,
      description: 'HTTPS protects websites from attacks and gives visitors confidence that your site is authentic and trustworthy.',
    },
    jsLibraries: {
      title: 'Secure JavaScript Libraries',
      status: true,
      description: 'Intruders can exploit outdated JavaScript libraries. Using the latest version of each library and updating it regularly will help keep you safe.',
    },
  };

  const allSecured = Object.values(securityData).every(detail => detail.status);

  return (
    <div className="bg-gray-50 p-10 rounded-lg shadow-lg text-center max-w-xl mx-auto">
      <h2 className={`text-3xl font-bold ${allSecured ? 'text-green-500' : 'text-red-500'}`}>
        {allSecured ? '10/10' : 'Security Issues Found'}
      </h2>
       <h1 className="text-4xl font-bold text-gray-800 mb-4">Security</h1>
      <p className="text-gray-600 mt-2 mb-6">
        A secure website equipped with an SSL certificate and free from vulnerabilities is now the standard online.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <SecurityDetails {...securityData.https} />
        <SecurityDetails {...securityData.jsLibraries} />
      </div>
    </div>
  );
};

export default SecurityWrapper;
