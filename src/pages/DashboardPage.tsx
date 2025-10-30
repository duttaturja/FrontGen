import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

const DashboardPage: React.FC = () => {
  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold text-light-text-primary dark:text-dark-text-primary'>
        Dashboard
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Welcome!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-light-text-secondary dark:text-dark-text-secondary'>
            This is your dashboard. More features coming soon!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;