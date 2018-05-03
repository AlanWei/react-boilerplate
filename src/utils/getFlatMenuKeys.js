import reduce from 'lodash/reduce';

const getFlatMenuKeys = menuData => (
  reduce(menuData, (keys, item) => {
    if (item.children) {
      return keys.concat(getFlatMenuKeys(item.children));
    }
    return keys.concat(item.path);
  }, [])
);

export default getFlatMenuKeys;
