// 检查 value 是否是一个原生函数
export const isNative = (value) => {
  const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  const reIsNative = RegExp(
    `^${Function.prototype.toString
      .call(Object.prototype.hasOwnProperty)
      .replace(reRegExpChar, "\\$&")
      .replace(
        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
        "$1.*?"
      )}$`
  );
  return typeof value == "function" && reIsNative.test(value);
};
