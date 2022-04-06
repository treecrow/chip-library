// 检查 value 是否为 Object 的language type。 (例如： arrays, functions, objects, regexes,new Number(0), 以及 new String(''))
export const isObject = (value) => {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
};
