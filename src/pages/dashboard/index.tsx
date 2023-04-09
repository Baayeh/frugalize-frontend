import RouteGuard from '@/components/RouteGuard';
import Dashboard from '@/components/dashboard/Dashboard';
import React from 'react';

const DashboardIndex = () => {
  return (
    <RouteGuard>
      <Dashboard />
    </RouteGuard>
  );
};

export default DashboardIndex;
