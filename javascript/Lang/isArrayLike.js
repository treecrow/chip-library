export const isArrayLike = (value) => {
  return value != null && typeof value !== "function" && isLength(value.length);
};
