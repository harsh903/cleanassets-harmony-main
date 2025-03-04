import React from 'react';
import StatsCard from './StatsCard';
import { Building2, Truck, Wrench, Battery, AlertTriangle, Activity } from 'lucide-react';

const PanchayatDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          title="Total Assets"
          value="24"
          description="Active assets"
          icon={Building2}
          trend={{ type: 'up', value: '2 new' }}
        />
        <StatsCard
          title="Vehicles"
          value="8"
          description="In operation"
          icon={Truck}
          trend={{ type: 'down', value: '1 in maintenance' }}
        />
        <StatsCard
          title="Maintenance Due"
          value="3"
          description="Next 7 days"
          icon={Wrench}
          trend={{ type: 'up', value: '2 upcoming' }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          title="Asset Health"
          value="92%"
          description="Overall condition"
          icon={Activity}
          trend={{ type: 'up', value: '5% better' }}
        />
        <StatsCard
          title="Equipment Status"
          value="16/18"
          description="Equipment operational"
          icon={Battery}
          trend={{ type: 'up', value: '89% uptime' }}
        />
        <StatsCard
          title="Critical Issues"
          value="2"
          description="Require attention"
          icon={AlertTriangle}
          trend={{ type: 'down', value: '1 resolved' }}
        />
      </div>
    </div>
  );
};

export default PanchayatDashboard;