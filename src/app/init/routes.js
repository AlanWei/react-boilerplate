import React, { lazy, Suspense } from 'react';

import Loading from '../../views/loading';

const Home = lazy(() => import('../../views/home'));
const User = lazy(() => import('../../views/user'));

const routes = [
  {
    path: '/',
    exact: true,
    component: () => (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/user',
    component: () => (
      <Suspense fallback={<Loading />}>
        <User />
      </Suspense>
    ),
  },
];

export default routes;
