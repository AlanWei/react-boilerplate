import loadable from 'react-loadable';
import createAsyncThunk from 'utils/createAsyncThunk';

const AsyncHome = loadable({
  loader: () => import('../../views/home'),
  loading: () => null,
});

const AsyncUser = loadable({
  loader: () => import('../../views/user'),
  loading: () => null,
});

const routes = [{
  path: '/',
  exact: true,
  component: AsyncHome,
  thunk: createAsyncThunk(() => import('../../views/home/thunk')),
}, {
  path: '/user',
  component: AsyncUser,
  thunk: createAsyncThunk(() => import('../../views/user/thunk')),
}];

export default routes;
