import React, { useEffect, useState } from 'react';
import SEOFeature from './SEOFeature';

const SEOWrapper = () => {
  const [features, setFeatures] = useState([]);
  const [score, setScore] = useState(30); // Initialize SEO score here (for example, 30/30)

  // Mock data fetching function for SEO cards
  const fetchFeatureData = async () => {
    const data = [
      {
        title: 'Permission to Index',
        status: 'PASS',
        message: 'Granted.',
        description: 'In order for a page to appear in search results, search engines must have permission to store it in their index. If they can’t store it, no other changes matter.'
      },
      {
        title: 'Meta Description',
        status: 'PASS',
        message: 'Look at you go!',
        description: 'Meta descriptions tell people what your page is about in search results.'
      },
      {
        title: 'Content Plugins',
        status: 'PASS',
        message: '*Clap, clap, clap* Good job!',
        description: 'Search engines can’t always understand content that relies on browser plugins, such as Flash.'
      },
      {
        title: 'Descriptive Link Text',
        status: 'PASS',
        message: 'Your links make sense.',
        description: 'Descriptive link text helps visitors know what they’ll see if they click the link. “Click here” doesn’t cut it.'
      }
    ];

    // Simulate API response delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    setFeatures(data);
  };

  useEffect(() => {
    fetchFeatureData();
  }, []);

  return (
    <div className="p-4 bg-gray-200 rounded-xl">
      {/* SEO Score Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-green-500">{score}/30</h2>
        <h3 className="text-2xl font-semibold text-black  mt-2">SEO</h3>
        <p className="text-gray-600 mt-2">
          Optimizing your website content for search helps you drive organic traffic to your website. You can do this by providing a great experience for people and web crawlers alike.
        </p>
      </div>

      {/* SEO Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <SEOFeature
            key={index}
            title={feature.title}
            status={feature.status}
            message={feature.message}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SEOWrapper;
