import React from 'react';
import { Home, LayoutDashboard, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className='hidden w-64 flex-shrink-0 border-r border-light-border bg-light-surface p-4 dark:border-dark-border dark:bg-dark-surface md:block'>
      <div className='text-lg font-semibold text-light-text-primary dark:text-dark-text-primary'>
        Navigation
      </div>
      <nav className='mt-4'>
        <ul>
          <li>
            <Link
              to='/'
              className='flex items-center space-x-2 rounded-md p-2 text-light-text-secondary hover:bg-light-background dark:text-dark-text-secondary dark:hover:bg-dark-background'
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to='/dashboard'
              className='flex items-center space-x-2 rounded-md p-2 text-light-text-secondary hover:bg-light-background dark:text-dark-text-secondary dark:hover:bg-dark-background'
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to='/login'
              className='flex items-center space-x-2 rounded-md p-2 text-light-text-secondary hover:bg-light-background dark:text-dark-text-secondary dark:hover:bg-dark-background'
            >
              <LogIn size={20} />
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;