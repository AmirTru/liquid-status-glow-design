
import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

const RecentIncidents = () => {
  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-gray-900/10 hover:shadow-3xl hover:shadow-gray-900/15 transition-all duration-700 hover:bg-white/15">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Recent Incidents</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30 hover:bg-white/30">
          View All
        </button>
      </div>
      
      <div className="space-y-6">
        <div className="bg-red-50/30 backdrop-blur-xl border border-red-200/40 rounded-3xl p-6 hover:scale-[1.02] transition-all duration-500 shadow-xl shadow-red-500/10 hover:shadow-red-500/20">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-500/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-red-500/30">
                <AlertTriangle className="w-4 h-4 text-red-500" />
              </div>
              <span className="text-red-600 text-xs bg-red-100/80 backdrop-blur-xl px-3 py-1.5 rounded-full font-medium border border-red-200/50">12h</span>
            </div>
            <span className="text-gray-500 text-xs font-medium bg-white/20 backdrop-blur-xl px-3 py-1 rounded-full border border-white/30">Just now</span>
          </div>
          
          <h3 className="text-gray-900 font-medium mb-3 text-base leading-relaxed">
            should have no stale vulnerability reports older than 36 hours
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 font-medium">Periodic Code Repo Scan Monitoring</p>
          
          <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-4 font-mono text-sm border border-gray-700/50 shadow-inner">
            <span className="text-red-400">Error:</span>
            <span className="text-gray-300"> Expected 0 stale vulnerability reports, but found 102 reports older than 36 hours. This indicates...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentIncidents;
