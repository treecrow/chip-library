// 根据条件过滤对象
const omitBy = (object, omitFuc) => {
  return Object.keys(object).reduce((obj, key) => {
    if (!omitFuc(object[key])) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};