import MainLayout from './layouts/MainLayout';
import Button from './components/ui/Button';
import Input from './components/ui/Input';

function App() {
  return (
    <MainLayout>
      <div className='space-y-8'>
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
            Inputs
          </h2>
          <div className='max-w-sm space-y-4'>
            <Input type='email' placeholder='Email' />
            <Input type='text' placeholder='Disabled' disabled />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;