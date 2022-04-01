// 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组
export const chunk = (array, size = 1) => {
  const obj = array.reduce(
    (obj, item, index) => {
      if ((index + 1) % size == 0) {
        // 是断点
        obj.arr.push([...obj.cur, item]);
        obj.cur = [];
      } else if (index != array.length - 1) {
        // 不是最后一个
        obj.cur.push(item);
      } else {
        // 最后一个
        obj.arr.push([...obj.cur, item]);
      }
      return obj;
    },
    { arr: [], cur: [] }
  );
  return obj.arr;
};
