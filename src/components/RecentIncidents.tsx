
import React from 'react';
import { Clock, AlertTriangle, ArrowUpRight } from 'lucide-react';

const RecentIncidents = () => {
  return (
    <div className="group bg-white/30 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-gray-900/5 hover:shadow-gray-900/10 transition-all duration-500 hover:bg-white/35 hover:border-white/30">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Recent Incidents</h2>
          <div className="w-2 h-2 bg-red-500 rounded-full shadow-lg shadow-red-500/50 animate-pulse"></div>
        </div>
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-all duration-200 bg-white/30 backdrop-blur-xl px-4 py-2.5 rounded-xl border border-white/30 hover:bg-white/40 hover:border-white/40 hover:scale-105 group">
          <span>View All</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
      
      <div className="space-y-6">
        <div className="relative bg-white/20 backdrop-blur-xl border border-red-200/30 rounded-3xl p-6 hover:scale-[1.01] transition-all duration-500 shadow-xl shadow-red-500/5 hover:shadow-red-500/10 group">
          <div className="absolute inset-0 bg-gradient-to-r from-red-50/20 to-red-100/10 rounded-3xl"></div>
          <div className="relative">
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-50/40 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-red-200/40 shadow-lg shadow-red-500/10">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-red-700 text-xs bg-red-50/60 backdrop-blur-xl px-3 py-2 rounded-xl font-semibold border border-red-200/40 shadow-sm">
                  12h ago
                </span>
              </div>
              <span className="text-gray-600 text-xs font-medium bg-white/40 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/30">
                Just now
              </span>
            </div>
            
            <h3 className="text-gray-900 font-semibold mb-4 text-lg leading-relaxed">
              Should have no stale vulnerability reports older than 36 hours
            </h3>
            
            <p className="text-gray-700 text-sm mb-5 font-medium bg-white/20 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/20">
              Periodic Code Repo Scan Monitoring
            </p>
            
            <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-5 font-mono text-sm border border-gray-700/50 shadow-inner">
              <div className="flex items-start space-x-2">
                <span className="text-red-400 font-semibold">Error:</span>
                <span className="text-gray-300 leading-relaxed">
                  Expected 0 stale vulnerability reports, but found 102 reports older than 36 hours. This indicates...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentIncidents;
