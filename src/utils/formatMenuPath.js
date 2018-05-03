import reduce from 'lodash/reduce';

const formatMenuPath = paths => (
  reduce(paths, (path, item) => (
    `${path}/${item}`
  ), '')
);

export default formatMenuPath;
