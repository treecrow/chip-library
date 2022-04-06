// 深拷贝
export const cloneDeep = (value) => {
  const type = typeof value;
  if (!["object", "function"].includes(type) || value === null) return value;

  const _type = Object.prototype.toString.call(value);
  let result;
  switch (_type) {
    case "[object Array]":
      result = []
      break;
    case "[object Function]":
      result = eval(`(${value.toString()})`)
      break;
    case "[object RegExp]":
      result = new RegExp(value);
      break;
    case "[object Date]":
      result = new Date(value);
      break;
    case "[object Object]":
      result = new Object();
      break;
  }
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      result[key] = cloneDeep(value[key])
    }
  }
  return result;
};
