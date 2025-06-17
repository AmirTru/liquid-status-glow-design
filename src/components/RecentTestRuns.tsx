
import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const RecentTestRuns = () => {
  const testRuns = [
    {
      name: '5 Minute Monitor',
      duration: '@5min',
      status: 'Success',
      details: '3s',
      time: 'Just now',
      icon: CheckCircle,
      color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
    },
    {
      name: '12 Hour Monitor',
      duration: '@12h',
      status: 'Failure',
      details: '3s',
      time: 'Just now',
      icon: XCircle,
      color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Recent Test Runs</h2>
        <button className="text-blue-300 hover:text-blue-200 text-sm font-medium transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {testRuns.map((test, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-r ${test.color} backdrop-blur-sm border rounded-2xl p-4 hover:scale-105 transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <test.icon className={`w-4 h-4 ${test.status === 'Success' ? 'text-green-400' : 'text-red-400'}`} />
                <span className="text-blue-200/70 text-xs">{test.duration}</span>
              </div>
              <span className="text-blue-200/60 text-xs">{test.time}</span>
            </div>
            
            <h3 className="text-white font-medium mb-2">{test.name}</h3>
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-blue-200/70">{test.details} • {test.status}</span>
              <div className={`w-2 h-2 rounded-full ${test.status === 'Success' ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTestRuns;
