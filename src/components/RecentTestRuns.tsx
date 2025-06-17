
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
      color: 'bg-green-50/80 border-green-200/50'
    },
    {
      name: '12 Hour Monitor',
      duration: '@12h',
      status: 'Failure',
      details: '3s',
      time: 'Just now',
      icon: XCircle,
      color: 'bg-red-50/80 border-red-200/50'
    }
  ];

  return (
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-6 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 tracking-tight">Recent Test Runs</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {testRuns.map((test, index) => (
          <div 
            key={index}
            className={`${test.color} backdrop-blur-sm border rounded-2xl p-4 hover:scale-105 transition-all duration-300 shadow-sm`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <test.icon className={`w-4 h-4 ${test.status === 'Success' ? 'text-green-500' : 'text-red-500'}`} />
                <span className="text-gray-600 text-xs font-medium">{test.duration}</span>
              </div>
              <span className="text-gray-500 text-xs font-medium">{test.time}</span>
            </div>
            
            <h3 className="text-gray-900 font-medium mb-2">{test.name}</h3>
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600 font-medium">{test.details} • {test.status}</span>
              <div className={`w-2 h-2 rounded-full ${test.status === 'Success' ? 'bg-green-500' : 'bg-red-500'}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTestRuns;
