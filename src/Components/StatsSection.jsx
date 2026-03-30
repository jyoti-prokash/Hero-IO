import React from 'react';

const StatsSection = () => {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Trusted By Millions, Built For You
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div>
          <p className="text-sm mt-2">Total Downloads</p>
            <h1 className="text-4xl font-bold">29.6M</h1>
            <p>21% more than last month</p>
          </div>
  
          <div>
            <p className="text-sm mt-2">Total Reviews</p>
            <h1 className="text-4xl font-bold">906K</h1>
            <p>46% more than last month</p>
          </div>
  
          <div>
            <p className="text-sm mt-2">Active Apps</p>
            <h1 className="text-4xl font-bold">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    );
};

export default StatsSection;