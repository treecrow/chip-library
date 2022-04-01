// 去重
export const noRepeat = (arr) => {
  return [...new Set(arr)];
};

// sort
export const sort = (arr, sortType = "large") => {
  return arr.sort((x, y) => {
    let feedback = null;
    switch (sortType) {
      case "large":
        feedback = x - y;
        break;
      case "small":
        feedback = y - x;
        break;
      case "random":
        feedback = Math.random() - 0.5;
        break;
    }
    return feedback;
  });
};

// 反转矩阵数组
export const matrixReverse = (arr) => {
  var ret = [];
  var i, j;
  if (arr.length == 0) {
    return [];
  }
  if (arr[0].length == 0) {
    return [[]];
  }
  for (var i = 0; i < arr[0].length; i++) {
    ret.push([]);
  }
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      ret[j].push(arr[i][j]);
    }
  }
  return ret;
};

// 判断是否是数组
export const isArray = (arr) => {
  return Array.isArray(arr);
  // return Object.prototype.toStringcall(arr) === "[object Array]";
};

// 数组信息
export const arrInfo = (arr) => {
  const arrInfo = {
    // 最大值
    min: Math.min(...arr),
    // 最小值
    max: Math.max(...arr),
    // 是否重复
    repeat: arr.every(
      (item, index, arr) => arr.indexOf(item) == arr.lastIndexOf(item)
    ),
  };
  return flag ? arrInfo : arrInfo[flag];
};

// 数组集合
export const gather = (arr) => {
  let gather;
  switch (flag) {
    // 交集
    case "intersection":
      gather = arr1.filter((item) => arr2.includes(item));
      break;
    // 补集
    case "supplementary":
      gather = arr1.concat(arr2).filter((item) => {
        return !arr1.includes(item) || !arr2.includes(item);
      });
      break;
    // 并集
    case "union":
      gather = [...new Set([...arr1, ...arr2])];
      break;
  }
  return gather;
};

// 数组扁平化
export const flat = (arr, isdeep) => {
  return isdeep ? arr.flat(Infinity) : arr.flat();
  // if (isdeep) {
  //   return arr.reduce(
  //     (newArr, item) =>
  //       newArr.concat(Array.isArray(item) ? arr_flat(item, true) : item),
  //     []
  //   );
  // } else {
  //   return [].concat(...arr);
  // }
};
