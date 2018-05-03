import pathToRegexp from 'path-to-regexp';
import filter from 'lodash/filter';

const getMeunMatchKeys = (flatMenuKeys, path) => (
  filter(flatMenuKeys, item => pathToRegexp(item).test(path))
);

export default getMeunMatchKeys;
