// 检查 value 是否是一个类 arguments 对象
export const isArguments = (value) => {
  return Object.prototype.toString.call(value)=='[object Arguments]';
};
