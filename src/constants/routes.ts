import { redirect, RouteObject } from 'react-router';

import { App } from '@components';
import { Home } from '@pages';

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: App,
    children: [
      {
        id: 'Home',
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: '*',
    loader: () => redirect('/'),
  },
];
