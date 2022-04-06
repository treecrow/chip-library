const isError = (value) => {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const type = Object.prototype.toString.call(value);
  if (["[object Error]", "[object DOMException]"].includes(type)) {
    return true;
  }
  return false;
};
