
import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

const RecentIncidents = () => {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-6 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 tracking-tight">Recent Incidents</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="bg-red-50/80 backdrop-blur-sm border border-red-200/50 rounded-2xl p-4 hover:scale-105 transition-all duration-300 shadow-sm">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-red-600 text-xs bg-red-100 px-2 py-1 rounded-full font-medium">12h</span>
            </div>
            <span className="text-gray-500 text-xs font-medium">Just now</span>
          </div>
          
          <h3 className="text-gray-900 font-medium mb-2 text-sm leading-relaxed">
            should have no stale vulnerability reports older than 36 hours
          </h3>
          
          <p className="text-gray-600 text-xs mb-3 font-medium">Periodic Code Repo Scan Monitoring</p>
          
          <div className="bg-gray-900 rounded-xl p-3 font-mono text-xs">
            <span className="text-red-400">Error:</span>
            <span className="text-gray-300"> Expected 0 stale vulnerability reports, but found 102 reports older than 36 hours. This indicates...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentIncidents;
