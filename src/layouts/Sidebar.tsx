import React from 'react';
import { Home, LayoutDashboard, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className='hidden w-64 flex-shrink-0 border-r border-light-border bg-light-surface p-4 dark:border-dark-border dark:bg-dark-surface md:block'>
      <div className='text-lg font-semibold text-light-text-primary dark:text-dark-text-primary'>
        Navigation
      </div>
      <ul className='mt-4 space-y-2'>
        {/* Placeholder for sidebar links */}
        <li className='flex items-center space-x-2 rounded-md p-2 text-light-text-secondary hover:bg-light-background dark:text-dark-text-secondary dark:hover:bg-dark-background'>
          <Home size={20} />
          <span>Home</span>
        </li>
        <li className='flex items-center space-x-2 rounded-md p-2 text-light-text-secondary hover:bg-light-background dark:text-dark-text-secondary dark:hover:bg-dark-background'>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </li>
        <li className='flex items-center space-x-2 rounded-md p-2 text-light-text-secondary hover:bg-light-background dark:text-dark-text-secondary dark:hover:bg-dark-background'>
          <Settings size={20} />
          <span>Settings</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;