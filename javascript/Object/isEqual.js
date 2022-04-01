// 判断两个数据是否严格相等
export const isEqual = (object1, object2) => {
  if (object1 === object2) return true;

  // 如果类型不相等，则返回false
  const object1Type = toString.call(object1);
  const object2Type = toString.call(object2);
  if (object1Type !== object2Type) return false;

  switch (object1Type) {
    case "[object Null]":
      return true;
    case "[object BigInt]":
    case "[object Boolean]":
    case "[object Symbol]":
      return false;
    case "[object Date]":
      return +object1 === +object2;
    case "[object RegExp]":
    case "[object String]":
    case "[object Function]":
    case "[object Number]": // NaN
      return JSON.stringify(object1) === JSON.stringify(object2);
    case "[object Array]":
      if (object1.length !== object2.length) return false;
      return object1.every((item, index) => {
        return isEqual(item, object2[index]);
      });
    case "[object Object]":
      if (Object.keys(object1).length !== Object.keys(object2).length)
        return false;
      return Object.keys(object1).every((key) => {
        return isEqual(object1[key], object2[key]);
      });
  }
};
