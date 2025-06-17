
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
      color: 'bg-green-50/20 border-green-200/30'
    },
    {
      name: '12 Hour Monitor',
      duration: '@12h',
      status: 'Failure',
      details: '3s',
      time: 'Just now',
      icon: XCircle,
      color: 'bg-red-50/20 border-red-200/30'
    },
    {
      name: '30 Minute Monitor',
      duration: '@30min',
      status: 'Success',
      details: '1.2s',
      time: '2 min ago',
      icon: CheckCircle,
      color: 'bg-green-50/20 border-green-200/30'
    },
    {
      name: 'Daily Health Check',
      duration: '@24h',
      status: 'Success',
      details: '5.8s',
      time: '1 hour ago',
      icon: CheckCircle,
      color: 'bg-green-50/20 border-green-200/30'
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl shadow-gray-900/10 hover:shadow-3xl hover:shadow-gray-900/15 transition-all duration-700 hover:bg-white/15">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 tracking-tight">Recent Test Runs</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30 hover:bg-white/30">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testRuns.map((test, index) => (
          <div 
            key={index}
            className={`${test.color} backdrop-blur-xl border rounded-2xl p-4 hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-xl`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${test.status === 'Success' ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'} backdrop-blur-xl`}>
                  <test.icon className={`w-3 h-3 ${test.status === 'Success' ? 'text-green-500' : 'text-red-500'}`} />
                </div>
                <span className="text-gray-600 text-xs font-medium bg-white/20 backdrop-blur-xl px-2 py-1 rounded-full border border-white/30">{test.duration}</span>
              </div>
              <span className="text-gray-500 text-xs font-medium bg-white/20 backdrop-blur-xl px-2 py-1 rounded-full border border-white/30">{test.time}</span>
            </div>
            
            <h3 className="text-gray-900 font-medium mb-3 text-sm">{test.name}</h3>
            
            <div className="flex items-center justify-between text-xs bg-white/10 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/20">
              <span className="text-gray-600 font-medium">{test.details} • {test.status}</span>
              <div className={`w-2 h-2 rounded-full ${test.status === 'Success' ? 'bg-green-500' : 'bg-red-500'} shadow-lg ${test.status === 'Success' ? 'shadow-green-500/50' : 'shadow-red-500/50'}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTestRuns;
