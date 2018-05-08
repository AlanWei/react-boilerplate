module.exports = function sassVarsToLess(source) {
  return source.replace(/\$/ig, '@');
};
