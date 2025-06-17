
import React from 'react';
import { Play, Clock, CheckCircle } from 'lucide-react';

const MonitoringSchedules = () => {
  const schedules = [
    {
      name: '5 Minute Monitor',
      interval: '@5min',
      status: 'IDLE',
      tests: 1,
      schedule: '*/5 ****',
      color: 'blue',
      lastRun: 'Active'
    },
    {
      name: '30 Minute Monitor',
      interval: '@30min',
      status: 'NEVER RUN',
      tests: 4,
      schedule: '*/30 ****',
      color: 'purple',
      lastRun: 'Never'
    },
    {
      name: '12 Hour Monitor',
      interval: '@12h',
      status: 'FAILED',
      tests: 11,
      schedule: '0 */12 ***',
      color: 'red',
      lastRun: 'Failed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'IDLE': return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
      case 'NEVER RUN': return 'from-purple-500/20 to-pink-500/20 border-purple-500/30';
      case 'FAILED': return 'from-red-500/20 to-orange-500/20 border-red-500/30';
      default: return 'from-gray-500/20 to-gray-500/20 border-gray-500/30';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'IDLE': return 'bg-blue-500/20 text-blue-300';
      case 'NEVER RUN': return 'bg-purple-500/20 text-purple-300';
      case 'FAILED': return 'bg-red-500/20 text-red-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold text-white">Monitoring Schedules</h2>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm">Active</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {schedules.map((schedule, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-r ${getStatusColor(schedule.status)} backdrop-blur-sm border rounded-2xl p-4 hover:scale-105 transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-medium">{schedule.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeColor(schedule.status)}`}>
                {schedule.status}
              </span>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-blue-200/70 mb-3">
              <span className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{schedule.interval}</span>
              </span>
            </div>
            
            <div className="flex items-center justify-between text-xs text-blue-200/60 mb-4">
              <span>TESTS</span>
              <span>SCHEDULE</span>
            </div>
            
            <div className="flex items-center justify-between text-sm text-white mb-4">
              <span className="font-mono">{schedule.tests}</span>
              <span className="font-mono">{schedule.schedule}</span>
            </div>
            
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-medium py-2 px-4 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Trigger Now</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitoringSchedules;
