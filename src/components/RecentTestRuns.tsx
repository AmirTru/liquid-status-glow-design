
import React from 'react';
import { CheckCircle, XCircle, Clock, ArrowUpRight, Zap } from 'lucide-react';

const RecentTestRuns = () => {
  const testRuns = [
    {
      name: '5 Minute Monitor',
      duration: '@5min',
      status: 'Success',
      details: '3s',
      time: 'Just now',
      icon: CheckCircle,
      color: 'bg-white/20 border-green-200/40',
      iconColor: 'text-green-600'
    },
    {
      name: '12 Hour Monitor',
      duration: '@12h',
      status: 'Failure',
      details: '3s',
      time: 'Just now',
      icon: XCircle,
      color: 'bg-white/20 border-red-200/40',
      iconColor: 'text-red-600'
    },
    {
      name: '30 Minute Monitor',
      duration: '@30min',
      status: 'Success',
      details: '1.2s',
      time: '2 min ago',
      icon: CheckCircle,
      color: 'bg-white/20 border-green-200/40',
      iconColor: 'text-green-600'
    },
    {
      name: 'Daily Health Check',
      duration: '@24h',
      status: 'Success',
      details: '5.8s',
      time: '1 hour ago',
      icon: CheckCircle,
      color: 'bg-white/20 border-green-200/40',
      iconColor: 'text-green-600'
    },
    {
      name: 'Security Scan',
      duration: '@6h',
      status: 'Success',
      details: '12.4s',
      time: '3 hours ago',
      icon: CheckCircle,
      color: 'bg-white/20 border-green-200/40',
      iconColor: 'text-green-600'
    },
    {
      name: 'Performance Test',
      duration: '@1h',
      status: 'Success',
      details: '0.8s',
      time: '45 min ago',
      icon: CheckCircle,
      color: 'bg-white/20 border-green-200/40',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <div className="bg-white/30 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl shadow-gray-900/5 hover:shadow-gray-900/10 transition-all duration-500 hover:bg-white/35">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Recent Test Runs</h2>
          <div className="flex items-center space-x-1 bg-blue-50/60 backdrop-blur-xl px-3 py-1.5 rounded-xl border border-blue-200/50 shadow-sm">
            <Zap className="w-3 h-3 text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold">{testRuns.length} runs</span>
          </div>
        </div>
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-all duration-200 bg-white/30 backdrop-blur-xl px-4 py-2.5 rounded-xl border border-white/30 hover:bg-white/40 hover:border-white/40 hover:scale-105 group">
          <span>View All</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testRuns.map((test, index) => (
          <div 
            key={index}
            className={`${test.color} backdrop-blur-xl border rounded-2xl p-4 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-2xl flex items-center justify-center ${test.status === 'Success' ? 'bg-green-50/40 border border-green-200/40' : 'bg-red-50/40 border border-red-200/40'} backdrop-blur-xl shadow-sm`}>
                    <test.icon className={`w-4 h-4 ${test.iconColor}`} />
                  </div>
                  <span className="text-gray-700 text-xs font-semibold bg-white/40 backdrop-blur-xl px-2.5 py-1.5 rounded-xl border border-white/30 shadow-sm">
                    {test.duration}
                  </span>
                </div>
                <span className="text-gray-600 text-xs font-medium bg-white/30 backdrop-blur-xl px-2.5 py-1 rounded-full border border-white/30">
                  {test.time}
                </span>
              </div>
              
              <h3 className="text-gray-900 font-semibold mb-3 text-sm leading-tight">{test.name}</h3>
              
              <div className="flex items-center justify-between bg-white/30 backdrop-blur-xl px-3 py-2.5 rounded-xl border border-white/20 shadow-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 text-xs font-semibold">{test.details}</span>
                  <span className="text-gray-500 text-xs">•</span>
                  <span className={`text-xs font-semibold ${test.status === 'Success' ? 'text-green-700' : 'text-red-700'}`}>
                    {test.status}
                  </span>
                </div>
                <div className={`w-2 h-2 rounded-full ${test.status === 'Success' ? 'bg-green-500 shadow-green-500/50' : 'bg-red-500 shadow-red-500/50'} shadow-lg`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTestRuns;
