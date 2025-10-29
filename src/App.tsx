import MainLayout from './layouts/MainLayout';
import Button from './components/ui/Button';

function App() {
  return (
    <MainLayout>
      <div className='space-y-6'>
        <div>
          <h1 className='text-4xl font-bold text-light-text-primary dark:text-dark-text-primary'>
            UI Components
          </h1>
          <p className='mt-2 text-light-text-secondary dark:text-dark-text-secondary'>
            A collection of reusable components for FrontGen.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary'>
            Buttons
          </h2>
          <div className='flex flex-wrap items-center gap-4'>
            <Button>Default</Button>
            <Button variant='destructive'>Destructive</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='link'>Link</Button>
          </div>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary'>
            Button Sizes
          </h2>
          <div className='flex items-center gap-4'>
            <Button size='sm'>Small</Button>
            <Button size='default'>Default</Button>
            <Button size='lg'>Large</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;