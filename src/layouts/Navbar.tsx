import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className='sticky top-0 z-10 border-b border-light-border bg-light-surface px-4 py-3 shadow-sm dark:border-dark-border dark:bg-dark-surface'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-xl font-bold text-light-text-primary dark:text-dark-text-primary'>
          FrontGen
        </div>
        <nav>
          {/* Placeholder for nav links and theme toggle */}
          <div className='h-8 w-24 rounded bg-light-muted dark:bg-dark-muted'></div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
