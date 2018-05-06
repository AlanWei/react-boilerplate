import map from 'lodash/map';

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

const formatter = (data, parentPath = '/') => (
  map(data, (item) => {
    const result = {
      ...item,
      path: `${parentPath}${item.path}`,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`);
    }
    return result;
  })
);

export default formatter(menuData);
