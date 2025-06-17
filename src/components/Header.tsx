
import React from 'react';
import { Activity, Wifi } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10 p-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center backdrop-blur-xl shadow-2xl">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Kompass</h1>
              <p className="text-blue-200/80 text-sm">Monitoring Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 shadow-xl">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <Wifi className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Online</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
