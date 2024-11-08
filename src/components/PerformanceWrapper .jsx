import React, { useEffect, useState } from 'react';
import PerformanceCard from './PerformanceCard';

const PerformanceWrapper = () => {
  const [data, setData] = useState({
    pageSize: 0,
    pageRequests: 0,
    pageSpeed: 0,
    performanceScore: 0,
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.CiEuf1HX22kZ-EC5CVi6vgHaEG&pid=Api&P=0&h=180', // Add image URL here
  });

  // Mock fetch function to simulate API call
  const fetchPerformanceData = async () => {
    // Simulate backend response
    const response = {
      pageSize: 2.3,
      pageRequests: 119,
      pageSpeed: 9.4,
      performanceScore: 15,
      imageUrl: 'https://example.com/performance-image.png', // Replace with your actual image URL
    };

    // Mimic async behavior
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setData(response);
  };

  useEffect(() => {
    fetchPerformanceData();
  }, []); 

  return (
    <PerformanceCard
      imageUrl={data.imageUrl}
      pageSize={data.pageSize}
      pageRequests={data.pageRequests}
      pageSpeed={data.pageSpeed}
      performanceScore={data.performanceScore}
    />
  );
};

export default PerformanceWrapper;
