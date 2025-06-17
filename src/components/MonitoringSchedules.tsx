
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
      case 'IDLE': return 'bg-blue-50/20 border-blue-200/30';
      case 'NEVER RUN': return 'bg-purple-50/20 border-purple-200/30';
      case 'FAILED': return 'bg-red-50/20 border-red-200/30';
      default: return 'bg-gray-50/20 border-gray-200/30';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'IDLE': return 'bg-blue-100/80 text-blue-700 border-blue-200/50';
      case 'NEVER RUN': return 'bg-purple-100/80 text-purple-700 border-purple-200/50';
      case 'FAILED': return 'bg-red-100/80 text-red-700 border-red-200/50';
      default: return 'bg-gray-100/80 text-gray-700 border-gray-200/50';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl shadow-gray-900/10 hover:shadow-3xl hover:shadow-gray-900/15 transition-all duration-700 hover:bg-white/15">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <h2 className="text-xl font-semibold text-gray-900 tracking-tight">Monitoring Schedules</h2>
          <div className="flex items-center space-x-2 bg-green-100/80 backdrop-blur-xl px-3 py-1 rounded-full border border-green-200/50">
            <div className="w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
            <span className="text-green-600 text-sm font-medium">Active</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {schedules.map((schedule, index) => (
          <div 
            key={index}
            className={`${getStatusColor(schedule.status)} backdrop-blur-xl border rounded-2xl p-4 hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-xl`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-gray-900 font-medium text-sm">{schedule.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full font-medium backdrop-blur-xl border ${getStatusBadgeColor(schedule.status)}`}>
                {schedule.status}
              </span>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-gray-600 mb-3 font-medium">
              <span className="flex items-center space-x-1 bg-white/20 backdrop-blur-xl px-2 py-1 rounded-full border border-white/30">
                <Clock className="w-3 h-3" />
                <span>{schedule.interval}</span>
              </span>
            </div>
            
            <div className="flex items-center justify-between text-xs text-gray-500 mb-3 font-medium">
              <span>TESTS</span>
              <span>SCHEDULE</span>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-900 mb-4 font-mono bg-white/10 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/20">
              <span>{schedule.tests}</span>
              <span>{schedule.schedule}</span>
            </div>
            
            <button className="w-full bg-gradient-to-r from-blue-500/80 to-blue-600/80 backdrop-blur-xl hover:from-blue-600/90 hover:to-blue-700/90 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center justify-center space-x-2 border border-blue-400/30">
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
