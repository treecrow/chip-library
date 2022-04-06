import { omitBy } from "../Object/omitBy";
import { isEqual } from "./isEqual";

// 判断两个数据是否相等（忽略 Object中 undefind的影响）
export const isEqualOmit = (object, other) => {
  const _value = omitBy(object, (value) => value == undefined);
  const _other = omitBy(other, (value) => value == undefined);
  return isEqual(_value, _other);
};
