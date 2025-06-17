
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
      case 'IDLE': return 'bg-blue-50/80 border-blue-200/50';
      case 'NEVER RUN': return 'bg-purple-50/80 border-purple-200/50';
      case 'FAILED': return 'bg-red-50/80 border-red-200/50';
      default: return 'bg-gray-50/80 border-gray-200/50';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'IDLE': return 'bg-blue-100 text-blue-700';
      case 'NEVER RUN': return 'bg-purple-100 text-purple-700';
      case 'FAILED': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-6 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold text-gray-900 tracking-tight">Monitoring Schedules</h2>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-600 text-sm font-medium">Active</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {schedules.map((schedule, index) => (
          <div 
            key={index}
            className={`${getStatusColor(schedule.status)} backdrop-blur-sm border rounded-2xl p-4 hover:scale-105 transition-all duration-300 shadow-sm`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-gray-900 font-medium">{schedule.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusBadgeColor(schedule.status)}`}>
                {schedule.status}
              </span>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-gray-600 mb-3 font-medium">
              <span className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{schedule.interval}</span>
              </span>
            </div>
            
            <div className="flex items-center justify-between text-xs text-gray-500 mb-4 font-medium">
              <span>TESTS</span>
              <span>SCHEDULE</span>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-900 mb-4 font-mono">
              <span>{schedule.tests}</span>
              <span>{schedule.schedule}</span>
            </div>
            
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center space-x-2">
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
