
import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-pulse" 
           style={{ animationDuration: '8s' }} />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: '0s', animationDuration: '6s' }} />
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: '2s', animationDuration: '8s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: '4s', animationDuration: '7s' }} />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform rotate-12" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-500/10 to-transparent transform -rotate-12" />
      </div>
    </div>
  );
};

export default Background;
