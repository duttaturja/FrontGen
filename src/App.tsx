import './App.css';

function App() {
  return (
    <div className='min-h-screen bg-light-background font-sans dark:bg-dark-background'>
      <div className='container mx-auto p-8'>
        <h1 className='text-4xl font-bold text-light-text-primary dark:text-dark-text-primary'>
          Welcome to FrontGen!
        </h1>
        <p className='mt-2 text-light-text-secondary dark:text-dark-text-secondary'>
          Our custom theme is now active.
        </p>
        <button className='mt-4 rounded-lg bg-light-primary px-4 py-2 font-bold text-white hover:bg-light-accent dark:bg-dark-primary dark:hover:bg-dark-accent'>
          Accent Button
        </button>
      </div>
    </div>
  );
}

export default App;
