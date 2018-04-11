import Loadable from 'react-loadable';

const AsyncHome = Loadable({
  loader: () => import('views/home'),
  loading: () => null,
});

const AsyncUser = Loadable({
  loader: () => import('views/user'),
  loading: () => null,
});

const routes = [{
  path: '/',
  exact: true,
  component: AsyncHome,
}, {
  path: '/user',
  component: AsyncUser,
}];

export default routes;
