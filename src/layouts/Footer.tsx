import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='border-t border-light-border bg-light-surface px-4 py-4 dark:border-dark-border dark:bg-dark-surface'>
      <div className='container mx-auto text-center text-sm text-light-muted dark:text-dark-muted'>
        &copy; {currentYear} FrontGen. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
