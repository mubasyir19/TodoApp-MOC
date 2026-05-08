import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthPage from '../pages/AuthPage';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateGuard from '../providers/PrivateGuard';
import PublicGuard from '../providers/PublicGuard';
import DashboardPage from '../pages/DashboardPage';
import DashboardLayout from '../layouts/DashboardLayout';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <PublicGuard />,
    children: [
      {
        index: true,
        element: <AuthPage />,
      },
    ],
  },
  {
    path: '/',
    element: <PublicGuard />,
    children: [
      {
        index: true,
        element: <AuthPage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateGuard />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
