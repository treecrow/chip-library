// 对象真值判断
export const bool = () => {
  if (typeof obj !== "object") return !!obj;
  if (obj === null) return false;
  return Object.keys(obj).length !== 0;
};

// 对象拷贝
export const obj_copy = (obj) => {
  const result = Array.isArray(obj) ? [] : {};
  if (isdeep) {
    Object.entries(obj).forEach(([key, value]) => {
      result[key] = typeof value !== "object" ? value : copy(value, true);
    });
  } else {
    result = Array.isArray(obj) ? { ...obj } : [...obj];
  }
  return result;
};

// 对象冻结
export const obj_freeze = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, value) => {
    if (typeof obj[key] === "object") obj_freeze(obj[key]);
  });
};

// 安全的获取对象指定字段
export const obj_get = (obj, keyPath) => {
  return keyPath.split(".").reduce((curObj, key) => {
    if (curObj && curObj[key]) {
      return curObj[key];
    } else {
      return null;
    }
  }, obj);
};

// 对象属性信息
export const obj_property_info = (obj, property) => {
  const propertyInfo = {
    // 属性是否只在原型链上有
    onlyInPrototype: !obj.hasOwnProperty(property) && property in obj,
  };
  return propertyInfo;
};

// 对象类型判断
export const obj_type = (obj) => {
  if (obj === null) return "null";
  if (obj !== obj) return "NaN";
  if (typeof obj !== "object") return typeof obj;
  const objectType = Object.prototype.toString.call(obj).slice(8, -1);
  if (objectType !== "Object") {
    return objectType;
  } else if (obj.constructor && typeof obj.constructor === "function") {
    return obj.constructor.name || "匿名构造函数";
  } else {
    return "Object";
  }
};
