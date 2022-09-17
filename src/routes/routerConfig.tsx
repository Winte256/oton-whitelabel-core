import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Root from './root';
import Auth from './auth';
import Signin from './auth/signin';
import Signup from './auth/signup';
import Dashboard from './dashboard';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'auth',
        element: <Auth />,
        children: [
          {
            path: 'signin',
            element: <Signin />,
          },
          {
            path: 'signup',
            element: <Signup />,
          },
        ],
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);
