// 插入排序 过程就像你拿到一副扑克牌然后对它排序一样
export const insertSort = (nums) => {
  for (let i = 0, len = nums.length; i < len; i++) {
    let temp = nums[i];
    let j = i;
    while (j >= 0 && temp < nums[j - 1]) {
      nums[j] = nums[j - 1];
      j--;
    }
    nums[j] = temp;
  }
};

// 计数排序
export const countingSort = (nums) => {
  let arr = [];
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  for (let i = 0, len = nums.length; i < len; i++) {
    let temp = nums[i];
    arr[temp] = arr[temp] + 1 || 1;
  }
  let index = 0;
  for (let i = min; i <= max; i++) {
    while (arr[i] > 0) {
      nums[index++] = i;
      arr[i]--;
    }
  }
};

//快速排序
export const qSort = (arr) => {
  //声明并初始化左边的数组和右边的数组
  var left = [],
    right = [];
  //使用数组第一个元素作为基准值
  var base = arr[0];
  //当数组长度只有1或者为空时，直接返回数组，不需要排序
  if (arr.length <= 1) return arr;
  //进行遍历
  for (var i = 1, len = arr.length; i < len; i++) {
    if (arr[i] <= base) {
      //如果小于基准值，push到左边的数组
      left.push(arr[i]);
    } else {
      //如果大于基准值，push到右边的数组
      right.push(arr[i]);
    }
  }
  //递归并且合并数组元素
  return [...qSort(left), ...[base], ...qSort(right)]; //return qSort(left).concat([base], qSort(right));
};

// 冒泡排序
export const bubbleSort = (nums) => {
  for (let i = 0, len = nums.length; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
};

// 洗牌算法
export const shuffle = (arr) => {
  for (var i = arr.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[i] = itemAtIndex;
  }
  return arr;
};

// 选择排序
export const selectSort = (nums) => {
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
};
