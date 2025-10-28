import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen flex-col bg-light-background dark:bg-dark-background'>
      <Navbar />
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 p-4 sm:p-6 md:p-8'>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
