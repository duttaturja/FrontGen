import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className='hidden w-64 flex-shrink-0 border-r border-light-border bg-light-surface p-4 dark:border-dark-border dark:bg-dark-surface md:block'>
      <div className='text-lg font-semibold text-light-text-primary dark:text-dark-text-primary'>
        Navigation
      </div>
      <ul className='mt-4 space-y-2'>
        {/* Placeholder for sidebar links */}
        <li className='h-8 w-full rounded bg-light-muted/50 dark:bg-dark-muted/50'></li>
        <li className='h-8 w-full rounded bg-light-muted/50 dark:bg-dark-muted/50'></li>
        <li className='h-8 w-full rounded bg-light-muted/50 dark:bg-dark-muted/50'></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
