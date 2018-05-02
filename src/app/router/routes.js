import Loadable from 'react-loadable';

const AsyncHome = Loadable({
  loader: () => import('views/home'),
  loading: () => null,
});

const routes = [{
  path: '/',
  exact: true,
  component: AsyncHome,
}];

export default routes;
