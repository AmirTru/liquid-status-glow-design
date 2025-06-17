
import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Enhanced gradient background with more depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50" />
      
      {/* More sophisticated light effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-200/20 via-blue-100/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-radial from-purple-200/15 via-purple-100/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-indigo-200/12 via-indigo-100/6 to-transparent rounded-full blur-3xl" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>
    </div>
  );
};

export default Background;
