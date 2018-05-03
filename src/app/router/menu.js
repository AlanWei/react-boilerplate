import map from 'lodash/map';
import formatMenuPath from 'utils/formatMenuPath';

const menuData = [{
  name: 'Dashboard',
  icon: 'dashboard',
  path: 'dashboard',
  children: [{
    name: 'Analysis',
    path: 'analysis',
    children: [{
      name: 'Real-time',
      path: 'realtime',
    }, {
      name: 'Offline',
      path: 'offline',
    }],
  },
  {
    name: 'Monitor',
    path: 'monitor',
  },
  {
    name: 'Workplace',
    path: 'workplace',
  }],
}, {
  name: 'Finance',
  icon: 'form',
  path: 'finance',
  children: [{
    name: 'Salary',
    path: 'salary',
  }],
}, {
  name: 'Marketing',
  icon: 'table',
  path: 'marketing',
}];

const formatter = (data, parentPaths = []) => (
  map(data, (item) => {
    if (item.children) {
      return {
        ...item,
        children: formatter(item.children, parentPaths.concat(item.path)),
      };
    }
    return {
      ...item,
      path: formatMenuPath(parentPaths.concat(item.path)),
    };
  })
);

export default formatter(menuData);
