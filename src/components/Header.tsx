
import React from 'react';
import { Activity, Wifi } from 'lucide-react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="relative z-10 p-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-14 h-14 bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/10 group-hover:shadow-blue-500/20 transition-all duration-300">
                <Activity className="w-7 h-7 text-blue-600" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-30"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                Kompass
              </h1>
              <p className="text-gray-600 text-sm font-medium tracking-wide">Monitoring Dashboard</p>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-lg">
            <SearchBar />
          </div>
          
          <div className="flex items-center space-x-2 bg-white/40 backdrop-blur-xl border border-white/30 rounded-2xl px-5 py-3 shadow-xl shadow-green-500/5 hover:shadow-green-500/10 transition-all duration-300">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse"></div>
            <Wifi className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-semibold">Online</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
