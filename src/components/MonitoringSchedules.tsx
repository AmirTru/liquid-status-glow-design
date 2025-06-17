
import React from 'react';
import { Play, Clock, CheckCircle, ArrowUpRight } from 'lucide-react';

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
      case 'IDLE': return 'bg-white/20 border-blue-200/40';
      case 'NEVER RUN': return 'bg-white/20 border-purple-200/40';
      case 'FAILED': return 'bg-white/20 border-red-200/40';
      default: return 'bg-white/20 border-gray-200/40';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'IDLE': return 'bg-blue-50/60 text-blue-700 border-blue-200/50';
      case 'NEVER RUN': return 'bg-purple-50/60 text-purple-700 border-purple-200/50';
      case 'FAILED': return 'bg-red-50/60 text-red-700 border-red-200/50';
      default: return 'bg-gray-50/60 text-gray-700 border-gray-200/50';
    }
  };

  return (
    <div className="bg-white/30 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl shadow-gray-900/5 hover:shadow-gray-900/10 transition-all duration-500 hover:bg-white/35">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Monitoring Schedules</h2>
          <div className="flex items-center space-x-2 bg-green-50/60 backdrop-blur-xl px-3 py-1.5 rounded-xl border border-green-200/50 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse"></div>
            <span className="text-green-700 text-sm font-semibold">Active</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {schedules.map((schedule, index) => (
          <div 
            key={index}
            className={`${getStatusColor(schedule.status)} backdrop-blur-xl border rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-900 font-semibold text-base">{schedule.name}</h3>
                <span className={`text-xs px-3 py-1.5 rounded-xl font-semibold backdrop-blur-xl border ${getStatusBadgeColor(schedule.status)} shadow-sm`}>
                  {schedule.status}
                </span>
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-gray-600 mb-4 font-semibold">
                <span className="flex items-center space-x-2 bg-white/30 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/30 shadow-sm">
                  <Clock className="w-3 h-3" />
                  <span>{schedule.interval}</span>
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/20 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/20">
                  <div className="text-xs text-gray-600 font-medium mb-1">TESTS</div>
                  <div className="text-sm text-gray-900 font-mono font-bold">{schedule.tests}</div>
                </div>
                <div className="bg-white/20 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/20">
                  <div className="text-xs text-gray-600 font-medium mb-1">SCHEDULE</div>
                  <div className="text-sm text-gray-900 font-mono font-bold">{schedule.schedule}</div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-500/80 to-blue-600/80 backdrop-blur-xl hover:from-blue-600/90 hover:to-blue-700/90 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center justify-center space-x-2 border border-blue-400/30 hover:scale-105 group">
                <Play className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Trigger Now</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitoringSchedules;
