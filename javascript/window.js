// 获取顶层对象
export const getGlobal = () => {
  const result = self || window || global;
  if (result) {
    return result;
  }
  throw new Error("unable to locate global object");
};
