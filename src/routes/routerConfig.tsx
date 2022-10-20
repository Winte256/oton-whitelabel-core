import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Root from './root';
import Auth from './auth';
import Signin from './auth/signin';
import Signup from './auth/signup';
import Recovery from './auth/recovery';
import Dashboard from './dashboard';
import Team from './team';
import Pools from './pools';
import Transactions from './transactions';
import FatalError from './500';
import NoMatch from './404';
import Profile from './profile';
import News from './news';
import Media from './media';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <FatalError />,

    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'team',
        element: <Team />
      },
      {
        path: 'pools',
        element: <Pools />
      },
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'media',
        element: <Media />
      },
    ],
  },
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
      {
        path: 'recovery',
        element: <Recovery />,
      },
    ],
  },
  {
    path: '*',
    element: <NoMatch />,
  },
]);
