import React from 'react';
import Button from '../components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/Card';
import Input from '../components/ui/Input';

const LoginPage: React.FC = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-light-background dark:bg-dark-background'>
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <div className='grid gap-2'>
            <label htmlFor='email'>Email</label>
            <Input id='email' type='email' placeholder='m@example.com' required />
          </div>
          <div className='grid gap-2'>
            <label htmlFor='password'>Password</label>
            <Input id='password' type='password' required />
          </div>
        </CardContent>
        <CardFooter>
          <Button className='w-full'>Sign in</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;