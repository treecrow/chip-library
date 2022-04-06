// 检查 value 是否为一个空对象，集合，映射或者set。 判断的依据是除非是有枚举属性的对象，length 大于 0 的 arguments object, array, string 或类jquery选择器。
const isEmpty = (value) => {
  const type = Object.prototype.toString.call(value);
  switch (type) {
    case "[object String]":
    case "[object Array]":
    case "[object ArrayBuffer]":
    case "[object Arguments]":
      return !value.length;
    case "[object Map]":
    case "[object Set]":
      return !value.size;
    case "[object Object]":
      // isPrototype
      if (value == value?.constructor?.prototype || value == Object.prototype) {
        return !Object.keys(value).length;
      }
      for (const key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
  }
};
