import reduce from 'lodash/reduce';

const getFlatMenuKeys = menuData => (
  reduce(menuData, (keys, item) => {
    keys.push(item.path);
    if (item.children) {
      return keys.concat(getFlatMenuKeys(item.children));
    }
    return keys;
  }, [])
);

export default getFlatMenuKeys;
