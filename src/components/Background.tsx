
import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Clean Apple-like gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
      
      {/* Subtle accent elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
      
      {/* Minimal overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/3 to-transparent transform rotate-12" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-500/3 to-transparent transform -rotate-12" />
      </div>
    </div>
  );
};

export default Background;
