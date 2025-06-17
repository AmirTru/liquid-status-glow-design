
import React from 'react';
import Header from '../components/Header';
import RecentIncidents from '../components/RecentIncidents';
import MonitoringSchedules from '../components/MonitoringSchedules';
import RecentTestRuns from '../components/RecentTestRuns';
import Background from '../components/Background';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />
      <div className="relative z-10">
        <Header />
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 gap-8">
            {/* Recent Incidents - Full width at top */}
            <div className="w-full">
              <RecentIncidents />
            </div>
            
            {/* Bottom row - 1/3 and 2/3 split */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <MonitoringSchedules />
              </div>
              <div className="lg:col-span-2">
                <RecentTestRuns />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
