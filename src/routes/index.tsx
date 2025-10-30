import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import DashboardPage from '../pages/DashboardPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />, // For unexpected errors
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: '*', // Catch-all for 404
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;