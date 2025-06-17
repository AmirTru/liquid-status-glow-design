
import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

const RecentIncidents = () => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Recent Incidents</h2>
        <button className="text-blue-300 hover:text-blue-200 text-sm font-medium transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-4 hover:scale-105 transition-all duration-300">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-xs bg-red-500/20 px-2 py-1 rounded-full">12h</span>
            </div>
            <span className="text-blue-200/60 text-xs">Just now</span>
          </div>
          
          <h3 className="text-white font-medium mb-2 text-sm">
            should have no stale vulnerability reports older than 36 hours
          </h3>
          
          <p className="text-blue-200/70 text-xs mb-3">Periodic Code Repo Scan Monitoring</p>
          
          <div className="bg-black/30 rounded-lg p-3 font-mono text-xs">
            <span className="text-red-300">Error:</span>
            <span className="text-blue-200/80"> Expected 0 stale vulnerability reports, but found 102 reports older than 36 hours. This indicates...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentIncidents;
