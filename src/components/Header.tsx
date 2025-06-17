
import React from 'react';
import { Activity, Wifi } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10 p-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Kompass</h1>
              <p className="text-gray-500 text-sm font-medium">Monitoring Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full px-4 py-2 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <Wifi className="w-4 h-4 text-green-500" />
            <span className="text-green-600 text-sm font-medium">Online</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
