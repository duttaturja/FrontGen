import './App.css';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <h1 className='text-4xl font-bold text-light-text-primary dark:text-dark-text-primary'>
        Welcome to FrontGen!
      </h1>
      <p className='mt-2 text-light-text-secondary dark:text-dark-text-secondary'>
        This is the main content area inside the MainLayout.
      </p>
    </MainLayout>
  );
}

export default App;
